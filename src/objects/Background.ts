import GameDispatcher from '../GameDispatcher';
import GameObject from '../abstract/GameObject';
import * as Assets from '../assets';

/**
 * @class Background
 *
 * Animated two layered game background (the mountains)
 */
export default class Background extends GameObject {
    private mountainsBack: Phaser.TileSprite = null;
    private rockBotton: Phaser.TileSprite = null;
    private mountainsBttom: Phaser.TileSprite = null;
    private bgImg: Phaser.TileSprite = null;

    /**
     * Init the backgrounds, set size and fixed to camera
     *
     * @param gameDispatcher The GameDispatcher object
     */
    constructor(gameDispatcher: GameDispatcher) {
        super(gameDispatcher);

        this.bgImg = this.phaserGame.add.tileSprite(
            0,
            0,
            this.phaserGame.width,
            this.phaserGame.height,
            Assets.Images.ImagesBg1.getName()
        );
        this.bgImg.fixedToCamera = true;

        this.mountainsBack = this.phaserGame.add.tileSprite(
            0,
            -this.phaserGame.height / 4,
            this.phaserGame.cache.getImage(Assets.Images.ImagesBg2.getName()).width,
            this.phaserGame.cache.getImage(Assets.Images.ImagesBg2.getName()).height,
            Assets.Images.ImagesBg2.getName()
        );
        this.mountainsBack.scale.set(this.phaserGame.width / this.phaserGame.cache.getImage(Assets.Images.ImagesBg2.getName()).width, this.phaserGame.height / this.phaserGame.cache.getImage(Assets.Images.ImagesBg2.getName()).height);

        this.mountainsBttom = this.phaserGame.add.tileSprite(
            0,
            -this.phaserGame.height / 8,
            this.phaserGame.cache.getImage(Assets.Images.ImagesBg3.getName()).width,
            this.phaserGame.cache.getImage(Assets.Images.ImagesBg3.getName()).height,
            Assets.Images.ImagesBg3.getName()
        );
        this.mountainsBttom.fixedToCamera = true;
        this.mountainsBttom.scale.set(this.phaserGame.width / this.phaserGame.cache.getImage(Assets.Images.ImagesBg3.getName()).width, this.phaserGame.height / this.phaserGame.cache.getImage(Assets.Images.ImagesBg3.getName()).height);

        this.rockBotton = this.phaserGame.add.tileSprite(
            0,
            0,
            this.phaserGame.cache.getImage(Assets.Images.ImagesBg4.getName()).width,
            this.phaserGame.cache.getImage(Assets.Images.ImagesBg4.getName()).height,
            Assets.Images.ImagesBg4.getName()
        );
        this.rockBotton.fixedToCamera = true;
        this.rockBotton.scale.set(this.phaserGame.width / this.phaserGame.cache.getImage(Assets.Images.ImagesBg4.getName()).width, this.phaserGame.height / this.phaserGame.cache.getImage(Assets.Images.ImagesBg4.getName()).height);

        this.phaserGame.world.sendToBack(this.rockBotton);
        this.phaserGame.world.sendToBack(this.mountainsBttom);
        this.phaserGame.world.sendToBack(this.mountainsBack);
        this.phaserGame.world.sendToBack(this.bgImg);
    }

    /**
     * Update the background (slowly move the layers)
     */
    public update(): void {
        if (this.mountainsBack) {
            this.rockBotton.tilePosition.x -= this.gameDispatcher.gameVars.bg4Speed;
            this.mountainsBttom.tilePosition.x -= this.gameDispatcher.gameVars.bg3Speed;
            this.mountainsBack.tilePosition.x -= this.gameDispatcher.gameVars.bg2Speed;
        }
    }
}