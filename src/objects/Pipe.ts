import GameDispatcher from '../GameDispatcher';
import GameObject from '../abstract/GameObject';
import * as Assets from '../assets';
import { timingSafeEqual } from 'crypto';

/**
 * @class Coins
 *
 * All coin handler class in the game
 */
export default class Pipe extends GameObject {
    public timer: Phaser.TimerEvent = null;
    public velocity = -200;
    /**
     * Create all coins from tile map, and initialize those
     *
     * @param gameDispatcher The GameDispatcher object
     */
    constructor(gameDispatcher: GameDispatcher) {
        super(gameDispatcher);
        this.addPipeBlock(true);
        this.timer = this.phaserGame.time.events.loop(2000, this.addPipeBlock, this);
    }

    public addOneBlock(x, y) {
        let blockSprite = this.phaserGame.add.sprite(x, y, Assets.Images.ImagesBlock.getName());
        this.gameDispatcher.gameVars.pipeGroup.add(blockSprite);
        this.phaserGame.physics.arcade.enable(blockSprite);
        blockSprite.body.immovable = true;
        blockSprite.body.velocity.x = this.velocity;
        this.gameDispatcher.gameVars.pipeGroup.add(blockSprite);
        // Automatically kill the pipe when it's no longer visible
        blockSprite.checkWorldBounds = true;
        // blockSprite.body.collideWorldBounds = true;
        blockSprite.outOfBoundsKill = true;
    }

    public addPipeBlock(firstTime?) {
        // Randomly pick a number between 1 and 3
        // This will be the hole position
        let num = Math.floor(this.phaserGame.world.height / 98) - 1;
        let hole = Math.floor(Math.random() * num) + 1;
        // Add the 6 pipes
        // With one big hole at position 'hole' and 'hole + 1'
        for (let i = 0; i < 5; i++)
            if (i !== hole && i !== hole + 1)
                this.addOneBlock(this.phaserGame.world.width, i * 95);
        if (!firstTime) {
            this.gameDispatcher.gameVars.levelCoin += 1;
            this.gameDispatcher.soundService.playPointsMusic();
        }
        this.gameDispatcher.gameVars.lvlText.setText(this.gameDispatcher.gameVars.levelCoin.toString());
        this.velocity *= 1.1;
    }

}