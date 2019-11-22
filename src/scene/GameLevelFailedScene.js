import Scene from "./Scene";
import MatchRacetrack from "../ui/MatchRacetrack";

export default class GameLevelFailedScene extends Scene {
    static onClickMainButton() {
        App.hideScene("GameLevelFailedScene");
        App.getScene("LevelGameScene").pauseGame();
        App.getScene("LevelGameScene").settle();
        App.destroyScene("LevelGameScene");
        App.showScene("MainScene");
    }

    onCreate() {
        this.matchRacetrack = new MatchRacetrack(this.ui.matchRacetrack);
        this.onClick(this.ui.mainButton, GameLevelFailedScene.onClickMainButton);
    }

    onShow(playerRate) {
        this.matchRacetrack.create(0);
        this.matchRacetrack.update(playerRate);
    }
}

GameLevelFailedScene.sceneFilePath = "myLaya/laya/pages/View/GameLevelFailedScene.scene.json";
