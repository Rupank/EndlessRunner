
/**
 * @class GameVars
 *
 * Global game variables
 */
export default class GameVars {
    /** Current level tilemap */
    public map: Phaser.Tilemap = null;

    /** Current level */
    public level: number = 1;
    /** Global collected coins counter */
    public collectedCoin: number = 0;
    /** Local collected coins counter for the current level. Every new map or player die reset this value. When the map is completed this value added to this.collectedCoin */
    public levelCoin: number = 0;
    /** If true the game is paused by user. Opened menu. */
    public pause: boolean = false;
    /** True when a map started. Space or left click unlock this state. */
    public firstPause: boolean = true;
    /** Space key binding */
    public spaceKey: Phaser.Key;

    /** Group of the coins */
    public coinsGroup: Phaser.Group = null;
    /** Group of the player */
    public playerGroup: Phaser.Group = null;
    /** Group of the pipes */
    public pipeGroup: Phaser.Group = null;
    /** Group of the mangoes */
    public mangoGroup: Phaser.Group = null;

    public bg2Speed = 0.2;
    public bg3Speed = 0.3;
    public bg4Speed = 1;

    /** HUD pipe sprite */
    public pipeUISprite: Phaser.Sprite = null;
    /** HUD collected coins displayer text object  */
    public coinText: Phaser.Text = null;
    /** HUD current level displayer text object */
    public lvlText: Phaser.Text = null;



    /** Object that contain all game options. Loaded from storage. */
    public options: any;
}