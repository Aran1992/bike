import Config from "./config";
import MyApplication from "./mgr/MyApplication";
import LoadingScene from "./scene/LoadingScene";
import GameScene from "./scene/GameScene";
import MainScene from "./scene/MainScene";

export function main(callback) {
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

    App.loadResources(
        [Config.i18nPath, LoadingScene.sceneFilePath, MainScene.sceneFilePath, GameScene.sceneFilePath],
        callback,
        (percent) => {
            window.addPercent(percent);
        }
    );
}
