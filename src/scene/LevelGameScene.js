import Config from "../config";
import DataMgr from "../mgr/DataMgr";
import StaticGameScene from "./StaticGameScene";

export default class LevelGameScene extends StaticGameScene {
    onCreate() {
        super.onCreate();
        this.rewardType = DataMgr.preparationDataGameLevel;
        this.registerEvent("Continue", this.onContinue.bind(this));
        this.ui.starPanel.visible = true;
        this.ui.pauseButton.visible = true;
        this.onClick(this.ui.pauseButton, this.onClickPauseButton.bind(this));
    }

    onShow(mapIndex, levelIndex) {
        this.mapIndex = mapIndex;
        this.levelIndex = levelIndex;
        this.mapConfig = Config.gameLevelMode.mapList[mapIndex];
        this.mapScenePath = this.mapConfig.levelList[this.levelIndex];
        super.onShow();
        TDGA.onEvent("闯关模式");
    }

    onRestart() {
        this.onShow(this.mapIndex, this.levelIndex);
    }

    onClickPauseButton() {
        if (this.gameStatus === "play") {
            this.gameLoopFunc = this.pause.bind(this);
            this.gameStatus = "pause";
            App.showScene("PauseScene", {
                gameSceneName: "LevelGameScene",
                clickMainTip: "Are you sure you want to quit the game?  The current game data will be saved automatically after exit.",
                clickRestartTip: "Are you sure to restart the game? The current game data will be saved automatically after exit."
            });
        } else if (this.gameStatus === "pause") {
            this.gameLoopFunc = this.play.bind(this);
            this.gameStatus = "play";
            App.hideScene("PauseScene");
        }
    }

    getItemRandomTableList() {
        return this.mapConfig.itemRandomTableList;
    }

    settle() {
        super.settle();
        if (this.gameStatus === "win") {
            const table = DataMgr.get(DataMgr.gameLevelData, {});
            const map = this.mapIndex;
            const level = this.levelIndex;
            if (table[map] === undefined) {
                table[map] = {};
            }
            if (table[map][level] === undefined || table[map][level] < this.star) {
                table[map][level] = this.star;
            }
            DataMgr.set(DataMgr.gameLevelData, table);
        }
        DataMgr.refreshPreparationRewards(DataMgr.preparationDataGameLevel);
    }

    gameWin() {
        this.gameStatus = "win";
        App.showScene("GameLevelResultScene", {gameScene: this});
    }

    onDead() {
        super.onDead();
        this.deadCompleteTimer = setTimeout(() => {
            this.gameLoopFunc = this.pause.bind(this);
            App.showScene("GameLevelFailedScene", {
                gameScene: this,
                distance: this.distance,
                playerRate: (this.deadPos.x - this.bikeStartX) / this.totalDistance,
            });
        }, Config.bike.deadCompleteTime);
    }

    onContinue() {
        this.onClickPauseButton();
    }
}
