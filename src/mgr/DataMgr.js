import Config from "../config";

class DataMgr_ {
    constructor() {
        if (localStorage[window.location.href]) {
            this.dataTable = JSON.parse(localStorage[window.location.href]);
        } else {
            this.dataTable = {};
        }
    }

    set(key, value) {
        this.dataTable[key] = value;
        localStorage[window.location.href] = JSON.stringify(this.dataTable);
    }

    get(key, defaultValue) {
        let value = this.dataTable[key];
        if (value === undefined) {
            value = defaultValue;
        }
        return value;
    }
}

const DataMgr = new DataMgr_();

DataMgr.selectedEndlessScene = "selectedEndlessScene";
DataMgr.distance = "distance";
DataMgr.diamond = "diamond";
DataMgr.coin = "coin";
DataMgr.totalScore = "totalScore";
DataMgr.currentMapScene = "currentMapScene";
DataMgr.selectedBike = "selectedBike";
DataMgr.ownedBikeList = "ownedBikeList";
DataMgr.nextFreeDrawTime = "nextFreeDrawTime";
DataMgr.hasBuyPresentIDList = "hasBuyPresentIDList";
DataMgr.unlockAllBike = "unlockAllBike";
DataMgr.unlockAllEndlessScene = "unlockAllEndlessScene";
DataMgr.unlockEndlessSceneIDList = "unlockEndlessSceneIDList";
DataMgr.bgmOn = "bgmOn";
DataMgr.soundOn = "soundOn";
DataMgr.distanceRecord = "distanceRecord";
DataMgr.bikeLevelMap = "bikeLevelMap";
DataMgr.homeData = "homeData";

if (DataMgr.get(DataMgr.ownedBikeList, []).length === 0) {
    DataMgr.set(DataMgr.ownedBikeList, [0]);
}
let bikeLevelMap = DataMgr.get(DataMgr.bikeLevelMap, {});
DataMgr.get(DataMgr.ownedBikeList, []).forEach(id => {
    if (bikeLevelMap[id] === undefined) {
        bikeLevelMap[id] = 0;
    }
});
DataMgr.set(DataMgr.bikeLevelMap, bikeLevelMap);
if (DataMgr.get(DataMgr.selectedBike) === undefined) {
    DataMgr.set(DataMgr.selectedBike, 0);
}
if (DataMgr.get(DataMgr.nextFreeDrawTime) === undefined) {
    DataMgr.set(DataMgr.nextFreeDrawTime, (new Date()).getTime());
}
if (DataMgr.get(DataMgr.currentMapScene) === undefined) {
    DataMgr.set(DataMgr.currentMapScene, Math.floor(Math.random() * Config.mapList.length));
}
if (DataMgr.get(DataMgr.homeData) === undefined) {
    DataMgr.set(DataMgr.homeData, {
        bgID: 1,
        floorID: 1,
        spoilsList: [],
        spoilsLength: 0,
        petsList: [],
    });
}
export default DataMgr;
