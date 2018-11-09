// 自行车速度
config.bikeVelocity = 20;

// 重力
config.gravity = -200;

// 跳跃爆发力
config.jumpForce = 5000;

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
            side: "images/Scorpius/TextureScorpiusRoad01SideSkin.png",
            // 底部
            top: "images/Scorpius/TextureScorpiusRoad01TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/Scorpius/TextureScorpiusBackground01.png",
                "images/Scorpius/TextureScorpiusBackground02.png",
                "images/Scorpius/TextureScorpiusBackground03.png",
            ]
        },
        horizontalParallaxDepth: [0.75, 0.5, 0.25, 0],
        verticalParallaxDepth: [0.75, 0.5, 0.25, 0],
    },
    {
        // 显示给人看的名字
        showName: "Test2",
        // scene文件的名字
        sceneName: "Test2",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/Taurus/TextureTaurusRoad01SideSkin.png",
            // 底部
            top: "images/Taurus/TextureTaurusRoad01TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/Taurus/TextureTaurusBackground01.png",
                "images/Taurus/TextureTaurusBackground02.png",
                "images/Taurus/TextureTaurusBackground03.png",
            ]
        },
        horizontalParallaxDepth: [0.75, 0.5, 0.25, 0],
        verticalParallaxDepth: [0.75, 0.5, 0.25, 0],
    },
];