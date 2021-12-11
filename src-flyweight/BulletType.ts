//*  1 static method for 1 class for N instances
//*  N method for 1 class for N instances

export class BulletType {
    // 1,000,000 bullet = 20 * 100 = 2000Kb
    static image = '=>'; // this part contain a big image 20Kb

    static draw() {
        return BulletType.image;
    }
}

export const BulletTypeAsObject = {
    draw() {
        return '=>';
    }
} 