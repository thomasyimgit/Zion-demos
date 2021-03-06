// action type
export const INCREASE_SCORE = '/INCREASE_SCORE'

// Canvas parameters
export const CANVAS_HEIGHT = 600;
export const CANVAS_WIDTH = 600;

// Game parameters
export const REMAINING_LIVES = 3;
export const SHIP_SPRITE = './src/images/ship.png'; // Ship sprite by Millionth Vector
export const BULLET_SPRITE = './src/images/bullet.png';
export const UNIVERSE_BG = './src/images/universe_bg.png';
export const EXHAUST_SRC = './src/images/exhaust_animation.png';
export const EFFECT_OFF_WIDTH = 25;
export const EFFECT_OFF_HEIGHT = 55;
export const EFFECT_SIZE = 16;
export const EFFECT_SPEED = 4;
export const EFFECT_FRAMES = 3;
export const EXPLOSION_SRC = './src/images/ship_explosion.png';
export const EXPLOSION_EFFECT_SIZE = 130;
export const EXPLOSION_EFFECT_FRAMES = 10;
export const EXPLOSION_OFFSET = {
    x: -25,
    y: -25
}
export const OFFSET = {
    x: 25,
    y: 55
};
export const BULLET_SRC = './src/images/bullet.png';
export const MAX_BULLETS = 4;

export const VELOCITY = 3;
export const ROTATION_STEP = 3;
export const MOVE_STEP = 3;

export const SHIP_SIZE = {
    width: 64,
    height: 64
};
export const BULLET_SIZE = {
    width: 10,
    height: 10
};
export const SHIP_TIMEOUT = 7000;
export const INITIAL_TIMEOUT = 2000;
export const BULLET_TIMEOUT = 5000;
export const NUM_ASTEROIDS = 5;
export const ASTEROID_SPEED = 5;
export const ASTEROID_LARGE = {
    width: 128,
    height: 128  
};
export const ASTEROID_MEDIUM = {
    width: 85,
    height: 85  
};
export const ASTEROID_SMALL = {
    width: 64,
    height: 64  
};
export const ASTEROID_SIZES = [ASTEROID_LARGE, ASTEROID_MEDIUM, ASTEROID_LARGE];
// Asteroid sprites by Peter Robinson
export const ASTEROID_1 = './src/images/ast1.png';
export const ASTEROID_2 = './src/images/ast2.png';
export const ASTEROID_3 = './src/images/ast3.png';
export const ASTEROID_4 = './src/images/ast4.png';
export const ASTEROID_SOURCES = [ASTEROID_1, ASTEROID_2, ASTEROID_3, ASTEROID_4];
export const CLOCKWISE = 'CLOCKWISE';
export const COUNTERCLOCKWISE = 'COUNTERCLOCKWISE';

// Keycodes
export const LEFT = 37;
export const UP = 38;
export const RIGHT = 39;
export const DOWN = 40;
export const SPACE = 32;
