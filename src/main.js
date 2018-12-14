import Config from "./config";
import MyApplication from "./mgr/MyApplication";
import Utils from "./mgr/Utils";

document.body.style.margin = "0";

let resolution,
    appWidth,
    appHeight;

let wwhRatio = window.innerWidth / window.innerHeight;
let dwhRatio = Config.designWidth / Config.designHeight;
if (wwhRatio >= dwhRatio) {
    resolution = window.innerHeight / Config.designHeight;
    appWidth = Config.designWidth;
    appHeight = Config.designHeight;
} else {
    resolution = window.innerWidth / Config.designWidth;
    appWidth = Config.designWidth;
    appHeight = Config.designWidth / window.innerWidth * window.innerHeight;
}

const App = new MyApplication({
    width: appWidth,
    height: appHeight,
    resolution: resolution,
    antialiasing: true,
    transparent: false,
});
document.body.appendChild(App.view);

App.view.style.position = "absolute";
App.view.style.left = (window.innerWidth - App.view.offsetWidth) / 2 + "px";
App.view.style.top = (window.innerHeight - App.view.offsetHeight) / 2 + "px";

App.loadResources(Utils.values(Config.startImagePath), () => {
    App.showScene("StartScene");
});
