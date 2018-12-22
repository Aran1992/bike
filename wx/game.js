import "./src/libs/weapp-adapter";
import MyApplication from "./src/mgr/MyApplication";

const {pixelRatio, windowWidth, windowHeight} = wx.getSystemInfoSync();

const App = new MyApplication({
    width: windowWidth * pixelRatio,
    height: windowHeight * pixelRatio,
    antialias: true,
    view: canvas
});

App.renderer.plugins.interaction.mapPositionToPoint = (point, x, y) => {
    point.x = x * pixelRatio;
    point.y = y * pixelRatio;
};

document.body.appendChild(App.view);

App.view.style.position = "absolute";
App.view.style.left = (window.innerWidth - App.view.offsetWidth) / 2 + "px";
App.view.style.top = (window.innerHeight - App.view.offsetHeight) / 2 + "px";

App.showScene("MainScene");
