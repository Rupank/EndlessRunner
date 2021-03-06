import GameDispatcher from '../GameDispatcher';
import GameObject from '../abstract/GameObject';
import * as Assets from '../assets';
import StorageService from '../services/StorageService';

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

        this.sprite = this.phaserGame.add.sprite(this.phaserGame.world.x + this.phaserGame.world.width / 2, this.phaserGame.world.height / 2, Assets.Spritesheets.SpritesheetsPlayer267267.getName());
        this.sprite.scale.setTo(0.3, 0.3);
        this.phaserGame.camera.follow(this.sprite);
        this.phaserGame.physics.arcade.enable(this.sprite);
        this.sprite.body.gravity.y = 1000;
        this.sprite.body.velocity.y = 100;
        this.sprite.anchor.setTo(0.5, 0);
        this.sprite.animations.add('turn', [0, 1, 2, 3], 8, false);
        this.sprite.animations.add('grab', [10], 8, false);
        this.sprite.animations.add('right', [8, 9, 10], 8, true);
        this.sprite.animations.add('jump', [4, 5, 6, 8, 9], 8, false);
        this.sprite.body.collideWorldBounds = true;
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
        this.phaserGame.physics.arcade.collide(this.sprite, this.gameDispatcher.gameVars.pipeGroup, this.hitPipe, null, this);
        this.phaserGame.physics.arcade.overlap(this.sprite, this.gameDispatcher.gameVars.mangoGroup, this.hitMango, null, this);
    }

    public hitPipe() {
        if (!this.alive)
            return;
        this.gameDispatcher.soundService.playHitSound();
        this.gameDispatcher.gameOver.sprite.visible = true;
        this.stopAnimation();
        this.sprite.play('turn');
        this.sprite.body.velocity.y = this.sprite.body.velocity.x = 0;
        this.gameDispatcher.gameOver.scoreText.setText(' : ' + this.gameDispatcher.gameVars.levelCoin.toString());
        let highScore = StorageService.sessionService.get('highScore');
        if (!highScore) {
            highScore = 0;
            StorageService.sessionService.set('highScore', highScore);
        }

        if (this.gameDispatcher.gameVars.levelCoin > highScore) {
            highScore = this.gameDispatcher.gameVars.levelCoin;
            StorageService.sessionService.set('highScore', highScore);
        }
        this.gameDispatcher.gameOver.highScoreText.setText(' : ' + highScore.toString());
        this.alive = false;

        // Prevent new pipes from appearing
        this.phaserGame.time.events.remove(this.gameDispatcher.pipes.timer);
        // Go through all the pipes, and stop their movement
        this.gameDispatcher.gameVars.pipeGroup.forEach((p) => {
            p.body.velocity.x = 0;
        }, this);
        this.gameDispatcher.gameVars.mangoGroup.forEach((m) => {
            m.body.velocity.x = 0;
        }, this);

        this.startGameOver();
    }

    public hitMango(player, mango) {
        if (!this.alive)
            return;
        this.sprite.animations.play('grab').onComplete.add(() => {
            if (this.alive) {
                this.sprite.animations.play('right');
            }
        });
        mango.destroy();
        this.gameDispatcher.gameVars.levelCoin += 1;
        // this.sprite.body.enable = false;
        this.gameDispatcher.soundService.playPointsMusic();
        this.gameDispatcher.gameVars.lvlText.setText(this.gameDispatcher.gameVars.levelCoin.toString());
    }

    public startGameOver(): void {
        this.gameDispatcher.soundService.playDeathSound();
        this.reset();
    }

    public jump(): void {
        if (!this.alive) {
            return;
        }
        this.sprite.play('jump').onComplete.add(() => {
            if (this.alive)
                this.sprite.play('right');
        });
        this.gameDispatcher.soundService.playJumpMusic();
        this.sprite.body.velocity.y = -350;
    }

    /**
     * Reset the player and the map
     */
    public reset(): void {
        this.sprite.body!.velocity.x = 0;
        this.gameDispatcher.soundService.stopAll();
        this.sprite.body!.velocity.y = 0;
        this.sprite.body!.enable = true;
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