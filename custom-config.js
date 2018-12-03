import Config from "./src/config/base-config";

// 自行车速度（基础：20）
Config.bikeVelocity = 20;

// 重力（基础：-200）
Config.gravity = -200;

// 跳跃爆发力（基础：5000）
Config.jumpForce = 12800;

// 地图配置
Config.mapList = [
    {
        // 显示给人看的名字
        showName: "Basic",
        // scene文件的路径
        scenePath: "Test",
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
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.9, 0.8, 0],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：5000）
        jumpForce: 12800,
    },
    {
        // 显示给人看的名字
        showName: "Uphill",
        // scene文件的路径
        scenePath: "Test2",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/Aries/TextureAriesRoad01SideSkin.png",
            // 底部
            top: "images/Aries/TextureAriesRoad01TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/Aries/TextureAriesBackground01.png",
                "images/Aries/TextureAriesBackground02.png",
                "images/Aries/TextureAriesBackground03.png",
            ]
        },
        // 视差背景系数左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.9, 0.8, 0],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：5000）
        jumpForce: 12800,
    },
    {
        // 显示给人看的名字
        showName: "Downhill",
        // scene文件的路径
        scenePath: "Test3",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/Capricorn/TextureCapricornRoad01SideSkin.png",
            // 底部
            top: "images/Capricorn/TextureCapricornRoad01TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/Capricorn/TextureCapricornBackground01.png",
                "images/Capricorn/TextureCapricornBackground02.png",
                "images/Capricorn/TextureCapricornBackground03.png",
            ]
        },
        // 视差背景系数左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.9, 0.8, 0],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：5000）
        jumpForce: 12800,
    },
    {
        // 显示给人看的名字
        showName: "High Speed",
        // scene文件的路径
        scenePath: "Test4",
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
        // 视差背景系数左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.8, 0],
        // 自行车速度（基础：20）
        bikeVelocity: 40,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：5000）
        jumpForce: 12800,
    },
    {
        // 显示给人看的名字
        showName: "Low Gravity",
        // scene文件的路径
        scenePath: "Test5",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/Aquarius/TextureAquariusRoad01SideSkin.png",
            // 底部
            top: "images/Aquarius/TextureAquariusRoad01TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/Aquarius/TextureAquariusBackground01.png",
                "images/Aquarius/TextureAquariusBackground02.png",
                "images/Aquarius/TextureAquariusBackground03.png",
            ]
        },
        // 视差背景系数左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.8, 0],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -50,
        // 跳跃爆发力（基础：5000）
        jumpForce: 12800,
    },
];

// 自行车图集
Config.bikeAtlasPath = "images/tyariso_run_anim_all.png.json";

// 自行车在场景中显示的尺寸是原图的多大
Config.bikeScale = 0.4;

// 自行车物理半径
Config.bikeRadius = 1.175;

// 自行车密度
Config.bikeDensity = 1;

// 自行车跳跃的时候的旋转角度 顺时针旋转是正数
Config.bikeJumpingRotation = -30;

// 无尽模式配置
Config.endlessMode.sceneList = [
    {
        // 显示给人看的名字
        showName: "Test",
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
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.9, 0.8, 0],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：5000）
        jumpForce: 12800,
        roadSectionList: [
            [
                {
                    // scene文件的路径
                    scenePath: "Test/0/Test1",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/0/Test2",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/0/Test3",
                },
            ],
        ]
    },
];

export default Config;
