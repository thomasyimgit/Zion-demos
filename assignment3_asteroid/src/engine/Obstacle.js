import Sprite from './Sprite'
import { getDistance, calculateCenter } from './operations'
const NUM_SECTIONS = [9, 16, 25]; // small, medium, and large boundary divisions
import Bullet from '../Bullet'

class Obstacle extends Sprite {
    constructor(src, size, { x, y }, divisionType) {
        super(src, size, { x, y });
        if(divisionType < 0 || divisionType > 2) {
            throw Error("Invalid division type");
        }
        this.divisionType = divisionType;
        this.calculateBoundaries();
    }

    // subdivides this obstacle into boundaries for collision detection
    calculateBoundaries() {
        this.boundaries = new Array();
        let sections_rc = Math.sqrt(NUM_SECTIONS[this.divisionType]);
        let width = this.size.width / sections_rc;
        let height = this.size.height / sections_rc;
        let x = this.position.x, y = this.position.y;
        // Define boundaries based on number of sections
        for(let i = 0; i < sections_rc; i++) {
            for(let j = 0; j < sections_rc; j++) {
                this.boundaries.push(calculateCenter(x, y, width, height));
                x += width;
            }
            x = this.position.x;
            y += height;
        }
    }

    // Gets the collision for this obstacle and the given object
    getCollision(obj, objOffset, boundsOffset) {
        // check if we're near this obstacle
        // Let prox be the distance between the centers of the object and obstacle at neutral positions
        let prox = getDistance(obj.size.width / 3 , obj.size.height / 3, this.size.width / 2, this.size.height / 2);
        if(this.nearObstacle(obj.center.x, obj.center.y, prox + objOffset)) {
            for(let i = 0; i < this.boundaries.length; i++) {
                let boundary = this.boundaries[i];
                if(this.nearBoundary(obj.center.x, obj.center.y, boundary.x, boundary.y, prox + boundsOffset)) {
                    return true;
                }
            }
        }
        return false;
    }

    nearObstacle(objX, objY, prox) {
        let distance = getDistance(objX, objY, this.center.x, this.center.y);
        return (distance <= prox)? true : false;
    }

    // Checks if an object is near this boundary
    nearBoundary(objX, objY, boundX, boundY, prox) {
        let distance = getDistance(objX, objY, boundX, boundY);
        return distance <= prox;
    }

    updatePosition({x, y}) {
        this.position = { x, y };
        this.updateCenter();
        this.calculateBoundaries();
    }

    drawBoundariesDebug(context) {
        for(let i = 0; i < this.boundaries.length; i++) {
            let boundary = this.boundaries[i];
            context.fillStyle = 'red';
            context.fillRect(boundary.x, boundary.y, 5, 5);
        }
    }
}

export default Obstacle;