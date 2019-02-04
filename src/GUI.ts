import * as Assets from './assets';
import GameDispatcher from './GameDispatcher';

// SERVICES
import StorageService from './services/StorageService';


/**
 * @class GUI
 *
 * Create all graphical user interface
 */
export default class GUI {

    private game: Phaser.Game;
    private gameDispatcher: GameDispatcher;

    constructor(phaserGame: Phaser.Game, gameDispatcher: GameDispatcher) {
        this.game = phaserGame;
        this.gameDispatcher = gameDispatcher;
    }
}