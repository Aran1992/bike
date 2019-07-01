import EventMgr from "../mgr/EventMgr";
import Scene from "./Scene";
import {Graphics} from "../libs/pixi-wrapper";
import DataMgr from "../mgr/DataMgr";
import List from "../ui/List";
import Config from "../config";
import GameUtils from "../mgr/GameUtils";

export default class GameOverScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.mainButton, GameOverScene.onClickMainButton);
        this.onClick(this.ui.restartButton, GameOverScene.onClickRestartButton);
        this.onClick(this.ui.advertRebornButton, this.onClickAdvertRebornButton.bind(this));
        this.onClick(this.ui.diamondRebornButton, this.onClickDiamondRebornButton.bind(this));
        this.onClick(this.ui.advertDoubleButton, this.onClickAdvertDoubleButton.bind(this));

        this.ui.diamondRebornCostText.text = Config.diamondRebornCost;
    }

    onShow(args) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        this.args = args;

        this.refresh();
    }

    updateResultItem(item, index) {
        let name = "";
        let originValue = 0;
        let multiple = 0;
        switch (index) {
            case 0: {
                name = "Distance";
                originValue = Math.floor(this.args.distance);
                multiple = GameUtils.getBikeConfig("distancePercent");
                break;
            }
            case 1: {
                name = "Coin";
                originValue = this.args.coin;
                multiple = GameUtils.getBikeConfig("coinPercent");
                break;
            }
        }
        let finalValue = originValue * multiple;
        if (this.args.gameScene.doubleReward) {
            finalValue *= 2;
        }
        item.children[0].text = `${App.getText(name)}\t${originValue}`;
        item.children[1].text = `x${multiple}${this.args.gameScene.doubleReward ? " x2" : ""}->`;
        item.children[2].text = `${App.getText(name)}\t${Math.floor(finalValue)}`;
    }

    static onClickMainButton() {
        App.getScene("EndlessGameScene").settle();
        App.hideScene("GameOverScene");
        App.destroyScene("EndlessGameScene");
        App.showScene("MainScene");
    }

    static onClickRestartButton() {
        App.getScene("EndlessGameScene").settle();
        App.hideScene("GameOverScene");
        EventMgr.dispatchEvent("Restart");
    }

    onClickAdvertRebornButton() {
        window.PlatformHelper.showAd(success => {
            if (success) {
                this.reborn();
                TDGA.onEvent("广告无尽模式复活");
            }
        });
    }

    onClickDiamondRebornButton() {
        let diamond = DataMgr.get(DataMgr.diamond, 0);
        if (diamond >= Config.diamondRebornCost) {
            diamond -= Config.diamondRebornCost;
            DataMgr.set(DataMgr.diamond, diamond);
            this.reborn();
        } else {
            App.showNotice(App.getText("DiamondIsNotEnough"));
        }
    }

    onClickAdvertDoubleButton() {
        window.PlatformHelper.showAd(success => {
            if (success) {
                this.args.gameScene.doubleReward = true;
                this.refresh();
                TDGA.onEvent("广告无尽模式双倍");
            }
        });
    }

    refresh() {
        let record = DataMgr.get(DataMgr.rankDistanceRecord, 0);
        let finalDistance = Math.floor(this.args.distance * GameUtils.getBikeConfig("distancePercent"));
        if (this.args.gameScene.doubleReward) {
            finalDistance *= 2;
        }
        if (finalDistance === record) {
            this.ui.recordText.text = App.getText("${player} Record: ${record}m", {
                player: DataMgr.getPlayerName(),
                record: record
            });
            this.ui.beyondText.text = "";
        } else if (finalDistance > record) {
            this.ui.recordText.text = App.getText("${player} New Record: ${distance}m", {
                player: DataMgr.getPlayerName(),
                distance: finalDistance
            });
            this.ui.beyondText.text = "";
            DataMgr.set(DataMgr.rankDistanceRecord, finalDistance);
        } else {
            this.ui.recordText.text = App.getText("${player} Record: ${record}m", {
                player: DataMgr.getPlayerName(),
                record: record
            });
            this.ui.beyondText.text = App.getText("${diff} meters more to go beyond yourself", {
                player: DataMgr.getPlayerName(),
                diff: record - finalDistance
            });
        }
        let distanceRecord = DataMgr.get(DataMgr.distanceRecord, 0);
        if (finalDistance > distanceRecord) {
            DataMgr.set(DataMgr.distanceRecord, finalDistance);
        }

        if (this.resultList) {
            this.resultList.refresh();
        } else {
            this.resultList = new List({
                root: this.ui.resultList,
                updateItemFunc: this.updateResultItem.bind(this),
                count: 2,
                isStatic: true,
            });
        }

        this.ui.hasDoubleRewardText.visible = !!this.args.gameScene.doubleReward;
        this.ui.advertDoubleButton.visible = !this.args.gameScene.doubleReward;

        let a = this.args.gameScene.rebornTimes < Config.rebornTimes;
        this.ui.advertRebornButton.visible = a;
        this.ui.diamondRebornButton.visible = a;
        this.ui.hasNoRebornTimesText.visible = !a;
    }

    reborn() {
        this.args.gameScene.rebornTimes++;
        App.hideScene("GameOverScene");
        EventMgr.dispatchEvent("Reborn");
        TDGA.onEvent("无尽模式复活");
    }
}

GameOverScene.sceneFilePath = "myLaya/laya/pages/View/GameOverScene.scene.json";
