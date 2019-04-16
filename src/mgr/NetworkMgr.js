import Config from "../config";
import DataMgr from "./DataMgr";

class NetworkMgr_ {
    constructor() {
        this.rankDataTable = {
            "/board/get_total_mileage_board": {},
            "/board/get_farest_mileage_board": {},
            "/board/get_score_board": {},
        };
    }

    request(url, method, formData, successCallback, failedCallback) {
        successCallback = successCallback || (() => {
        });
        failedCallback = failedCallback || (() => {
        });
        App.showMask();
        let request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                App.hideMask();
                if (request.status === 200) {
                    console.log(url, request.responseText);
                    let data;
                    try {
                        data = JSON.parse(request.responseText);
                    } catch (e) {
                        data = {key: "0", response: {}};
                    }
                    if (data.response && data.response.sessionId) {
                        this.sessionId = data.response.sessionId;
                    }
                    if (data.key === "0") {
                        successCallback(data);
                    } else {
                        App.showNotice(data.message);
                        failedCallback(data);
                    }
                } else {
                    App.showTip("Network request failed");
                    if (failedCallback) {
                        failedCallback({message: "Network request failed"});
                    }
                }
            }
        };
        if (method === "GET") {
            if (formData && this.sessionId !== undefined) {
                formData["sessionId"] = this.sessionId;
            }
            let list = [];
            for (let name in formData) {
                if (formData.hasOwnProperty(name)) {
                    list.push(`${encodeURIComponent(name)}=${encodeURIComponent(formData[name])}`);
                }
            }
            if (list.length) {
                url += "?" + list.join("&");
            }
            request.open(method, url);
            request.send(formData);
        } else if (method === "POST") {
            if (formData && this.sessionId !== undefined) {
                formData.append("sessionId", this.sessionId);
            }
            request.open(method, url);
            request.send(formData);
        }
    }

    requestRegister(username, password, successCallback, failedCallback) {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        this.request(Config.serverUrl + "/user/register", "POST", formData, successCallback, failedCallback);
    }

    requestLogin(username, password, successCallback, failedCallback) {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        this.request(Config.serverUrl + "/user/login", "POST", formData, () => {
            this.requestLoadData(successCallback, failedCallback);
        }, failedCallback);
    }

    requestLoadData(scb, fcb) {
        this.request(Config.serverUrl + "/player/load_data", "GET", {}, (data) => {
            this.request(Config.serverUrl + "/board/get_farest_mileage_board", "GET", {}, ({response}) => {
                if (data.response.data) {
                    DataMgr.init(JSON.parse(data.response.data), response.periodIdx);
                } else {
                    DataMgr.init({}, response.periodIdx);
                }
                DataMgr.setData(data.response);
                scb(data);
            });
        }, fcb);
    }

    requestSaveData(dataTable) {
        let formData = new FormData();
        formData.append("data", JSON.stringify(dataTable));
        this.request(Config.serverUrl + "/player/save_data", "POST", formData);
    }

    requestUpdateTotalMileage(value, scb, fcb) {
        let formData = new FormData();
        formData.append("value", value);
        this.request(Config.serverUrl + "/board/update_total_mileage", "POST", formData, scb, fcb);
    }

    requestGetTotalMileageRank(scb, fcb) {
        this.requestGetRank("/board/get_total_mileage_board", scb, fcb);
    }

    requestUpdateFarthestMileage(value, scb, fcb) {
        let formData = new FormData();
        formData.append("value", value);
        this.request(Config.serverUrl + "/board/update_farest_mileage", "POST", formData, scb, fcb);
    }

    requestGetFarthestMileageRank(scb, fcb) {
        this.requestGetRank("/board/get_farest_mileage_board", scb, fcb);
    }

    requestUpdateScore(value, scb, fcb) {
        let formData = new FormData();
        formData.append("value", value);
        this.request(Config.serverUrl + "/board/update_score", "POST", formData, scb, fcb);
    }

    requestGetScoreRank(scb, fcb) {
        this.requestGetRank("/board/get_score_board", scb, fcb);
    }

    requestSaveSocialData(data, scb, fcb) {
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.request(Config.serverUrl + "/player/save_social_data", "POST", formData, scb, fcb);
    }

    requestLoadSocialData(name, scb, fcb) {
        let formData = new FormData();
        formData.append("name", name);
        this.request(Config.serverUrl + "/player/load_social_data", "POST", formData, scb, fcb);
    }

    requestGetRank(key, scb, fcb) {
        this.request(Config.serverUrl + key, "GET", {}, (data) => {
            let cur = new Date().getTime();
            let start = Config.rankStartTime.getTime();
            let interval = Config.rankRefreshInterval * 1000;
            this.rankDataTable[key].nextRefreshTime = start + Math.ceil((cur - start) / interval) * interval;
            this.rankDataTable[key].data = data.response.boards;
            scb(data.response.boards, this.rankDataTable[key].nextRefreshTime);
        }, fcb);
    }
}

const NetworkMgr = new NetworkMgr_();

export default NetworkMgr;
