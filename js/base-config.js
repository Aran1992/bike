let config = {
    designWidth: 720,
    designHeight: 1280,
    resolution: 1,
    // 1像素等于多少米
    pixel2meter: 0.0625,
    // 1米等于多少像素
    meter2pixel: 16,
    // 自行车图集
    bikeAtlasPath: "images/tyariso_run_anim_all.png.json",
    // 自行车缩放比例
    bikeScale: 0.25,
    // 自行车物理半径
    bikeRadius: 0.734375,
    // 自行车密度
    bikeDensity: 1,
    // 自行车跳跃的时候的旋转角度 顺时针旋转是正数
    bikeJumpingRotation: -30,
    jumpMaxCount: 2,
    bikeLeftMargin: 100,
    bikeTopMargin: 640,
    bikeCameraMinY: 540,
    bikeCameraMaxY: 740,
    bikeGameOverHeight: -15,
    bikeGameOverAngularVelocity: 1500,
    testbedSpeed: 1,
    fps: 60,
    maskHeight: 420,
    maskColorStop: [
        {offset: 0, opacity: 0},
        {offset: 0.25, opacity: 0.5},
        {offset: 0.75, opacity: 1},
        {offset: 1, opacity: 1},
    ],
    edgeHeight: 20,
    edgeColorStop: [
        {offset: 1, opacity: 0},
        {offset: 0, opacity: 0.75},
    ],
    // 自行车速度
    bikeVelocity: 20,
    // 重力
    gravity: -200,
    // 跳跃爆发力
    jumpForce: 5000,
    mapBasePath: "myLaya/laya/pages/",
    finalFlagImagePath: "images/flag.png",
    // 自行车吃了加速宝石之后的速度
    bikeAccVelocity: 50,
    // 自行车加速的帧数
    accFrame: 300,
    startScene: {
        mapText: {
            fontSize: 50,
            fill: "white"
        },
    },
    gameOverScene: {
        msgText: {
            fontSize: 100,
            fill: "red"
        },
        buttonText: {
            fontSize: 50,
            fill: "white"
        },
    },
    fatalEdgeAngleRange: [Math.PI / 180 * 80, Math.PI / 180 * 100],
    goldCoinAniJson: "images/gold-coin-animation.json",
    accGemAniJson: "images/crystal-jet-animation.json",
    fireWallAniJson: "images/firewall-animation.json",
    birdAniJson: "images/bird-animation.json",
};

// 地图配置
config.mapList = [
    {
        // 显示给人看的名字
        showName: "Test",
        // scene文件的名字
        sceneName: "Test",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/TextureScorpiusRoad01SideSkin.png",
            // 底部
            top: "images/TextureScorpiusRoad01TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/TextureScorpiusBackground01.png",
                "images/TextureScorpiusBackground02.png",
                "images/TextureScorpiusBackground03.png",
            ]
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.75, 0.5, 0.25, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [0.75, 0.5, 0.25, 0],
        // 自行车速度
        bikeVelocity: 20,
        // 重力
        gravity: -200,
        // 跳跃爆发力
        jumpForce: 5000,
    },
];