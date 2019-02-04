import GameDispatcher from '../GameDispatcher';
import GameObject from '../abstract/GameObject';
import * as Assets from '../assets';

/**
 * @class SoundService
 *
 * Handle the game music and sounds
 */
export default class SoundService extends GameObject {

    private readonly BACKGROUND_MUSIC_COUNT: number = 1;

    private sfx: Phaser.AudioSprite = null;
    private backgroundMusic: Phaser.Sound[] = [];
    public backgroundMusicEnabled: boolean = true;
    public collideMusic: Phaser.Sound = null;
    public passMusic: Phaser.Sound = null;
    public dieMusic: Phaser.Sound = null;
    public pointMusic: Phaser.Sound = null;

    /**
     * Init the sound service, add all music to the backgroundMusic array
     *
     * @param gameDispatcher The GameDispatcher object
     */
    constructor(gameDispatcher: GameDispatcher) {
        super(gameDispatcher);
        for (let i = 1; i <= this.BACKGROUND_MUSIC_COUNT; i++) {
            this.backgroundMusic.push(this.phaserGame.add.audio(`music${i}`));
        }
        this.collideMusic = this.phaserGame.add.audio('hit');
        this.passMusic = this.phaserGame.add.audio('wing');
        this.dieMusic = this.phaserGame.add.audio('die');
        this.pointMusic = this.phaserGame.add.audio('point');
    }

    /**
     * Play a random background music
     */
    public playRandomMusic() {
        if (!this.backgroundMusicEnabled) {
            return;
        }
        this.stopMusic();
        this.backgroundMusic[(Math.random() * this.backgroundMusic.length) | 0].play();
    }

    public playHitSound() {
        this.collideMusic.play();
    }

    public playDeathSound() {
        this.dieMusic.play();
    }

    public playPointsMusic() {
        this.pointMusic.play();
    }

    public playJumpMusic() {
        this.passMusic.play();
    }


    /**
     * Stop the music
     */
    public stopMusic() {
        for (let i = 0; i < this.backgroundMusic.length; i++) {
            this.backgroundMusic[i].stop();
        }
    }


    /**
     * Stop all sound
     */
    public stopAll() {
        this.phaserGame.sound.stopAll();
    }

}