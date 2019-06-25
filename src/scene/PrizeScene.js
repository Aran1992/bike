import Scene from "./Scene";

export default class PrizeScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
    }

    onClickReturnButton() {
        App.hideScene("PrizeScene");
    }
}

PrizeScene.sceneFilePath = "myLaya/laya/pages/View/PrizeScene.scene.json";
