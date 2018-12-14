import Config from "./src/config/base-config";

// 自行车速度（基础：20）
Config.bikeVelocity = 20;

// 重力（基础：-200）
Config.gravity = -200;

// 跳跃爆发力（基础：12800）
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
        // 背景的Y轴位置
        bgY: [0, 120, 180],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "sound/SoundBGM102.mp3",
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
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "sound/SoundBGM103.mp3",
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
        // 背景的Y轴位置
        bgY: [0, 120, 180],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "sound/SoundBGM105.mp3",
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
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 40,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "sound/SoundBGM105.mp3",
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
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -50,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "sound/bgm1.mp3",
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
        // 背景的Y轴位置
        bgY: [0, 120, 180],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-200）
        gravity: -200,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "sound/SoundBGM101.mp3",
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
                {
                    // scene文件的路径
                    scenePath: "Test/0/Test4",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/0/Test11",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/0/Test12",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/0/Test13",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/0/Test14",
                },
            ],
            [
                {
                    // scene文件的路径
                    scenePath: "Test/1/Test1",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/1/Test2",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/1/Test3",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/1/Test11",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/1/Test12",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/1/Test13",
                },
            ],
            [
                {
                    // scene文件的路径
                    scenePath: "Test/2/Test1",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/2/Test2",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/2/Test11",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/2/Test12",
                },
            ],
            [
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test1",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test2",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test3",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test4",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test11",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test12",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test13",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test14",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test1-1",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test1-2",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test1-3",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test1-11",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test1-12",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test1-13",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test2-1",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test2-2",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test2-11",
                },
                {
                    // scene文件的路径
                    scenePath: "Test/3/Test2-12",
                },
            ],
        ]
    },
];

// 背景的Y轴位置
Config.bgY = [0, 0, 180];

// 底下的黑色蒙版的总高度
Config.maskHeight = 420;

// 底下黑色蒙版的渐变系数
// offset指定一个点 opacity指定这个点的透明度 相邻的两个点之间会进行渐变
// offset越大就是越底部，1就是最底部，0就是最顶部
Config.maskColorStop = [
    {offset: 0, opacity: 0},
    {offset: 0.25, opacity: 0.5},
    {offset: 0.75, opacity: 1},
    {offset: 1, opacity: 1},
];

// 自行车普通跳跃的次数
Config.jumpCommonMaxCount = 2;
// 自行车每次额外跳跃距离上次跳跃的帧数限制
// 比如说第一个数配置20，第二个数配置18，
// 想要进行额外跳跃的话，那么在第二次跳跃之后，要在20帧之内进行，不然就错过时机了
// 如果想要再继续额外跳跃的话，那么在这次之后的18帧之内进行，不然就错过时机了
// 还想继续额外跳跃的话，如果没有配置第三项的话，就没办法跳跃了
Config.bikeJumpExtraCountdown = [20, 18, 16, 14, 12, 10];

// 是否开启镜头自动调距功能
Config.enableCameraAutoZoom = 0;
// 普通状态下镜头的缩放倍数
Config.cameraAutoZoomCommonScale = 2;
// 镜头缩放的速度 每帧变化的缩放大小
Config.cameraAutoZoomScaleSpeed = 0.01;

// 最上层背景的补边高度
Config.bgOffsetHeight = 380;
// 最上层背景在镜头内的最小高度
Config.bgMinHeightInView = 1000;

// 可携带物品按钮的位置列表
Config.portableItemButtonPosList = [
    [100, 200],
    [100, 100],
];

export default Config;
