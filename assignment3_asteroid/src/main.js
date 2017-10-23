import Game from './engine/Game'
import { createImageCache } from './engine/canvas'
import store from './state'
import { drawWalls, drawShip, drawUniverse, drawAsteroids, calculateMovement, checkBounds, checkCollision, 
         getSpawnLocation, drawBullets, createBullet, removeBullet, getRandomAsteroid } from './helper.js'
import { 
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  SHIP_SIZE,
  BULLET_TIMEOUT,
  CLOCKWISE,
  COUNTERCLOCKWISE,
  VELOCITY,
  ROTATION_STEP,
  MOVE_STEP,
  UNIVERSE_BG, SHIP_SPRITE, BULLET_SPRITE,
  NUM_ASTEROIDS, ASTEROID_LARGE, ASTEROID_MEDIUM, ASTEROID_SMALL, ASTEROID_1, ASTEROID_2, ASTEROID_3, ASTEROID_4,
  ASTEROID_SPEED,
  EXHAUST_SRC, EFFECT_OFF_WIDTH, EFFECT_OFF_HEIGHT, EFFECT_SIZE, EFFECT_SPEED, EFFECT_FRAMES, OFFSET,
  BULLET_SRC, MAX_BULLETS, BULLET_SIZE
} from './options'
import Ship from './Ship'
import ParticleSystem from './engine/ParticleSystem/ParticleSystem'
import Spritesheet from './engine/Spritesheet'
import Bullet from './Bullet'

class AsteroidGame extends Game {
  constructor() {
    super();
    this.canvas = document.querySelector('#asteroids');
    this.context = this.canvas.getContext('2d');

    this.gameover = false;  // indicate game is over or not

    this.gameloop = this.gameloop.bind(this);

    this.currScore = 0;

    this.shipPosition = {
      x: CANVAS_WIDTH / 2 - SHIP_SIZE.width / 2,
      y: CANVAS_HEIGHT / 2 - SHIP_SIZE.height / 2
    }

    this.ship = new Ship(SHIP_SPRITE, SHIP_SIZE, this.shipPosition, 5, 6);
    this.partSystem = new ParticleSystem();
    this.spriteSheet = new Spritesheet(EXHAUST_SRC, EFFECT_SIZE, EFFECT_SIZE, EFFECT_SPEED, EFFECT_FRAMES, OFFSET);
    this.bullets = [];
  }
  
  initImageCache() {
    this.imageCache = createImageCache();
    
    const IMAGE_DICT = {
      'universe': UNIVERSE_BG,
      'ship': SHIP_SPRITE,
      'ast1': ASTEROID_1,
      'ast2': ASTEROID_2,
      'ast3': ASTEROID_3,
      'ast4': ASTEROID_4,
      'bullet': BULLET_SPRITE
    }

    Object.keys(IMAGE_DICT).forEach(name => {
      this.imageCache.loadImage(name, IMAGE_DICT[name]);
    })

    this.imageCache.imagesOnLoad(() => this.timer = setInterval(this.gameloop, 30));
  }

  // Specifies keyboard handlers
  addKeyboardHandlers(){
    document.addEventListener('keydown', (e) => this.moveShip(e));
  }

  moveShip(e) {
    e.preventDefault();
    // Ship updates should all be done in the Ship class
    if(e.keyCode === 37) {
      // Increment ship's rotation counter clockwise
      this.ship.theta = this.ship.theta - ROTATION_STEP;

    } else if(e.keyCode === 38) {
      // arrow up
      this.shipPosition = calculateMovement(this.ship, this.shipPosition, MOVE_STEP, true);
      this.shipPosition = checkBounds(this.shipPosition, CANVAS_WIDTH, CANVAS_HEIGHT, SHIP_SIZE);
      this.ship.updatePosition(this.shipPosition);
      
    } else if(e.keyCode === 39) {
      // Increment ship's rotation clockwise
      this.ship.theta += ROTATION_STEP;

    } else if (e.keyCode === 40) {
      // arrow down
      this.shipPosition = calculateMovement(this.ship, this.shipPosition, MOVE_STEP, false);
      this.shipPosition = checkBounds(this.shipPosition, CANVAS_WIDTH, CANVAS_HEIGHT, SHIP_SIZE);
      this.ship.updatePosition(this.shipPosition);
    } else if (e.keyCode === 32) {
      this.bullets[this.bullets.length] = createBullet(BULLET_SPRITE, BULLET_SIZE, this.ship);
      setTimeout(removeBullet.bind(this), BULLET_TIMEOUT);
    }
    return false; // to prevent the default behavior of the browser
  }

  initBullets() {
    console.log('loading bullets');
    this.bullets = [];
    let index = 0;
    for(let i = 0; i < MAX_BULLETS; i++) {
      let pos = {
        x: this.ship.center.x,
        y: this.ship.center.y
      };
      this.bullets.push(new Bullet(BULLET_SRC, BULLET_SIZE, pos, 5, index));
      console.log(this.bullets[i]);
      index++;
    }
  }

  updateScore() {
    setInterval(() => {
      if (!this.gameover) {
        this.currScore++;
        this.initScorePanel();
      }
    }, 1000);
  }
  
  updateAsteroidPositions() {
    for(let i = 0; i < this.partSystem.particles.length; i++) {
      let asteroid = this.partSystem.particles[i];
      let asteroidPos = calculateMovement(asteroid, asteroid.position, MOVE_STEP, true);
      asteroidPos = checkBounds(asteroidPos, CANVAS_WIDTH, CANVAS_HEIGHT, SHIP_SIZE, asteroid.size);
      asteroid.updatePosition(asteroidPos);
      asteroid[i] = asteroid;
    }
  }

    updateBulletPositions() {
        for(let i = 0; i < this.bullets.length; i++) {
            let bullet = this.bullets[i];
            let bulletPos = calculateMovement(bullet, bullet.position, MOVE_STEP, true);
            bulletPos = checkBounds(bulletPos, CANVAS_WIDTH, CANVAS_HEIGHT, SHIP_SIZE, bullet.size);
            bullet.position = bulletPos
            this.bullets[i] = bullet;
        }
    }

  checkAsteroidsCollisions() {
    let result = checkCollision(this.partSystem.particles, this.ship);
    if(result.hit) {
      let update = getSpawnLocation(this.ship, this.partSystem.particles);
      this.ship.updatePosition(update);
    }
  }

  checkBulletCollisions() {
    for(let i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      let result = checkCollision(this.partSystem.particles, bullet);
      if(result.hit) {
        // Destroy bullet and respawn asteroid at random location with size one level down
        this.bullets.splice(i, 1);
        let asteroid = this.partSystem.particles[result.asteroid];
        switch(asteroid.size.width) {
          case ASTEROID_LARGE.width:
            asteroid.size = ASTEROID_MEDIUM;
            this.partSystem.particles[result.asteroid] = asteroid;
            break;
          case ASTEROID_MEDIUM:
            asteroid.size = ASTEROID_SMALL;
            this.partSystem.particles[result.asteroid] = asteroid;
            break;
          default:
            // Remove from array and spawn new asteroid at a random location
            this.partSystem.particles.splice(result.asteroid, 1);
            let next = getRandomAsteroid();
            let options = {
              src: next.src,
              size: next.size,
              maxHorizontal: CANVAS_WIDTH,
              maxVertical: CANVAS_HEIGHT,
              speed: ASTEROID_SPEED,
              numParticles: 1
            }
            this.partSystem.generateRandomParticle(options);
        }
      }
    }
  }

  // the actuall state update is in "reducer"
  // the update is only responsible to dispatch actions
  update(){
    this.updateAsteroidPositions();
    this.updateBulletPositions()
    this.checkAsteroidsCollisions();
    if(this.bullets.length !== 0) this.checkBulletCollisions();
    this.spriteSheet.update();
  }

  // render the game according to 
  render() {
    const { width, height } = this.canvas;

    // here we can get all access of the loaded images:
    let images = {};

    this.imageCache.getImages().forEach(item => {
      images[item.name] = item.img;
    })

    const {
      universe,
      ship,
      ast1,
      ast2,
      ast3,
      ast4,
      bullet
    } = images;


    // Render walls, background
    drawWalls(this.context, width, height);
    drawUniverse(this.context, universe, width, height);

    // Render asteroids
    // todo: modify the way of rendering particles
    drawAsteroids(this.context, this.partSystem.particles, {ast1, ast2, ast3, ast4});

    drawBullets(this.context, this.bullets, bullet);
    // Render ship
    drawShip(this.context, ship, this.ship, this.spriteSheet);
  }

  // Optional debugging
  debug() {
    window.store = store
    window.ctx = this.context
    window.ship = this.ship
  }

  // Initialize the score panel based on the current highest score or 0 otherwise
  initScorePanel() {
    const highestScore = localStorage.getItem('highestScore') || 0;
    document.querySelector('.score-panel .current .score').innerHTML = this.currScore;
    document.querySelector('.score-panel .highest .score').innerHTML = highestScore;
  }

  // Initialize asteroids
  initAsteroids() {
    // Test 1 asteroid for now
    let options = {
      src: ASTEROID_1,
      size: ASTEROID_LARGE,
      maxHorizontal: CANVAS_WIDTH,
      maxVertical: CANVAS_HEIGHT,
      speed: ASTEROID_SPEED,
      numParticles: 1
    }
    this.partSystem.createRandomizedParticles(options);
    
    options.src = ASTEROID_2;
    options.size = ASTEROID_SMALL;
    this.partSystem.createRandomizedParticles(options);
    
    options.src = ASTEROID_3;
    options.size = ASTEROID_MEDIUM;
    this.partSystem.createRandomizedParticles(options);

    options.src = ASTEROID_4;
    options.size = ASTEROID_LARGE;
    this.partSystem.createRandomizedParticles(options);
  }

  // Initializes base game components
  init() {
    this.initImageCache();
    this.debug();
    this.addKeyboardHandlers();
    this.initScorePanel();
    this.initAsteroids();
    this.updateScore();
  }
}

let asteroids = new AsteroidGame();
asteroids.init();
