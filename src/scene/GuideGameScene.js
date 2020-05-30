import StaticGameScene from "./StaticGameScene";
import Config from "../config";
import DataMgr from "../mgr/DataMgr";
import EventMgr from "../mgr/EventMgr";
import MusicMgr from "../mgr/MusicMgr";

export default class GuideGameScene extends StaticGameScene {
    onShow() {
        this.mapConfig = Config.guideMode.mapConfig;
        this.mapScenePath = Config.guideMode.mapConfig.scenePath;
        this.ui.distancePanel.visible = false;
        this.ui.matchRacetrack.visible = false;
        super.onShow();
        this.guideMgr.setControlAll(true);
    }

    getResPathList() {
        return super.getResPathList().concat([this.mapConfig.bgmPath]);
    }

    getBikeID() {
        return 0;
    }

    onLoadedGameRes() {
        super.onLoadedGameRes();
        MusicMgr.playBGM(this.bgmPath, true);
    }

    gameWin() {
        this.gameStatus = "win";
        EventMgr.dispatchEvent("GameWin");
        DataMgr.set(DataMgr.throughGuide, true);
        App.destroyScene("GuideGameScene");
        App.showScene("MainScene");
    }

    getItemRandomTableList() {
        return this.mapConfig.itemRandomTable;
    }
}