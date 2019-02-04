import * as Assets from '../assets';
import GameDispatcher from '../GameDispatcher';

import GUI from '../GUI';

/**
 * @class Main
 *
 * Main state
 */
export default class Main extends Phaser.State {
    public gameDispatcher: GameDispatcher = null;
    public gui: GUI = null;


    public preload(): void {
    }


    public create(): void {
        // To prevent this: 'The AudioContext was not allowed to start. It must be resume (or created) after a user gesture on the page.'
        this.game.input.onTap.addOnce(this.game.sound.context.resume, this.game.sound.context);
        this.game.input.keyboard.addCallbacks(this.game.sound.context, this.game.sound.context.resume);

        // initialize game objects
        this.gameDispatcher = new GameDispatcher(this.game);
        this.gui = new GUI(this.game, this.gameDispatcher);

        this.game.input.onTap.add(this.onClick, this);
    }


    private onClick(): void {
        this.gameDispatcher.player.start();
    }
    public update(): void {
        // main update
        this.gameDispatcher.update();
    }

}
