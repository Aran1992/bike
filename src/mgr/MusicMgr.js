class MusicMgr_ {
    constructor() {
        this.bgmAudio = document.createElement("audio");
        this.bgmAudio.loop = true;
        this.bgmAudio.autoplay = true;
        // this.soundAudioTable = {};
    }

    playBGM(path) {
        this.bgmAudio.src = path;
        this.bgmAudio.onload = () => {
            this.bgmAudio.play();
        };
    }

    pauseBGM() {
        this.bgmAudio.pause();
    }

    playSound(path, callback) {
        // if (this.soundAudioTable[path] === undefined) {
        //     let audio = document.createElement("audio");
        //     audio.autoplay = true;
        //     audio.src = path;
        //     audio.callback = callback;
        //     audio.addEventListener("ended", () => {
        //         audio.playEnded = true;
        //         if (audio.callback) {
        //             audio.callback();
        //             audio.callback = undefined;
        //         }
        //     });
        //     this.soundAudioTable[path] = audio;
        // } else {
        //     let audio = this.soundAudioTable[path];
        //     if (audio.playEnded) {
        //         audio.play();
        //         audio.callback = callback;
        //     }
        // }

        let audio = document.createElement("audio");
        audio.autoplay = true;
        audio.src = path;
        if (callback) {
            audio.addEventListener("ended", () => callback());
        }
    }
}

const MusicMgr = new MusicMgr_();

export default MusicMgr;
