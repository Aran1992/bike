import Config from "../config";
import Utils from "./Utils";

class MusicMgr_ {
    constructor() {
        this.bgmAudio = document.createElement("audio");
        this.bgmAudio.loop = true;
        this.bgmAudio.autoplay = true;
        // this.soundAudioTable = {};
    }

    playBGM(path) {
        if (Config.openBGM && !Utils.isIOS()) {
            this.bgmAudio.src = path;
            this.bgmAudio.onload = () => {
                this.bgmAudio.play();
            };
        }
    }

    pauseBGM() {
        this.bgmAudio.pause();
    }

    playSound(path, callback) {
        if (Config.openSound && !Utils.isIOS()) {
            let audio = document.createElement("audio");
            audio.autoplay = true;
            audio.src = path;
            if (callback) {
                audio.addEventListener("ended", () => callback());
            }
        }
    }
}

const MusicMgr = new MusicMgr_();

export default MusicMgr;
