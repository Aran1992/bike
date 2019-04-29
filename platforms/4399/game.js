import {main} from "../../src/main";
import NetworkMgr from "../../src/mgr/NetworkMgr";

console.log("=======================");
console.log(window.location.href);
console.log("=======================");

main(() => {
    let username = localStorage.username;
    let password = localStorage.password;
    if (username && password) {
        NetworkMgr.requestLogin(username, password, () => {
            App.showScene("MainScene");
        }, () => {
            App.showScene("LoginScene");
        });
    } else {
        App.showScene("LoginScene");
    }
});
