import Config from "./src/config/base-config";

// 游戏的设计宽度
Config.designWidth = 720;
// 游戏的设计高度
Config.designHeight = 1280;
// 自行车的左边距
Config.bikeLeftMargin = 150;
// 自行车顶边距的最小值（初始路线高度）
Config.bikeCameraMinY = 540;
// 自行车顶边距的最大值（跳起来后恢复的路线高度）
Config.bikeCameraMaxY = 740;
// 底下的黑色蒙版的总高度
Config.maskHeight = 420;

// 竖版游戏的参考值
// // 游戏的设计宽度
// Config.designWidth = 720;
// // 游戏的设计高度
// Config.designHeight = 1280;
// // 自行车的左边距
// Config.bikeLeftMargin = 150;
// // 自行车顶边距的最小值（初始路线高度）
// Config.bikeCameraMinY = 540;
// // 自行车顶边距的最大值（跳起来后恢复的路线高度）
// Config.bikeCameraMaxY = 740;
// // 底下的黑色蒙版的总高度
// Config.maskHeight = 420;

// 横版游戏的参考值
// // 游戏的设计宽度
// Config.designWidth = 1280;
// // 游戏的设计高度
// Config.designHeight = 720;
// // 自行车的左边距
// Config.bikeLeftMargin = 150;
// // 自行车顶边距的最小值（初始路线高度）
// Config.bikeCameraMinY = 540;
// // 自行车顶边距的最大值（跳起来后恢复的路线高度）
// Config.bikeCameraMaxY = 600;
// // 底下的黑色蒙版的总高度
// Config.maskHeight = 0;

// 自行车速度（基础：20）
Config.bikeVelocity = 20;

// 重力（基础：-175）
Config.gravity = -175;

// 跳跃爆发力（基础：12800）
Config.jumpForce = 250;

// 默认的自行车移动图集，里面必须有bike和enemy动画
Config.bikeCommonAnimation = "myLaya/laya/assets/animations/bike.json";

// 默认自行车冲刺动画，里面必须有sprint动画
Config.bikeSprintAnimation = "myLaya/laya/assets/animations/sprint.json";
// 默认自行车冲刺动画的偏移
Config.bikeSprintAnimationPos = [0, 0];

// 默认的自行车跳跃图集
Config.bikeJumpingAnimation = {
    "2": {
        atlasPath: "myLaya/laya/assets/animations/bike.json",
        animationName: "jump-2",
        interval: 5
    },
    "3": {
        atlasPath: "myLaya/laya/assets/animations/bike.json",
        animationName: "jump-3",
        interval: 5
    },
    "4": {
        atlasPath: "myLaya/laya/assets/animations/bike.json",
        animationName: "jump-4",
        interval: 5
    },
    "5": {
        atlasPath: "myLaya/laya/assets/animations/bike.json",
        animationName: "jump-2",
        interval: 5
    },
    "6": {
        atlasPath: "myLaya/laya/assets/animations/bike.json",
        animationName: "jump-3",
        interval: 5
    },
    "7": {
        atlasPath: "myLaya/laya/assets/animations/bike.json",
        animationName: "jump-4",
        interval: 5
    },
    "8": {
        atlasPath: "myLaya/laya/assets/animations/bike.json",
        animationName: "jump-5",
        interval: 5
    },
};

// 自行车在场景中显示的尺寸是原图的多大
Config.bikeScale = 0.4;

// 自行车物理半径（物理半径与密度相关关联）（radius变成3倍的话，质量就会变成原来的9倍，密度就要变成原来的九分之一）（影响玩家角色触碰范围）
Config.bikeRadius = 1.175;

// 自行车密度（物理半径与密度相关关联）（radius变成3倍的话，质量就会变成原来的9倍，密度就要变成原来的九分之一）（影响玩家角色跳跃高度）
Config.bikeDensity = 1;

// 自行车超级无敌冲刺物理半径
Config.bikeSprintRadius = 11;

// 自行车跳跃的时候的旋转角度 顺时针旋转是正数
Config.bikeJumpingRotation = -30;

// 禁止摄像头在垂直方向移动（允许移动：true：0）（禁止移动：false：1）
Config.forbidenCameraVerticalMove = 0;

// 默认的道具随机权重表
Config.defaultItemRandomTable = {
    Accelerate: 1,
    PowerJump: 1,
    UnlimitedJump: 1,
};

// 排名竞赛模式地图配置
Config.mapList = [
    {
        // scene文件的路径
        scenePath: "Test001",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Taurus/TextureDX2_TaurusRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Taurus/TextureDX2_TaurusRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Taurus/TextureDX2_TaurusRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Taurus/TextureDX2_TaurusRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Taurus/TextureDX2_TaurusBackground01.png",
                "images/map/DX2_Taurus/TextureDX2_TaurusBackground02.png",
                "images/map/DX2_Taurus/TextureDX2_TaurusBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Taurus/TextureDX2_TaurusMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 256, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/01_oushiza.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test002",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Aries/TextureDX2_AriesRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Aries/TextureDX2_AriesRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Aries/TextureDX2_AriesRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Aries/TextureDX2_AriesRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Aries/TextureDX2_AriesBackground01.png",
                "images/map/DX2_Aries/TextureDX2_AriesBackground02.png",
                "images/map/DX2_Aries/TextureDX2_AriesBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Aries/TextureDX2_AriesMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/05_ohitsujiza.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test003",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Aquarius/TextureDX2_AquariusBackground01.png",
                "images/map/DX2_Aquarius/TextureDX2_AquariusBackground02.png",
                "images/map/DX2_Aquarius/TextureDX2_AquariusBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Aquarius/TextureDX2_AquariusMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1.7, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/03_mizugameza.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test004",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_IceAge/TextureDX3_IceAgeBackground01.png",
                "images/map/DX3_IceAge/TextureDX3_IceAgeBackground02.png",
                "images/map/DX3_IceAge/TextureDX3_IceAgeBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX3_IceAge/TextureDX3_IceAgeMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 128],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/04_ice.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test005",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_Rococo/TextureDX3_RococoRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_Rococo/TextureDX3_RococoRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_Rococo/TextureDX3_RococoRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_Rococo/TextureDX3_RococoRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_Rococo/TextureDX3_RococoBackground01.png",
                "images/map/DX3_Rococo/TextureDX3_RococoBackground02.png",
                "images/map/DX3_Rococo/TextureDX3_RococoBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX3_Rococo/TextureDX3_RococoMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 1, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 0],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/07_rococo.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test006",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Pisces/TextureDX2_PiscesRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Pisces/TextureDX2_PiscesRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Pisces/TextureDX2_PiscesRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Pisces/TextureDX2_PiscesRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Pisces/TextureDX2_PiscesBackground01.png",
                "images/map/DX2_Pisces/TextureDX2_PiscesBackground02.png",
                "images/map/DX2_Pisces/TextureDX2_PiscesBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Pisces/TextureDX2_PiscesMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/10_uoza.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test007",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground01.png",
                "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground02.png",
                "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 0],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/08_sengoku.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test008",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX1_Beijing/TextureDX1_BeijingRoad01SideSkin.png",
            // 底部
            top: "images/map/DX1_Beijing/TextureDX1_BeijingRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX1_Beijing/TextureDX1_BeijingRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX1_Beijing/TextureDX1_BeijingRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX1_Beijing/TextureDX1_BeijingBackground01.png",
                "images/map/DX1_Beijing/TextureDX1_BeijingBackground02.png",
                "images/map/DX1_Beijing/TextureDX1_BeijingBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX1_Beijing/TextureDX1_BeijingMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/BGM_103.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test009",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad01SideSkin.png",
            // 底部
            top: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX1_Newyork/TextureDX1_NewyorkBackground01.png",
                "images/map/DX1_Newyork/TextureDX1_NewyorkBackground02.png",
                "images/map/DX1_Newyork/TextureDX1_NewyorkBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX1_Newyork/TextureDX1_NewyorkMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/BGM_105.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test010",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad01SideSkin.png",
            // 底部
            top: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX1_Tokyo/TextureDX1_TokyoBackground01.png",
                "images/map/DX1_Tokyo/TextureDX1_TokyoBackground02.png",
                "images/map/DX1_Tokyo/TextureDX1_TokyoBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX1_Tokyo/TextureDX1_TokyoMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/BGM_101.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test011",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground01.png",
                "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground02.png",
                "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 128],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/02_jurassic.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
    {
        // scene文件的路径
        scenePath: "Test012",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground01.png",
                "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground02.png",
                "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 192],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/01_middle.mp3",
        // 根据排名的道具随机表 有配置这个的话 就有先用这个 没有的话就用itemRandomTable 再没有就用默认的itemRandomTable
        itemRandomTableList: {
            1: {
                BlockSight: 1,
                BananaPeel: 4,
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
            2: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 2,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            3: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 10,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 6,
                BananaPeel: 80,
                Accelerate: 10,
                PowerJump: 10,
                UnlimitedJump: 10,
            },
            4: {
                Decelerate: 10,
                WeakenJump: 10,
                BlockSight: 1,
                SpiderWeb: 10,
                Seal: 10,
                Thunder: 20,
                BananaPeel: 10,
                Accelerate: 10,
                PowerJump: 1,
                UnlimitedJump: 1,
            },
        }
    },
];

// 路段配置
Config.roadSections = {
    // 固定关卡（Normal）(第1阶段)
    "101-1": [
        // 关卡（每个路段为1000像素）
        "Normal/Normal011-00000101",
    ],
    "101-11": [
        // 关卡（每个路段为3000像素）
        "Normal/Normal011-00000111",
    ],
    "101-21": [
        // 关卡（每个路段为2000像素）
        "Normal/Normal011-00000121",
    ],
    "101-31": [
        // 关卡（每个路段为2000像素）
        "Normal/Normal011-00000131",
    ],
    "101-41": [
        // 关卡（每个路段为2000像素）
        "Normal/Normal011-00000141",
    ],
    "101-51": [
        // 关卡（每个路段为2000像素）
        "Normal/Normal011-00000151",
    ],
    "101-61": [
        // 关卡（每个路段为4000像素）
        "Normal/Normal011-00000161",
    ],
    "101-71": [
        // 关卡（每个路段为2000像素）
        "Normal/Normal011-00000171",
    ],
    "101-81": [
        // 关卡（每个路段为3000像素）
        "Normal/Normal011-00000181",
    ],
    "101-91": [
        // 关卡（每个路段为9000像素）
        "Normal/Normal011-00000191",
    ],
    "101-101": [
        // 关卡（每个路段为3000像素）
        "Normal/Normal011-00000201",
    ],

    // 随机关卡（Random）(第2阶段)（休息关卡）
    "201-1": [
        // 关卡（每个路段为3000像素）

        // 关卡元素：纯路线
        "Random/Random021-00000101",
        "Random/Random021-00010101",
        "Random/Random021-00020101",

        "Random/Random021-00100101",
        "Random/Random021-00110101",
        "Random/Random021-00120101",

        "Random/Random021-01000101",
        "Random/Random021-01010101",
        "Random/Random021-01020101",

        "Random/Random021-02000101",
        "Random/Random021-02010101",
        "Random/Random021-02020101",

        // 关卡元素：移动平台
        "Random/Random021-10000101",
        "Random/Random021-10010101",
        "Random/Random021-10020101",
        "Random/Random021-10030101",
        "Random/Random021-10040101",

    ],

    // 随机关卡（Random）(第2阶段)（紧张关卡）
    "201-11": [
        // 关卡（每个路段为3000像素）

        // 关卡元素：蜘蛛网
        "Random/Random021-00000201",
        "Random/Random021-00010201",
        "Random/Random021-00020201",

        "Random/Random021-00100201",
        "Random/Random021-00110201",
        "Random/Random021-00120201",

        "Random/Random021-01000201",
        "Random/Random021-01010201",
        "Random/Random021-01020201",

        "Random/Random021-02000201",
        "Random/Random021-02010201",
        "Random/Random021-02020201",

        "Random/Random021-10000201",
        "Random/Random021-10010201",
        "Random/Random021-10020201",
        "Random/Random021-10030201",
        "Random/Random021-10040201",

        // 关卡元素：地刺-固定
        "Random/Random021-00000301",
        "Random/Random021-00010301",
        "Random/Random021-00020301",

        "Random/Random021-00100301",
        "Random/Random021-00110301",
        "Random/Random021-00120301",

        "Random/Random021-01000301",
        "Random/Random021-01010301",
        "Random/Random021-01020301",

        "Random/Random021-02000301",
        "Random/Random021-02010301",
        "Random/Random021-02020301",

        "Random/Random021-10000301",
        "Random/Random021-10010301",
        "Random/Random021-10020301",
        "Random/Random021-10030301",
        "Random/Random021-10040301",

        // 关卡元素：地刺-升降

        // 关卡元素：小鸟-固定
        "Random/Random021-00000501",
        "Random/Random021-00010501",
        "Random/Random021-00020501",

        "Random/Random021-00100501",
        "Random/Random021-00110501",
        "Random/Random021-00120501",

        "Random/Random021-01000501",
        "Random/Random021-01010501",
        "Random/Random021-01020501",

        "Random/Random021-02000501",
        "Random/Random021-02010501",
        "Random/Random021-02020501",

        "Random/Random021-10000501",
        "Random/Random021-10010501",
        "Random/Random021-10020501",
        "Random/Random021-10030501",
        "Random/Random021-10040501",

        // 关卡元素：小鸟-移动
        "Random/Random021-00000601",
        "Random/Random021-00010601",
        "Random/Random021-00020601",

        "Random/Random021-00100601",
        "Random/Random021-00110601",
        "Random/Random021-00120601",

        "Random/Random021-01000601",
        "Random/Random021-01010601",
        "Random/Random021-01020601",

        "Random/Random021-02000601",
        "Random/Random021-02010601",
        "Random/Random021-02020601",

        "Random/Random021-10000601",
        "Random/Random021-10010601",
        "Random/Random021-10020601",
        "Random/Random021-10030601",
        "Random/Random021-10040601",

        // 关卡元素：火柱

        // 关卡元素：火球

        // 关卡元素：滚石

        // 关卡元素：弹跳平台

        // 关卡元素：移动平台

        // 关卡元素：多层地形

    ],

    // 随机关卡（Random）(第阶段)（紧张关卡）
    "201-21": [
        // 关卡（每个路段为3000像素）

        // 关卡元素：蜘蛛网

        // 关卡元素：地刺-固定

        // 关卡元素：地刺-升降

        // 关卡元素：小鸟-固定

        // 关卡元素：小鸟-移动

        // 关卡元素：火柱

        // 关卡元素：火球

        // 关卡元素：滚石

        // 关卡元素：弹跳平台

        // 关卡元素：移动平台

        // 关卡元素：小鸟-固定
//        "Random/Random021-10000501",
//        "Random/Random021-10010501",
//        "Random/Random021-10020501",
//        "Random/Random021-10030501",
//        "Random/Random021-10040501",

        // 关卡元素：多层地形

    ],

    // 奖励关卡-1（Special）
    "0-1": [
        // 关卡（每个路段为5000像素）
        "Special/Special111-00000101",
    ],
    // 奖励关卡-2（Special）
    "0-11": [
        // 关卡（每个路段为6000像素）
        "Special/Special121-00000101",
        "Special/Special121-00000111",
        "Special/Special121-00000121",
    ],

    // 随机道具（Item）
    "9999-1": [
        // 关卡（每个路段为500像素）

        // 道具高度200

        // 道具：超人
        "Item/Item011-00000101",

        // 道具：无敌
        "Item/Item011-00000111",
        "Item/Item011-00000111",
        "Item/Item011-00000111",

        // 道具：磁铁
        "Item/Item011-00000121",
        "Item/Item011-00000121",
        "Item/Item011-00000121",

        // 道具：无限跳跃
        "Item/Item011-00000131",
        "Item/Item011-00000131",
        "Item/Item011-00000131",

        // 道具：强化跳跃
        "Item/Item011-00000141",
        "Item/Item011-00000141",
        "Item/Item011-00000141",

        // 道具：加速
        "Item/Item011-00000151",

        // 道具高度100

        // 道具：超人
        "Item/Item011-00001101",

        // 道具：无敌
        "Item/Item011-00001111",
        "Item/Item011-00001111",
        "Item/Item011-00001111",

        // 道具：磁铁
        "Item/Item011-00001121",
        "Item/Item011-00001121",
        "Item/Item011-00001121",

        // 道具：无限跳跃
        "Item/Item011-00001131",
        "Item/Item011-00001131",
        "Item/Item011-00001131",

        // 道具：强化跳跃
        "Item/Item011-00001141",
        "Item/Item011-00001141",
        "Item/Item011-00001141",

        // 道具：加速
        "Item/Item011-00001151",

        // 道具高度0

        // 道具：超人
        "Item/Item011-00002101",

        // 道具：无敌
        "Item/Item011-00002111",
        "Item/Item011-00002111",
        "Item/Item011-00002111",

        // 道具：磁铁
        "Item/Item011-00002121",
        "Item/Item011-00002121",
        "Item/Item011-00002121",

        // 道具：无限跳跃
        "Item/Item011-00002131",
        "Item/Item011-00002131",
        "Item/Item011-00002131",

        // 道具：强化跳跃
        "Item/Item011-00002141",
        "Item/Item011-00002141",
        "Item/Item011-00002141",

        // 道具：加速
        "Item/Item011-00002151",
    ],
};

// 无尽模式地图配置
Config.endlessMode.sceneList = [
    {
        id: 0,
        // 地图名称
        name: "Select Map1",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Taurus/TextureDX2_TaurusRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Taurus/TextureDX2_TaurusRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Taurus/TextureDX2_TaurusRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Taurus/TextureDX2_TaurusRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Taurus/TextureDX2_TaurusBackground01.png",
                "images/map/DX2_Taurus/TextureDX2_TaurusBackground02.png",
                "images/map/DX2_Taurus/TextureDX2_TaurusBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX2_Taurus/TextureDX2_TaurusMap.png",
            // 主页封面图
            mainCover: "images/map/DX2_Taurus/TextureDX2_TaurusMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 256, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/01_oushiza.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 1,
        // 地图名称
        name: "Select Map2",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle2",
            // 解锁描述
            dsc: "MapUnlockDescribe2",
            // 解锁图片
            image: "images/map/DX2_Aries/TextureDX2_AriesBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Aries/TextureDX2_AriesRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Aries/TextureDX2_AriesRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Aries/TextureDX2_AriesRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Aries/TextureDX2_AriesRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Aries/TextureDX2_AriesBackground01.png",
                "images/map/DX2_Aries/TextureDX2_AriesBackground02.png",
                "images/map/DX2_Aries/TextureDX2_AriesBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX2_Aries/TextureDX2_AriesMap.png",
            // 主页封面图
            mainCover: "images/map/DX2_Aries/TextureDX2_AriesMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/05_ohitsujiza.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 2,
        // 地图名称
        name: "Select Map3",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle3",
            // 解锁描述
            dsc: "MapUnlockDescribe3",
            // 解锁图片
            image: "images/map/DX2_Aquarius/TextureDX2_AquariusBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Aquarius/TextureDX2_AquariusBackground01.png",
                "images/map/DX2_Aquarius/TextureDX2_AquariusBackground02.png",
                "images/map/DX2_Aquarius/TextureDX2_AquariusBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX2_Aquarius/TextureDX2_AquariusMap.png",
            // 主页封面图
            mainCover: "images/map/DX2_Aquarius/TextureDX2_AquariusMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1.7, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/03_mizugameza.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 3,
        // 地图名称
        name: "Select Map4",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle4",
            // 解锁描述
            dsc: "MapUnlockDescribe4",
            // 解锁图片
            image: "images/map/DX3_IceAge/TextureDX3_IceAgeBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_IceAge/TextureDX3_IceAgeBackground01.png",
                "images/map/DX3_IceAge/TextureDX3_IceAgeBackground02.png",
                "images/map/DX3_IceAge/TextureDX3_IceAgeBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX3_IceAge/TextureDX3_IceAgeMap.png",
            // 主页封面图
            mainCover: "images/map/DX3_IceAge/TextureDX3_IceAgeMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 128],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/04_ice.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 4,
        // 地图名称
        name: "Select Map5",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle5",
            // 解锁描述
            dsc: "MapUnlockDescribe5",
            // 解锁图片
            image: "images/map/DX3_Rococo/TextureDX3_RococoBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_Rococo/TextureDX3_RococoRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_Rococo/TextureDX3_RococoRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_Rococo/TextureDX3_RococoRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_Rococo/TextureDX3_RococoRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_Rococo/TextureDX3_RococoBackground01.png",
                "images/map/DX3_Rococo/TextureDX3_RococoBackground02.png",
                "images/map/DX3_Rococo/TextureDX3_RococoBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX3_Rococo/TextureDX3_RococoMap.png",
            // 主页封面图
            mainCover: "images/map/DX3_Rococo/TextureDX3_RococoMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 1, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 0],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/07_rococo.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 5,
        // 地图名称
        name: "Select Map6",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle6",
            // 解锁描述
            dsc: "MapUnlockDescribe6",
            // 解锁图片
            image: "images/map/DX2_Pisces/TextureDX2_PiscesBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Pisces/TextureDX2_PiscesRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Pisces/TextureDX2_PiscesRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Pisces/TextureDX2_PiscesRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Pisces/TextureDX2_PiscesRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Pisces/TextureDX2_PiscesBackground01.png",
                "images/map/DX2_Pisces/TextureDX2_PiscesBackground02.png",
                "images/map/DX2_Pisces/TextureDX2_PiscesBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX2_Pisces/TextureDX2_PiscesMap.png",
            // 主页封面图
            mainCover: "images/map/DX2_Pisces/TextureDX2_PiscesMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/10_uoza.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 6,
        // 地图名称
        name: "Select Map7",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle7",
            // 解锁描述
            dsc: "MapUnlockDescribe7",
            // 解锁图片
            image: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground01.png",
                "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground02.png",
                "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodMap.png",
            // 主页封面图
            mainCover: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 0],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/08_sengoku.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 7,
        // 地图名称
        name: "Select Map8",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle8",
            // 解锁描述
            dsc: "MapUnlockDescribe8",
            // 解锁图片
            image: "images/map/DX1_Beijing/TextureDX1_BeijingBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX1_Beijing/TextureDX1_BeijingRoad01SideSkin.png",
            // 底部
            top: "images/map/DX1_Beijing/TextureDX1_BeijingRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX1_Beijing/TextureDX1_BeijingRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX1_Beijing/TextureDX1_BeijingRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX1_Beijing/TextureDX1_BeijingBackground01.png",
                "images/map/DX1_Beijing/TextureDX1_BeijingBackground02.png",
                "images/map/DX1_Beijing/TextureDX1_BeijingBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX1_Beijing/TextureDX1_BeijingMap.png",
            // 主页封面图
            mainCover: "images/map/DX1_Beijing/TextureDX1_BeijingMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/BGM_103.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 8,
        // 地图名称
        name: "Select Map9",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle9",
            // 解锁描述
            dsc: "MapUnlockDescribe9",
            // 解锁图片
            image: "images/map/DX1_Newyork/TextureDX1_NewyorkBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad01SideSkin.png",
            // 底部
            top: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX1_Newyork/TextureDX1_NewyorkBackground01.png",
                "images/map/DX1_Newyork/TextureDX1_NewyorkBackground02.png",
                "images/map/DX1_Newyork/TextureDX1_NewyorkBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX1_Newyork/TextureDX1_NewyorkMap.png",
            // 主页封面图
            mainCover: "images/map/DX1_Newyork/TextureDX1_NewyorkMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/BGM_105.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 9,
        // 地图名称
        name: "Select Map10",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle10",
            // 解锁描述
            dsc: "MapUnlockDescribe10",
            // 解锁图片
            image: "images/map/DX1_Tokyo/TextureDX1_TokyoBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad01SideSkin.png",
            // 底部
            top: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX1_Tokyo/TextureDX1_TokyoBackground01.png",
                "images/map/DX1_Tokyo/TextureDX1_TokyoBackground02.png",
                "images/map/DX1_Tokyo/TextureDX1_TokyoBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX1_Tokyo/TextureDX1_TokyoMap.png",
            // 主页封面图
            mainCover: "images/map/DX1_Tokyo/TextureDX1_TokyoMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/BGM_101.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 10,
        // 地图名称
        name: "Select Map11",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle11",
            // 解锁描述
            dsc: "MapUnlockDescribe11",
            // 解锁图片
            image: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground01.png",
                "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground02.png",
                "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicMap.png",
            // 主页封面图
            mainCover: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 128],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/02_jurassic.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
    {
        id: 11,
        // 地图名称
        name: "Select Map12",
        // 免费解锁所需总距离（改版后这个不用了）
        //unlockDistance: 0,
        // 花费解锁所需钻石（改版后这个不用了）
        //unlockCostDiamond: 0,
        // 解锁显示内容（有配置就显示，没配置就不显示）
        unlockInfo: {
            // 解锁内容标题
            title: "MapUnlockTitle12",
            // 解锁描述
            dsc: "MapUnlockDescribe12",
            // 解锁图片
            image: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.1,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad01SideSkin.png",
            // 底部
            top: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground01.png",
                "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground02.png",
                "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground03.png",
            ],
            // 商店显示的封面图（改版后这个不用了）
            shopCover: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeMap.png",
            // 主页封面图
            mainCover: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 0.95, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 192],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 250,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/01_middle.mp3",
        // 里程提示（单位米）（1秒大约走20米）
        distanceNotice: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 8400, 9600, 10800, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
        // 每个难度的长度（单位像素）（1米=16像素）
        // 一次性旅程
        roadSectionList: [],
        // 无限循环旅程
        infiniteRoadSectionList: [],
        // 道具随机权重表（无尽模式-随机道具）
        itemRandomTable: {
            Accelerate: 2,
            PowerJump: 2,
            UnlimitedJump: 2,
            Magnet: 2,
            Invincible: 2,
            Sprint: 1,
        },
    },
];

// 无尽模式默认配置
Config.endlessMode.default = {
    // 每个难度的长度（单位像素）（1米=16像素）
    // 一次性旅程
    roadSectionList: [
        // 对普通玩家可过阶段

        // 第1阶段(固定路线)
        //路段1（注意：第1个速度要为1不然会出错）
        {
            list: ["101-1",],
            length: 1000,
            velocity: 1,
        },
        //路段2
        {
            list: ["101-11",],
            length: 3000,
            velocity: 1,
        },
        //路段3
        {
            list: ["101-21",],
            length: 2000,
            velocity: 1,
        },
        //路段4
        {
            list: ["101-31",],
            length: 2000,
            velocity: 1,
        },
        //路段5
        {
            list: ["101-41",],
            length: 2000,
            velocity: 1,
        },
        //路段6
        {
            list: ["101-51",],
            length: 2000,
            velocity: 1,
        },
        //路段7
        {
            list: ["101-61",],
            length: 4000,
            velocity: 1,
        },
        //路段8
        {
            list: ["101-71",],
            length: 2000,
            velocity: 1,
        },
        //路段9
        {
            list: ["101-81",],
            length: 3000,
            velocity: 1,
        },
        //路段10
        {
            list: ["101-91",],
            length: 9000,
            velocity: 1,
        },
        //路段11
        {
            list: ["101-101",],
            length: 3000,
            velocity: 1,
        },

        // 奖励阶段
        {
            list: ["0-1",],
            length: 5000,
            velocity: 1,
        },


        // 第2阶段（随机路线）
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.2,
        },
        //路段1
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.2,
        },
        //路段2
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.2,
        },
        //路段3（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.2,
        },
        //路段4
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.2,
        },
        //路段5
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.2,
        },
        //路段6（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.2,
        },
        //路段7
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.2,
        },
        //路段8
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.2,
        },
        // 奖励阶段
        {
            list: ["0-11",],
            length: 6000,
            velocity: 1.2,
        },


        // 第3阶段（随机路线）
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.4,
        },
        //路段1
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.4,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.4,
        },
        //路段2
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.4,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.4,
        },
        //路段3（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.4,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.4,
        },
        //路段4
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.4,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.4,
        },
        //路段5
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.4,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.4,
        },
        //路段6（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.4,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.4,
        },
        //路段7
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.4,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.4,
        },
        //路段8
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.4,
        },
        // 奖励阶段
        {
            list: ["0-11",],
            length: 6000,
            velocity: 1.4,
        },


        // 第4阶段（随机路线）
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.6,
        },
        //路段1
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.6,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.6,
        },
        //路段2
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.6,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.6,
        },
        //路段3（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.6,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.6,
        },
        //路段4
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.6,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.6,
        },
        //路段5
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.6,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.6,
        },
        //路段6（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.6,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.6,
        },
        //路段7
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.6,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.6,
        },
        //路段8
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.6,
        },
        // 奖励阶段
        {
            list: ["0-11",],
            length: 6000,
            velocity: 1.6,
        },


        // 第5阶段（随机路线）
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.8,
        },
        //路段1
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.8,
        },
        //路段2
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.8,
        },
        //路段3（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.8,
        },
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.8,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.8,
        },
        //路段4
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.8,
        },
        //路段5
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.8,
        },
        //路段6（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.8,
        },
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.8,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.8,
        },
        //路段7
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.8,
        },
        //路段8
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 1.8,
        },
        // 奖励阶段
        {
            list: ["0-11",],
            length: 6000,
            velocity: 1.8,
        },
    ],
    // 无限循环旅程
    infiniteRoadSectionList: [
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 2,
        },
        //路段1
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 2,
        },
        //路段2
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 2,
        },
        //路段3（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 2,
        },
        {
            list: ["201-1",],
            length: 3000,
            velocity: 2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 2,
        },
        //路段4
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 2,
        },
        //路段5
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 2,
        },
        //路段6（休息关卡）
        {
            list: ["201-1",],
            length: 3000,
            velocity: 2,
        },
        {
            list: ["201-1",],
            length: 3000,
            velocity: 2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 2,
        },
        //路段7
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 2,
        },
        //路段8
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        {
            list: ["201-11",],
            length: 3000,
            velocity: 2,
        },
        // 奖励阶段
        {
            list: ["0-11",],
            length: 6000,
            velocity: 2,
        },
    ],
};

// 无尽模式复活次数
Config.endlessMode.rebornTimes = 3;

// 背景的Y轴位置（没有填的地图，默认会用这个，作为忘填保险用）
Config.bgY = [0, 0, 256];

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
Config.cameraAutoZoomCommonScale = 1.5;
// 镜头缩放的速度 每帧变化的缩放大小
Config.cameraAutoZoomScaleSpeed = 0.02;

// 最上层背景的补边高度
Config.bgOffsetHeight = 380;
// 最上层背景在镜头内的最小高度
Config.bgMinHeightInView = 1000;

// 可携带物品按钮的位置列表
Config.portableItemButtonPosList = [
    [100, 200],
    [100, 100],
];

// 复活拉回的时间（单位秒）（正式对外用1秒，内部测试用0.5秒）
Config.rebornDragDuration = 1;
// 复活气泡漂浮时间
Config.rebornFloatFrame = 300;
// 复活气泡漂浮速度
Config.rebornFloatVelocity = 10;

// 默认的动画偏移，没有专门设置偏移的动画就全部使用这个偏移
Config.bikeCommonAnimationPos = [0, 0];

// 自行车列表 自行车在列表里面的排序就是在界面上显示的顺序
Config.bikeList = [
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 0,
        // 覆盖其上的图片路径
        "imagePath": "",
        // 缩放倍数
        "scale": [
            0,
            0
        ],
        // 图片的锚点
        "anchor": [
            0.5,
            0.5
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 1,
        // 自行车名
        "name": "Select Bike1",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ],
        // 结算金币倍率（不填的话就使用默认值）
        "coinPercent": [
            1,
            1.05,
            1.1,
            1.15,
            1.2,
            1.25,
            1.3,
            1.35,
            1.4,
            1.45,
            1.5,
            1.55,
            1.6,
            1.65,
            1.7,
            1.75,
            1.8,
            1.85,
            1.9,
            1.95,
            2
        ],
        // 结算里程倍率（不填的话就使用默认值）
        "distancePercent": [
            1,
            1.05,
            1.1,
            1.15,
            1.2,
            1.25,
            1.3,
            1.35,
            1.4,
            1.45,
            1.5,
            1.55,
            1.6,
            1.65,
            1.7,
            1.75,
            1.8,
            1.85,
            1.9,
            1.95,
            2
        ],
        // 结算积分倍率（不填的话就使用默认值）
        "scorePercent": [
            1,
            1.05,
            1.1,
            1.15,
            1.2,
            1.25,
            1.3,
            1.35,
            1.4,
            1.45,
            1.5,
            1.55,
            1.6,
            1.65,
            1.7,
            1.75,
            1.8,
            1.85,
            1.9,
            1.95,
            2
        ],
        // 结算经验倍率（不填的话就使用默认值）
        "expPercent": [
            1,
            1.05,
            1.1,
            1.15,
            1.2,
            1.25,
            1.3,
            1.35,
            1.4,
            1.45,
            1.5,
            1.55,
            1.6,
            1.65,
            1.7,
            1.75,
            1.8,
            1.85,
            1.9,
            1.95,
            2
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 1,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike1.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.63,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 2,
        // 自行车名
        "name": "Select Bike2",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 4,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike4.png",
        // 缩放倍数
        "scale": [
            0.4,
            0.4
        ],
        // 图片的锚点
        "anchor": [
            0.62,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 3,
        // 自行车名
        "name": "Select Bike3",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 11,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike11.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.6,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 4,
        // 自行车名
        "name": "Select Bike4",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 13,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike13.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            1,
            0.5
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 5,
        // 自行车名
        "name": "Select Bike5",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 15,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike15.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.5,
            0.8
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 6,
        // 自行车名
        "name": "Select Bike6",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 2,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike2.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.63,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 7,
        // 自行车名
        "name": "Select Bike7",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 0.9,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 5,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike5.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.63,
            0.7
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 8,
        // 自行车名
        "name": "Select Bike8",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 0.9,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 6,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike6.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.63,
            0.7
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 9,
        // 自行车名
        "name": "Select Bike9",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 0.9,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 20,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike20.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.5,
            0.6
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 10,
        // 自行车名
        "name": "Select Bike10",
        "highJump": "Normal",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.2,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.09,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 8,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike8.png",
        // 缩放倍数
        "scale": [
            0.45,
            0.45
        ],
        // 图片的锚点
        "anchor": [
            0.5,
            0.5
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 11,
        // 自行车名
        "name": "Select Bike11",
        "highJump": "Normal",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.2,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.09,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 41,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike41.png",
        // 缩放倍数
        "scale": [
            0.4,
            0.4
        ],
        // 图片的锚点
        "anchor": [
            0.45,
            0.68
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 12,
        // 自行车名
        "name": "Select Bike12",
        "highJump": "Normal",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.2,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.09,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 21,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike21.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.5,
            0.86
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 13,
        // 自行车名
        "name": "Select Bike13",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 22,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike22.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.48,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 14,
        // 自行车名
        "name": "Select Bike14",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 23,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike23.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.77,
            0.7
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 15,
        // 自行车名
        "name": "Select Bike15",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 7,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike7.png",
        // 缩放倍数
        "scale": [
            0.4,
            0.4
        ],
        // 图片的锚点
        "anchor": [
            0.63,
            0.7
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 16,
        // 自行车名
        "name": "Select Bike16",
        "highJump": "Easy",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            22,
            20,
            18,
            16,
            14,
            12
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 42,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike42.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.28,
            1.1
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 17,
        // 自行车名
        "name": "Select Bike17",
        "highJump": "Easy",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            22,
            20,
            18,
            16,
            14,
            12
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 43,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike43.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.46,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 18,
        // 自行车名
        "name": "Select Bike18",
        "highJump": "Easy",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 0.8,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            22,
            20,
            18,
            16,
            14,
            12
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 51,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike51.png",
        // 缩放倍数
        "scale": [
            0.35,
            0.35
        ],
        // 图片的锚点
        "anchor": [
            0.71,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 19,
        // 自行车名
        "name": "Select Bike19",
        "highJump": "Hard",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            18,
            16,
            14,
            12,
            10,
            8
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 53,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike53.png",
        // 缩放倍数
        "scale": [
            0.35,
            0.35
        ],
        // 图片的锚点
        "anchor": [
            0.71,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 20,
        // 自行车名
        "name": "Select Bike20",
        "highJump": "Hard",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            18,
            16,
            14,
            12,
            10,
            8
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 54,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike54.png",
        // 缩放倍数
        "scale": [
            0.35,
            0.35
        ],
        // 图片的锚点
        "anchor": [
            0.71,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 21,
        // 自行车名
        "name": "Select Bike21",
        "highJump": "Hard",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 0.8,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            18,
            16,
            14,
            12,
            10,
            8
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 19,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike19.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.5,
            1.25
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 22,
        // 自行车名
        "name": "Select Bike22",
        "highJump": "Easy",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            22,
            20,
            18,
            16,
            14,
            12
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 10,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike10.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.71,
            0.65
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 23,
        // 自行车名
        "name": "Select Bike23",
        "highJump": "Easy",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            22,
            20,
            18,
            16,
            14,
            12
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 12,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike12.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.71,
            0.6
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 24,
        // 自行车名
        "name": "Select Bike24",
        "highJump": "Easy",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.1,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            22,
            20,
            18,
            16,
            14,
            12
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 9,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike9.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.45,
            0.35
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 25,
        // 自行车名
        "name": "Select Bike25",
        "highJump": "Hard",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            18,
            16,
            14,
            12,
            10,
            8
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 24,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike24.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.55,
            0.3
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 26,
        // 自行车名
        "name": "Select Bike26",
        "highJump": "Hard",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            18,
            16,
            14,
            12,
            10,
            8
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 18,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike18.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.5,
            0.6
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 27,
        // 自行车名
        "name": "Select Bike27",
        "highJump": "Hard",
        "size": "Middle",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            18,
            16,
            14,
            12,
            10,
            8
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 14,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike14.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            1.05,
            1.08
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 28,
        // 自行车名
        "name": "Select Bike28",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 16,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike16.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.59,
            0.71
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 29,
        // 自行车名
        "name": "Select Bike29",
        "highJump": "Normal",
        "size": "Big",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 17,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike17.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.69,
            0.8
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 30,
        // 自行车名
        "name": "Select Bike30",
        "highJump": "Normal",
        "size": "Small",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.3,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            20,
            18,
            16,
            14,
            12,
            10
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 3,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike3.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.52,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 31,
        // 自行车名
        "name": "Select Bike31",
        "highJump": "Hard",
        "size": "Big",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.5,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            18,
            16,
            14,
            12,
            10,
            8
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 52,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike52.png",
        // 缩放倍数
        "scale": [
            0.35,
            0.35
        ],
        // 图片的锚点
        "anchor": [
            0.71,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 32,
        // 自行车名
        "name": "Select Bike32",
        "highJump": "Hard",
        "size": "Big",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.5,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            18,
            16,
            14,
            12,
            10,
            8
        ]
    },
    {
        // 自行车ID 必须要和别的自行车不一样
        "id": 25,
        // 覆盖其上的图片路径
        "imagePath": "images/bike/bike25.png",
        // 缩放倍数
        "scale": [
            0.5,
            0.5
        ],
        // 图片的锚点
        "anchor": [
            0.6,
            0.73
        ],
        // 图片在自行车内的位置 (0,0)就是在中心点
        "position": [
            0,
            0
        ],
        "index": 33,
        // 自行车名
        "name": "Select Bike33",
        "highJump": "Hard",
        "size": "Big",
        // 自行车的速度倍率（普通速度和加速速度都会乘于这个值）（范围区间：快 ~ 慢 ：2 ~ 0.8）
        "velocityPercent": 1.5,
        // 自行车的密度倍率（密度越大，车子越重，跳起来的高度越低）（范围区间：高 ~ 低 ：0.8 ~ 1.2）
        "densityPercent": 1.2,
        // 自行车每次额外跳跃距离上次跳跃的帧数限制（不填的话就是用默认的配置）
        "bikeJumpExtraCountdown": [
            18,
            16,
            14,
            12,
            10,
            8
        ]
    }
];

// 抽奖重置时间间隔（单位：秒）（可用乘法计算）
Config.freeDrawInterval = 8 * 60 * 60;

// 提示相关配置
Config.notice = {
    // 字体颜色
    fill: "white",
    // 字体大小
    fontSize: 40,
    // 背景比字体大多少像素
    margin: 10,
    // 背景颜色
    backgroundColor: 0x000000,
    // 背景透明度(0就是完全透明，1就是完全不透明)
    backgroundAlpha: 0.5,
    // 提示距离顶部多少像素
    positionY: 100,
    // 提示持续的时间（毫秒）
    duration: 2000,
    // 消失动画的持续时间（毫秒）
    fadeDuration: 250
};

// 主界面相关配置
Config.mainScene = {
    // 自行车相关配置
    bikeSprite: {
        // 在X轴上移动的速度
        velocityX: 2,
    }
};
// 扭蛋界面相关配置
Config.drawScene = {
    // 自行车相关配置
    bikeSprite: {
        y: 100,
    },
    res: {
        drawSound: "myLaya/laya/assets/sounds/Sound0028.mp3"
    },
};
// 自行车界面相关配置
Config.bikeScene = {
    //自行车能力升级随机转动音效
    res: {
        upgradeSound: "myLaya/laya/assets/sounds/se_icon_select.mp3"
    },
    // 自行车列表相关配置
    bikeList: {
        // 是否横向显示
        isHorizontal: 0
    }
};
// 游戏界面相关配置
Config.gameScene = {
    // 速度状态图片列表（由低至高）
    velocityStateImgList: [
        {
            // 场景速率倍数如果小于等于这个值，那么就算是这个档次的
            maxVelocity: 1,
            // 在这个档次的时候显示的图
            imgPath: "myLaya/laya/assets/images/game-scene/ui_spd_1.png",
        },
        {
            // 场景速率倍数如果小于等于这个值，那么就算是这个档次的
            maxVelocity: 1.2,
            // 在这个档次的时候显示的图
            imgPath: "myLaya/laya/assets/images/game-scene/ui_spd_2.png",
        },
        {
            // 场景速率倍数如果小于等于这个值，那么就算是这个档次的
            maxVelocity: 1.4,
            // 在这个档次的时候显示的图
            imgPath: "myLaya/laya/assets/images/game-scene/ui_spd_3.png",
        },
        {
            // 场景速率倍数如果小于等于这个值，那么就算是这个档次的
            maxVelocity: 1.6,
            // 在这个档次的时候显示的图
            imgPath: "myLaya/laya/assets/images/game-scene/ui_spd_4.png",
        },
        {
            // 场景速率倍数如果小于等于这个值，那么就算是这个档次的
            maxVelocity: 1.8,
            // 在这个档次的时候显示的图
            imgPath: "myLaya/laya/assets/images/game-scene/ui_spd_5.png",
        },
        {
            // 场景速率倍数如果小于等于这个值，那么就算是这个档次的
            maxVelocity: 2,
            // 在这个档次的时候显示的图
            imgPath: "myLaya/laya/assets/images/game-scene/ui_spd_6.png",
        },
    ]
};

// 商店游戏币配置（目前关闭了不用）
Config.moneyList = [
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        getDiamond: 345,
        // 消耗的货币数量（金币物品此项设置为零或者去掉）
        costMoney: 30,
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        getCoin: 0,
        // 消耗的钻石数量（钻石物品此项设置为零或者去掉）
        costDiamond: 0,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum01.png"
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        getDiamond: 132,
        // 消耗的货币数量（金币物品此项设置为零或者去掉）
        costMoney: 12,
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        getCoin: 0,
        // 消耗的钻石数量（钻石物品此项设置为零或者去掉）
        costDiamond: 0,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum02.png"
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        getDiamond: 63,
        // 消耗的货币数量（金币物品此项设置为零或者去掉）
        costMoney: 6,
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        getCoin: 0,
        // 消耗的钻石数量（钻石物品此项设置为零或者去掉）
        costDiamond: 0,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum03.png"
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        getDiamond: 10,
        // 消耗的货币数量（金币物品此项设置为零或者去掉）
        costMoney: 1,
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        getCoin: 0,
        // 消耗的钻石数量（钻石物品此项设置为零或者去掉）
        costDiamond: 0,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum04.png"
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        getDiamond: 0,
        // 消耗的货币数量（金币物品此项设置为零或者去掉）
        costMoney: 0,
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        getCoin: 34500,
        // 消耗的钻石数量（钻石物品此项设置为零或者去掉）
        costDiamond: 300,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum05.png"
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        getDiamond: 0,
        // 消耗的货币数量（金币物品此项设置为零或者去掉）
        costMoney: 0,
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        getCoin: 13200,
        // 消耗的钻石数量（钻石物品此项设置为零或者去掉）
        costDiamond: 120,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum06.png"
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        getDiamond: 0,
        // 消耗的货币数量（金币物品此项设置为零或者去掉）
        costMoney: 0,
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        getCoin: 6300,
        // 消耗的钻石数量（钻石物品此项设置为零或者去掉）
        costDiamond: 60,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum07.png"
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        getDiamond: 0,
        // 消耗的货币数量（金币物品此项设置为零或者去掉）
        costMoney: 0,
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        getCoin: 1000,
        // 消耗的钻石数量（钻石物品此项设置为零或者去掉）
        costDiamond: 10,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum08.png"
    },
];

// 商店礼包配置（目前关闭了不用）
// 礼包ID已经对应上功能了，不要更改ID和描述的对应关系，但是可以修改礼包的顺序
Config.presentList = [
    {
        // 礼包ID
        id: 1,
        // 礼包描述
        dsc: "UnlockAllBike",
        // 购买所需货币
        costMoney: 50,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum01.png",
    },
    {
        // 礼包ID
        id: 2,
        // 礼包描述
        dsc: "UnlockAllEndlessScene",
        // 购买所需货币
        costMoney: 200,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum02.png",
    },
    {
        // 礼包ID
        id: 3,
        // 礼包描述
        dsc: "Money2DCPresentDsc",
        // 购买所需货币
        costMoney: 1,
        // 购买礼包获得的钻石数量
        getDiamond: 50,
        // 购买礼包获得金币数量
        getCoin: 5000,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum03.png",
    },
    {
        // 礼包ID
        id: 4,
        // 礼包描述
        dsc: "Money2DCPresentDsc",
        // 购买所需货币
        costMoney: 6,
        // 购买礼包获得的钻石数量
        getDiamond: 150,
        // 购买礼包获得金币数量
        getCoin: 15000,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum04.png",
    },
];

// 商店（福利）广告金币配置
Config.rewardGoldList = [
    {
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        rewardCoin: 2000,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 0,
    },
    {
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        rewardCoin: 2000,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 10,
    },
    {
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        rewardCoin: 2000,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 30,
    },
    {
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        rewardCoin: 2000,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 60,
    },
];

// 商店（福利）广告钻石配置
Config.rewardDiamondList = [
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        rewardDiamond: 50,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 0,
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        rewardDiamond: 50,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 10,
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        rewardDiamond: 50,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 30,
    },
    {
        // 获得的钻石数量（金币物品此项设置为零或者去掉）
        rewardDiamond: 50,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 60,
    },
];

// 按钮按下去之后的缩放倍数
Config.buttonClickScale = 0.9;
// 按钮点击下去之后进行滑动的话 超过多少算是点击无效的范围
Config.buttonClickOffset = 10;

// 道具/npc/地形相关配置
Config.item = {
    // 小火墙
    smallFireWall: {
        // 实际区域宽度
        bodyWidth: 40,
        // 实际区域高度
        bodyHeight: 350,
    },
    // 大火墙
    bigFireWall: {
        // 实际区域宽度
        bodyWidth: 40,
        // 实际区域高度
        bodyHeight: 610,
    },
    // 小鸟
    bird: {
        // 配置列表（对应ID的配置）
        table: {
            // 没有配置id的小鸟都是用这个配置
            default: {
                // 动画路径
                animationJsonPath: "images/bird-animation.json",
                // 动画名称
                animationName: "Bird",
                // 动画帧率（1的话就是，游戏刷新一帧，动画就刷新一帧，0.5的话就是，游戏刷新两帧，动画就刷新一帧）
                animationSpeed: 0.25,
                // 动画偏移
                animationPos: [0, 0],
                // 实际区域宽度
                bodyWidth: 64,
                // 实际区域高度
                bodyHeight: 40,
                // 触碰到的时候的自行车竖直方向上的速度
                contactBikeVelocity: 50,
                // 触碰到的时候的小鸟受到的冲击力大小
                contactBirdImpulse: 125,
                // 被击飞的冲击力大小
                strikedBirdImpulse: 1250,
                // 被击飞的旋转速度
                strikedBirdAngularVelocity: 50,
                // 出现音效
                //appearSoundPath: "",
                // 是否能踩
                isAbleToBeTrampled: 1,
                // 是否能顶
                isAbleToBeJacked: 0,
                // 前进速度（如果速度为0的话，他就不会在水平方向上移动了；如果编辑器名字中有带“UpDown”，那么就忽略这个配置，就只会上下移动）
                forwardVelocity: 0,
                // 是否会上下移动（如果编辑器名字中有带“UpDown”，那么就忽略这个配置，就只会上下移动）
                isMoveUpDown: 0,
                // 这个系数越大 小鸟上下移动的最大幅度就越大
                upDownCoefficient: 0,
                // 这个系数越大 完成一遍上下移动的时间就越短
                upDownStep: 0,
            },
            // 浮空固定的小鸟（可向下踩踏、向上、横向碰触即死）
            20000: {
                // 动画路径
                animationJsonPath: "images/bird-animation.json",
                // 动画名称
                animationName: "Bird",
                // 动画帧率（1的话就是，游戏刷新一帧，动画就刷新一帧，0.5的话就是，游戏刷新两帧，动画就刷新一帧）
                animationSpeed: 0.25,
                // 动画偏移
                animationPos: [0, 0],
                // 实际区域宽度
                bodyWidth: 64,
                // 实际区域高度
                bodyHeight: 40,
                // 触碰到的时候的自行车竖直方向上的速度
                contactBikeVelocity: 50,
                // 触碰到的时候的小鸟受到的冲击力大小
                contactBirdImpulse: 125,
                // 被击飞的冲击力大小
                strikedBirdImpulse: 1250,
                // 被击飞的旋转速度
                strikedBirdAngularVelocity: 50,
                // 出现音效
                //appearSoundPath: "",
                // 是否能踩
                isAbleToBeTrampled: 1,
                // 是否能顶
                isAbleToBeJacked: 0,
                // 前进速度（如果速度为0的话，他就不会在水平方向上移动了；如果编辑器名字中有带“UpDown”，那么就忽略这个配置，就只会上下移动）
                forwardVelocity: 0,
                // 是否会上下移动（如果编辑器名字中有带“UpDown”，那么就忽略这个配置，就只会上下移动）
                isMoveUpDown: 0,
                // 这个系数越大 小鸟上下移动的最大幅度就越大
                upDownCoefficient: 0,
                // 这个系数越大 完成一遍上下移动的时间就越短
                upDownStep: 0,
            },
            // 浮空向左直线移动的小鸟（可向下踩踏、向上、横向碰触即死）
            20010: {
                // 动画路径
                animationJsonPath: "images/bird-animation.json",
                // 动画名称
                animationName: "Bird",
                // 动画帧率（1的话就是，游戏刷新一帧，动画就刷新一帧，0.5的话就是，游戏刷新两帧，动画就刷新一帧）
                animationSpeed: 0.25,
                // 动画偏移
                animationPos: [0, 0],
                // 实际区域宽度
                bodyWidth: 64,
                // 实际区域高度
                bodyHeight: 40,
                // 触碰到的时候的自行车竖直方向上的速度
                contactBikeVelocity: 50,
                // 触碰到的时候的小鸟受到的冲击力大小
                contactBirdImpulse: 125,
                // 被击飞的冲击力大小
                strikedBirdImpulse: 1250,
                // 被击飞的旋转速度
                strikedBirdAngularVelocity: 50,
                // 出现音效
                appearSoundPath: "myLaya/laya/assets/sounds/SE310.mp3",
                // 是否能踩
                isAbleToBeTrampled: 1,
                // 是否能顶
                isAbleToBeJacked: 0,
                // 前进速度（如果速度为0的话，他就不会在水平方向上移动了；如果编辑器名字中有带“UpDown”，那么就忽略这个配置，就只会上下移动）
                forwardVelocity: -10,
                // 是否会上下移动（如果编辑器名字中有带“UpDown”，那么就忽略这个配置，就只会上下移动）
                isMoveUpDown: 0,
                // 这个系数越大 小鸟上下移动的最大幅度就越大
                upDownCoefficient: 0,
                // 这个系数越大 完成一遍上下移动的时间就越短
                upDownStep: 0,
            },
        }
    },
    // 乌云
    Cloud: {
        table: {
            // 没有配置id的都是用这个配置
            default: {
                // 动画路径
                animationJsonPath: "images/trap/enm01.json",
                // 动画名称
                animationName: "enm01",
                // 动画帧率（1的话就是，游戏刷新一帧，动画就刷新一帧，0.5的话就是，游戏刷新两帧，动画就刷新一帧）
                animationSpeed: 1,
                // 动画偏移
                animationPos: [0, 0],
                // 实际区域宽度
                bodyWidth: 87,
                // 实际区域高度
                bodyHeight: 96,
                // 出现音效
                //appearSoundPath: "",
            },
        }
    },
    // 地刺
    groundStab: {
        // 动画帧率（1的话就是，游戏刷新一帧，动画就刷新一帧，0.5的话就是，游戏刷新两帧，动画就刷新一帧）
        animationSpeed: 0.25,
        // 静止状态动画是第几帧（从0开始）
        staticFrame: 2,
    },
    // 上下移动平台
    upDownPlatform: {
        // 配置列表（对应ID的配置）
        table: {
            1: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 30,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 100,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 100,
            },
            11: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 0,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 0,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 0,
            },
            430: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 25,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 0,
            },
            431: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 20,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 5,
            },
            432: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 15,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 10,
            },
            433: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 10,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 15,
            },
            434: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 5,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 20,
            },
            435: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 0,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 25,
            },
            436: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 5,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 20,
            },
            437: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 10,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 15,
            },
            438: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 15,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 10,
            },
            439: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 5,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 20,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 5,
            },
            450: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 25,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 0,
            },
            451: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 20,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 5,
            },
            452: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 15,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 10,
            },
            453: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 10,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 15,
            },
            454: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 5,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 20,
            },
            455: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 0,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 25,
            },
            456: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 5,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 20,
            },
            457: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 10,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 15,
            },
            458: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 15,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 10,
            },
            459: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 20,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 5,
            },
            470: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: false,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 90,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 0,
            },
            471: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 80,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 10,
            },
            472: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 70,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 20,
            },
            473: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 60,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 30,
            },
            474: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 50,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 40,
            },
            475: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 40,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 50,
            },
            476: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 30,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 60,
            },
            477: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 20,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 70,
            },
            478: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 10,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 80,
            },
            479: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 100,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 0,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 90,
            },
            910: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 1000,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 10,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 10,
            },
            1010: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 1000,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 0,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 0,
            },
            1015: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 1500,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 0,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 0,
            },
            1020: {
                // 开始是否朝上运动（true是开始向上；false是开始向下）
                isStartUp: true,
                // 运动速度（0为静止不动；数值越大速度越快；速度快还会影响玩家的物理关系，比如弹起玩家）
                velocity: 2000,
                // 运动范围的顶部距离初始位置的偏移（数值为像素）
                topOffset: 0,
                // 运动范围的底部距离初始位置的偏移（数值为像素）
                bottomOffset: 0,
            }
        }
    },
    //滚石
    rollingStone: {
        // 出现音效
        appearSoundPath: "myLaya/laya/assets/sounds/Sound0316.mp3",
        // 被击飞的冲击力
        strikedImpulse: 12500,
        // 被击飞的旋转速度
        strikedAngularVelocity: 50,
        table: {
            1: {
                // 旋转速度
                angularVelocity: 10
            },
            10: {
                // 旋转速度
                angularVelocity: 0
            },
            20: {
                // 旋转速度
                angularVelocity: -10
            }
        }
    },
    // 火球
    fireBall: {
        // 出现音效
        appearSoundPath: "myLaya/laya/assets/sounds/Sound0311.mp3",
        // 被击飞的冲击力
        strikedImpulse: 12500,
        // 被击飞的旋转速度
        strikedAngularVelocity: 50,
        table: {
            1: {
                // 移动速度（单位：像素, 为正的话是像右移动）
                velocity: -300
            },
            30: {
                // 移动速度（单位：像素, 为正的话是像右移动）
                velocity: -300
            },
            103: {
                // 移动速度（单位：像素, 为正的话是像右移动）
                velocity: 30
            }
        }
    },
    // 可食用物体
    EatableItem: {
        table: {
            // 金币
            0: {
                portable: 0,
                effect: "GoldCoin",
                value: 1,
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 1,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 5金币
            55555: {
                portable: 0,
                effect: "GoldCoin",
                value: 5,
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 1,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 星星
            333: {
                portable: 0,
                effect: "Star",
                value: 1,
            },
            // 经验
            444: {
                portable: 0,
                effect: "Exp",
                value: 5,
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 1,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 经验
            2000: {
                portable: 0,
                effect: "Exp",
                value: 1,
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 1,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 陷阱：减速
            1: {
                portable: 0,
                effect: "Decelerate",
            },
            // 陷阱：削弱跳跃
            6: {
                portable: 0,
                effect: "WeakenJump",
            },
            // 陷阱：遮挡视线
            21: {
                portable: 0,
                effect: "BlockSight",
            },
            // 陷阱：束缚
            26: {
                portable: 0,
                effect: "SpiderWeb",
            },
            // 陷阱：封印
            31: {
                portable: 0,
                effect: "Seal",
            },
            // 陷阱：落雷
            36: {
                portable: 0,
                effect: "Thunder",
            },
            // 增益：加速
            101: {
                portable: 0,
                effect: "Accelerate",
                value: 1,
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益：强化跳跃
            106: {
                portable: 0,
                effect: "PowerJump",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益：无限跳跃
            111: {
                portable: 0,
                effect: "UnlimitedJump",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益：磁铁（只能用于无尽模式，排名竞赛用会当机）
            121: {
                portable: 0,
                effect: "Magnet",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益：无敌
            131: {
                portable: 0,
                effect: "Invincible",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益：超级无敌冲刺
            141: {
                portable: 0,
                effect: "Sprint",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 随机效果（机会命运）（还需要程序支持）（现在不能用用了会出错）
            9999: {
                portable: 0,
                effect: "Random",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 害人道具：减速
            10: {
                portable: 1,
                effect: "Decelerate",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 害人道具：削弱跳跃
            60: {
                portable: 1,
                effect: "WeakenJump",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 害人道具：遮挡视线
            210: {
                portable: 1,
                effect: "BlockSight",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 害人道具：束缚
            260: {
                portable: 1,
                effect: "SpiderWeb",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 害人道具：封印
            1031: {
                portable: 1,
                effect: "Seal",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 害人道具：落雷
            1036: {
                portable: 1,
                effect: "Thunder",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 害人道具：香蕉皮炸弹
            1041: {
                portable: 1,
                effect: "BananaPeel",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益道具：加速
            1010: {
                portable: 1,
                effect: "Accelerate",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益道具：强化跳跃
            1060: {
                portable: 1,
                effect: "PowerJump",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益道具：无限跳跃
            1110: {
                portable: 1,
                effect: "UnlimitedJump",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益道具：磁铁（只能用于无尽模式，排名竞赛用会当机）
            1210: {
                portable: 1,
                effect: "Magnet",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益道具：无敌
            1310: {
                portable: 1,
                effect: "Invincible",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 增益道具：超级无敌冲刺
            1410: {
                portable: 1,
                effect: "Sprint",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            },
            // 随机道具
            99990: {
                portable: 1,
                effect: "Random",
                // 是否会被磁铁吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedByMagnet: 0,
                // 是否会被超级无敌冲刺吸附 1代表可以 0代表不可以 没有这项配置的话 默认是不会被吸附的
                attractedBySprint: 1,
            }
        }
    },
};

Config.defaultItemImagePath = "myLaya/laya/assets/images/crystal_grider_09.png";

Config.effect = {
    // 金币
    GoldCoin: {
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
    },
    // 星星
    Star: {
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
    },
    // 经验
    Exp: {
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
    },
    // 减速（可做：害人减速道具、减速物件区域、减速带）
    Decelerate: {
        // 持续时间（单位：秒）
        duration: 5,
        // 对基础速度的修改比例（比如说基础为10；如果rate为-0.5，那么最终为 10 * ( 1 - 0.5 ) = 5，也就是减速50%; 如果rate为1，那么最终为 10 * ( 1 + 1 ) = 20，也就是加速200% ）
        rate: -0.5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
        // 使用害人道具对象目标类型（不填或者0就是随即其他一名玩家，1就是前一名玩家，2就是所有其他玩家）
        targetType: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_grider_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/SpellEffect.prefab.json",
        // 承受者受击特效路径（只能是动画）（因为平台关系需加上.json）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/DecelerateEffect2.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_grider_00.png",
        // 使用音效
        useSound: "myLaya/laya/assets/sounds/Buff0010.mp3",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0001.mp3",
    },
    // 削弱跳跃（可做：害人削弱跳跃道具、削弱跳跃物件区域）
    WeakenJump: {
        // 持续时间（单位：秒）
        duration: 5,
        // 对基础跳跃力的修改比例（比如说基础为10；如果rate为-0.5，那么最终为 10 * ( 1 - 0.5 ) = 5，也就是削弱跳跃50%; 如果rate为0.5，那么最终为 10 * ( 1 + 0.5 ) = 15，也就是强化跳跃150% ）
        rate: -0.5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
        // 使用害人道具对象目标类型（不填或者0就是随即其他一名玩家，1就是前一名玩家，2就是所有其他玩家）
        targetType: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_frog_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/SpellEffect.prefab.json",
        // 承受者受击特效路径（只能是动画）（因为平台关系需加上.json）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/WeakenJumpEffect2.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_frog_00.png",
        // 使用音效
        useSound: "myLaya/laya/assets/sounds/Buff0060.mp3",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0006.mp3",
    },
    // 遮挡视线（可做：害人遮挡视线道具、遮挡视线物件区域）
    BlockSight: {
        // 持续时间（单位：秒）
        duration: 5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
        // 使用害人道具对象目标类型（不填或者0就是随即其他一名玩家，1就是前一名玩家，2就是所有其他玩家）
        targetType: 0,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_ninja_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/SpellEffect.prefab.json",
        // 承受者受击特效路径（只能是动画）（因为平台关系需加上.json）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/BlockSightEffect2.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_ninja_00.png",
        // 使用音效
        useSound: "myLaya/laya/assets/sounds/Buff0210.mp3",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0021.mp3",
    },
    // 束缚（可做：害人束缚道具、束缚物件区域）
    SpiderWeb: {
        // 持续时间（单位：秒）（-1为不限时长）
        duration: -1,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
        // 身缠蜘蛛网时的跳跃力
        jumpForce: 50,
        // 挣脱需要点击次数
        breakTimes: 3,
        // 使用害人道具对象目标类型（不填或者0就是随即其他一名玩家，1就是前一名玩家，2就是所有其他玩家）
        targetType: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_propeller_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/SpellEffect.prefab.json",
        // 承受者持续特效路径（可以是动画或者静态图片）（因为平台关系需加上.json）
        bearerBuffEffectPath: "myLaya/laya/assets/prefabs/SpiderWebBearerBuffEffect.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_propeller_00.png",
        // 使用音效
        useSound: "myLaya/laya/assets/sounds/Buff0260.mp3",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0026.mp3",
    },
    // 封印
    Seal: {
        // 持续时间（单位：秒）
        duration: 5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
        // 使用害人道具对象目标类型（不填或者0就是随即其他一名玩家，1就是前一名玩家，2就是所有其他玩家）
        targetType: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_icon2_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/SpellEffect.prefab.json",
        // 承受者受击特效路径（只能是动画）（因为平台关系需加上.json）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/SealEffect2.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_icon2_00.png",
        // 使用音效
        useSound: "myLaya/laya/assets/sounds/Buff1031.mp3",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0031.mp3",
    },
    // 落雷
    Thunder: {
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
        // 使用害人道具对象目标类型（不填或者0就是随即其他一名玩家，1就是前一名玩家，2就是所有其他玩家）
        targetType: 2,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_icon1_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/SpellEffect.prefab.json",
        // 承受者受击特效路径（只能是动画）（因为平台关系需加上.json）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/ThunderEffect3.prefab.json",
        // 使用音效
        useSound: "myLaya/laya/assets/sounds/Buff1036.mp3",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0036.mp3",
    },
    // 加速（可做：增益加速道具、加速物件区域、加速带）
    Accelerate: {
        // 持续时间（单位：秒）
        duration: 5,
        // 对基础速度的修改比例（比如说基础为10；如果rate为-0.5，那么最终为 10 * ( 1 - 0.5 ) = 5，也就是减速50%; 如果rate为1，那么最终为 10 * ( 1 + 1 ) = 20，也就是加速200% ）
        rate: 1,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_jet_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/AccelerateEffec.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_jet_00.png",
    },
    // 强化跳跃（可做：增益强化跳跃道具、强化跳跃物件区域）
    PowerJump: {
        // 持续时间（单位：秒）
        duration: 5,
        // 对基础跳跃力的修改比例（比如说基础为10；如果rate为-0.5，那么最终为 10 * ( 1 - 0.5 ) = 5，也就是削弱跳跃50%; 如果rate为0.5，那么最终为 10 * ( 1 + 0.5 ) = 15，也就是强化跳跃150% ）
        rate: 0.5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_drill_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/PowerJumpEffect.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_drill_00.png",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0106.mp3",
    },
    // 无限跳跃（可做：增益无限跳跃道具、无限跳跃物件区域）
    UnlimitedJump: {
        // 持续时间（单位：秒）
        duration: 3,
        // 是否有益（1为有益，0为陷阱/
        isHelpful: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_wing_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/UnlimitedJumpEffect.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_wing_00.png",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0111.mp3",
    },
    // 磁铁（只能用于无尽模式，排名竞赛用会当机）（可做：增益磁铁道具、磁铁物件区域）
    Magnet: {
        // 持续时间（单位：秒）
        duration: 3,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
        // 吸取速度（单位：像素/秒）
        velocity: 2000,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_dragon_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/MagnetEffect.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_dragon_00.png",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0121.mp3",
    },
    // 香蕉皮
    BananaPeel: {
        // 丢出去的香蕉皮的编辑器预制件（因为平台关系需加上.json）
        peelPrefabPath: "myLaya/laya/assets/prefabs/BananaPeel.prefab.json",
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_icon3_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/SpellEffect.prefab.json",
        // 承受者受击特效路径（只能是动画）（因为平台关系需加上.json）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/BananaPeel2.prefab.json",
        // 使用音效
        useSound: "myLaya/laya/assets/sounds/Buff1041.mp3",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0041.mp3",
    },
    // 无敌
    Invincible: {
        // 持续时间（单位：秒）
        duration: 3,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
        // 变大倍数
        scale: 2,
        // 闪烁间隔（单位：帧）
        twinkleInterval: 5,
        // 闪烁透明度（0-1，越低的话越透明）
        twinkleAlpha: 0.5,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_invincible_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/WeakenJumpEffect.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_invincible_00.png",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0121.mp3",
    },
    // 超级无敌冲刺
    Sprint: {
        // 持续时间（单位：秒）
        duration: 3,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
        // 飞行速度（单位：像素/秒）（参考：最高1.5倍速，吃2倍加速，1秒跑960像素）
        velocity: 1000,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_super_09.png",
        // 使用者使用特效路径（只能是动画）（因为平台关系需加上.json）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/DecelerateEffect.prefab.json",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/crystal_super_00.png",
        // 受击音效（获得此BUFF）（地图上吃到、使用道具获得）
        sufferSound: "myLaya/laya/assets/sounds/Buff0121.mp3",
    },
};

// 排行榜分数（按照1/2/3/4名往下配置）
Config.rankScore = [
    1000,
    500,
    200,
    50,
];

// 排名竞赛模式相关配置
Config.rankMode = {
    // 入场消费金币相关
    costInfo: {
        // 进场消费金币，第一位就是第一次进场的消费，第二位就是第二次进场的消费，以此类推，如果没有对应次数的位数，就按最后一位的来算
        coin: [0,],
        // 重置消费的起始时间（每天0点0分0秒开始）
        resetStartTime: new Date(2000, 1, 1, 0, 0, 0, 0).getTime(),
        // 重置消费的周期（单位：毫秒）
        resetCycle: 24 * 60 * 60 * 1000
    },
};

// 钻石扭蛋花费
Config.diamondDrawCost = 50;
// 钻石复活花费
Config.diamondRebornCost = 50;

// 实时赛道的初始点位置
Config.racetrack = {
    startX: 30,
    startY: 80,
    playerYInterval: 5,
    totalLength: 420,
};

// 敌人自行车和玩家接触时的透明度（0完全透明 ~ 1完全不透明）
Config.enemy.contactPlayerAlpha = 0.2;

// 默认结算金币倍率
Config.bike.coinPercent = [
    1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45,
    1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95,
    2
];
// 默认结算里程倍率
Config.bike.distancePercent = [
    1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45,
    1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95,
    2
];
// 默认结算积分倍率
Config.bike.scorePercent = [
    1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45,
    1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95,
    2
];
// 默认结算经验倍率
Config.bike.expPercent = [
    1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45,
    1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95,
    2
];

// 敌人挣脱蜘蛛网每次跳跃之间的时间间隔（单位：帧数（每秒大概60帧））
Config.enemy.spiderWebBreakIntervalFrame = 12;

// 使用道具相关配置
Config.itemUseHistory = {
    // 使用道具提示消失的时间（单位：秒）
    duration: 5,
    // 提示字体大小
    fontSize: 25,
    // 每行高度
    lineHeight: 35,
    // 每隔部分之间的距离
    partSpace: 5,
    // 自己名字的颜色（可以直接写一些常见颜色的英文名，如："red"/"blue"/"black"，也可以使用"#ab01cd"这样的颜色代码）
    selfNameColor: "#bfd5ed",
    // 敌人名字的颜色
    enemyNameColor: "#f6b8af",
    // 其他文字的颜色
    commonTextColor: "white",
    // 描边颜色
    stroke: "black",
    // 描边宽度
    strokeThickness: 3,
    // 图标缩放比例
    iconSale: 0.5,
};

// buff相关配置
Config.buff = {
    text: {
        fill: "white",
        // 倒计时数字大小
        fontSize: 80,
        // 描边颜色
        stroke: "black",
        // 描边宽度
        strokeThickness: 20,
    },
    // 倒计时位置
    textPosition: [0, 140],
    // buff图左右间距
    iconInterval: 30,
    // buff图与自行车上下间距
    containerY: 30,
    // buff图大小（注意也会影响到倒计时数字大小）
    iconScale: 0.25,
};

// 复活位置偏差（单位：像素，正数的话为向下偏）
Config.rebornPosOffsetHeight = -100;

// 家园相关配置
Config.home = {
    // 地板距离顶部的距离（单位：像素）
    floorStartY: 180,
    // 家园的宽度（单位：像素）
    homeWidth: 720,
    // 家园的高度（单位：像素）
    homeHeight: 1280,
    // 默认宠物跳动时间间隔（单位：秒）
    defaultPetsJumpInterval: 2,
    // 默认宠物跳动旋转角度（单位：角度）
    defaultPetsJumpRotation: 5,
    // 默认宠物移动的速度（单位：像素）
    defaultPetsVelocity: 1,
    // 删除物件按钮的图片路径
    removeItemButtonImagePath: "myLaya/laya/assets/images/ButtonClose_Gray.png",
    // 场景物件默认缩放
    defaultSceneItemScale: 1,
    // 物件图标默认缩放
    defaultIconItemScale: 0.2,
    // 边缘移动的一个偏差 偏差越大靠近边缘越容易进行移动
    edgeMoveOffset: {
        x: 50,
        y: 50
    },
    // 边缘移动的速度
    edgeMoveVelocity: {
        x: 5,
        y: 5
    },
    // 战利品摆放上限
    spoilsMaxCount: 100,
    // 宠物摆放上限
    petsMaxCount: 20,
    // 同类宠物摆放上限
    petsOfTheSameKindMaxCount: 1,
    types: ["backgrounds", "floors", "spoils", "pets"],
    // 背景相关配置 最少要有一个id为1的
    backgrounds: [
        {
            id: 1,
            path: "images/home/background/TextureDX2_TaurusBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
        },
        {
            id: 2,
            path: "images/home/background/TextureDX2_AriesBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 3000],
                [11, 10],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle2",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe2",
                // 解锁图片
                image: "images/home/background/TextureDX2_AriesBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 3,
            path: "images/home/background/TextureDX2_CapricornBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 6000],
                [11, 30],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle3",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe3",
                // 解锁图片
                image: "images/home/background/TextureDX2_CapricornBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 4,
            path: "images/home/background/TextureDX2_ScorpiusBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 18000],
                [11, 45],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle4",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe4",
                // 解锁图片
                image: "images/home/background/TextureDX2_ScorpiusBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 5,
            path: "images/home/background/TextureDX2_AquariusBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 30000],
                [11, 55],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle5",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe5",
                // 解锁图片
                image: "images/home/background/TextureDX2_AquariusBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 6,
            path: "images/home/background/TextureDX2_CancerBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 42000],
                [11, 62],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle6",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe6",
                // 解锁图片
                image: "images/home/background/TextureDX2_CancerBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 7,
            path: "images/home/background/TextureDX2_GeminiBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 54000],
                [11, 66],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle7",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe7",
                // 解锁图片
                image: "images/home/background/TextureDX2_GeminiBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 8,
            path: "images/home/background/TextureDX2_LeoBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 66000],
                [11, 70],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle8",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe8",
                // 解锁图片
                image: "images/home/background/TextureDX2_LeoBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 9,
            path: "images/home/background/TextureDX2_LibraBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 78000],
                [11, 74],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle9",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe9",
                // 解锁图片
                image: "images/home/background/TextureDX2_LibraBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 10,
            path: "images/home/background/TextureDX2_PiscesBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [7, 5],
                [11, 60],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle10",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe10",
                // 解锁图片
                image: "images/home/background/TextureDX2_PiscesBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 11,
            path: "images/home/background/TextureDX2_SagittariusBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [8, 5],
                [11, 60],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle11",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe11",
                // 解锁图片
                image: "images/home/background/TextureDX2_SagittariusBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
        {
            id: 12,
            path: "images/home/background/TextureDX2_VirgoBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [9, 5],
                [11, 60],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle12",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe12",
                // 解锁图片
                image: "images/home/background/TextureDX2_VirgoBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.1,
            },
        },
    ],
    // 地板相关配置 最少要有一个id为1的
    floors: [
        {
            id: 1,
            path: "images/home/floor/floor001.png",
            // 场景物件缩放
            itemScale: 1,
        },
        {
            id: 2,
            path: "images/home/floor/floor002.png",
            // 场景物件缩放
            itemScale: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [4, 72000],
                [11, 15],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "FloorUnlockTitle2",
                // 解锁描述
                dsc: "FloorUnlockDescribe2",
                // 解锁图片
                image: "images/home/floor/floor002.png",
                // 解锁图片缩放
                imageScale: 0.27,
            },
        },
        {
            id: 3,
            path: "images/home/floor/floor003.png",
            // 场景物件缩放
            itemScale: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [4, 432000],
                [11, 40],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "FloorUnlockTitle3",
                // 解锁描述
                dsc: "FloorUnlockDescribe3",
                // 解锁图片
                image: "images/home/floor/floor003.png",
                // 解锁图片缩放
                imageScale: 0.27,
            },
        },
        {
            id: 4,
            path: "images/home/floor/floor004.png",
            // 场景物件缩放
            itemScale: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [4, 864000],
                [11, 50],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "FloorUnlockTitle4",
                // 解锁描述
                dsc: "FloorUnlockDescribe4",
                // 解锁图片
                image: "images/home/floor/floor004.png",
                // 解锁图片缩放
                imageScale: 0.27,
            },
        },
        {
            id: 5,
            path: "images/home/floor/floor005.png",
            // 场景物件缩放
            itemScale: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [4, 1296000],
                [11, 60],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "FloorUnlockTitle5",
                // 解锁描述
                dsc: "FloorUnlockDescribe5",
                // 解锁图片
                image: "images/home/floor/floor005.png",
                // 解锁图片缩放
                imageScale: 0.27,
            },
        },
        {
            id: 6,
            path: "images/home/floor/floor006.png",
            // 场景物件缩放
            itemScale: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [4, 1728000],
                [11, 65],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "FloorUnlockTitle6",
                // 解锁描述
                dsc: "FloorUnlockDescribe6",
                // 解锁图片
                image: "images/home/floor/floor006.png",
                // 解锁图片缩放
                imageScale: 0.27,
            },
        },
        {
            id: 7,
            path: "images/home/floor/floor007.png",
            // 场景物件缩放
            itemScale: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [4, 2160000],
                [11, 69],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "FloorUnlockTitle7",
                // 解锁描述
                dsc: "FloorUnlockDescribe7",
                // 解锁图片
                image: "images/home/floor/floor007.png",
                // 解锁图片缩放
                imageScale: 0.27,
            },
        },
    ],
    // 战利品板相关配置 最少要有一个id为1的
    spoils: [
        {
            id: 102,
            path: "images/home/item/decoDX2_Taurus-102.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [12, 2, 5],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle1",
                // 解锁描述
                dsc: "SpoilUnlockDescribe1",
                // 解锁图片
                image: "images/home/item/decoDX2_Taurus-102.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 101,
            path: "images/home/item/decoDX2_Taurus-101.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [12, 3, 5],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle2",
                // 解锁描述
                dsc: "SpoilUnlockDescribe2",
                // 解锁图片
                image: "images/home/item/decoDX2_Taurus-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 111,
            path: "images/home/item/decoDX2_Virgo-101.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [12, 4, 5],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle3",
                // 解锁描述
                dsc: "SpoilUnlockDescribe3",
                // 解锁图片
                image: "images/home/item/decoDX2_Virgo-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 22,
            path: "images/home/item/decoDX1_Beijing-8.png",
            // 场景物件缩放
            itemScale: 1,
            // 物件图标缩放
            iconScale: 0.7,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [12, 5, 5],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle4",
                // 解锁描述
                dsc: "SpoilUnlockDescribe4",
                // 解锁图片
                image: "images/home/item/decoDX1_Beijing-8.png",
                // 解锁图片缩放
                imageScale: 2,
            },
        },
        {
            id: 1,
            path: "images/home/item/decoDX2_Aquarius-101.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [13, 30],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle5",
                // 解锁描述
                dsc: "SpoilUnlockDescribe5",
                // 解锁图片
                image: "images/home/item/decoDX2_Aquarius-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 73,
            path: "images/home/item/decoDX2_Pisces-101.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [13, 45],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle6",
                // 解锁描述
                dsc: "SpoilUnlockDescribe6",
                // 解锁图片
                image: "images/home/item/decoDX2_Pisces-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 21,
            path: "images/home/item/decoDX1_Beijing-6.png",
            // 场景物件缩放
            itemScale: 0.7,
            // 物件图标缩放
            iconScale: 0.6,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [13, 60],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle7",
                // 解锁描述
                dsc: "SpoilUnlockDescribe7",
                // 解锁图片
                image: "images/home/item/decoDX1_Beijing-6.png",
                // 解锁图片缩放
                imageScale: 1.6,
            },
        },
        {
            id: 61,
            path: "images/home/item/decoDX1_Beijing-7.png",
            // 场景物件缩放
            itemScale: 0.8,
            // 物件图标缩放
            iconScale: 0.7,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [13, 75],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle8",
                // 解锁描述
                dsc: "SpoilUnlockDescribe8",
                // 解锁图片
                image: "images/home/item/decoDX1_Beijing-7.png",
                // 解锁图片缩放
                imageScale: 2,
            },
        },
        {
            id: 41,
            path: "images/home/item/decoDX2_Gemini-101.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [11, 32],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle9",
                // 解锁描述
                dsc: "SpoilUnlockDescribe9",
                // 解锁图片
                image: "images/home/item/decoDX2_Gemini-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 42,
            path: "images/home/item/decoDX2_Gemini-102.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [11, 34],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle10",
                // 解锁描述
                dsc: "SpoilUnlockDescribe10",
                // 解锁图片
                image: "images/home/item/decoDX2_Gemini-102.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 91,
            path: "images/home/item/decoDX2_Scorpius-2.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [11, 36],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle11",
                // 解锁描述
                dsc: "SpoilUnlockDescribe11",
                // 解锁图片
                image: "images/home/item/decoDX2_Scorpius-2.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 92,
            path: "images/home/item/decoDX2_Scorpius-3.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [11, 38],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle12",
                // 解锁描述
                dsc: "SpoilUnlockDescribe12",
                // 解锁图片
                image: "images/home/item/decoDX2_Scorpius-3.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 54,
            path: "images/home/item/decoDX2_Leo-104.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.3,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [5, 3000],
                [11, 42],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle13",
                // 解锁描述
                dsc: "SpoilUnlockDescribe13",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-104.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 53,
            path: "images/home/item/decoDX2_Leo-103.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [5, 3600],
                [11, 46],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle14",
                // 解锁描述
                dsc: "SpoilUnlockDescribe14",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-103.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 62,
            path: "images/home/item/decoDX2_Libra-102.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [5, 4200],
                [11, 52],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle15",
                // 解锁描述
                dsc: "SpoilUnlockDescribe15",
                // 解锁图片
                image: "images/home/item/decoDX2_Libra-102.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 141,
            path: "images/home/item/decoDX1_Newyork-6.png",
            // 场景物件缩放
            itemScale: 0.9,
            // 物件图标缩放
            iconScale: 0.7,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [5, 4800],
                [11, 57],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle16",
                // 解锁描述
                dsc: "SpoilUnlockDescribe16",
                // 解锁图片
                image: "images/home/item/decoDX1_Newyork-6.png",
                // 解锁图片缩放
                imageScale: 2,
            },
        },
        {
            id: 32,
            path: "images/home/item/decoDX2_Capricorn-101.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [4, 712800],
                [11, 59],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle17",
                // 解锁描述
                dsc: "SpoilUnlockDescribe17",
                // 解锁图片
                image: "images/home/item/decoDX2_Capricorn-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 52,
            path: "images/home/item/decoDX2_Leo-101.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [4, 950400],
                [11, 64],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle18",
                // 解锁描述
                dsc: "SpoilUnlockDescribe18",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 51,
            path: "images/home/item/decoDX2_Leo-3.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [4, 1188000],
                [11, 68],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle19",
                // 解锁描述
                dsc: "SpoilUnlockDescribe19",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-3.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 142,
            path: "images/home/item/decoDX1_Newyork-4.png",
            // 场景物件缩放
            itemScale: 0.8,
            // 物件图标缩放
            iconScale: 0.7,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [4, 1425600],
                [11, 72],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle20",
                // 解锁描述
                dsc: "SpoilUnlockDescribe20",
                // 解锁图片
                image: "images/home/item/decoDX1_Newyork-4.png",
                // 解锁图片缩放
                imageScale: 1.8,
            },
        },
        {
            id: 31,
            path: "images/home/item/decoDX2_Capricorn-1.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [6, 21000],
                [11, 61],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle21",
                // 解锁描述
                dsc: "SpoilUnlockDescribe21",
                // 解锁图片
                image: "images/home/item/decoDX2_Capricorn-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 71,
            path: "images/home/item/decoDX2_Pisces-1.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.3,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [6, 27000],
                [11, 66],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle22",
                // 解锁描述
                dsc: "SpoilUnlockDescribe22",
                // 解锁图片
                image: "images/home/item/decoDX2_Pisces-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 55,
            path: "images/home/item/decoDX2_Leo-105.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.3,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [6, 33000],
                [11, 70],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle23",
                // 解锁描述
                dsc: "SpoilUnlockDescribe23",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-105.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 72,
            path: "images/home/item/decoDX2_Pisces-2.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 1000],
                [2, 25],
                [6, 39000],
                [11, 74],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle24",
                // 解锁描述
                dsc: "SpoilUnlockDescribe24",
                // 解锁图片
                image: "images/home/item/decoDX2_Pisces-2.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 33,
            path: "images/home/item/decoDX2_Capricorn-102.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.2,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [5, 6000],
                [11, 40],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle25",
                // 解锁描述
                dsc: "SpoilUnlockDescribe25",
                // 解锁图片
                image: "images/home/item/decoDX2_Capricorn-102.png",
                // 解锁图片缩放
                imageScale: 0.7,
            },
        },
        {
            id: 82,
            path: "images/home/item/decoDX2_Sagittarius-101.png",
            // 场景物件缩放
            itemScale: 0.55,
            // 物件图标缩放
            iconScale: 0.22,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [7, 20],
                [11, 40],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle26",
                // 解锁描述
                dsc: "SpoilUnlockDescribe26",
                // 解锁图片
                image: "images/home/item/decoDX2_Sagittarius-101.png",
                // 解锁图片缩放
                imageScale: 0.9,
            },
        },
        {
            id: 74,
            path: "images/home/item/decoDX2_Pisces-102.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.18,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [8, 20],
                [11, 40],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle27",
                // 解锁描述
                dsc: "SpoilUnlockDescribe27",
                // 解锁图片
                image: "images/home/item/decoDX2_Pisces-102.png",
                // 解锁图片缩放
                imageScale: 0.8,
            },
        },
        {
            id: 81,
            path: "images/home/item/decoDX2_Sagittarius-1.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.2,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [9, 20],
                [11, 40],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "SpoilUnlockTitle28",
                // 解锁描述
                dsc: "SpoilUnlockDescribe28",
                // 解锁图片
                image: "images/home/item/decoDX2_Sagittarius-1.png",
                // 解锁图片缩放
                imageScale: 0.7,
            },
        },
    ],
    // 宠物板相关配置 最少要有一个id为1的
    pets: [
        {
            id: 101,
            path: "images/home/item/decoDX2_Taurus-1.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 0.8,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 2,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [10, 3],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle1",
                // 解锁描述
                dsc: "PetUnlockDescribe1",
                // 解锁图片
                image: "images/home/item/decoDX2_Taurus-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 41,
            path: "images/home/item/decoDX2_Gemini-1.png",
            // 场景物件缩放
            itemScale: 0.6,
            // 物件图标缩放
            iconScale: 0.4,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.4,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [10, 6],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle2",
                // 解锁描述
                dsc: "PetUnlockDescribe2",
                // 解锁图片
                image: "images/home/item/decoDX2_Gemini-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 11,
            path: "images/home/item/decoDX2_Aries-1.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.2,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 0.5,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [10, 12],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle3",
                // 解锁描述
                dsc: "PetUnlockDescribe3",
                // 解锁图片
                image: "images/home/item/decoDX2_Aries-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 42,
            path: "images/home/item/decoDX2_Gemini-2.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.5,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [10, 18],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle4",
                // 解锁描述
                dsc: "PetUnlockDescribe4",
                // 解锁图片
                image: "images/home/item/decoDX2_Gemini-2.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 21,
            path: "images/home/item/decoDX2_Cancer-1.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.3,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 19200],
                [11, 51],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle5",
                // 解锁描述
                dsc: "PetUnlockDescribe5",
                // 解锁图片
                image: "images/home/item/decoDX2_Cancer-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 51,
            path: "images/home/item/decoDX2_Leo-4.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.05,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 28800],
                [11, 60],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle6",
                // 解锁描述
                dsc: "PetUnlockDescribe6",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-4.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 52,
            path: "images/home/item/decoDX2_Leo-5.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.15,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 38400],
                [11, 65],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle7",
                // 解锁描述
                dsc: "PetUnlockDescribe7",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-5.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 53,
            path: "images/home/item/decoDX2_Leo-6.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.3,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.25,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [6, 52800],
                [11, 71],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle8",
                // 解锁描述
                dsc: "PetUnlockDescribe8",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-6.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 2,
            path: "images/home/item/decoDX2_Aquarius-3.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.1,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [4, 918000],
                [11, 56],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle9",
                // 解锁描述
                dsc: "PetUnlockDescribe9",
                // 解锁图片
                image: "images/home/item/decoDX2_Aquarius-3.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 1,
            path: "images/home/item/decoDX2_Aquarius-1.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [4, 1285200],
                [11, 63],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle10",
                // 解锁描述
                dsc: "PetUnlockDescribe10",
                // 解锁图片
                image: "images/home/item/decoDX2_Aquarius-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 121,
            path: "images/home/item/decoDX1_Newyork-2.png",
            // 场景物件缩放
            itemScale: 1,
            // 物件图标缩放
            iconScale: 0.8,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.35,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1.5,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [4, 1652400],
                [11, 67],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0,
                expPercent: 0,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle11",
                // 解锁描述
                dsc: "PetUnlockDescribe11",
                // 解锁图片
                image: "images/home/item/decoDX1_Newyork-2.png",
                // 解锁图片缩放
                imageScale: 2,
            },
        },
        {
            id: 91,
            path: "images/home/item/decoDX2_Scorpius-1.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.35,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1.5,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 2000],
                [2, 50],
                [4, 2386800],
                [11, 73],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0,
                distancePercent: 0,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle12",
                // 解锁描述
                dsc: "PetUnlockDescribe12",
                // 解锁图片
                image: "images/home/item/decoDX2_Scorpius-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 102,
            path: "images/home/item/decoDX2_Taurus-3.png",
            // 场景物件缩放
            itemScale: 0.6,
            // 物件图标缩放
            iconScale: 0.4,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 2,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [5, 9000],
                [11, 50],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle13",
                // 解锁描述
                dsc: "PetUnlockDescribe13",
                // 解锁图片
                image: "images/home/item/decoDX2_Taurus-3.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 61,
            path: "images/home/item/decoDX2_Libra-1.png",
            // 场景物件缩放
            itemScale: 0.7,
            // 物件图标缩放
            iconScale: 0.4,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 2,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 5,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 0.5,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [7, 10],
                [11, 50],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle14",
                // 解锁描述
                dsc: "PetUnlockDescribe14",
                // 解锁图片
                image: "images/home/item/decoDX2_Libra-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 122,
            path: "images/home/item/decoDX1_Newyork-1.png",
            // 场景物件缩放
            itemScale: 1.2,
            // 物件图标缩放
            iconScale: 0.8,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.35,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1.5,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [8, 10],
                [11, 50],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle15",
                // 解锁描述
                dsc: "PetUnlockDescribe15",
                // 解锁图片
                image: "images/home/item/decoDX1_Newyork-1.png",
                // 解锁图片缩放
                imageScale: 2,
            },
        },
        {
            id: 131,
            path: "images/home/item/decoDX1_Beijing-1.png",
            // 场景物件缩放
            itemScale: 1.2,
            // 物件图标缩放
            iconScale: 0.8,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 1.35,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 10,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 1.5,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 5000],
                [2, 100],
                [9, 10],
                [11, 50],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.05,
                distancePercent: 0.05,
                scorePercent: 0.05,
                expPercent: 0.05,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle16",
                // 解锁描述
                dsc: "PetUnlockDescribe16",
                // 解锁图片
                image: "images/home/item/decoDX1_Beijing-1.png",
                // 解锁图片缩放
                imageScale: 2,
            },
        },
    ]
};

// 解锁条件相关配置
// ID已经对应功能了，不要更改ID和描述的对应关系
Config.conditions = {
    //需消费 #### 数量的金币
    1: "${0} Gold Coins",
    //需消费 #### 数量的钻石
    2: "${0} Diamonds",
    //需要解锁地图 ####（因无尽旅程模式改了，所以这条现在不要使用）
    3: "Need to unlock Map: ${0}",
    //需要总里程达到 ####
    4: "Total distance required to reach ${0}m",
    //需要最远里程达到过 ####
    5: "Total farthest distance required to reach ${0}m",
    //需要积分达到过 ####
    6: "Score required to reach ${0}",
    //需要总里程排名达到过第 #### 名
    7: "Need to rank ${0}st in total distance",
    //需要最远里程排名达到过第 #### 名
    8: "Need to rank ${0}st in farthest distance",
    //需要积分排名达到过第 #### 名
    9: "Need to rank ${0}st in score",
    //需要进行 #### 次排名竞赛
    10: "Need to takes ${0} times map game",
    //需要达到 ### 等级
    11: "Need to reach level ${0}",
    //闯通 ### 关卡
    12: "Need to get through level ${0}-${1}",
    //闯关模式星星总数达到 ###
    13: "Need to get ${0} game level stars",
};

Config.conditionsEnum = {
    costCoin: 1,
    costDiamond: 2,
    unlockMap: 3,
    distance: 4,
    distanceRecord: 5,
    score: 6,
    totalDistanceRank: 7,
    farthestDistanceRank: 8,
    scoreRank: 9,
    mapGameTimes: 10,
    level: 11,
    gameLevel: 12,
    gameLevelStar: 13,
};

if (window.ipConfig && window.ipConfig.innerHTML.length) {
    Config.serverUrl = window.ipConfig.innerText;
} else {
    Config.serverUrl = "//localhost:10001";
}

// 排行榜起始时间（7个位置按顺序依次是 年 月 日 时 分 秒）（月份：0为1月份、11为12月份）
Config.rankStartTime = new Date(2019, 6, 1, 0, 0, 0);
// 排行榜刷新时间间隔（单位：秒）
Config.rankRefreshInterval = 7 * 24 * 60 * 60;

// 玩家自行车排名文本相关配置
Config.bike.rankText = {
    // X轴位置
    positionX: 50,
    // Y轴位置
    positionY: -50,
};

// 敌人自行车名字文本相关配置
Config.bike.enemyNameText = {
    // 字体样式
    style: {
        // 颜色
        fill: "white",
        // 字体大小
        fontSize: 20,
    },
    // Y轴位置
    positionY: -100
};

// 敌人自行车头像图片相关配置
Config.bike.enemyHeadImage = {
    // Y轴位置
    positionY: -60,
    // 宽
    width: 30,
    // 高
    height: 30,
};

// 默认敌人头像路径
Config.defaultEnemyHeadImagePath = "myLaya/laya/assets/images/UserIconDefault.png";

//音效路径
Config.soundPath = {
    firstJump: "myLaya/laya/assets/sounds/SoundSE101.mp3",
    secondJump: "myLaya/laya/assets/sounds/SoundSE102.mp3",
    extraJump: "myLaya/laya/assets/sounds/SoundSE103.mp3",
    eatGoldCoin: "myLaya/laya/assets/sounds/329.mp3",
    eatStar: "myLaya/laya/assets/sounds/SE009.mp3",
    eatExp: "myLaya/laya/assets/sounds/333.mp3",
    eatAccGem: "myLaya/laya/assets/sounds/SE202.mp3",
    die: "myLaya/laya/assets/sounds/SE104.mp3",
    throughFlag: "myLaya/laya/assets/sounds/SoundBGM202.mp3",
    //吃随机道具的音效
    eatRandomItem: "myLaya/laya/assets/sounds/Buff9999.mp3",
    //复活后，带泡泡自动向前移动时
    bubbleFloat: "myLaya/laya/assets/sounds/Sound0017.mp3",
    //复活后，带泡泡自动向前移动，泡泡消失时的音效
    bubbleDestroy: "myLaya/laya/assets/sounds/Sound0329.mp3",
    //关卡开始倒数，3、2、1的音效
    countdown: "myLaya/laya/assets/sounds/SoundSE006.mp3",
    //关卡倒数为0，正式开始的音效
    startLevel: "myLaya/laya/assets/sounds/SoundSE007.mp3",
    //无尽模式引导倒计时音效
    guideCountDown: "myLaya/laya/assets/sounds/SoundSE006.mp3",
    //无尽模式引导倒计时GO音效
    guideStartGo: "myLaya/laya/assets/sounds/SoundSE007.mp3",
};

// 无尽模式开始路段长度（单位：像素）
Config.startRoadLength = 3000;

// 引导动画相关配置
Config.guideAction = {
    // 动画间隔时间（单位：帧）
    delayFrame: 30,
    // 开始所放的倍数
    startScale: 10,
};

// 战前准备随机道具列表
Config.preparationRandomEffectList = {
    // 无尽模式
    endless: [
        "Accelerate",
        "PowerJump",
        "UnlimitedJump",
        "Magnet",
        "Invincible",
        "Sprint",
    ],
    // 排名模式
    map: [
        "Decelerate",
        "WeakenJump",
        "BlockSight",
        "SpiderWeb",
        "Seal",
        "Thunder",
        "BananaPeel",
        "Accelerate",
        "PowerJump",
        "UnlimitedJump",
        "Invincible",
        "Sprint",
    ],
    // 闯关模式
    gameLevel: [
        "Accelerate",
        "PowerJump",
        "UnlimitedJump",
        "Magnet",
        "Invincible",
        "Sprint",
    ]
};

// 战前准备随机自行车ID列表
Config.preparationRandomBikeList = {
    // 无尽模式
    endless: [
        21, 22, 23,
        7, 42, 43,
        3, 52, 25
    ],
    // 排名模式
    map: [
        9, 24, 18,
        14, 16, 17,
        3, 52, 25
    ],
    // 闯关模式
    gameLevel: [
        21, 22, 23,
        7, 42, 43,
        3, 52, 25
    ]
};

// 每日在线礼包列表
Config.giftList = [
    {
        // 在线分钟数
        onlineMinutes: 0,
        // 奖励金币
        rewardCoin: 2000,
        // 奖励钻石
        rewardDiamond: 50,
    },
    {
        // 在线分钟数
        onlineMinutes: 5,
        // 奖励金币
        rewardCoin: 2500,
        // 奖励钻石
        rewardDiamond: 60,
    },
    {
        // 在线分钟数
        onlineMinutes: 10,
        // 奖励金币
        rewardCoin: 3000,
        // 奖励钻石
        rewardDiamond: 70,
    },
    {
        // 在线分钟数
        onlineMinutes: 15,
        // 奖励金币
        rewardCoin: 3500,
        // 奖励钻石
        rewardDiamond: 80,
    },
    {
        // 在线分钟数
        onlineMinutes: 30,
        // 奖励金币
        rewardCoin: 4000,
        // 奖励钻石
        rewardDiamond: 90,
    },
];

// 每天重置各种奖励的时间（小时）(范例：0为凌晨0点，23为晚上11点)
Config.resetRewardHour = 0;

// 签到奖励列表
// 按顺序从上往下是第一天到第七天
Config.signRewardList = [
    {diamond: 200},
    {bike: 2},
    {coin: 10000},
    {diamond: 300},
    {bike: 51},
    {coin: 15000},
    {bike: 3, coin: 20000, diamond: 400},
];

// 每天广告扭蛋的次数
Config.advertDrawBikeTime = 3;

// 进入关卡的最短加载时间（单位：秒）
Config.minLoadingTime = 3;

// 进入关卡前的加载界面的提示数量
Config.tipCount = 9;

// 各个动画的速度（1表示画面渲染一帧，动画播放一帧，0.5表示画面渲染两帧，动画播放一帧）
Config.animationSpeed = {
    // 速度提升提示
    speedUpNotice: 0.2,
    // 随机道具
    randomItem: 0.1,
};

// 需解锁系统
// 如果不配置title，image，dsc的话 那么解锁的时候就不会显示解锁提示
Config.lockSystems = {
    // 扭蛋
    drawButton: {
        // 解锁条件
        condition: [12, 2, 3],
        // 解锁内容标题
        title: "SystemUnlockTitle1",
        // 解锁描述
        dsc: "SystemUnlockDescribe1",
        // 解锁图片
        image: "myLaya/laya/assets/images/button-draw-scene.png",
        // 解锁图片缩放
        imageScale: 2,
    },
    // 签到
    signButton: {
        // 解锁条件
        condition: [12, 2, 5],
        // 解锁内容标题
        title: "SystemUnlockTitle11",
        // 解锁描述
        dsc: "SystemUnlockDescribe11",
        // 解锁图片
        image: "myLaya/laya/assets/images/icon-sign.png",
        // 解锁图片缩放
        imageScale: 2,
    },
    // 礼包
    giftButton: {
        // 解锁条件
        condition: [12, 1, 5],
        // 解锁内容标题
        title: "SystemUnlockTitle12",
        // 解锁描述
        dsc: "SystemUnlockDescribe12",
        // 解锁图片
        image: "myLaya/laya/assets/images/icon-gift.png",
        // 解锁图片缩放
        imageScale: 2,
    },
    // 商店（福利）
    shopButton: {
        // 解锁条件
        condition: [12, 3, 5],
        // 解锁内容标题
        title: "SystemUnlockTitle13",
        // 解锁描述
        dsc: "SystemUnlockDescribe13",
        // 解锁图片
        image: "myLaya/laya/assets/images/ButtonShop.png",
        // 解锁图片缩放
        imageScale: 2,
    },
    // 排名竞赛模式
    mapModeButton: {
        // 解锁条件
        condition: [11, 10],
        // 解锁内容标题
        title: "SystemUnlockTitle2",
        // 解锁描述
        dsc: "SystemUnlockDescribe2",
        // 解锁图片
        image: "myLaya/laya/assets/images/button-13.png",
        // 解锁图片缩放
        imageScale: 1.5,
    },
    // 排行榜
    rankButton: {
        // 解锁条件
        condition: [10, 1],
        // 解锁内容标题
        title: "SystemUnlockTitle3",
        // 解锁描述
        dsc: "SystemUnlockDescribe3",
        // 解锁图片
        image: "myLaya/laya/assets/images/ButtonRanking_Orange.png",
        // 解锁图片缩放
        imageScale: 2,
    },
    // 家园
    homeButton: {
        // 解锁条件
        condition: [10, 2],
        // 解锁内容标题
        title: "SystemUnlockTitle4",
        // 解锁描述
        dsc: "SystemUnlockDescribe4",
        // 解锁图片
        image: "myLaya/laya/assets/images/ButtonSocial_Blue.png",
        // 解锁图片缩放
        imageScale: 2,
    },
    // 战前准备界面（目前可能默认开启比较合适）
    preparationScene: {
        // 解锁条件
        condition: [11, 1],
    },
    // 车库
    bikeButton: {
        // 解锁条件
        condition: [12, 1, 3],
        // 解锁内容标题
        title: "SystemUnlockTitle6",
        // 解锁描述
        dsc: "SystemUnlockDescribe6",
        // 解锁图片
        image: "myLaya/laya/assets/images/button-bike-scene.png",
        // 解锁图片缩放
        imageScale: 2,
    },
    // 无尽模式
    endlessModeButton: {
        // 解锁条件
        condition: [11, 8],
        // 解锁内容标题
        title: "SystemUnlockTitle5",
        // 解锁描述
        dsc: "SystemUnlockDescribe5",
        // 解锁图片
        image: "myLaya/laya/assets/images/button-11.png",
        // 解锁图片缩放
        imageScale: 1.5,
    },
    // 自行车能力
    upgradePanelButton: {
        // 解锁条件
        condition: [12, 3, 3],
        // 解锁内容标题
        title: "SystemUnlockTitle7",
        // 解锁描述
        dsc: "SystemUnlockDescribe7",
        // 解锁图片
        image: "myLaya/laya/assets/images/button-skill.png",
        // 解锁图片缩放
        imageScale: 2,
    }
};

// 闯关模式地图配置
Config.gameLevelMode = {
    // 闯关模式复活次数
    rebornTimes: 1,
    // 大地图列表
    mapList: [
        {
            // 解锁需要的星星数
            starCountUnlockNeeded: 0,
            // 地图描述
            dsc: "Select Map1",
            // 主页封面图
            mainCover: "images/map/DX2_Taurus/TextureDX2_TaurusMap.png",
            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
            texture: {
                // 侧边
                side: "images/map/DX2_Taurus/TextureDX2_TaurusRoad01SideSkin.png",
                // 底部
                top: "images/map/DX2_Taurus/TextureDX2_TaurusRoad01TopSkin.png",
                // 侧边
                side2: "images/map/DX2_Taurus/TextureDX2_TaurusRoad02SideSkin.png",
                // 底部
                top2: "images/map/DX2_Taurus/TextureDX2_TaurusRoad02TopSkin.png",
                // 背景 有多少层背景就配置多少张
                bg: [
                    "images/map/DX2_Taurus/TextureDX2_TaurusBackground01.png",
                    "images/map/DX2_Taurus/TextureDX2_TaurusBackground02.png",
                    "images/map/DX2_Taurus/TextureDX2_TaurusBackground03.png",
                ],
            },
            // 视差背景系数：左右
            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
            // 视差背景系数：上下
            verticalParallaxDepth: [1, 0.95, 0.9, 0],
            // 背景的Y轴位置
            bgY: [0, 256, 256],
            // 背景缩放系数
            bgScale: [1, 1, 1],
            // 自行车速度（基础：20）
            bikeVelocity: 20,
            // 重力（基础：-175）
            gravity: -175,
            // 跳跃爆发力（基础：12800）
            jumpForce: 250,
            // BGM路径
            bgmPath: "myLaya/laya/assets/sounds/01_oushiza.mp3",
            // 道具随机表
            itemRandomTableList: {
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
                Magnet: 1,
                Invincible: 1,
                Sprint: 1,
            },
            // 每一关的地图配置
            levelList: [
                "myLaya/laya/pages/Map/Map-1-1.scene.json",
                "myLaya/laya/pages/Map/Map-1-2.scene.json",
                "myLaya/laya/pages/Map/Map-1-3.scene.json",
                "myLaya/laya/pages/Map/Map-1-4.scene.json",
                "myLaya/laya/pages/Map/Map-1-5.scene.json",
            ],
            rewardList: [
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {bike: 1, diamond: 20},
                {coin: 1000, diamond: 20},
                {bike: 4, diamond: 20},
            ],
        },
        {
            // 解锁需要的星星数
            starCountUnlockNeeded: 8,
            // 地图描述
            dsc: "Select Map2",
            // 主页封面图
            mainCover: "images/map/DX2_Aries/TextureDX2_AriesMap.png",
            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
            texture: {
                // 侧边
                side: "images/map/DX2_Aries/TextureDX2_AriesRoad01SideSkin.png",
                // 底部
                top: "images/map/DX2_Aries/TextureDX2_AriesRoad01TopSkin.png",
                // 侧边
                side2: "images/map/DX2_Aries/TextureDX2_AriesRoad02SideSkin.png",
                // 底部
                top2: "images/map/DX2_Aries/TextureDX2_AriesRoad02TopSkin.png",
                // 背景 有多少层背景就配置多少张
                bg: [
                    "images/map/DX2_Aries/TextureDX2_AriesBackground01.png",
                    "images/map/DX2_Aries/TextureDX2_AriesBackground02.png",
                    "images/map/DX2_Aries/TextureDX2_AriesBackground03.png",
                ],
            },
            // 视差背景系数：左右
            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
            // 视差背景系数：上下
            verticalParallaxDepth: [1, 0.95, 0.9, 0],
            // 背景的Y轴位置
            bgY: [0, 128, 256],
            // 背景缩放系数
            bgScale: [1, 1, 1],
            // 自行车速度（基础：20）
            bikeVelocity: 20,
            // 重力（基础：-175）
            gravity: -175,
            // 跳跃爆发力（基础：12800）
            jumpForce: 250,
            // BGM路径
            bgmPath: "myLaya/laya/assets/sounds/05_ohitsujiza.mp3",
            // 道具随机表
            itemRandomTableList: {
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
                Magnet: 1,
                Invincible: 1,
                Sprint: 1,
            },
            // 每一关的地图配置
            levelList: [
                "myLaya/laya/pages/Map/Map-2-1.scene.json",
                "myLaya/laya/pages/Map/Map-2-2.scene.json",
                "myLaya/laya/pages/Map/Map-2-3.scene.json",
                "myLaya/laya/pages/Map/Map-2-4.scene.json",
                "myLaya/laya/pages/Map/Map-2-5.scene.json",
            ],
            rewardList: [
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {bike: 2, diamond: 20},
            ],
        },
        {
            // 解锁需要的星星数
            starCountUnlockNeeded: 20,
            // 地图描述
            dsc: "Select Map3",
            // 主页封面图
            mainCover: "images/map/DX2_Aquarius/TextureDX2_AquariusMap.png",
            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
            texture: {
                // 侧边
                side: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad01SideSkin.png",
                // 底部
                top: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad01TopSkin.png",
                // 侧边
                side2: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad02SideSkin.png",
                // 底部
                top2: "images/map/DX2_Aquarius/TextureDX2_AquariusRoad02TopSkin.png",
                // 背景 有多少层背景就配置多少张
                bg: [
                    "images/map/DX2_Aquarius/TextureDX2_AquariusBackground01.png",
                    "images/map/DX2_Aquarius/TextureDX2_AquariusBackground02.png",
                    "images/map/DX2_Aquarius/TextureDX2_AquariusBackground03.png",
                ],
            },
            // 视差背景系数：左右
            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
            // 视差背景系数：上下
            verticalParallaxDepth: [1, 1, 0.9, 0],
            // 背景的Y轴位置
            bgY: [0, 0, 256],
            // 背景缩放系数
            bgScale: [1, 1.7, 1],
            // 自行车速度（基础：20）
            bikeVelocity: 20,
            // 重力（基础：-175）
            gravity: -175,
            // 跳跃爆发力（基础：12800）
            jumpForce: 250,
            // BGM路径
            bgmPath: "myLaya/laya/assets/sounds/03_mizugameza.mp3",
            // 道具随机表
            itemRandomTableList: {
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
                Magnet: 1,
                Invincible: 1,
                Sprint: 1,
            },
            // 每一关的地图配置
            levelList: [
                "myLaya/laya/pages/Map/Map-3-1.scene.json",
                "myLaya/laya/pages/Map/Map-3-2.scene.json",
                "myLaya/laya/pages/Map/Map-3-3.scene.json",
                "myLaya/laya/pages/Map/Map-3-4.scene.json",
                "myLaya/laya/pages/Map/Map-3-5.scene.json",
            ],
            rewardList: [
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {bike: 20, diamond: 20},
            ],
        },
        {
            // 解锁需要的星星数
            starCountUnlockNeeded: 35,
            // 地图描述
            dsc: "Select Map4",
            // 主页封面图
            mainCover: "images/map/DX3_IceAge/TextureDX3_IceAgeMap.png",
            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
            texture: {
                // 侧边
                side: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad01SideSkin.png",
                // 底部
                top: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad01TopSkin.png",
                // 侧边
                side2: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad02SideSkin.png",
                // 底部
                top2: "images/map/DX3_IceAge/TextureDX3_IceAgeRoad02TopSkin.png",
                // 背景 有多少层背景就配置多少张
                bg: [
                    "images/map/DX3_IceAge/TextureDX3_IceAgeBackground01.png",
                    "images/map/DX3_IceAge/TextureDX3_IceAgeBackground02.png",
                    "images/map/DX3_IceAge/TextureDX3_IceAgeBackground03.png",
                ],
            },
            // 视差背景系数：左右
            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
            // 视差背景系数：上下
            verticalParallaxDepth: [1, 1, 0.9, 0],
            // 背景的Y轴位置
            bgY: [0, 0, 128],
            // 背景缩放系数
            bgScale: [1, 1, 1],
            // 自行车速度（基础：20）
            bikeVelocity: 20,
            // 重力（基础：-175）
            gravity: -175,
            // 跳跃爆发力（基础：12800）
            jumpForce: 250,
            // BGM路径
            bgmPath: "myLaya/laya/assets/sounds/04_ice.mp3",
            // 道具随机表
            itemRandomTableList: {
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
                Magnet: 1,
                Invincible: 1,
                Sprint: 1,
            },
            // 每一关的地图配置
            levelList: [
                "myLaya/laya/pages/Map/Map-4-1.scene.json",
                "myLaya/laya/pages/Map/Map-4-2.scene.json",
                "myLaya/laya/pages/Map/Map-4-3.scene.json",
                "myLaya/laya/pages/Map/Map-4-4.scene.json",
                "myLaya/laya/pages/Map/Map-4-5.scene.json",
            ],
            rewardList: [
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {bike: 21, diamond: 20},
            ],
        },
        {
            // 解锁需要的星星数
            starCountUnlockNeeded: 50,
            // 地图描述
            dsc: "Select Map5",
            // 主页封面图
            mainCover: "images/map/DX3_Rococo/TextureDX3_RococoMap.png",
            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
            texture: {
                // 侧边
                side: "images/map/DX3_Rococo/TextureDX3_RococoRoad01SideSkin.png",
                // 底部
                top: "images/map/DX3_Rococo/TextureDX3_RococoRoad01TopSkin.png",
                // 侧边
                side2: "images/map/DX3_Rococo/TextureDX3_RococoRoad02SideSkin.png",
                // 底部
                top2: "images/map/DX3_Rococo/TextureDX3_RococoRoad02TopSkin.png",
                // 背景 有多少层背景就配置多少张
                bg: [
                    "images/map/DX3_Rococo/TextureDX3_RococoBackground01.png",
                    "images/map/DX3_Rococo/TextureDX3_RococoBackground02.png",
                    "images/map/DX3_Rococo/TextureDX3_RococoBackground03.png",
                ],
            },
            // 视差背景系数：左右
            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
            // 视差背景系数：上下
            verticalParallaxDepth: [1, 1, 1, 0],
            // 背景的Y轴位置
            bgY: [0, 128, 0],
            // 背景缩放系数
            bgScale: [1, 1, 1],
            // 自行车速度（基础：20）
            bikeVelocity: 20,
            // 重力（基础：-175）
            gravity: -175,
            // 跳跃爆发力（基础：12800）
            jumpForce: 250,
            // BGM路径
            bgmPath: "myLaya/laya/assets/sounds/07_rococo.mp3",
            // 道具随机表
            itemRandomTableList: {
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
                Magnet: 1,
                Invincible: 1,
                Sprint: 1,
            },
            // 每一关的地图配置
            levelList: [
                "myLaya/laya/pages/Map/Map-5-1.scene.json",
                "myLaya/laya/pages/Map/Map-5-2.scene.json",
                "myLaya/laya/pages/Map/Map-5-3.scene.json",
                "myLaya/laya/pages/Map/Map-5-4.scene.json",
                "myLaya/laya/pages/Map/Map-5-5.scene.json",
            ],
            rewardList: [
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {coin: 1000, diamond: 20},
                {bike: 7, diamond: 20},
            ],
        },
//卡6        {
//卡6            // 解锁需要的星星数
//卡6            starCountUnlockNeeded: 6,
//卡6            // 地图描述
//卡6            dsc: "Select Map6",
//卡6            // 主页封面图
//卡6            mainCover: "images/map/DX2_Pisces/TextureDX2_PiscesMap.png",
//卡6            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
//卡6            texture: {
//卡6                // 侧边
//卡6                side: "images/map/DX2_Pisces/TextureDX2_PiscesRoad01SideSkin.png",
//卡6                // 底部
//卡6                top: "images/map/DX2_Pisces/TextureDX2_PiscesRoad01TopSkin.png",
//卡6                // 侧边
//卡6                side2: "images/map/DX2_Pisces/TextureDX2_PiscesRoad02SideSkin.png",
//卡6                // 底部
//卡6                top2: "images/map/DX2_Pisces/TextureDX2_PiscesRoad02TopSkin.png",
//卡6                // 背景 有多少层背景就配置多少张
//卡6                bg: [
//卡6                    "images/map/DX2_Pisces/TextureDX2_PiscesBackground01.png",
//卡6                    "images/map/DX2_Pisces/TextureDX2_PiscesBackground02.png",
//卡6                    "images/map/DX2_Pisces/TextureDX2_PiscesBackground03.png",
//卡6                ],
//卡6            },
//卡6            // 视差背景系数：左右
//卡6            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
//卡6            // 视差背景系数：上下
//卡6            verticalParallaxDepth: [1, 0.95, 0.9, 0],
//卡6            // 背景的Y轴位置
//卡6            bgY: [0, 0, 256],
//卡6            // 背景缩放系数
//卡6            bgScale: [1, 1, 1],
//卡6            // 自行车速度（基础：20）
//卡6            bikeVelocity: 20,
//卡6            // 重力（基础：-175）
//卡6            gravity: -175,
//卡6            // 跳跃爆发力（基础：12800）
//卡6            jumpForce: 250,
//卡6            // BGM路径
//卡6            bgmPath: "myLaya/laya/assets/sounds/10_uoza.mp3",
//卡6            // 道具随机表
//卡6            itemRandomTableList: {
//卡6                Accelerate: 1,
//卡6                PowerJump: 1,
//卡6                UnlimitedJump: 1,
//卡6                Magnet: 1,
//卡6                Invincible: 1,
//卡6                Sprint: 1,
//卡6            },
//卡6            // 每一关的地图配置
//卡6            levelList: [
//卡6                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡6                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡6                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡6                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡6                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡6            ],
//卡6            rewardList: [
//卡6                {coin: 1000, 	diamond: 20},
//卡6                {coin: 1000, 	diamond: 20},
//卡6                {coin: 1000, 	diamond: 20},
//卡6                {coin: 1000, 	diamond: 20},
//卡6                {bike: 51, 	diamond: 20},
//卡6            ],
//卡6        },
//卡7        {
//卡7            // 解锁需要的星星数
//卡7            starCountUnlockNeeded: 7,
//卡7            // 地图描述
//卡7            dsc: "Select Map7",
//卡7            // 主页封面图
//卡7            mainCover: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodMap.png",
//卡7            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
//卡7            texture: {
//卡7                // 侧边
//卡7                side: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad01SideSkin.png",
//卡7                // 底部
//卡7                top: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad01TopSkin.png",
//卡7                // 侧边
//卡7                side2: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad02SideSkin.png",
//卡7                // 底部
//卡7                top2: "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodRoad02TopSkin.png",
//卡7                // 背景 有多少层背景就配置多少张
//卡7                bg: [
//卡7                    "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground01.png",
//卡7                    "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground02.png",
//卡7                    "images/map/DX3_SengokuPeriod/TextureDX3_SengokuPeriodBackground03.png",
//卡7                ],
//卡7            },
//卡7            // 视差背景系数：左右
//卡7            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
//卡7            // 视差背景系数：上下
//卡7            verticalParallaxDepth: [1, 0.95, 0.9, 0],
//卡7            // 背景的Y轴位置
//卡7            bgY: [0, 0, 0],
//卡7            // 背景缩放系数
//卡7            bgScale: [1, 1, 1],
//卡7            // 自行车速度（基础：20）
//卡7            bikeVelocity: 20,
//卡7            // 重力（基础：-175）
//卡7            gravity: -175,
//卡7            // 跳跃爆发力（基础：12800）
//卡7            jumpForce: 250,
//卡7            // BGM路径
//卡7            bgmPath: "myLaya/laya/assets/sounds/08_sengoku.mp3",
//卡7            // 道具随机表
//卡7            itemRandomTableList: {
//卡7                Accelerate: 1,
//卡7                PowerJump: 1,
//卡7                UnlimitedJump: 1,
//卡7                Magnet: 1,
//卡7                Invincible: 1,
//卡7                Sprint: 1,
//卡7            },
//卡7            // 每一关的地图配置
//卡7            levelList: [
//卡7                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡7                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡7                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡7                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡7                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡7            ],
//卡7            rewardList: [
//卡7                {coin: 1000, 	diamond: 20},
//卡7                {coin: 1000, 	diamond: 20},
//卡7                {coin: 1000, 	diamond: 20},
//卡7                {coin: 1000, 	diamond: 20},
//卡7                {bike: 19, 	diamond: 20},
//卡7            ],
//卡7        },
//卡8        {
//卡8            // 解锁需要的星星数
//卡8            starCountUnlockNeeded: 8,
//卡8            // 地图描述
//卡8            dsc: "Select Map8",
//卡8            // 主页封面图
//卡8            mainCover: "images/map/DX1_Beijing/TextureDX1_BeijingMap.png",
//卡8            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
//卡8            texture: {
//卡8                // 侧边
//卡8                side: "images/map/DX1_Beijing/TextureDX1_BeijingRoad01SideSkin.png",
//卡8                // 底部
//卡8                top: "images/map/DX1_Beijing/TextureDX1_BeijingRoad01TopSkin.png",
//卡8                // 侧边
//卡8                side2: "images/map/DX1_Beijing/TextureDX1_BeijingRoad02SideSkin.png",
//卡8                // 底部
//卡8                top2: "images/map/DX1_Beijing/TextureDX1_BeijingRoad02TopSkin.png",
//卡8                // 背景 有多少层背景就配置多少张
//卡8                bg: [
//卡8                    "images/map/DX1_Beijing/TextureDX1_BeijingBackground01.png",
//卡8                    "images/map/DX1_Beijing/TextureDX1_BeijingBackground02.png",
//卡8                    "images/map/DX1_Beijing/TextureDX1_BeijingBackground03.png",
//卡8                ],
//卡8            },
//卡8            // 视差背景系数：左右
//卡8            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
//卡8            // 视差背景系数：上下
//卡8            verticalParallaxDepth: [1, 0.95, 0.9, 0],
//卡8            // 背景的Y轴位置
//卡8            bgY: [0, 0, 256],
//卡8            // 背景缩放系数
//卡8            bgScale: [1, 1, 1],
//卡8            // 自行车速度（基础：20）
//卡8            bikeVelocity: 20,
//卡8            // 重力（基础：-175）
//卡8            gravity: -175,
//卡8            // 跳跃爆发力（基础：12800）
//卡8            jumpForce: 250,
//卡8            // BGM路径
//卡8            bgmPath: "myLaya/laya/assets/sounds/BGM_103.mp3",
//卡8            // 道具随机表
//卡8            itemRandomTableList: {
//卡8                Accelerate: 1,
//卡8                PowerJump: 1,
//卡8                UnlimitedJump: 1,
//卡8                Magnet: 1,
//卡8                Invincible: 1,
//卡8                Sprint: 1,
//卡8            },
//卡8            // 每一关的地图配置
//卡8            levelList: [
//卡8                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡8                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡8                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡8                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡8                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡8            ],
//卡8            rewardList: [
//卡8                {coin: 1000, 	diamond: 20},
//卡8                {coin: 1000, 	diamond: 20},
//卡8                {coin: 1000, 	diamond: 20},
//卡8                {coin: 1000, 	diamond: 20},
//卡8                {bike: 9, 		diamond: 20},
//卡8            ],
//卡8        },
//卡9        {
//卡9            // 解锁需要的星星数
//卡9            starCountUnlockNeeded: 9,
//卡9            // 地图描述
//卡9            dsc: "Select Map9",
//卡9            // 主页封面图
//卡9            mainCover: "images/map/DX1_Newyork/TextureDX1_NewyorkMap.png",
//卡9            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
//卡9            texture: {
//卡9                // 侧边
//卡9                side: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad01SideSkin.png",
//卡9                // 底部
//卡9                top: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad01TopSkin.png",
//卡9                // 侧边
//卡9                side2: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad02SideSkin.png",
//卡9                // 底部
//卡9                top2: "images/map/DX1_Newyork/TextureDX1_NewyorkRoad02TopSkin.png",
//卡9                // 背景 有多少层背景就配置多少张
//卡9                bg: [
//卡9                    "images/map/DX1_Newyork/TextureDX1_NewyorkBackground01.png",
//卡9                    "images/map/DX1_Newyork/TextureDX1_NewyorkBackground02.png",
//卡9                    "images/map/DX1_Newyork/TextureDX1_NewyorkBackground03.png",
//卡9                ],
//卡9            },
//卡9            // 视差背景系数：左右
//卡9            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
//卡9            // 视差背景系数：上下
//卡9            verticalParallaxDepth: [1, 0.95, 0.9, 0],
//卡9            // 背景的Y轴位置
//卡9            bgY: [0, 128, 256],
//卡9            // 背景缩放系数
//卡9            bgScale: [1, 1, 1],
//卡9            // 自行车速度（基础：20）
//卡9            bikeVelocity: 20,
//卡9            // 重力（基础：-175）
//卡9            gravity: -175,
//卡9            // 跳跃爆发力（基础：12800）
//卡9            jumpForce: 250,
//卡9            // BGM路径
//卡9            bgmPath: "myLaya/laya/assets/sounds/BGM_105.mp3",
//卡9            // 道具随机表
//卡9            itemRandomTableList: {
//卡9                Accelerate: 1,
//卡9                PowerJump: 1,
//卡9                UnlimitedJump: 1,
//卡9                Magnet: 1,
//卡9                Invincible: 1,
//卡9                Sprint: 1,
//卡9            },
//卡9            // 每一关的地图配置
//卡9            levelList: [
//卡9                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡9                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡9                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡9                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡9                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡9            ],
//卡9            rewardList: [
//卡9                {coin: 1000, 	diamond: 20},
//卡9                {coin: 1000, 	diamond: 20},
//卡9                {coin: 1000, 	diamond: 20},
//卡9                {coin: 1000, 	diamond: 20},
//卡9                {bike: 14, 	diamond: 20},
//卡9            ],
//卡9        },
//卡10        {
//卡10            // 解锁需要的星星数
//卡10            starCountUnlockNeeded: 10,
//卡10            // 地图描述
//卡10            dsc: "Select Map10",
//卡10            // 主页封面图
//卡10            mainCover: "images/map/DX1_Tokyo/TextureDX1_TokyoMap.png",
//卡10            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
//卡10            texture: {
//卡10                // 侧边
//卡10                side: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad01SideSkin.png",
//卡10                // 底部
//卡10                top: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad01TopSkin.png",
//卡10                // 侧边
//卡10                side2: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad02SideSkin.png",
//卡10                // 底部
//卡10                top2: "images/map/DX1_Tokyo/TextureDX1_TokyoRoad02TopSkin.png",
//卡10                // 背景 有多少层背景就配置多少张
//卡10                bg: [
//卡10                    "images/map/DX1_Tokyo/TextureDX1_TokyoBackground01.png",
//卡10                    "images/map/DX1_Tokyo/TextureDX1_TokyoBackground02.png",
//卡10                    "images/map/DX1_Tokyo/TextureDX1_TokyoBackground03.png",
//卡10                ],
//卡10            },
//卡10            // 视差背景系数：左右
//卡10            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
//卡10            // 视差背景系数：上下
//卡10            verticalParallaxDepth: [1, 0.95, 0.9, 0],
//卡10            // 背景的Y轴位置
//卡10            bgY: [0, 128, 256],
//卡10            // 背景缩放系数
//卡10            bgScale: [1, 1, 1],
//卡10            // 自行车速度（基础：20）
//卡10            bikeVelocity: 20,
//卡10            // 重力（基础：-175）
//卡10            gravity: -175,
//卡10            // 跳跃爆发力（基础：12800）
//卡10            jumpForce: 250,
//卡10            // BGM路径
//卡10            bgmPath: "myLaya/laya/assets/sounds/BGM_101.mp3",
//卡10            // 道具随机表
//卡10            itemRandomTableList: {
//卡10                Accelerate: 1,
//卡10                PowerJump: 1,
//卡10                UnlimitedJump: 1,
//卡10                Magnet: 1,
//卡10                Invincible: 1,
//卡10                Sprint: 1,
//卡10            },
//卡10            // 每一关的地图配置
//卡10            levelList: [
//卡10                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡10                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡10                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡10                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡10                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡10            ],
//卡10            rewardList: [
//卡10                {coin: 1000, 	diamond: 20},
//卡10                {coin: 1000, 	diamond: 20},
//卡10                {coin: 1000, 	diamond: 20},
//卡10                {coin: 1000, 	diamond: 20},
//卡10                {bike: 3, 	diamond: 20},
//卡10            ],
//卡10        },
//卡11        {
//卡11            // 解锁需要的星星数
//卡11            starCountUnlockNeeded: 11,
//卡11            // 地图描述
//卡11            dsc: "Select Map11",
//卡11            // 主页封面图
//卡11            mainCover: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicMap.png",
//卡11            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
//卡11            texture: {
//卡11                // 侧边
//卡11                side: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad01SideSkin.png",
//卡11                // 底部
//卡11                top: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad01TopSkin.png",
//卡11                // 侧边
//卡11                side2: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad02SideSkin.png",
//卡11                // 底部
//卡11                top2: "images/map/DX3_TheJurassic/TextureDX3_TheJurassicRoad02TopSkin.png",
//卡11                // 背景 有多少层背景就配置多少张
//卡11                bg: [
//卡11                    "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground01.png",
//卡11                    "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground02.png",
//卡11                    "images/map/DX3_TheJurassic/TextureDX3_TheJurassicBackground03.png",
//卡11                ],
//卡11            },
//卡11            // 视差背景系数：左右
//卡11            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
//卡11            // 视差背景系数：上下
//卡11            verticalParallaxDepth: [1, 0.95, 0.9, 0],
//卡11            // 背景的Y轴位置
//卡11            bgY: [0, 128, 128],
//卡11            // 背景缩放系数
//卡11            bgScale: [1, 1, 1],
//卡11            // 自行车速度（基础：20）
//卡11            bikeVelocity: 20,
//卡11            // 重力（基础：-175）
//卡11            gravity: -175,
//卡11            // 跳跃爆发力（基础：12800）
//卡11            jumpForce: 250,
//卡11            // BGM路径
//卡11            bgmPath: "myLaya/laya/assets/sounds/02_jurassic.mp3",
//卡11            // 道具随机表
//卡11            itemRandomTableList: {
//卡11                Accelerate: 1,
//卡11                PowerJump: 1,
//卡11                UnlimitedJump: 1,
//卡11                Magnet: 1,
//卡11                Invincible: 1,
//卡11                Sprint: 1,
//卡11            },
//卡11            // 每一关的地图配置
//卡11            levelList: [
//卡11                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡11                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡11                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡11                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡11                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡11            ],
//卡11            rewardList: [
//卡11                {coin: 1000, 	diamond: 20},
//卡11                {coin: 1000, 	diamond: 20},
//卡11                {coin: 1000, 	diamond: 20},
//卡11                {coin: 1000, 	diamond: 20},
//卡11                {bike: 11, 	diamond: 20},
//卡11            ],
//卡11        },
//卡12        {
//卡12            // 解锁需要的星星数
//卡12            starCountUnlockNeeded: 12,
//卡12            // 地图描述
//卡12            dsc: "Select Map12",
//卡12            // 主页封面图
//卡12            mainCover: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeMap.png",
//卡12            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
//卡12            texture: {
//卡12                // 侧边
//卡12                side: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad01SideSkin.png",
//卡12                // 底部
//卡12                top: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad01TopSkin.png",
//卡12                // 侧边
//卡12                side2: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad02SideSkin.png",
//卡12                // 底部
//卡12                top2: "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeRoad02TopSkin.png",
//卡12                // 背景 有多少层背景就配置多少张
//卡12                bg: [
//卡12                    "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground01.png",
//卡12                    "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground02.png",
//卡12                    "images/map/DX3_MiddleAge/TextureDX3_MiddleAgeBackground03.png",
//卡12                ],
//卡12            },
//卡12            // 视差背景系数：左右
//卡12            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
//卡12            // 视差背景系数：上下
//卡12            verticalParallaxDepth: [1, 0.95, 0.9, 0],
//卡12            // 背景的Y轴位置
//卡12            bgY: [0, 128, 192],
//卡12            // 背景缩放系数
//卡12            bgScale: [1, 1, 1],
//卡12            // 自行车速度（基础：20）
//卡12            bikeVelocity: 20,
//卡12            // 重力（基础：-175）
//卡12            gravity: -175,
//卡12            // 跳跃爆发力（基础：12800）
//卡12            jumpForce: 250,
//卡12            // BGM路径
//卡12            bgmPath: "myLaya/laya/assets/sounds/01_middle.mp3",
//卡12            // 道具随机表
//卡12            itemRandomTableList: {
//卡12                Accelerate: 1,
//卡12                PowerJump: 1,
//卡12                UnlimitedJump: 1,
//卡12                Magnet: 1,
//卡12                Invincible: 1,
//卡12                Sprint: 1,
//卡12            },
//卡12            // 每一关的地图配置
//卡12            levelList: [
//卡12                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡12                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡12                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡12                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡12                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡12            ],
//卡12            rewardList: [
//卡12                {coin: 1000, 	diamond: 20},
//卡12                {coin: 1000, 	diamond: 20},
//卡12                {coin: 1000, 	diamond: 20},
//卡12                {coin: 1000, 	diamond: 20},
//卡12                {bike: 5, 	diamond: 20},
//卡12            ],
//卡12        },
    ],
};

// 抽奖相关配置
Config.drawWeightList = [
    {
        "type": "bike",
        "id": 0,
        "weight": 10
    },
    {
        "type": "bike",
        "id": 1,
        "weight": 8
    },
    {
        "type": "bike",
        "id": 4,
        "weight": 8
    },
    {
        "type": "bike",
        "id": 11,
        "weight": 8
    },
    {
        "type": "bike",
        "id": 13,
        "weight": 8
    },
    {
        "type": "bike",
        "id": 15,
        "weight": 8
    },
    {
        "type": "bike",
        "id": 2,
        "weight": 3
    },
    {
        "type": "bike",
        "id": 5,
        "weight": 3
    },
    {
        "type": "bike",
        "id": 6,
        "weight": 3
    },
    {
        "type": "bike",
        "id": 20,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 8,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 41,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 21,
        "weight": 2
    },
    {
        "type": "bike",
        "id": 22,
        "weight": 2
    },
    {
        "type": "bike",
        "id": 23,
        "weight": 2
    },
    {
        "type": "bike",
        "id": 7,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 42,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 43,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 51,
        "weight": 3
    },
    {
        "type": "bike",
        "id": 53,
        "weight": 3
    },
    {
        "type": "bike",
        "id": 54,
        "weight": 3
    },
    {
        "type": "bike",
        "id": 19,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 10,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 12,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 9,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 24,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 18,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 14,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 16,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 17,
        "weight": 4
    },
    {
        "type": "bike",
        "id": 3,
        "weight": 2
    },
    {
        "type": "bike",
        "id": 52,
        "weight": 2
    },
    {
        // 自行车奖励
        "type": "bike",
        // 自行车ID
        "id": 25,
        // 随机权重
        "weight": 2
    },
    {
        // 金币奖励
        "type": "coin",
        // 数量
        "number": 5000,
        // 随机权重
        "weight": 20
    },
    {
        // 钻石奖励
        "type": "diamond",
        // 数量
        "number": 75,
        // 随机权重
        "weight": 60
    },
];

// 玩家等级所需总经验(范例：1级=0,2级=50，3级=150，也就是2级升3级需要150-50=100经验)
Config.playerLevelNeededExp = [
    0, 50, 150, 300, 500,
    750, 1050, 1400, 1800, 2250,
    2750, 3300, 3900, 4550, 5250,
    6000, 6800, 7650, 8550, 9500,
    10500, 11550, 12650, 13800, 15000,
    16250, 17550, 18900, 20300, 21800,
    23400, 25100, 26900, 28800, 30800,
    32900, 35100, 37400, 39800, 42300,
    44900, 47600, 50400, 53300, 56300,
    59400, 62600, 65900, 69300, 72900,
    76700, 80700, 84900, 89300, 93900,
    98700, 103700, 108900, 114300, 120100,
    126300, 132900, 139900, 147300, 155100,
    163300, 171900, 180900, 190300, 200500,
    211500, 223300, 235900, 249300, 263500,
    278500, 294300, 310900, 328300, 347300,
    367900, 390100, 413900, 439300, 466300,
    494900, 525100, 556900, 590300, 626900,
    666700, 709700, 755900, 805300, 857900,
    913700, 972700, 1034900, 1100300
];

// 升级自行车相关配置
Config.upgradeBike = {
    // 每次升级消耗金币
    costCoin: [
        100, 150, 200, 250, 300,
        400, 500, 600, 700, 800,
        1000, 1200, 1400, 1600, 1800,
        2200, 2600, 3000, 3400, 3800,
        4600, 5400, 6200, 7000, 7800,
        9400, 11000, 12600, 14200, 15800,
        19000, 22200, 25400, 28600, 31800,
        38200, 44600, 51000, 57400, 63800,
        76600, 89400, 102200, 115000, 127800,
        153400, 179000, 204600
    ],
    // 每次升级增加的值
    addedValueEachTime: 0.5,
    // 每项最大值
    maxValue: 6,
    // 每个玩家级别最多能升级多少次自行车（按顺序多用每个级别的次数）（对应玩家等级和可升级次数）
    playerLevelLimitTimes: [
        0, 0, 0, 0, 4,
        4, 4, 4, 4, 8,
        8, 8, 8, 8, 12,
        12, 12, 12, 12, 16,
        16, 16, 16, 16, 20,
        20, 20, 20, 20, 24,
        24, 24, 24, 24, 28,
        28, 28, 28, 28, 32,
        32, 32, 32, 32, 36,
        36, 36, 36, 36, 38,
        38, 38, 38, 38, 40,
        40, 40, 40, 40, 42,
        42, 42, 42, 42, 44,
        44, 44, 44, 44, 46,
        46, 46, 46, 46, 48
    ],
    // 随机动画相关配置
    animation: {
        // 加速阶段初始移动一次所需帧数
        startSpeed: 10,
        // 加速阶段需要遍历几轮所有道具
        startTurns: 1,
        // 匀速运动阶段移动一次所需帧数
        uniformSpeed: 5,
        // 匀速运动需要遍历几轮所有道具
        uniformTurns: 2,
        // 减速阶段需要遍历几轮所有道具
        endTurns: 1,
        // 减速阶段最后一次移动所需帧数
        endSpeed: 10,
        // 闪烁一次所需帧数
        twinkleSpeed: 5,
        // 需要闪烁多少次
        twinkleTurn: 5,
    },
    // 升级项目
    items: [
        "Magnet",
        "UnlimitedJump",
        "Invincible",
        "Sprint",
    ],
};

// 吃道具表现
Config.eatItemAnimation = {
    // 动画时长（单位：毫秒）
    duration: 200,
    // 弹起高度
    yOffset: 100,
};

// 默认红点
Config.defaultRedPoint = {
    // 图片路径 为空的话 就代码创建一个红点
    imagePath: "",
    // 缩放倍数
    scale: 1,
    // 在对应按钮中的位置 左上角为原点 百分币
    positionX: 1,
    positionY: 0.2,
};

// 自行车移动的时候根据移动方向进行旋转(1开启 0关闭)
Config.bikeRotateByMoveDirection = 1;

// 自行车假定的基本速率
Config.bikeBasicVelocity = 20;
// 自行车在基本速率之下，多少帧换一张图
Config.framesForChangeImageInBasicVelocity = 3;

// 选择关卡界面相关配置
Config.gameLevelScene = {
    bikeSpriteScale: 0.7,
    bikeSpriteOffsetX: 55,
    bikeSpriteOffsetY: 55,
};

// 图形化字库
Config.imageText = {
    TextureAlphabetPattern2: {
        charWidth: 18,
        charHeight: 20,
        charImgPathTable: {
            "0": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_0.png",
            "1": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_1.png",
            "2": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_2.png",
            "3": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_3.png",
            "4": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_4.png",
            "5": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_5.png",
            "6": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_6.png",
            "7": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_7.png",
            "8": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_8.png",
            "9": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_9.png",
            "/": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern2/TextureAlphabetPattern2_10.png",
        },
    },
    TextureAlphabetPattern3: {
        charWidth: 24,
        charHeight: 24,
        charImgPathTable: {
            "0": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_0.png",
            "1": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_1.png",
            "2": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_2.png",
            "3": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_3.png",
            "4": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_4.png",
            "5": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_5.png",
            "6": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_6.png",
            "7": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_7.png",
            "8": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_8.png",
            "9": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_9.png",
            "/": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_10.png",
            "-": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_11.png",
            ".": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_12.png",
            ",": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_13.png",
            ":": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_14.png",
            "A": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_16.png",
            "B": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_17.png",
            "C": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_18.png",
            "D": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_19.png",
            "E": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_20.png",
            "F": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_21.png",
            "G": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_22.png",
            "H": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_23.png",
            "I": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_24.png",
            "J": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_25.png",
            "K": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_26.png",
            "L": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_27.png",
            "M": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_28.png",
            "N": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_29.png",
            "O": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_30.png",
            "P": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_31.png",
            "Q": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_32.png",
            "R": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_33.png",
            "S": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_34.png",
            "T": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_35.png",
            "U": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_36.png",
            "V": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_37.png",
            "W": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_38.png",
            "X": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_39.png",
            "Y": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_40.png",
            "Z": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_41.png",
            "a": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_42.png",
            "b": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_43.png",
            "c": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_44.png",
            "d": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_45.png",
            "e": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_46.png",
            "f": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_47.png",
            "g": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_48.png",
            "h": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_49.png",
            "i": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_50.png",
            "j": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_51.png",
            "k": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_52.png",
            "l": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_53.png",
            "m": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_54.png",
            "n": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_55.png",
            "o": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_56.png",
            "p": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_57.png",
            "q": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_58.png",
            "r": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_59.png",
            "s": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_60.png",
            "t": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_61.png",
            "u": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_62.png",
            "v": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_63.png",
            "w": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_64.png",
            "x": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_65.png",
            "y": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_66.png",
            "z": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_67.png",
            "&": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_68.png",
            "(": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_70.png",
            ")": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_71.png",
            "%": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_91.png",
            "金": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_101.png",
            "币": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_102.png",
            "里": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_111.png",
            "程": "myLaya/laya/assets/images/image-text/TextureAlphabetPattern3/TextureAlphabetPattern3_112.png",
        },
    },
};

// 进入子弹时间之后，自行车期望的移动速度（只能够近似，不能够完全等于）
Config.bulletTimeTargetVelocity = 10;
// 每帧进行几次物理计算
// 次数越多，进入子弹时间之后就能够更精确的限制速度，但是相对的性能消耗越大，建议不超过10次
// 修改该配置后，自行车的跳跃高度可能会发生变化，请进行检查，并且调整jumpForce为合适的值
Config.stepTimesEachFrame = 10;

export default Config;
