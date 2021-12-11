import { MovingBullet } from "./MovingBullet"

export class Player {
    currentPosition = {
        x: 0,
        y: 0,
    };

    constructor(initPosition: {
        x: number;
        y: number;
    }) {
        this.currentPosition = initPosition;
    }

    move(moveVec: {
        dx: number,
        dy: number,
    }) {
        this.currentPosition = {
            x: this.currentPosition.x + moveVec.dx,
            y: this.currentPosition.y + moveVec.dy,
        }
    }
 
    fireBullet() {
        return new MovingBullet(this.currentPosition);
    }
}