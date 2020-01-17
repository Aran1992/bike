import {Graphics} from "../libs/pixi-wrapper";
import EventMgr from "../mgr/EventMgr";
import Config from "../config";
import ResultList from "../ui/ResultList";
import GameUtils from "../mgr/GameUtils";
import Scene from "./Scene";
import DataMgr from "../mgr/DataMgr";

export default class GameLevelResultScene extends Scene {
    static onClickMainButton() {
        App.hideScene("GameLevelResultScene");
        App.getScene("LevelGameScene").pauseGame();
        App.getScene("LevelGameScene").settle();
        App.destroyScene("LevelGameScene");
        App.showScene("MainScene");
    }

    static onClickRestartButton() {
        App.getScene("LevelGameScene").settle();
        App.hideScene("GameLevelResultScene");
        EventMgr.dispatchEvent("Restart");
    }

    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.mainButton, GameLevelResultScene.onClickMainButton);
        this.onClick(this.ui.restartButton, GameLevelResultScene.onClickRestartButton);
        this.onClick(this.ui.advertDoubleButton, this.onClickAdvertDoubleButton.bind(this));

        this.resultList = new ResultList(this.ui.resultList);
    }

    onShow(args) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        this.args = args;

        for (let i = 0; i < Config.starCount; i++) {
            this.ui[`star${i}`].visible = i < this.args.gameScene.star;
        }

        this.refresh();

        const isFirstTime = DataMgr.isFirstPlayGameLevel(this.args.gameScene.mapIndex, this.args.gameScene.levelIndex);
        if (isFirstTime) {
            const reward = Config.gameLevelMode.mapList[this.args.gameScene.mapIndex].rewardList[this.args.gameScene.levelIndex];
            let list = [];
            if (reward.coin) {
                list.push({rewardCoin: reward.coin});
            }
            if (reward.diamond) {
                list.push({rewardDiamond: reward.diamond});
            }
            if (reward.exp) {
                list.push({rewardExp: reward.exp});
            }
            if (reward.bike) {
                list.push({rewardBike: reward.bike});
            }
            App.showScene("PrizeScene", list);
        }
    }

    onClickAdvertDoubleButton() {
        window.PlatformHelper.showAd(success => {
            if (success) {
                this.args.gameScene.doubleReward = true;
                this.refresh();
                TDGA.onEvent("广告闯关模式双倍");
            }
        });
    }

    refresh() {
        this.resultList.update([
            {
                name: "Distance",
                originValue: Math.floor(this.args.gameScene.distance),
                multiple: GameUtils.getBikeConfig("distancePercent"),
                doubleReward: this.args.gameScene.doubleReward,
            },
            {
                name: "Coin",
                originValue: this.args.gameScene.coin,
                multiple: GameUtils.getBikeConfig("coinPercent"),
                doubleReward: this.args.gameScene.doubleReward,
            },
            {
                name: "Exp",
                originValue: this.args.gameScene.exp,
                multiple: GameUtils.getBikeConfig("expPercent"),
                doubleReward: this.args.gameScene.doubleReward,
            },
        ]);

        if (this.args.gameScene.doubleReward) {
            this.ui.advertDoubleButton.visible = false;
            this.ui.hasDoubleRewardText.visible = true;
        } else {
            this.ui.advertDoubleButton.visible = true;
            this.ui.hasDoubleRewardText.visible = false;
        }
    }
}

GameLevelResultScene.sceneFilePath = "myLaya/laya/pages/View/GameLevelResultScene.scene.json";
