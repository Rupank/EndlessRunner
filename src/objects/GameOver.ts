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
    public scoreText;
    public highScoreText;
    /**
     * Create all coins from tile map, and initialize those
     *
     * @param gameDispatcher The GameDispatcher object
     */
    constructor(gameDispatcher: GameDispatcher) {
        super(gameDispatcher);
        this.sprite = this.phaserGame.add.sprite(this.phaserGame.width / 2, this.phaserGame.height / 2, Assets.Images.ImagesGameOverBG.getName());
        this.sprite.anchor.set(0.5);
        this.sprite.visible = false;
        this.sprite.inputEnabled = true;
        let style1 = { font: 'normal 28px ' + Assets.CustomWebFonts.FontsGameOver.getFamily(), fill: '#ff0000', boundsAlignH: 'center', boundsAlignV: 'middle' };
        this.scoreText = this.phaserGame.make.text(50, -30, '  : 1', style1);
        this.scoreText.anchor.set(0.5);

        this.highScoreText = this.phaserGame.make.text(50, 5, ' : ', style1);
        this.highScoreText.anchor.set(0.5);

        this.sprite.addChild(this.scoreText);
        this.sprite.addChild(this.highScoreText);

        this.sprite.events.onInputDown.add(this.startGameLoop, this);
    }

    private startGameLoop() {
        StorageService.sessionService.set('gameStartedAgain', true);
        this.phaserGame.state.start('main');
    }

}