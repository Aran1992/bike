import Scene from "./Scene";
import DataMgr from "../mgr/DataMgr";
import List from "../ui/List";
import Config from "../config";
import MusicMgr from "../mgr/MusicMgr";
import {Graphics} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";
import ResultList from "../ui/ResultList";

export default class GameResultScene extends Scene {
    static onClickMainButton() {
        App.hideScene("GameResultScene");
        App.getScene("MapGameScene").pauseGame();
        App.getScene("MapGameScene").settle();
        App.destroyScene("MapGameScene");
        App.showScene("MainScene");
    }

    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.mainButton, GameResultScene.onClickMainButton);
        this.onClick(this.ui.advertDoubleButton, this.onClickAdvertDoubleButton.bind(this));

        this.resultList = new ResultList(this.ui.resultList);
    }

    onShow(args) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        MusicMgr.pauseBGM();
        MusicMgr.playSound(Config.soundPath.throughFlag);

        this.args = args;

        this.refresh();

        App.getScene("MapGameScene").stopSounds();
    }

    updateRankItem(item, index) {
        let rank = "";
        let name = this.args.playerNameList[index];
        let value = Config.rankScore[index] || 0;
        switch (index) {
            case 0: {
                rank = "1st";
                break;
            }
            case 1: {
                rank = "2nd";
                break;
            }
            case 2: {
                rank = "3rd";
                break;
            }
            default: {
                rank = `${index + 1}th`;
            }
        }
        item.children[0].text = rank;
        item.children[1].text = name;
        item.children[2].text = App.getText("Score");
        item.children[3].text = value;
    }

    onClickAdvertDoubleButton() {
        window.PlatformHelper.showAd(success => {
            if (success) {
                this.args.gameScene.doubleReward = true;
                this.refresh();
                TDGA.onEvent("广告竞技模式双倍");
            }
        });
    }

    refresh() {
        if (this.args.gameScene.doubleReward) {
            this.ui.advertDoubleButton.visible = false;
            this.ui.hasDoubleRewardText.visible = true;
        } else {
            this.ui.advertDoubleButton.visible = true;
            this.ui.hasDoubleRewardText.visible = false;
        }
        let thisGameScore = Math.floor(Config.rankScore[this.args.rank] * GameUtils.getBikeConfig("scorePercent"));
        if (this.args.gameScene.doubleReward) {
            thisGameScore *= 2;
        }
        let totalScore = DataMgr.get(DataMgr.rankTotalScore, 0) + thisGameScore;
        this.ui.totalScoreText.text = App.getText("${player} current rank total score: ${score}", {
            player: DataMgr.getPlayerName(),
            score: totalScore,
        });

        this.resultList.update([
            {
                name: "Score",
                originValue: Config.rankScore[this.args.rank],
                multiple: GameUtils.getBikeConfig("scorePercent"),
                doubleReward: this.args.gameScene.doubleReward,
            },
            {
                name: "Distance",
                originValue: Math.floor(this.args.distance),
                multiple: GameUtils.getBikeConfig("distancePercent"),
                doubleReward: this.args.gameScene.doubleReward,
            },
        ]);

        if (this.rankList === undefined) {
            this.rankList = new List({
                root: this.ui.rankList,
                updateItemFunc: this.updateRankItem.bind(this),
                count: Config.enemy.count + 1,
                isStatic: true,
            });
        } else {
            this.rankList.refresh();
        }
    }
}

GameResultScene.sceneFilePath = "myLaya/laya/pages/View/GameResultScene.scene.json";
