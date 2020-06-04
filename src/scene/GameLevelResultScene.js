import {Graphics} from "../libs/pixi-wrapper";
import EventMgr from "../mgr/EventMgr";
import Config from "../config";
import ResultList from "../ui/ResultList";
import GameUtils from "../mgr/GameUtils";
import Scene from "./Scene";
import DataMgr from "../mgr/DataMgr";
import MusicMgr from "../mgr/MusicMgr";
import TWEEN from "@tweenjs/tween.js";

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

    // 播放一个动画 还是要有刷新的功能 万一她要快速结束的话

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

        for (let i = 0; i < Config.starCount; i++) {
            const star = this.ui[`star${i}`].children[0];
            star.anchor.set(0.5, 0.5);
            star.position.set(star.x + star.width / 2, star.y + star.height / 2);
        }
    }

    onShow(args) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        this.args = args;

        for (let i = 0; i < Config.starCount; i++) {
            this.ui[`star${i}`].visible = i < this.args.gameScene.star;
        }

        this.refresh();

        const hasGotAllStar = this.args.gameScene.star === Config.starCount
            && DataMgr.getGameLevelStarCount(this.args.gameScene.mapIndex, this.args.gameScene.levelIndex) !== Config.starCount;
        if (hasGotAllStar) {
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

        App.getScene("LevelGameScene").stopSounds();
        MusicMgr.pauseBGM();
        MusicMgr.playSound(Config.soundPath.throughFlag);

        this.playStarsAnimation(this.args.gameScene.star);
    }

    onClickAdvertDoubleButton() {
        window.PlatformHelper.showAd(success => {
            if (success) {
                this.args.gameScene.doubleReward = true;
                this.refresh();
                window.TDGA && TDGA.onEvent("广告闯关模式双倍");
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

    playStarsAnimation(starCount, callback) {
        for (let i = 0; i < Config.starCount; i++) {
            this.ui[`star${i}`].visible = false;
        }
        this.starIndex = 0;
        const loop = () => {
            if (this.starIndex < starCount) {
                const star = this.ui[`star${this.starIndex}`];
                star.visible = true;
                this.playStarAnimation(star, () => {
                    this.starIndex++;
                    loop();
                });
            } else {
                callback && callback();
            }
        };
        loop();
    }

    playStarAnimation(target, callback) {
        target = target.children[0];
        const os = target.scale.x;
        const s = os * Config.getStarAnimation.startScale;
        const a = Config.getStarAnimation.startAlpha;
        target.scale.set(s, s);
        target.alpha = a;
        const obj = {scale: s, alpha: a};
        new TWEEN.Tween(obj)
            .to({scale: os, alpha: 1}, Config.getStarAnimation.duration)
            .easing(TWEEN.Easing.Bounce.Out)
            .onUpdate(() => {
                target.scale.set(obj.scale, obj.scale);
                target.alpha = obj.alpha;
            })
            .onComplete(() => {
                callback && callback();
            })
            .start(performance.now());
    }
}

GameLevelResultScene.sceneFilePath = "myLaya/laya/pages/View/GameLevelResultScene.scene.json";
