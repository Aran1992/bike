import Scene from "./Scene";
import Radio from "../ui/Radio";
import List from "../ui/List";
import NetworkMgr from "../mgr/NetworkMgr";

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
        let data = this.data[index];
        item.ui.userNameText.text = data.username;
        typeList.forEach(type => item.ui[type].visible = this.type === type);
        item.ui.value.text = data.value;
    }

    static initTypeRadioButton(button, info) {
        typeList.forEach(type => button.ui[type].visible = info === type);
    }

    onClickTypeRadio(selectedIndex) {
        this.type = typeList[selectedIndex];
        this.reset();
    }

    static initRangeRadioButton(button, info) {
        rangeList.forEach(type => button.ui[type].visible = info === type);
    }

    onClickRangeRadio(selectedIndex) {
        this.range = rangeList[selectedIndex];
        this.reset();
    }

    reset() {
        switch (this.type) {
            case TOTAL_DISTANCE: {
                NetworkMgr.requestGetTotalMileageRank(this.onRequestData.bind(this));
                break;
            }
            case FARTHEST_DISTANCE: {
                NetworkMgr.requestGetFarthestMileageRank(this.onRequestData.bind(this));
                break;
            }
            case SCORE: {
                NetworkMgr.requestGetScoreRank(this.onRequestData.bind(this));
                break;
            }
        }
    }

    onRequestData(data) {
        this.data = data.response;
        this.list.reset(this.data.length);
        let index = this.data.findIndex(item => item.username === localStorage.username);
        this.ui.myValue.text = index === -1 ? "Not Listed" : index;
    }
}

RankScene.sceneFilePath = "myLaya/laya/pages/View/RankScene.scene.json";
