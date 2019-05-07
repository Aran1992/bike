import {main} from "../../src/main";
import NetworkMgr from "../../src/mgr/NetworkMgr";

window.PlatformHelper = {
    canLogout: true,
};

main(() => {
    let username = localStorage.username;
    let password = localStorage.password;
    if (username && password) {
        NetworkMgr.requestLogin(username, password, username, undefined, () => {
            localStorage.playername = username;
            App.showScene("MainScene");
        }, () => {
            App.showScene("LoginScene");
        });
    } else {
        App.showScene("LoginScene");
    }
});
