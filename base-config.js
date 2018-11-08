let config = {
    designWidth: 720,
    designHeight: 1280,
    backgroundColor: 0x888888,
    resolution: 1,
    pixel2meter: 0.0625,
    meter2pixel: 16,
    bikeRadius: 0.75,
    riderScale: 0.24,
    testbedSpeed: 1,
    cliffBottomY: 2000,
    fps: 60,
    bikeJumpingRotation: -30,
    jumpMaxCount: 2,
    bikeLeftMargin: 100,
    bikeTopMargin: 640,
    bikeCameraMinY: 540,
    bikeCameraMaxY: 740,
    parallaxDepth: [0.75, 0.5, 0.25, 0],
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
    bikeImagePath: "images/rider.png",
    mapPathBasePath: "myLaya/laya/pages/",
    bikeGameOverHeight: -15,
    bikeGameOverAngularVelocity: 1500,
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
        }
    },
];