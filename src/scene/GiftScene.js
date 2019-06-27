import Scene from "./Scene";
import DataMgr from "../mgr/DataMgr";
import Config from "../config";
import OnlineMgr from "../mgr/OnlineMgr";
import EventMgr from "../mgr/EventMgr";
import {Graphics} from "../libs/pixi-wrapper";

export default class GiftScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        this.onClick(this.ui.advertButton, this.onClickAdvertButton.bind(this));
    }

    onClickReturnButton() {
        App.hideScene("GiftScene");
    }

    onClickAdvertButton() {
        window.PlatformHelper.showAd(success => {
            if (success) {
                let giftIndex = DataMgr.get(DataMgr.giftIndex, 0);
                let gift = Config.giftList[giftIndex];
                DataMgr.set(DataMgr.coin, DataMgr.get(DataMgr.coin, 0) + gift.rewardCoin);
                DataMgr.set(DataMgr.diamond, DataMgr.get(DataMgr.diamond, 0) + gift.rewardDiamond);
                DataMgr.set(DataMgr.giftIndex, giftIndex + 1);
                EventMgr.dispatchEvent("RefreshRankData");
                OnlineMgr.restartGiftCountDown();
                App.hideScene("GiftScene");
                App.showScene("PrizeScene", [{rewardCoin: gift.rewardCoin}, {rewardDiamond: gift.rewardDiamond}]);
            }
        });
    }
}

GiftScene.sceneFilePath = "myLaya/laya/pages/View/GiftScene.scene.json";
