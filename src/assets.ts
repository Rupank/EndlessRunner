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
    export class ImagesCrate {
        static getName(): string { return 'crate'; }

        static getPNG(): string { return require('assets/images/crate.png'); }
    }
    export class ImagesGameOverBG {
        static getName(): string { return 'gameOverBG'; }

        static getPNG(): string { return require('assets/images/gameOverBG.png'); }
    }
    export class ImagesGameStart {
        static getName(): string { return 'gameStart'; }

        static getPNG(): string { return require('assets/images/gameStart.png'); }
    }
    export class ImagesMango {
        static getName(): string { return 'mango'; }

        static getPNG(): string { return require('assets/images/mango.png'); }
    }
}

export namespace Spritesheets {
    export class SpritesheetsMonkey3232 {
        static getName(): string { return 'monkey.[32,32]'; }

        static getPNG(): string { return require('assets/spritesheets/monkey.[32,32].png'); }
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
    export class AudioDie {
        static getName(): string { return 'die'; }

        static getWAV(): string { return require('assets/audio/die.wav'); }
    }
    export class AudioHit {
        static getName(): string { return 'hit'; }

        static getWAV(): string { return require('assets/audio/hit.wav'); }
    }
    export class AudioMusic1 {
        static getName(): string { return 'music1'; }

        static getMP3(): string { return require('assets/audio/music1.mp3'); }
    }
    export class AudioPoint {
        static getName(): string { return 'point'; }

        static getWAV(): string { return require('assets/audio/point.wav'); }
    }
    export class AudioWing {
        static getName(): string { return 'wing'; }

        static getWAV(): string { return require('assets/audio/wing.wav'); }
    }
}

export namespace Audiosprites {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace GoogleWebFonts {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace CustomWebFonts {
    export class FontsGameOver {
        static getName(): string { return 'game_over'; }

        static getFamily(): string { return 'game_over'; }

        static getCSS(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/game_over.css'); }
        static getEOT(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/game_over.eot'); }
        static getSVG(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/game_over.svg'); }
        static getTTF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/game_over.ttf'); }
        static getWOFF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/game_over.woff'); }
        static getWOFF2(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/game_over.woff2'); }
    }
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
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
export namespace Shaders {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
export namespace Misc {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
