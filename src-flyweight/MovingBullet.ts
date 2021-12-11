import { BulletType } from './BulletType';

export class MovingBullet {
    coordination: {
        x: number; // 1 byte
        y: number;
    } | null = null;

    constructor(inputCoord: {
        x: number; // 1 byte
        y: number;
    }) {
        this.coordination = inputCoord;
    }
    
    displayOnScreen() {
        if (!this.coordination) {
            return;
        }
        console.log(`x: ${this.coordination.x}`);
        console.log(`y: ${this.coordination.y}`);
        console.log(BulletType.draw())
    }
    
}