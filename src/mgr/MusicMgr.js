import Utils from "./Utils";
import DataMgr from "./DataMgr";

class BufferLoader {
    constructor(context, urlList, callback) {
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
        this.bufferList = [];
        this.loadCount = 0;
    }

    loadBuffer(url, index) {
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";

        let loader = this;

        request.onload = function () {
            loader.context.decodeAudioData(
                request.response,
                function (buffer) {
                    if (!buffer) {
                        return;
                    }
                    loader.bufferList[index] = buffer;
                    if (++loader.loadCount === loader.urlList.length)
                        loader.onload(loader.bufferList);
                }
            );
        };

        request.onerror = function () {
            alert("BufferLoader: XHR error");
        };

        request.send();
    }

    load() {
        if (this.urlList.length === 0) {
            return this.onload([]);
        }
        for (let i = 0; i < this.urlList.length; ++i)
            this.loadBuffer(this.urlList[i], i);
    }
}

class MusicMgr_ {
    constructor() {
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        this.context = new AudioContext();
        this.bufferTable = {};
        this.soundList = [];
    }

    loadAudioRes(pathList, callback) {
        new BufferLoader(this.context, pathList, bufferList => {
            pathList.forEach((path, i) => {
                this.bufferTable[path] = bufferList[i];
            });
            callback();
        }).load();
    }

    hasLoadedAudio(path) {
        return this.bufferTable[path] !== undefined;
    }

    playBGM(path, reset) {
        if (this.bgmSource
            && this.bgmSource.buffer === this.bufferTable[path]
            && !reset) {
            return;
        }
        if (this.bgmSource) {
            this.bgmSource.stop();
            this.bgmSource.disconnect();
        }
        this.bgmSource = this.context.createBufferSource();
        this.bgmSource.buffer = this.bufferTable[path];
        this.bgmSource.loop = true;
        if (DataMgr.get(DataMgr.bgmOn, true)) {
            this.bgmSource.connect(this.context.destination);
        }
        this.bgmSource.start();
    }

    pauseBGM() {
        if (this.bgmSource) {
            this.bgmSource.stop();
            this.bgmSource.disconnect();
        }
        this.bgmSource = undefined;
    }

    playSound(path, callback) {
        let bs = this.context.createBufferSource();
        this.soundList.push(bs);
        bs.buffer = this.bufferTable[path];
        if (DataMgr.get(DataMgr.soundOn, true)) {
            bs.connect(this.context.destination);
        }
        bs.start();
        bs.addEventListener("ended", () => {
            Utils.removeItemFromArray(this.soundList, bs);
            if (callback) {
                callback();
            }
        });
    }

    playLoopSound(path) {
        let soundSource = this.context.createBufferSource();
        soundSource.buffer = this.bufferTable[path];
        soundSource.loop = true;
        if (DataMgr.get(DataMgr.soundOn, true)) {
            soundSource.connect(this.context.destination);
        }
        soundSource.start();
        return soundSource;
    }

    stopLoopSound(soundSource) {
        soundSource.stop();
        soundSource.disconnect();
    }

    muteBGM(muted) {
        if (muted) {
            this.bgmSource.disconnect();
        } else {
            this.bgmSource.connect(this.context.destination);
        }
    }

    muteSound(muted) {
        if (muted) {
            this.soundList.forEach(bs => bs.disconnect());
        }
    }
}

const MusicMgr = new MusicMgr_();

export default MusicMgr;
