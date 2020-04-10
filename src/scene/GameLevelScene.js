import Scene from "./Scene";
import Config from "../config";
import {resources, Texture} from "../libs/pixi-wrapper";
import DataMgr from "../mgr/DataMgr";
import GameUtils from "../mgr/GameUtils";

export default class GameLevelScene extends Scene {
    onCreate() {
        for (let i = 1; i <= 5; i++) {
            const button = this.ui[`glBtn${i}`];
            button.index = i - 1;
            this.onClick(button, this.onClickGameLevel.bind(this));
        }
        this.selectedLevel = 0;
        this.gameLevel = 0;
        this.onClick(this.ui.returnButton, this.onClickReturnButton);
        this.onClick(this.ui.lastLevelButton, this.onClickLastLevelButton.bind(this));
        this.onClick(this.ui.nextLevelButton, this.onClickNextLevelButton.bind(this));
    }

    onClickReturnButton() {
        App.hideScene("GameLevelScene");
        App.showScene("MainScene");
    }

    onShow() {
        this.refreshGameLevelMode(true);
    }

    onClickLastLevelButton() {
        this.gameLevel--;
        if (this.gameLevel < 0) {
            this.gameLevel = 0;
        }
        this.refreshGameLevelMode();
    }

    onClickNextLevelButton() {
        this.gameLevel++;
        const max = Config.gameLevelMode.mapList.length - 1;
        if (this.gameLevel > max) {
            this.gameLevel = max;
        }
        this.refreshGameLevelMode();
    }

    refreshGameLevelMode(onlyStatus) {
        if (onlyStatus) {
            this.selectedLevel = this.selectedLevel || 0;
        } else {
            this.selectedLevel = 0;
        }
        this.refreshGameLevelSelectedState();
        const glConfig = Config.gameLevelMode.mapList[this.gameLevel];
        this.ui.sceneImage.children[0].texture = resources[glConfig.mainCover].texture;
        const total = DataMgr.getGameLevelStarTotalCount();
        const needed = glConfig.starCountUnlockNeeded;
        const locked = DataMgr.isGameLevelMapLocked(this.gameLevel);
        this.ui.totalStarCount.text = total;
        this.ui.gameLevelMapDsc.text = App.getText(glConfig.dsc);
        this.ui.gameLevelLocked.visible = locked;
        this.ui.glUnlockStarCount.text = needed;
        GameUtils.greySprite(this.ui.sceneImage.children[0], locked);
        this.ui.lastLevelButton.visible = this.gameLevel > 0;
        this.ui.nextLevelButton.visible = this.gameLevel < Config.gameLevelMode.mapList.length - 1;
    }

    refreshGameLevelSelectedState() {
        for (let i = 1; i <= 5; i++) {
            const count = DataMgr.getGameLevelStarCount(this.gameLevel, i - 1);
            const isLocked = DataMgr.isGameLevelIsLocked(this.gameLevel, i - 1);
            const btn = this.ui[`glBtn${i}`];
            if (isLocked) {
                btn.children[0].texture = Texture.from(Config.imagePath.lockedLevel);
                btn.interactive = false;
            } else if (i - 1 === this.selectedLevel) {
                btn.children[0].texture = Texture.from(Config.imagePath.selectedLevel);
                btn.interactive = true;
            } else {
                btn.children[0].texture = Texture.from(Config.imagePath.enabledLevel);
                btn.interactive = true;
            }
            const nameLabel = GameUtils.findChildByName(btn, "nameLabel");
            nameLabel.text = `${this.gameLevel + 1}-${i}`;
            for (let j = 1; j <= 3; j++) {
                const star = GameUtils.findChildByName(btn, j + "");
                star.visible = count >= j;
            }
        }
    }

    onClickGameLevel(button) {
        this.selectedLevel = button.index;
        this.refreshGameLevelSelectedState();
        App.showScene("PreparationScene", "GameLevel");
    }
}

GameLevelScene.sceneFilePath = "myLaya/laya/pages/View/GameLevelScene.scene.json";
