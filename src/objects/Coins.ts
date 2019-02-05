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
        this.sprite = this.phaserGame.add.sprite(this.phaserGame.world.width - 75, 5, Assets.Images.ImagesMango.getName());
        this.sprite.scale.set(0.6, 0.6);
    }

}