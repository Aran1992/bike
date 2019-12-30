import Scene from "./Scene";
import MatchRacetrack from "../ui/MatchRacetrack";
import {Graphics} from "../libs/pixi-wrapper";
import ResultList from "../ui/ResultList";
import GameUtils from "../mgr/GameUtils";
import Config from "../config";
import DataMgr from "../mgr/DataMgr";
import EventMgr from "../mgr/EventMgr";

export default class GameLevelFailedScene extends Scene {
    static onClickMainButton() {
        App.hideScene("GameLevelFailedScene");
        App.getScene("LevelGameScene").pauseGame();
        App.getScene("LevelGameScene").settle();
        App.destroyScene("LevelGameScene");
        App.showScene("MainScene");
    }

    static onClickRestartButton() {
        App.getScene("LevelGameScene").settle();
        App.hideScene("GameLevelFailedScene");
        EventMgr.dispatchEvent("Restart");
    }

    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.mainButton, GameLevelFailedScene.onClickMainButton);
        this.onClick(this.ui.restartButton, GameLevelFailedScene.onClickRestartButton);
        this.onClick(this.ui.advertRebornButton, this.onClickAdvertRebornButton.bind(this));
        this.onClick(this.ui.diamondRebornButton, this.onClickDiamondRebornButton.bind(this));

        this.ui.diamondRebornCostText.text = Config.diamondRebornCost;

        this.matchRacetrack = new MatchRacetrack(this.ui.matchRacetrack);
        this.resultList = new ResultList(this.ui.resultList);
    }

    onShow(args) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        this.args = args;

        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);

        this.matchRacetrack.create(0);
        this.matchRacetrack.update(this.args.playerRate);

        this.refresh();
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

    onClickAdvertRebornButton() {
        window.PlatformHelper.showAd(success => {
            if (success) {
                this.reborn();
                TDGA.onEvent("广告闯关模式复活");
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

        let a = this.args.gameScene.rebornTimes < Config.rebornTimes;
        this.ui.advertRebornButton.visible = a;
        this.ui.diamondRebornButton.visible = a;
        this.ui.hasNoRebornTimesText.visible = !a;
    }

    reborn() {
        this.args.gameScene.rebornTimes++;
        App.hideScene("GameLevelFailedScene");
        EventMgr.dispatchEvent("Reborn");
        TDGA.onEvent("闯关模式复活");
    }
}

GameLevelFailedScene.sceneFilePath = "myLaya/laya/pages/View/GameLevelFailedScene.scene.json";
