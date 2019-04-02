import Config from "./config";
import MyApplication from "./mgr/MyApplication";
import Utils from "./mgr/Utils";

const findRootWindow = () => {
    let w = window;
    while (w.parent !== w) {
        w = w.parent;
    }
    return w;
};
findRootWindow();

window.onload = () => {
    if (document.body.children[0] instanceof HTMLParagraphElement) {
        document.body.removeChild(document.body.children[0]);
    }

    document.body.style.margin = "0";

    let window = findRootWindow();

    let resolution = 0.5,
        appWidth = 720,
        appHeight = 1280;

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
        antialias: true,
        transparent: false,
    });
    document.body.appendChild(App.view);

    App.view.style.position = "absolute";
    App.view.style.left = (window.innerWidth - App.view.offsetWidth) / 2 + "px";
    App.view.style.top = (window.innerHeight - App.view.offsetHeight) / 2 + "px";

    App.loadResources(Utils.values(Config.startImagePath), () => {
        App.showScene(Config.initScene);
    });
};
