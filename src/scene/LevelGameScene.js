import Config from "../config";
import DataMgr from "../mgr/DataMgr";
import StaticGameScene from "./StaticGameScene";

export default class LevelGameScene extends StaticGameScene {
    onCreate() {
        super.onCreate();
        this.ui.starPanel.visible = true;
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

    onClickSurrenderButton() {
        App.showScene("TipScene", {
            tip: App.getText("You only get the last prize after surrender, are you sure?"),
            confirmCallback: () => {
                this.gameWin(Config.enemy.count);
            },
            cancelCallback: () => {
            },
        });
    }

    getItemRandomTableList() {
        return this.mapConfig.itemRandomTableList;
    }

    settle() {
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
        super.settle();
        DataMgr.refreshPreparationRewards(DataMgr.preparationDataGameLevel);
    }

    gameWin() {
        this.gameStatus = "win";
        setTimeout(() => {
            App.getScene("LevelGameScene").pauseGame();
            App.getScene("LevelGameScene").settle();
            App.destroyScene("LevelGameScene");
            App.showScene("MainScene");
        }, 3000);
    }

    onDead() {
        super.onDead();
        App.showScene("GameLevelFailedScene", (this.deadPos.x - this.bikeStartX) / this.totalDistance);
    }
}
