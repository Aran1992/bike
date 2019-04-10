import Config from "../config";
import DataMgr from "./DataMgr";

class NetworkMgr_ {
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
            console.log(JSON.parse(data.response));
            if (data.response) {
                DataMgr.init(JSON.parse(data.response));
            } else {
                DataMgr.init({});
            }
            scb(data);
        }, fcb);
    }

    requestSaveData(dataTable) {
        let formData = new FormData();
        formData.append("data", JSON.stringify(dataTable));
        this.request(Config.serverUrl + "/player/save_data", "POST", formData);
    }
}

const NetworkMgr = new NetworkMgr_();

export default NetworkMgr;
