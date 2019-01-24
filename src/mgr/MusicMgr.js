import Utils from "./Utils";
import DataMgr from "../mgr/DataMgr";

class MusicMgr_ {
    constructor() {
        this.bgmAudio = document.createElement("audio");
        this.bgmAudio.loop = true;
        this.bgmAudio.autoplay = true;
        // this.soundAudioTable = {};
        this.soundList = [];
    }

    playBGM(path) {
        if (!Utils.isIOS()) {
            this.bgmAudio.src = path;
            this.bgmAudio.muted = !DataMgr.get(DataMgr.bgmOn, true);
            this.bgmAudio.onload = () => {
                this.bgmAudio.play();
            };
        }
    }

    pauseBGM() {
        this.bgmAudio.pause();
    }

    playSound(path, callback) {
        if (!Utils.isIOS()) {
            let audio = document.createElement("audio");
            audio.autoplay = true;
            audio.src = path;
            audio.muted = !DataMgr.get(DataMgr.soundOn, true);
            if (callback) {
                audio.addEventListener("ended", () => callback());
            }
            this.soundList.push(audio);
        }
    }

    muteBGM(muted) {
        this.bgmAudio.muted = muted;
    }

    muteSound(muted) {
        this.soundList.forEach(sound => sound.muted = muted);
    }
}

const MusicMgr = new MusicMgr_();

export default MusicMgr;
