import GameDispatcher from '../GameDispatcher';
import GameObject from '../abstract/GameObject';
import * as Assets from '../assets';
import StorageService from '../services/StorageService';

/**
 * @class Coins
 *
 * All coin handler class in the game
 */
export default class GameOver extends GameObject {
    public sprite: Phaser.Sprite = null;
    public staticText;
    public scoreText;
    public highScoreText;
    public tapToContinueText;
    /**
     * Create all coins from tile map, and initialize those
     *
     * @param gameDispatcher The GameDispatcher object
     */
    constructor(gameDispatcher: GameDispatcher) {
        super(gameDispatcher);
        this.sprite = this.phaserGame.add.sprite(this.phaserGame.width / 2, this.phaserGame.height / 2, Assets.Images.ImagesGameOverBG.getName());
        this.sprite.scale.setTo(0.75, 0.75);
        this.sprite.anchor.set(0.5);
        this.sprite.visible = false;
        this.sprite.inputEnabled = true;
        let style = { font: 'normal 80px ' + Assets.CustomWebFonts.FontsGameOver.getFamily(), fill: '#ffff', boundsAlignH: 'center', boundsAlignV: 'middle' };
        let style1 = { font: 'normal 70px ' + Assets.CustomWebFonts.FontsGameOver.getFamily(), fill: '#ffff', boundsAlignH: 'center', boundsAlignV: 'middle' };
        this.staticText = this.phaserGame.make.text(0, -this.sprite.height / 2 + 30, 'Game Over!!', style);
        this.staticText.anchor.set(0.5);
        this.scoreText = this.phaserGame.make.text(0, -20, 'Score : 1', style1);
        this.scoreText.anchor.set(0.5);

        this.highScoreText = this.phaserGame.make.text(0, 30, 'High Score : ', style1);
        this.highScoreText.anchor.set(0.5);

        this.tapToContinueText = this.phaserGame.make.text(0, this.sprite.height / 2 - 20, 'Tap to Retry', style);
        this.tapToContinueText.anchor.set(0.5);
        this.phaserGame.add.tween(this.tapToContinueText.scale).to({ x: 1.2, y: 1.2 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);

        this.sprite.addChild(this.staticText);
        this.sprite.addChild(this.scoreText);
        this.sprite.addChild(this.highScoreText);
        this.sprite.addChild(this.tapToContinueText);

        this.sprite.events.onInputDown.add(this.startGameLoop, this);
    }

    private startGameLoop() {
        StorageService.sessionService.set('gameStartedAgain', true);
        this.phaserGame.state.start('main');
    }

}