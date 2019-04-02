import Scene from "./Scene";
import Radio from "../ui/Radio";
import List from "../ui/List";
import MainScene from "./MainScene";

let TOTAL_DISTANCE = 1;
let FARTHEST_DISTANCE = 2;
let SCORE = 3;
let typeList = [TOTAL_DISTANCE, FARTHEST_DISTANCE, SCORE];
let WORLD = 1;
let FRIEND = 2;
let rangeList = [WORLD, FRIEND];

export default class RankScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, RankScene.onClickReturnButton);

        this.list = new List({
            root: this.ui.list,
            initItemFunc: this.initListItem.bind(this),
            updateItemFunc: this.updateListItem.bind(this),
            count: 0,
        });

        this.typeRadio = new Radio({
            root: this.ui.typeRadio,
            initItemFunc: RankScene.initTypeRadioButton,
            clickButtonFunc: this.onClickTypeRadio.bind(this),
            infoList: typeList
        });

        this.rangeRadio = new Radio({
            root: this.ui.rangeRadio,
            initItemFunc: RankScene.initRangeRadioButton,
            clickButtonFunc: this.onClickRangeRadio.bind(this),
            infoList: rangeList
        });
    }

    onShow() {
    }

    static onClickReturnButton() {
        App.hideScene("RankScene");
        App.showScene("MainScene");
    }

    initListItem() {
    }

    updateListItem(item, index) {
        item.ui.userNameText.text = (this.range === WORLD ? "WORLD" : "FRIEND") + index;
        typeList.forEach(type => item.ui[type].visible = this.type === type);
        item.ui.value.text = index;
    }

    static initTypeRadioButton(button, info) {
        typeList.forEach(type => button.ui[type].visible = info === type);
    }

    onClickTypeRadio(selectedIndex) {
        this.type = typeList[selectedIndex];
        this.list.reset(this.range === WORLD ? 100 : 10);
    }

    static initRangeRadioButton(button, info) {
        rangeList.forEach(type => button.ui[type].visible = info === type);
    }

    onClickRangeRadio(selectedIndex) {
        this.range = rangeList[selectedIndex];
        this.list.reset(this.range === WORLD ? 100 : 10);
    }
}

RankScene.sceneFilePath = "myLaya/laya/pages/View/RankScene.scene.json";
