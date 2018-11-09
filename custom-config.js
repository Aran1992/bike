// 自行车速度（基础：20）
config.bikeVelocity = 40;

// 重力（基础：-200）
config.gravity = -200;

// 跳跃爆发力（基础：5000）
config.jumpForce = 5000;

// 地图配置
config.mapList = [
    {
        // 显示给人看的名字
        showName: "基础场景",
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
                "images/Scorpius/TextureScorpiusBackground01.png",
                "images/Scorpius/TextureScorpiusBackground02.png",
            ]
        },
		// 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
		// 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.8, 0],
        // 自行车速度
        bikeVelocity: 40,
        // 重力
        gravity: -200,
        // 跳跃爆发力
        jumpForce: 5000,
    },
    {
        // 显示给人看的名字
        showName: "上坡场景",
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
		// 视差背景系数左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
		// 视差背景系数：上下
        verticalParallaxDepth: [1, 0.9, 0.8, 0],
        // 自行车速度
        bikeVelocity: 20,
        // 重力
        gravity: -200,
        // 跳跃爆发力
        jumpForce: 5000,
    },
    {
        // 显示给人看的名字
        showName: "下坡场景",
        // scene文件的名字
        sceneName: "Test3",
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
		// 视差背景系数左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
		// 视差背景系数：上下
        verticalParallaxDepth: [1, 0.9, 0.8, 0],
        // 自行车速度
        bikeVelocity: 20,
        // 重力
        gravity: -200,
        // 跳跃爆发力
        jumpForce: 5000,
    },
];