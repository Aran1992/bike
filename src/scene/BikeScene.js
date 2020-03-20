import Config from "../config";
import Scene from "./Scene";
import List from "../ui/List";
import DataMgr from "../mgr/DataMgr";
import BikeSprite from "../item/BikeSprite";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";
import MusicMgr from "../mgr/MusicMgr";
import LockableButton from "../ui/LockableButton";
import EventMgr from "../mgr/EventMgr";

export default class BikeScene extends Scene {
    onCreate() {
        this.selectedIndex = 0;
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        this.onClick(this.ui.selectBikeButton, this.onClickSelectedBikeButton.bind(this));
        this.onClick(this.ui.upgradeButton, this.onClickUpgradeButton.bind(this));
        this.list = new List({
            root: this.ui.list,
            initItemFunc: this.initItem.bind(this),
            updateItemFunc: this.updateItem.bind(this),
            count: Config.bikeList.length,
        });
        this.upgradeList = new List({
            root: this.ui.upgradeList,
            updateItemFunc: this.updateUpgradeItem.bind(this),
            count: Config.upgradeBike.items.length,
            isStatic: true,
        });
        [
            this.ui.drawButton,
            this.ui.upgradePanelButton,
        ].forEach(button => new LockableButton({
            button: button,
            system: button.var,
            handler: this[`onClick${Utils.formatName(button.var)}`].bind(this),
        }));
        EventMgr.registerEvent("UpdatePoint", this.updatePoint.bind(this));
    }

    onShow() {
        this.updatePoint();
        this.onClickItem({index: 0});
        this.ui.upgradePanel.visible = false;
        this.ui.list.visible = true;
    }

    onHide() {
        if (this.upgradeSound) {
            MusicMgr.stopLoopSound(this.upgradeSound);
            this.upgradeSound = undefined;
        }
    }

    initItem(item) {
        item.bikeSprite = new BikeSprite(item.ui.bikePanel, 2);
        item.bikeSprite.setPosition(item.ui.bikePanel.mywidth / 2, item.ui.bikePanel.myheight / 2 + 20);
        this.onClick(item, this.onClickItem.bind(this));
    }

    updateItem(item, index) {
        item.index = index;
        let config = Config.bikeList[index];
        let lock = !DataMgr.hasOwnedBike(config.id);
        item.bikeSprite.setBikeID(config.id);
        item.bikeSprite.setGray(lock);
        if (this.selectedIndex === index) {
            item.bikeSprite.play();
            item.ui.selectedImage.visible = true;
        } else {
            item.bikeSprite.stop();
            item.ui.selectedImage.visible = false;
        }
        item.ui.lostMaskImage.visible = lock;
        item.ui.lockedImage.visible = lock;
        item.ui.fightMaskImage.visible = DataMgr.get(DataMgr.selectedBike, 0) === config.id;
        let level = DataMgr.get(DataMgr.bikeLevelMap, {})[config.id];
        item.ui.levelIcon.visible = level !== undefined;
        item.ui.levelText.text = level !== undefined ? `${level + 1}` : "";
        const upgradeLevel = DataMgr.getBikeUpgradeTimes(config.id);
        item.ui.upgradeLevelIcon.visible = upgradeLevel !== 0;
        item.ui.upgradeLevelText.text = upgradeLevel !== 0 ? `${upgradeLevel}` : "";
        GameUtils.showRedPoint(item, DataMgr.isBikeUpgradable(config.id));
    }

    updateUpgradeItem(item, index) {
        Config.upgradeBike.items.forEach((upgrade, i) => {
            item.ui[`itemPanel${i}`].visible = index === i;
        });
        item.ui.selectedIcon.visible = false;
        if (this.selectedIndex !== undefined) {
            const [cur, max] = DataMgr.getBikeUpgradeItem(Config.bikeList[this.selectedIndex].id, index);
            item.ui.upgradeProgressLabel.text = App.getText("UpgradeItemDsc", {cur, max});
            for (let i = 21; i <= 32; i++) {
                const step = (i - 20) / 12 * Config.upgradeBike.maxValue;
                item.ui[i].visible = cur >= step;
            }
        }
    }

    onClickReturnButton() {
        App.hideScene("BikeScene");
        App.showScene("MainScene");
    }

    onClickDrawButton() {
        App.hideScene("BikeScene");
        App.showScene("DrawScene");
    }

    onClickItem(item) {
        this.selectedIndex = item.index;
        this.list.refresh();
        let config = Config.bikeList[item.index];
        let level = DataMgr.get(DataMgr.bikeLevelMap, {})[config.id];
        let isHighestLevel = (config.coinPercent || Config.bike.coinPercent)[level + 1] === undefined;
        let dsc = GameUtils.getBikeDsc(config);
        let coin, distance, score, exp;
        if (DataMgr.hasOwnedBike(config.id)) {
            let get = (config, key, level) => {
                let list = config[key] || Config.bike[key];
                let curValue = list[level];
                let nextValue = list[level + 1];
                return `${Math.floor(curValue * 100)}%` + (nextValue !== undefined ? ` -> ${Math.floor(nextValue * 100)}%` : "");
            };
            dsc += "\n" + App.getText("LevelDsc2", {level: `${level + 1} ${isHighestLevel ? App.getText("Highest Level") : `-> ${level + 2}`}`});
            coin = get(config, "coinPercent", level);
            distance = get(config, "distancePercent", level);
            score = get(config, "scorePercent", level);
            exp = get(config, "expPercent", level);
        } else {
            let get = (config, key, level) => {
                let list = config[key] || Config.bike[key];
                let curValue = list[level];
                return `${Math.floor(curValue * 100)}%`;
            };
            level = 0;
            dsc += "\n" + App.getText("LevelDsc2", {level: level + 1});
            coin = get(config, "coinPercent", level);
            distance = get(config, "distancePercent", level);
            score = get(config, "scorePercent", level);
            exp = get(config, "expPercent", level);
        }
        dsc += "\n" + App.getText("BonusDsc", {coin, distance, score, exp});
        this.ui.bikeDscText.text = dsc;

        let hasOwned = DataMgr.hasOwnedBike(config.id);
        this.ui.selectBikeButton.visible = hasOwned && DataMgr.get(DataMgr.selectedBike, 0) !== config.id;
        this.ui.unlockBikeImage.visible = !hasOwned;
        this.refreshUpgradePanelButtonLockStatus(hasOwned);
    }

    refreshUpgradePanelButtonLockStatus(hasOwned) {
        let lock = GameUtils.isSystemLocked("upgradePanelButton") || !hasOwned;
        for (let i = 0; i < this.ui.upgradePanelButton.children.length; i++) {
            const child = this.ui.upgradePanelButton.children[i];
            if (child.uiname !== "lockedImage") {
                GameUtils.greySprite(child, lock);
            }
        }
        GameUtils.findChildByName(this.button, "lockedImage").visible = lock;
    }

    onClickSelectedBikeButton() {
        DataMgr.set(DataMgr.selectedBike, Config.bikeList[this.selectedIndex].id);
        this.list.refresh();
        this.onClickItem({index: this.selectedIndex});
    }

    onClickUpgradePanelButton() {
        if (!DataMgr.hasOwnedBike(Config.bikeList[this.selectedIndex].id)) {
            return App.showNotice("该自行车未解锁");
        }
        this.ui.upgradePanel.visible = !this.ui.upgradePanel.visible;
        this.ui.list.visible = !this.ui.list.visible;
        if (this.ui.upgradePanel.visible) {
            this.refreshUpgradeInfo();
            this.upgradeList.refresh();
        }
    }

    onClickUpgradeButton() {
        const owned = DataMgr.get(DataMgr.coin, 0);
        const cost = DataMgr.getBikeUpgradeCost(Config.bikeList[this.selectedIndex].id);
        if (owned < cost) {
            return App.showNotice(App.getText("Gold Coin is not enough!"));
        }
        this.upgradeBike();
    }

    refreshUpgradeInfo() {
        const upgradeTimes = DataMgr.getBikeUpgradeTimes(Config.bikeList[this.selectedIndex].id);
        const maxTimes = Utils.getLast(Config.upgradeBike.playerLevelLimitTimes);
        const playerLevel = DataMgr.getPlayerLevel().level;
        const curLevelTimes = Config.upgradeBike.playerLevelLimitTimes[playerLevel - 1];
        if (upgradeTimes >= maxTimes) {
            this.ui.lvLimitPanel.visible = true;
            this.ui.lvLimitLabel.text = App.getText("Highest Level");
            this.ui.upgradeButton.visible = false;
            this.ui.upgradeCostPanel.visible = false;
        } else if (upgradeTimes >= (curLevelTimes === undefined ? maxTimes : curLevelTimes)) {
            this.ui.lvLimitPanel.visible = true;
            let nextUpgradableLevel;
            if (curLevelTimes === undefined) {
                nextUpgradableLevel = Config.upgradeBike.playerLevelLimitTimes.length + 1;
            } else {
                for (let i = playerLevel; i < Config.upgradeBike.playerLevelLimitTimes.length; i++) {
                    if (Config.upgradeBike.playerLevelLimitTimes[i] > upgradeTimes) {
                        nextUpgradableLevel = i + 1;
                        break;
                    }
                }
            }
            this.ui.lvLimitLabel.text = App.getText("玩家${level}级才能继续升级", {level: nextUpgradableLevel});
            this.ui.upgradeButton.visible = false;
            this.ui.upgradeCostPanel.visible = false;
        } else {
            this.ui.upgradeButton.visible = true;
            this.ui.upgradeCostPanel.visible = true;
            this.ui.lvLimitPanel.visible = false;
        }

        this.ui.upgradeCostLabel.text = DataMgr.getBikeUpgradeCost(Config.bikeList[this.selectedIndex].id);
        this.ui.upgradeTimesLabel.text = App.getText("已升级${times}次", {times: upgradeTimes});
    }

    upgradeBike() {
        App.showMask(this.onUpgradeEnded.bind(this));
        DataMgr.add(DataMgr.coin, -DataMgr.getBikeUpgradeCost(Config.bikeList[this.selectedIndex].id));
        this.upgradeItemIndex = DataMgr.upgradeBikeItem(Config.bikeList[this.selectedIndex].id);
        this.initFrame();
        this.frame = -1;
        this.upgradeSound = MusicMgr.playLoopSound(Config.bikeScene.res.upgradeSound);
        this.onFrame();
        EventMgr.dispatchEvent("UpdatePoint");
    }

    onUpgradeEnded() {
        if (this.upgradeSound) {
            MusicMgr.stopLoopSound(this.upgradeSound);
            this.upgradeSound = undefined;
        }
        this.refreshUpgradeInfo();
        this.upgradeList.updateItems((item, index) => {
            if (index === this.upgradeItemIndex) {
                this.updateUpgradeItem(item, index);
                item.ui.selectedIcon.visible = true;
            } else {
                item.ui.selectedIcon.visible = false;
            }
        });
        cancelAnimationFrame(this.animationID);
        App.hideMask();
    }

    initFrame() {
        this.indexInFrame = [];
        const animationConfig = Config.upgradeBike.animation;
        const itemCount = Config.upgradeBike.items.length;
        const startStep = animationConfig.startTurns * itemCount;
        const startStepSpeed = (animationConfig.startSpeed - animationConfig.uniformSpeed) / startStep;
        for (let i = 0; i < itemCount; i++) {
            const frameCount = Math.ceil(animationConfig.startSpeed - startStepSpeed * i);
            this.createIndexFrames(i, frameCount);
        }
        for (let j = 0; j < animationConfig.uniformTurns; j++) {
            for (let i = 0; i < itemCount; i++) {
                this.createIndexFrames(i, animationConfig.uniformSpeed);
            }
        }
        const endStep = animationConfig.endTurns * itemCount + this.upgradeItemIndex;
        const endStepSpeed = (animationConfig.startSpeed - animationConfig.uniformSpeed) / endStep;
        for (let i = 0; i < endStep; i++) {
            const frameCount = Math.ceil(animationConfig.uniformSpeed + endStepSpeed * i);
            const index = i % itemCount;
            this.createIndexFrames(index, frameCount);
        }
        for (let i = 0; i < animationConfig.twinkleTurn; i++) {
            this.createIndexFrames(this.upgradeItemIndex, animationConfig.uniformSpeed);
            this.createIndexFrames(-1, animationConfig.uniformSpeed);
        }
        this.indexInFrame.push(this.upgradeItemIndex);
    }

    createIndexFrames(index, frameCount) {
        const arr = [];
        for (let i = 0; i < frameCount; i++) {
            arr.push(index);
        }
        this.indexInFrame = this.indexInFrame.concat(arr);
    }

    onFrame() {
        this.frame++;
        if (this.frame >= this.indexInFrame.length) {
            this.onUpgradeEnded();
        } else {
            this.selectedItemIndex = this.indexInFrame[this.frame];
            this.upgradeList.updateItems((item, index) => {
                item.ui.selectedIcon.visible = index === this.selectedItemIndex;
            });
            this.animationID = requestAnimationFrame(this.onFrame.bind(this));
            if (this.selectedItemIndex === -1) {
                this.refreshUpgradeInfo();
            }
        }
    }

    updatePoint() {
        GameUtils.showRedPoint(this.ui.drawButton,
            !GameUtils.isSystemLocked("drawButton") && DataMgr.isDrawAble());
        const locked = GameUtils.isSystemLocked("upgradePanelButton");
        GameUtils.showRedPoint(this.ui.upgradePanelButton,
            !locked && DataMgr.isBikeUpgradable(Config.bikeList[this.selectedIndex].id));
        this.list.refresh();
    }
}

BikeScene.sceneFilePath = "myLaya/laya/pages/View/BikeScene.scene.json";
BikeScene.resPathList = BikeSprite.resPathList.concat(Utils.values(Config.bikeScene.res));
