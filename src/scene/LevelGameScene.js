import Config from "../config";
import DataMgr from "../mgr/DataMgr";
import StaticGameScene from "./StaticGameScene";
import GameUtils from "../mgr/GameUtils";
import EventMgr from "../mgr/EventMgr";

export default class LevelGameScene extends StaticGameScene {
    onCreate() {
        super.onCreate();
        this.rewardType = DataMgr.preparationDataGameLevel;
        this.registerEvent("Continue", this.onContinue.bind(this));
        this.ui.starPanel.visible = true;
        this.ui.expPanel.visible = true;
        this.ui.coinPanel.visible = true;
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

    onLoadedGameRes() {
        super.onLoadedGameRes();
        this.showGuideAnimation();
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
        let exp = this.exp * GameUtils.getBikeConfig("expPercent");
        if (this.doubleReward) {
            exp *= 2;
        }
        const isFirstTime = DataMgr.isPlayGameLevelFirstTime(this.mapIndex, this.levelIndex);
        DataMgr.add(DataMgr.exp, Math.floor(exp));
        if (this.gameStatus === "win") {
            DataMgr.setGameLevelStarCount(this.mapIndex, this.levelIndex, this.star);
        }
        DataMgr.refreshPreparationRewards(DataMgr.preparationDataGameLevel);
        App.getScene("GameLevelScene").onGameEnded(this.gameStatus === "win" && isFirstTime);
    }

    gameWin() {
        this.gameStatus = "win";
        App.showScene("GameLevelResultScene", {gameScene: this});
        EventMgr.dispatchEvent("GameWin");
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
