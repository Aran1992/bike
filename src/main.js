import Config from "./config";
import MyApplication from "./mgr/MyApplication";

export function main(callback) {
    if (document.body.children[0] instanceof HTMLParagraphElement) {
        document.body.removeChild(document.body.children[0]);
    }

    let width;
    let height;
    let wwhRatio = window.innerWidth / window.innerHeight;
    let dwhRatio = Config.designWidth / Config.designHeight;
    if (wwhRatio > dwhRatio) {
        height = Config.designHeight;
        width = height * wwhRatio;
    } else {
        width = Config.designWidth;
        height = width / wwhRatio;
    }

    let App = new MyApplication({
        backgroundColor: Config.backgroundColor,
        width: width,
        height: height,
        antialias: true,
        transparent: false,
        view: canvas,
    });

    App.loadResources([Config.i18nPath], callback);
}
