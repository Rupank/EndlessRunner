// Assets
import * as Assets from './assets';

// SERVICES
import SoundService from './services/SoundService';
import StorageService from './services/StorageService';

// GAME OBJECTS
import Player from './objects/Player';
import Coins from './objects/Coins';
import Background from './objects/Background';
import Pipe from './objects/Pipe';
import GameOver from './objects/GameOver';
// GAME VARIABLES
import GameVars from './GameVars';


/**
 * @class GameDispatcher
 *
 * Handle the game
 */
export default class GameDispatcher {
    public readonly LEVEL_COUNT: number = 30;

    public gameVars: GameVars = null;
    public phaserGame: Phaser.Game = null;
    public soundService: SoundService = null;
    public startGameImage: Phaser.Sprite = null;
    public player: Player = null;
    public coins: Coins = null;
    public background: Background = null;
    public pipes: Pipe = null;
    public gameOver: GameOver = null;

    /**
     * Initialize the game. Instanitate the game objects.
     *
     * @param phaserGame Phaser game object
     */
    constructor(phaserGame: Phaser.Game) {
        this.gameVars = new GameVars();
        this.phaserGame = phaserGame;


        // LOAD OPTIONS
        this.gameVars.options = StorageService.localStorage.get('options');
        if (this.gameVars.options == null) {
            this.gameVars.options = {
                gameSpeed: 2,
                musicEnabled: true,
                playerActiveSkin: 1,
                soundVolume: 0.5
            };
        }


        // PHASER SETTINGS
        this.phaserGame.time.advancedTiming = true;
        Phaser.Canvas.setImageRenderingCrisp(this.phaserGame.canvas);
        this.phaserGame.scale.pageAlignHorizontally = true;
        this.phaserGame.scale.pageAlignVertically = true;
        this.phaserGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.phaserGame.physics.startSystem(Phaser.Physics.ARCADE);
        this.phaserGame.stage.backgroundColor = '#5c94fc';

        this.phaserGame.time.slowMotion = 1.0;
        this.phaserGame.sound.volume = 0.02;
        this.phaserGame.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;


        // LAYERS AND GROUPS
        this.gameVars.playerGroup = this.phaserGame.add.group();
        this.gameVars.pipeGroup = this.phaserGame.add.group();
        this.gameVars.pipeGroup.enableBody = true;
        this.phaserGame.physics.arcade.enable(this.gameVars.pipeGroup);
        this.gameVars.mangoGroup = this.phaserGame.add.group();
        this.gameVars.mangoGroup.enableBody = true;

        let style = { font: 'bold 32px Arial', fill: '#ffff33', boundsAlignH: 'center', boundsAlignV: 'middle' };

        this.gameVars.lvlText = this.phaserGame.add.text(this.phaserGame.world.width - 40, 0, '0', style);
        this.gameVars.lvlText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        // INSTANITATE GAME OBJECTS
        this.soundService = new SoundService(this);
        this.background = new Background(this);

        if (!StorageService.sessionService.get('gameStartedAgain')) {
            this.startGameImage = this.phaserGame.add.sprite(this.phaserGame.world.width / 2, this.phaserGame.world.height / 2, Assets.Images.ImagesGameStart.getName());
            this.startGameImage.anchor.setTo(0.5);
            this.startGameImage.inputEnabled = true;

            this.startGameImage.events.onInputDown.add(this.startGameNow, this);
        } else {
            this.startGameNow();
        }
    }


    /**
     * Initialize the map, play music, and remove pending events
     */
    public initMap(): void {
        if (this.gameVars.map) {
            this.gameVars.map.destroy();
        }
        this.coins = new Coins(this);
        this.gameVars.levelCoin = 0;

        if (this.gameVars.options.musicEnabled !== null && this.gameVars.options.musicEnabled) {
            this.soundService.playRandomMusic();
        }
        this.removePendingEvents();
    }

    public startGameNow() {
        if (this.startGameImage) {
            this.startGameImage.inputEnabled = false;
            this.startGameImage.destroy();
        }
        this.player = new Player(this);
        this.pipes = new Pipe(this);
        this.gameOver = new GameOver(this);
        // KEY BINDINGS
        this.gameVars.spaceKey = this.phaserGame.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.gameVars.spaceKey.onDown.add(this.player.jump, this.player);
        this.phaserGame.input.onTap.add(this.player.jump, this.player);
    }

    /**
     * Remove all pending events
     */
    public removePendingEvents() {
        for (let event of this.phaserGame.time.events.events) {
            this.phaserGame.time.events.remove(event);
        }
    }

    /**
     * Update all game objects
     */
    public update() {
        if (this.gameVars.pause) {
            return;
        }
        if (this.player) {
            this.player.update();
        }
        this.background.update();
    }


}