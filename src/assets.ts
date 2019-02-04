/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class ImagesBg1 {
        static getName(): string { return 'bg1'; }

        static getPNG(): string { return require('assets/images/bg1.png'); }
    }
    export class ImagesBg2 {
        static getName(): string { return 'bg2'; }

        static getPNG(): string { return require('assets/images/bg2.png'); }
    }
    export class ImagesLogo {
        static getName(): string { return 'logo'; }

        static getPNG(): string { return require('assets/images/logo.png'); }
    }
    export class ImagesMapIcon {
        static getName(): string { return 'map_icon'; }

        static getPNG(): string { return require('assets/images/map_icon.png'); }
    }
    export class ImagesPipe {
        static getName(): string { return 'pipe'; }

        static getPNG(): string { return require('assets/images/pipe.png'); }
    }
}

export namespace Spritesheets {
    export class SpritesheetsCoin3232 {
        static getName(): string { return 'coin.[32,32]'; }

        static getPNG(): string { return require('assets/spritesheets/coin.[32,32].png'); }
        static getFrameWidth(): number { return 32; }
        static getFrameHeight(): number { return 32; }
        static getFrameMax(): number { return -1; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
    }
    export class SpritesheetsEnemy3232 {
        static getName(): string { return 'enemy.[32,32]'; }

        static getPNG(): string { return require('assets/spritesheets/enemy.[32,32].png'); }
        static getFrameWidth(): number { return 32; }
        static getFrameHeight(): number { return 32; }
        static getFrameMax(): number { return -1; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
    }
    export class SpritesheetsPlayer13232 {
        static getName(): string { return 'player1.[32,32]'; }

        static getPNG(): string { return require('assets/spritesheets/player1.[32,32].png'); }
        static getFrameWidth(): number { return 32; }
        static getFrameHeight(): number { return 32; }
        static getFrameMax(): number { return -1; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
    }
    export class SpritesheetsPlayer23232 {
        static getName(): string { return 'player2.[32,32]'; }

        static getPNG(): string { return require('assets/spritesheets/player2.[32,32].png'); }
        static getFrameWidth(): number { return 32; }
        static getFrameHeight(): number { return 32; }
        static getFrameMax(): number { return -1; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
    }
}

export namespace Atlases {
    export class AtlasesPreloadSpritesArray {
        static getName(): string { return 'preload_sprites_array'; }

        static getJSONArray(): string { return require('assets/atlases/preload_sprites_array.json'); }

        static getPNG(): string { return require('assets/atlases/preload_sprites_array.png'); }
    }
    export namespace AtlasesPreloadSpritesArray {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
}

export namespace Audio {
    export class AudioMusic1 {
        static getName(): string { return 'music1'; }

        static getMP3(): string { return require('assets/audio/music1.mp3'); }
    }
    export class AudioMusic2 {
        static getName(): string { return 'music2'; }

        static getMP3(): string { return require('assets/audio/music2.mp3'); }
    }
    export class AudioMusic3 {
        static getName(): string { return 'music3'; }

        static getMP3(): string { return require('assets/audio/music3.mp3'); }
    }
    export class AudioMusic4 {
        static getName(): string { return 'music4'; }

        static getMP3(): string { return require('assets/audio/music4.mp3'); }
    }
}

export namespace Audiosprites {
    export class AudiospritesSfx {
        static getName(): string { return 'sfx'; }

        static getAC3(): string { return require('assets/audiosprites/sfx.ac3'); }
        static getJSON(): string { return require('assets/audiosprites/sfx.json'); }
        static getM4A(): string { return require('assets/audiosprites/sfx.m4a'); }
        static getMP3(): string { return require('assets/audiosprites/sfx.mp3'); }
        static getOGG(): string { return require('assets/audiosprites/sfx.ogg'); }
    }
    export namespace AudiospritesSfx {
        export enum Sprites {
            Bump = 'bump',
            Coin = 'coin',
            Die = 'die',
            Jump = 'jump',
            Kick = 'kick',
            Pause = 'pause',
            StageClear = 'stage_clear',
        }
    }
}

export namespace GoogleWebFonts {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace CustomWebFonts {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace BitmapFonts {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace JSON {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace XML {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Text {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Scripts {
    export class ScriptsBlurX {
        static getName(): string { return 'BlurX'; }

        static getJS(): string { return require('assets/scripts/BlurX.js'); }
    }
    export class ScriptsBlurY {
        static getName(): string { return 'BlurY'; }

        static getJS(): string { return require('assets/scripts/BlurY.js'); }
    }
}
export namespace Shaders {
    export class ShadersPixelate {
        static getName(): string { return 'pixelate'; }

        static getFRAG(): string { return require('assets/shaders/pixelate.frag'); }
    }
}
export namespace Misc {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
