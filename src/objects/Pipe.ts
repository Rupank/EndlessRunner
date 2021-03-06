import GameDispatcher from '../GameDispatcher';
import GameObject from '../abstract/GameObject';
import * as Assets from '../assets';

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
        this.timer = this.phaserGame.time.events.loop(1700, this.addPipeBlock, this);
    }

    public addOneBlock(x, y) {
        let blockSprite = this.phaserGame.add.sprite(x, y, Assets.Images.ImagesCrate.getName());
        let respectiveHeight = this.phaserGame.height / 5;
        blockSprite.scale.setTo(respectiveHeight / blockSprite.width, respectiveHeight / blockSprite.height);
        this.gameDispatcher.gameVars.pipeGroup.add(blockSprite);
        this.phaserGame.physics.arcade.enable(blockSprite);
        blockSprite.body.immovable = true;
        blockSprite.body.velocity.x = this.velocity;
        this.gameDispatcher.gameVars.pipeGroup.add(blockSprite);
        // Automatically kill the pipe when it's no longer visible
        blockSprite.checkWorldBounds = true;
        blockSprite.outOfBoundsKill = true;
    }

    public addPipeBlock(firstTime?) {
        // Randomly pick a number between 1 and 3
        // This will be the hole position
        let hole = Math.floor(Math.random() * 3) + 1;
        // Add the 6 pipes
        // With one big hole at position 'hole' and 'hole + 1'
        let i = 0;
        let array = [];
        for (i = 0; i < 5; i++)
            if (i !== hole && i !== hole + 1 && i !== hole + 2)
                this.addOneBlock(this.phaserGame.world.width, i * 95);
            else {
                array.push(i * 100);
            }
        let yPos = this.phaserGame.rnd.integerInRange(Math.min(...array), Math.max(...array));
        this.addMangoOnScreen(this.phaserGame.world.width, yPos);
        this.velocity *= 1.06;
        this.gameDispatcher.gameVars.bg2Speed *= 1.06;
        this.gameDispatcher.gameVars.bg3Speed *= 1.07;
        this.gameDispatcher.gameVars.bg4Speed *= 1.09;
    }

    public addMangoOnScreen(x, y) {
        let mangoSprite = this.phaserGame.add.sprite(x, y, Assets.Images.ImagesMango.getName());
        // mangoSprite.scale.setTo(100 / mangoSprite.width, 100 / mangoSprite.height);
        mangoSprite.scale.setTo(0.3, 0.3);
        mangoSprite.anchor.setTo(0.5);
        this.phaserGame.add.tween(mangoSprite.scale).to({ x: 0.35, y: 0.35 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
        this.gameDispatcher.gameVars.mangoGroup.add(mangoSprite);
        this.phaserGame.physics.arcade.enable(mangoSprite);
        mangoSprite.body.immovable = true;
        mangoSprite.checkWorldBounds = true;
        mangoSprite.outOfBoundsKill = true;
        mangoSprite.body.velocity.x = this.velocity;
    }

}