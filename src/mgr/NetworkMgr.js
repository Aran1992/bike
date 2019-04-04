import Config from "../config";

class NetworkMgr_ {
    request(url, formData, successCallback, failedCallback) {
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
                    let data;
                    try {
                        data = JSON.parse(request.responseText);
                    } catch (e) {
                        data = {key: "0"};
                    }
                    if (data.key === "0") {
                        successCallback();
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
        request.open("POST", url);
        request.send(formData);
    }

    requestRegister(username, password, successCallback, failedCallback) {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        this.request(Config.serverUrl + "/user/register", formData, successCallback, failedCallback);
    }

    requestLogin(username, password, successCallback, failedCallback) {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        this.request(Config.serverUrl + "/user/login", formData, successCallback, failedCallback);
    }
}

const NetworkMgr = new NetworkMgr_();

export default NetworkMgr;
