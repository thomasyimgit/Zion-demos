import { drawImageByUrl, drawRotate } from './engine/canvas'
import { UNIVERSE_BG, SHIP_SPRITE } from './options'
import { getDistance } from './engine/operations'

const sin = Math.sin
const cos = Math.cos
const PI = Math.PI

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

export function drawShip(context, ship) {
    // drawShip according to its angle
    const { x, y } = ship.position;
    const { width, height } = ship.size;

    let img = new Image();
    img.src = SHIP_SPRITE;
    img.onload = () => {
        drawRotate(context, img, x, y, ship.theta);
    }
}

export function drawUniverse(context, width, height) {
    drawImageByUrl.call(context, UNIVERSE_BG, 0, 0, width, height);
}

export function calculateMovement(ship, moveAmount, isForward) {
    const { theta } = ship;
    const { x, y } = ship.position;
    //Convert theta to radians
    let thetaRad = theta * PI/180;

    //Calculate changes to x and y
    let deltaX = moveAmount * sin(thetaRad);
    let deltaY = moveAmount * cos(thetaRad);

    //Calculate new position values
    var newX = x;
    var newY = y;
    if (isForward) {
        newX += deltaX;
        newY -= deltaY;
    } else {
        newX -= deltaX;
        newY += deltaY;
    }
    return {x:newX, y:newY}
}

export function checkCollision(asteroids, ship) {
    for(let i = 0; i < asteroids.length; i++) {
        // Check collision for each asteroid to ship
        // console.log(`collision for asteroid: ${i}`);
        let hit = asteroids[i].getCollision(ship.center.x, ship.center.y, 50, 0.5);
        if(hit){
            console.log(`collision with asteroid ${i}`);
            return true;
        } 
    }
    return false;
}

export function checkBounds(position, width, height, offset) {
    const { x, y } = position;
    var newX = x;
    var newY = y;
    if (x > width) {
        newX = 0 - offset.width;
    } else if (x + offset.width < 0) {
        newX = width;
    }

    if(y > height) {
        newY = 0 - offset.height;
    } else if (y + offset.height < 0) {
        newY = height;
    }
    return{x: newX, y: newY}

}
export function drawAsteroids(context, asteroids) {
    context.save();
    for(let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        drawImageByUrl.call(context, asteroid.src, asteroid.position.x, asteroid.position.y, asteroid.size.width, asteroid.size.height);
    }
    context.restore();
}
