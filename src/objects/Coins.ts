import GameDispatcher from '../GameDispatcher';
import GameObject from '../abstract/GameObject';
import * as Assets from '../assets';

/**
 * @class Coins
 *
 * All coin handler class in the game
 */
export default class Coins extends GameObject {
    public sprite: Phaser.Sprite = null;

    /**
     * Create all coins from tile map, and initialize those
     *
     * @param gameDispatcher The GameDispatcher object
     */
    constructor(gameDispatcher: GameDispatcher) {
        super(gameDispatcher);
        this.sprite = this.phaserGame.add.sprite(this.phaserGame.world.width - 80, 5, Assets.Spritesheets.SpritesheetsCoin3232.getName());
        this.sprite.animations.add('spin', [1, 2, 3, 4, 5, 6, 7, 8, 9], 8, true);
        this.sprite.play('spin');
    }

}