import { Player } from "./Player";

function main() {
    const player = new Player({
        x: 0,
        y: 0,
    });
    player.move({
        dx: 2,
        dy: 2,
    });
    const bullet = player.fireBullet();
    bullet.displayOnScreen();
}

main();