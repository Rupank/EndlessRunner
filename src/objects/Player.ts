import GameDispatcher from '../GameDispatcher';
import GameObject from '../abstract/GameObject';
import * as Assets from '../assets';

/**
 * @class Player
 *
 * Player handler class
 */
export default class Player extends GameObject {
    public sprite: Phaser.Sprite = null;
    public alive: boolean = true;
    public killTimer: Phaser.TimerEvent;

    /**
     * Create player and initialize
     *
     * @param gameDispatcher The GameDispatcher object
     */
    constructor(gameDispatcher: GameDispatcher) {
        super(gameDispatcher);

        this.sprite = this.phaserGame.add.sprite(this.phaserGame.world.x + this.phaserGame.world.width / 2, this.phaserGame.world.height / 2, Assets.Spritesheets.SpritesheetsDude3248.getName());
        this.phaserGame.camera.follow(this.sprite);
        this.phaserGame.physics.arcade.enable(this.sprite);
        this.sprite.body.gravity.y = 1000;
        this.sprite.body.velocity.y = 100;
        this.sprite.body.enable = true;
        this.sprite.animations.add('left', [1, 2, 3, 4], 8, true);
        this.sprite.animations.add('turn', [5], 8, true);
        this.sprite.animations.add('right', [6, 7, 8, 9], 8, true);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.scale.setTo(1.5, 1.5);
        this.sprite.play('right');
        this.alive = true;
        this.reset();
    }

    /**
     * Player  update method
     *
     * Handle collisions, jump, fall off and reaching end of the level
     */
    public update(): void {
        // collision with the solid map elements
        if (this.sprite.y < 0 || this.sprite.y > this.phaserGame.world.height) {
            this.startGameOver();
        }
        this.phaserGame.physics.arcade.overlap(this.sprite, this.gameDispatcher.gameVars.pipeGroup, this.hitPipe, null, this);
    }

    public hitPipe() {
        if (this.alive === false)
            return;
        // Set the alive property of the bird to false
        this.alive = false;
        this.stopAnimation();
        this.sprite.play('turn');
        this.gameDispatcher.background.stopScrolling();
        // Prevent new pipes from appearing
        this.phaserGame.time.events.remove(this.gameDispatcher.pipes.timer);

        // Go through all the pipes, and stop their movement
        this.gameDispatcher.gameVars.pipeGroup.forEach((p) => {
            p.body.velocity.x = 0;
        }, this);
        this.startGameOver();
    }

    public startGameOver(): void {
        this.reset();
        this.phaserGame.state.start('main');
    }

    public jump(): void {
        if (this.alive === false) {
            return;
        }
        this.sprite.body.velocity.y = -350;
        this.sprite.x += 1;
    }

    /**
     * Reset the player and the map
     */
    public reset(): void {
        this.sprite.body.velocity.x = 0;
        this.alive = true;
        this.gameDispatcher.soundService.stopAll();
        this.sprite.body.velocity.y = 0;
        // this.sprite.reset(32, 0);
        this.sprite.frame = 0;
        this.sprite.body.enable = true;
        this.gameDispatcher.gameVars.levelCoin = 0;
        this.gameDispatcher.initMap();
    }

    /**
     * Stop player animations
     */
    public stopAnimation() {
        this.sprite.animations.stop();
    }
}