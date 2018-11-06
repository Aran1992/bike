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
    bgCounts: 3,
    // 自行车速度
    bikeVelocity: 20,
    // 重力
    gravity: -200,
    // 跳跃爆发力
    jumpForce: 5000,
};

let TEXTURE_PATH = {
    side: "images/TextureScorpiusRoad01SideSkin.png",
    top: "images/TextureScorpiusRoad01TopSkin.png",
    rider: "images/rider.png",
    bg0: "images/TextureScorpiusBackground01.png",
    bg1: "images/TextureScorpiusBackground02.png",
    bg2: "images/TextureScorpiusBackground03.png",
};

let JSON_PATH = {
    path: "myLaya/laya/pages/Test.scene",
};