import Scene from "./Scene";
import {Graphics} from "../libs/pixi-wrapper";
import NetworkMgr from "../mgr/NetworkMgr";

export default class LoginScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.loginBtn, this.onClickLoginBtn.bind(this));
        this.onClick(this.ui.goToCreateAccountBtn, this.onClickGoToCreateAccountBtn.bind(this));
    }

    onShow() {
        this.ui.usernameInput.text = "";
        this.ui.passwordInput.text = "";
    }

    onClickLoginBtn() {
        let username = this.ui.usernameInput.text;
        let password = this.ui.passwordInput.text;
        if (username === "" || password === "") {
            return App.showNotice("Please enter Username and Password!");
        }
        NetworkMgr.requestLogin(username, password, () => {
            App.hideScene("LoginScene");
            App.showScene("MainScene");
            localStorage.username = username;
            localStorage.password = password;
        });
    }

    onClickGoToCreateAccountBtn() {
        App.hideScene("LoginScene");
        App.showScene("RegisterScene");
    }
}
LoginScene.sceneFilePath = "myLaya/laya/pages/View/LoginScene.scene.json";
