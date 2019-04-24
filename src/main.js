import Config from "./config";
import MyApplication from "./mgr/MyApplication";
import NetworkMgr from "./mgr/NetworkMgr";

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

    App.loadResources([Config.i18nPath], () => {
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
};

let list = [
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 0,
        // 覆盖其上的图片路径
        imagePath: "",
        // 缩放倍数
        scale: [0, 0],
        // 图片的锚点
        anchor: [0.5, 0.5],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.1  bike 】
Speed     100%
Jump      100%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 4,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
        // 结算金币倍率（不填的话就使用默认值）
        coinPercent: [
            1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45,
            1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95,
            2
        ],
        // 结算里程倍率（不填的话就使用默认值）
        distancePercent: [
            1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45,
            1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95,
            2
        ],
        // 结算积分倍率（不填的话就使用默认值）
        scorePercent: [
            1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45,
            1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95,
            2
        ],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 1,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike1.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.63, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.2  bike 】
Speed     100%
Jump      100%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 2,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 4,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike4.png",
        // 缩放倍数
        scale: [0.4, 0.4],
        // 图片的锚点
        anchor: [0.62, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.3  bike 】
Speed     100%
Jump      100%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 2,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 11,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike11.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.6, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.4  bike 】
Speed     100%
Jump      100%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 2,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 13,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike13.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [1, 0.5],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.5  bike 】
Speed     100%
Jump      100%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 2,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 15,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike15.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.5, 0.8],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.6  bike 】
Speed     100%
Jump      100%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 2,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 2,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike2.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.63, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.7  bike 】
Speed     100%
Jump      150%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 0.9,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 5,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike5.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.63, 0.7],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.8  bike 】
Speed     100%
Jump      150%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 0.9,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 6,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike6.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.63, 0.7],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.9  bike 】
Speed     100%
Jump      150%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 0.9,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 20,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike20.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.5, 0.6],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.10  bike 】
Speed     120%
Jump       90%
HighJump  normal
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.2,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 8,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike8.png",
        // 缩放倍数
        scale: [0.45, 0.45],
        // 图片的锚点
        anchor: [0.5, 0.5],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.11  bike 】
Speed     120%
Jump       90%
HighJump  normal
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.2,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 41,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike41.png",
        // 缩放倍数
        scale: [0.4, 0.4],
        // 图片的锚点
        anchor: [0.45, 0.68],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.12  bike 】
Speed     120%
Jump       90%
HighJump  normal
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.2,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 21,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike21.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.5, 0.86],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.13  bike 】
Speed      80%
Jump      180%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 22,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike22.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.48, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.14  bike 】
Speed      80%
Jump      180%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 23,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike23.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.77, 0.7],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.15  bike 】
Speed      80%
Jump      180%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 7,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike7.png",
        // 缩放倍数
        scale: [0.4, 0.4],
        // 图片的锚点
        anchor: [0.63, 0.7],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.16  bike 】
Speed      80%
Jump      100%
HighJump  easy
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [22, 20, 18, 16, 14, 12],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 42,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike42.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.28, 1.1],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.17  bike 】
Speed      80%
Jump      100%
HighJump  easy
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [22, 20, 18, 16, 14, 12],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 43,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike43.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.46, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.18  bike 】
Speed      80%
Jump      100%
HighJump  easy
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [22, 20, 18, 16, 14, 12],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 51,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike51.png",
        // 缩放倍数
        scale: [0.35, 0.35],
        // 图片的锚点
        anchor: [0.71, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.19  bike 】
Speed     110%
Jump      180%
HighJump  hard
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [18, 16, 14, 12, 10, 8],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 53,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike53.png",
        // 缩放倍数
        scale: [0.35, 0.35],
        // 图片的锚点
        anchor: [0.71, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.20  bike 】
Speed     110%
Jump      180%
HighJump  hard
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [18, 16, 14, 12, 10, 8],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 54,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike54.png",
        // 缩放倍数
        scale: [0.35, 0.35],
        // 图片的锚点
        anchor: [0.71, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.21  bike 】
Speed     110%
Jump      180%
HighJump  hard
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [18, 16, 14, 12, 10, 8],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 19,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike19.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.5, 1.25],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.22  bike 】
Speed     110%
Jump       80%
HighJump  easy
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [22, 20, 18, 16, 14, 12],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 10,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike10.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.71, 0.65],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.23  bike 】
Speed     110%
Jump       80%
HighJump  easy
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [22, 20, 18, 16, 14, 12],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 12,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike12.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.71, 0.6],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.24  bike 】
Speed     110%
Jump       80%
HighJump  easy
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [22, 20, 18, 16, 14, 12],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 9,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike9.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.45, 0.35],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.25  bike 】
Speed     130%
Jump      100%
HighJump  hard
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [18, 16, 14, 12, 10, 8],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 24,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike24.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.55, 0.3],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.26  bike 】
Speed     130%
Jump      100%
HighJump  hard
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [18, 16, 14, 12, 10, 8],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 18,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike18.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.5, 0.6],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.27  bike 】
Speed     130%
Jump      100%
HighJump  hard
Size      middle`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [18, 16, 14, 12, 10, 8],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 14,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike14.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [1.05, 1.08],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.28  bike 】
Speed     130%
Jump       80%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 16,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike16.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.59, 0.71],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.29  bike 】
Speed     130%
Jump       80%
HighJump  normal
Size      big`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 17,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike17.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.69, 0.8],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.30  bike 】
Speed     130%
Jump       80%
HighJump  normal
Size      small`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [20, 18, 16, 14, 12, 10],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 3,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike3.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.52, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.31  bike 】
Speed     150%
Jump       80%
HighJump  hard
Size      big`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.5,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [18, 16, 14, 12, 10, 8],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 52,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike52.png",
        // 缩放倍数
        scale: [0.35, 0.35],
        // 图片的锚点
        anchor: [0.71, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.32  bike 】
Speed     150%
Jump       80%
HighJump  hard
Size      big`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.5,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [18, 16, 14, 12, 10, 8],
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        id: 25,
        // 覆盖其上的图片路径
        imagePath: "images/bike/bike25.png",
        // 缩放倍数
        scale: [0.5, 0.5],
        // 图片的锚点
        anchor: [0.6, 0.73],
        // 图片在自行车内的位置 (0,0)就是在中心点
        position: [0, 0],
        // 自行车的描述
        dsc:
            `【 NO.33  bike 】
Speed     150%
Jump       80%
HighJump  hard
Size      big`,
        // 随机的权重
        weight: 1,
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        velocityPercent: 1.5,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        densityPercent: 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        bikeJumpExtraCountdown: [18, 16, 14, 12, 10, 8],
    },
];
list.forEach(item => {
    `【 NO.1  bike 】
Speed     100%
Jump      100%
HighJump  normal
Size      small`;
    let list = item.dsc.split("\n");
    let index = list[0].replace("【 NO.", "").replace("  bike 】", "");
    let highJump = list[3].replace(/HighJump[ ]*/, "");
    let size = list[4].replace(/Size[ ]*/, "");
    console.log(`index:${index},
highJump:"${highJump}",
size:"${size}",`);
});
