import Scene from "./Scene";
import DataMgr from "../mgr/DataMgr";
import Config from "../config";
import {resources, Texture} from "../libs/pixi-wrapper";
import MusicMgr from "../mgr/MusicMgr";
import BikeSprite from "../item/BikeSprite";
import EventMgr from "../mgr/EventMgr";
import Utils from "../mgr/Utils";
import OnlineMgr from "../mgr/OnlineMgr";
import GameUtils from "../mgr/GameUtils";

export default class MainScene extends Scene {
    onCreate() {
        this.lockableButtonList = [
            this.ui.shopButton,
            this.ui.homeButton,
            this.ui.rankButton,
            this.ui.drawButton,
            this.ui.signButton,
            this.ui.giftButton,
            this.ui.mapModeButton,
        ];
        this.bindLockableButton();
        this.onClick(this.ui.endlessModeButton, this.onClickEndlessModeButton.bind(this));
        this.onClick(this.ui.gamelevelModeButton, this.onClickGamelevelModeButton.bind(this));
        this.onClick(this.ui.bikeButton, this.onClickBikeButton.bind(this));
        this.onClick(this.ui.systemButton, this.onClickSystemButton.bind(this));
        this.onClick(this.ui.addDiamondButton, this.onClickAddDiamondButton.bind(this));
        this.onClick(this.ui.addCoinButton, this.onClickAddCoinButton.bind(this));
        this.onClick(this.ui.endlessHelpButton, this.onClickEndlessHelpButton.bind(this));
        this.onClick(this.ui.mapHelpButton, this.onClickMapHelpButton.bind(this));
        this.onClick(this.ui.lastLevelButton, this.onClickLastLevelButton.bind(this));
        this.onClick(this.ui.nextLevelButton, this.onClickNextLevelButton.bind(this));
        for (let i = 1; i <= 5; i++) {
            const button = this.ui[`glBtn${i}`];
            button.index = i - 1;
            this.onClick(button, this.onClickGameLevel.bind(this));
        }
        this.selectedLevel = 0;
        this.ui.signButton.visible = OnlineMgr.hasSignReward();
        if (window.PlatformHelper.canLogout) {
            this.onClick(this.ui.userImage, this.onClickUserImage.bind(this));
        }
        EventMgr.registerEvent("RefreshRankData", this.onRefreshRankData.bind(this));
        EventMgr.registerEvent("UnlockSystem", this.onUnlockSystem.bind(this));

        this.bikeSprite = new BikeSprite(this.ui.bikeSpritePanel);

        this.mode = "Endless";
        this.refreshMode();

        this.initGift();

        this.waitShowNotice = [];

        this.gameLevel = 0;
    }

    onRefreshRankData() {
        this.ui.distanceText.text = `${Math.floor(DataMgr.get(DataMgr.rankDistance, 0))}m`;
        this.ui.totalScoreText.text = DataMgr.get(DataMgr.rankTotalScore, 0);
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
        this.ui.coinText.text = DataMgr.get(DataMgr.coin, 0);
    }

    onShow() {
        this.ui.distanceText.text = `${Math.floor(DataMgr.get(DataMgr.rankDistance, 0))}m`;
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
        this.ui.coinText.text = DataMgr.get(DataMgr.coin, 0);
        this.ui.totalScoreText.text = DataMgr.get(DataMgr.rankTotalScore, 0);

        this.refreshMode();

        MusicMgr.playBGM(Config.mainBgmPath);

        this.bikeSprite.setBikeID(DataMgr.get(DataMgr.selectedBike, 0));
        this.bikeSprite.setPosition(-this.bikeSprite.getWidth() / 2, 0);
        this.bikeSprite.play();
        this.onUpdate();

        this.ui.userImage.children[0].texture = Texture.from(DataMgr.get(DataMgr.headurl, Config.defaultEnemyHeadImagePath));
        this.ui.userNameText.text = DataMgr.getPlayerName();

        window.PlatformHelper.closeLogoScene();

        this.refreshLockStatus();
        this.checkWaitShowNotice();
    }

    onHide() {
        this.bikeSprite.stop();
        cancelAnimationFrame(this.animationFrame);
    }

    onUpdate() {
        let x = this.bikeSprite.getPositionX() + Config.mainScene.bikeSprite.velocityX;
        this.bikeSprite.setPositionX(x);
        if (this.bikeSprite.getLeftBorderX() >= App.sceneWidth) {
            this.bikeSprite.setPositionX(-this.bikeSprite.getWidth() / 2);
        }
        this.animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }

    onClickMapModeButton() {
        this.mode = "Map";
        this.refreshMode();
        App.showScene("PreparationScene", this.mode);
    }

    refreshMapMode() {
        let index = DataMgr.get(DataMgr.currentMapScene);
        let path = Config.mapList[index].texture.mainCover;
        this.ui.sceneImage.children[0].texture = resources[path].texture;
    }

    onClickEndlessModeButton() {
        this.mode = "Endless";
        this.refreshMode();

        if (DataMgr.get(DataMgr.unlockSystems, []).indexOf("preparationScene") === -1) {
            let func = () => {
                App.hideScene("MainScene");
                App.hideScene("PreparationScene");
                App.showScene("EndlessGameScene", DataMgr.get(DataMgr.selectedEndlessScene, 0));
            };
            if (DataMgr.get(DataMgr.endlessGameTimes, 0) === 0) {
                App.showScene("HelpEndlessScene", func);
            } else {
                func();
            }
        } else {
            App.showScene("PreparationScene", this.mode);
        }
    }

    refreshEndlessMode() {
        let index = DataMgr.get(DataMgr.selectedEndlessScene, 0);
        let path = Config.endlessMode.sceneList[index].texture.mainCover;
        this.ui.sceneImage.children[0].texture = resources[path].texture;
    }

    onClickHomeButton() {
        App.hideScene("MainScene");
        App.showScene("HomeScene", DataMgr.get(DataMgr.homeData), true);
    }

    onClickShopButton() {
        App.hideScene("MainScene");
        App.showScene("ShopScene");
    }

    onClickDrawButton() {
        App.hideScene("MainScene");
        App.showScene("DrawScene");
    }

    onClickBikeButton() {
        App.hideScene("MainScene");
        App.showScene("BikeScene");
    }

    onClickSystemButton() {
        App.hideScene("MainScene");
        App.showScene("SystemScene");
    }

    onClickRankButton() {
        App.hideScene("MainScene");
        App.showScene("RankScene");
    }

    onClickUserImage() {
        App.showTip(App.getText("Do you want log out?"), () => {
            delete localStorage.username;
            delete localStorage.password;
            let url = window.location.href;
            window.location.href = url;
        });
    }

    initGift() {
        this.updateGiftState();
        setInterval(() => {
            this.updateGiftState();
        }, 1000);
    }

    updateGiftState() {
        let remainTime = OnlineMgr.getGiftRemainTime();
        if (remainTime) {
            this.ui.giftTimeText.visible = true;
            this.ui.giftTimeText.text = Utils.getCDTimeStringWithoutHour(remainTime * 1000);
        } else {
            this.ui.giftTimeText.visible = false;
        }
    }

    onClickGiftButton() {
        if (!OnlineMgr.hasGift()) {
            App.showNotice(App.getText("ThereIsNoGiftToday"));
        } else if (OnlineMgr.getGiftRemainTime() === 0) {
            App.showScene("GiftScene");
        } else {
            App.showNotice(App.getText("领取礼包的时间还没到"));
        }
    }

    onClickSignButton() {
        App.showScene("SignScene");
    }

    hideSignScene() {
        this.ui.signButton.visible = false;
    }

    onClickAddDiamondButton() {
        App.hideScene("MainScene");
        App.showScene("ShopScene", 1);
    }

    onClickAddCoinButton() {
        App.hideScene("MainScene");
        App.showScene("ShopScene", 2);
    }

    onClickEndlessHelpButton() {
        App.showScene("HelpEndlessScene");
    }

    onClickMapHelpButton() {
        App.showScene("HelpMatchScene");
    }

    refreshLockStatus() {
        this.lockableButtonList.forEach(item => {
            let lock = this.isLockableButtonLocked(item);
            GameUtils.greySprite(item, lock);
            GameUtils.findChildByName(item, "lockedImage").visible = lock;
        });
        let unlock = DataMgr.get(DataMgr.unlockSystems, []).indexOf("shopButton") !== -1;
        this.ui.addCoinButton.visible = unlock;
        this.ui.addDiamondButton.visible = unlock;
    }

    bindLockableButton() {
        this.lockableButtonList.forEach(item => {
            this.onClick(item, this.getLockableHandler(item, this[`onClick${Utils.formatName(item.var)}`].bind(this)));
        });
    }

    getLockableHandler(item, handler) {
        return () => {
            if (this.isLockableButtonLocked(item)) {
                App.showTip(this.getLockNotice(item.var), undefined, undefined, true);
            } else {
                handler();
            }
        };
    }

    getLockNotice(name) {
        let [id, ...values] = Config.lockSystems[name].condition;
        let condition = App.getText(Config.conditions[id], values);
        return App.getText("LockNotice", {condition: condition});
    }

    isLockableButtonLocked(item) {
        let [id, ...values] = Config.lockSystems[item.var].condition;
        return !DataMgr.checkCondition(id, ...values);
    }

    onUnlockSystem(lockInfo) {
        this.refreshLockStatus();
        if (this.isShowed() && this.waitShowNotice.length === 0) {
            this.showUnlockNotice(lockInfo);
        } else {
            this.waitShowNotice.push(lockInfo);
        }
    }

    showUnlockNotice(unlockInfo) {
        App.showScene("NewContentScene", unlockInfo, () => {
            this.checkWaitShowNotice();
        });
    }

    checkWaitShowNotice() {
        if (this.waitShowNotice.length) {
            this.showUnlockNotice(this.waitShowNotice.shift());
        }
    }

    onClickGamelevelModeButton() {
        this.mode = "GameLevel";
        this.refreshMode();
    }

    onClickLastLevelButton() {
        this.gameLevel--;
        if (this.gameLevel < 0) {
            this.gameLevel = 0;
        }
        this.refreshMode();
    }

    onClickNextLevelButton() {
        this.gameLevel++;
        const max = Config.gameLevelMode.mapList.length - 1;
        if (this.gameLevel > max) {
            this.gameLevel = max;
        }
        this.refreshMode();
    }

    refreshGameLevelMode() {
        this.selectedLevel = 0;
        let path = Config.mapList[this.gameLevel].texture.mainCover;
        this.refreshGameLevelSelectedState();
        this.ui.sceneImage.children[0].texture = resources[path].texture;
        const total = DataMgr.getGameLevelStarTotalCount();
        const glConfig = Config.gameLevelMode.mapList[this.gameLevel];
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
        App.showScene("PreparationScene", this.mode);
    }

    refreshMode() {
        this.ui.gameLevelPanel.visible = this.mode === "GameLevel";
        GameUtils.greySprite(this.ui.sceneImage.children[0], false);
        switch (this.mode) {
            case "Map":
                this.refreshMapMode();
                break;
            case "GameLevel":
                this.refreshGameLevelMode();
                break;
            case "Endless":
                this.refreshEndlessMode();
                break;
        }
    }
}

MainScene.sceneFilePath = "myLaya/laya/pages/View/MainScene.scene.json";
MainScene.resPathList = Config.mapList.map(scene => scene.texture.mainCover)
    .concat(Config.endlessMode.sceneList.map(scene => scene.texture.mainCover))
    .concat(BikeSprite.resPathList)
    .concat([Config.mainBgmPath]);
