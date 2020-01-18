import Config from "./src/config/base-config";

// 自行车速度（基础：20）
Config.bikeVelocity = 20;

// 重力（基础：-175）
Config.gravity = -175;

// 跳跃爆发力（基础：12800）
Config.jumpForce = 12800;

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
        jumpForce: 12800,
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
        jumpForce: 12800,
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
            side: "images/map/DX2_Capricorn/TextureDX2_CapricornRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Capricorn/TextureDX2_CapricornRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Capricorn/TextureDX2_CapricornRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Capricorn/TextureDX2_CapricornRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Capricorn/TextureDX2_CapricornBackground01.png",
                "images/map/DX2_Capricorn/TextureDX2_CapricornBackground02.png",
                "images/map/DX2_Capricorn/TextureDX2_CapricornBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Capricorn/TextureDX2_CapricornMap.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/09_yagiza.mp3",
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
            side: "images/map/DX2_Scorpius/TextureDX2_ScorpiusRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Scorpius/TextureDX2_ScorpiusRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Scorpius/TextureDX2_ScorpiusRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Scorpius/TextureDX2_ScorpiusRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground01.png",
                "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground02.png",
                "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX3_IceAge/TextureDX3_IceAgeMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/04_sasori.mp3",
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
        jumpForce: 12800,
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
        scenePath: "Test006",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Cancer/TextureDX2_CancerRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Cancer/TextureDX2_CancerRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Cancer/TextureDX2_CancerRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Cancer/TextureDX2_CancerRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Cancer/TextureDX2_CancerBackground01.png",
                "images/map/DX2_Cancer/TextureDX2_CancerBackground02.png",
                "images/map/DX2_Cancer/TextureDX2_CancerBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Cancer/TextureDX2_CancerMap.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/11_kaniza.mp3",
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
            side: "images/map/DX2_Gemini/TextureDX2_GeminiRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Gemini/TextureDX2_GeminiRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Gemini/TextureDX2_GeminiRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Gemini/TextureDX2_GeminiRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Gemini/TextureDX2_GeminiBackground01.png",
                "images/map/DX2_Gemini/TextureDX2_GeminiBackground02.png",
                "images/map/DX2_Gemini/TextureDX2_GeminiBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Gemini/TextureDX2_GeminiMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/06_futagoza.mp3",
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
            side: "images/map/DX2_Leo/TextureDX2_LeoRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Leo/TextureDX2_LeoRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Leo/TextureDX2_LeoRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Leo/TextureDX2_LeoRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Leo/TextureDX2_LeoBackground01.png",
                "images/map/DX2_Leo/TextureDX2_LeoBackground02.png",
                "images/map/DX2_Leo/TextureDX2_LeoBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Leo/TextureDX2_LeoMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/12_shishiza.mp3",
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
            side: "images/map/DX2_Libra/TextureDX2_LibraRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Libra/TextureDX2_LibraRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Libra/TextureDX2_LibraRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Libra/TextureDX2_LibraRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Libra/TextureDX2_LibraBackground01.png",
                "images/map/DX2_Libra/TextureDX2_LibraBackground02.png",
                "images/map/DX2_Libra/TextureDX2_LibraBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Libra/TextureDX2_LibraMap.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/08_tenbinza.mp3",
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
        bgY: [0, 128, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
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
        scenePath: "Test011",
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Sagittarius/TextureDX2_SagittariusRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Sagittarius/TextureDX2_SagittariusRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Sagittarius/TextureDX2_SagittariusRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Sagittarius/TextureDX2_SagittariusRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground01.png",
                "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground02.png",
                "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Sagittarius/TextureDX2_SagittariusMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 1, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/02_iteza.mp3",
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
            side: "images/map/DX2_Virgo/TextureDX2_VirgoRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Virgo/TextureDX2_VirgoRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Virgo/TextureDX2_VirgoRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Virgo/TextureDX2_VirgoRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Virgo/TextureDX2_VirgoBackground01.png",
                "images/map/DX2_Virgo/TextureDX2_VirgoBackground02.png",
                "images/map/DX2_Virgo/TextureDX2_VirgoBackground03.png",
            ],
            // 主页封面图
            mainCover: "images/map/DX2_Virgo/TextureDX2_VirgoMap.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/07_otomeza.mp3",
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

// 自行车图集
Config.bikeAtlasPath = "myLaya/laya/assets/animations/bike.json";

// 自行车在场景中显示的尺寸是原图的多大
Config.bikeScale = 0.4;

// 自行车物理半径
Config.bikeRadius = 1.175;

// 自行车超级无敌冲刺物理半径
Config.bikeSprintRadius = 11;

// 自行车密度
Config.bikeDensity = 1;

// 自行车跳跃的时候的旋转角度 顺时针旋转是正数
Config.bikeJumpingRotation = -30;

// 路段配置
Config.roadSections = {
    // 奖励关卡（Special-1）（每个路段为1500像素）
    "0-0": [
        // 关卡元素：纯路线
        "Special011/Special011-00000101",
        "Special011/Special011-00000102",
        "Special011/Special011-00000121",
        "Special011/Special011-00000122",
    ],
    // 关卡阶段1（安全阶段）（LV-1）（每个路段为1000像素）
    "1-1": [
        // 关卡元素：纯路线
        "Lv011/Lv011-00000101",
        "Lv011/Lv011-00000121",
        "Lv011/Lv011-00000401",
        "Lv011/Lv011-00000421",
        "Lv011/Lv011-00000701",
        "Lv011/Lv011-00000721",
    ],
    // 关卡阶段2（普通难度）（LV-2）（每个路段为1000像素）
    "2-0": [
        // 关卡元素：纯路线-带道具
        "Lv021/Lv021-00000101-0",
        "Lv021/Lv021-00000121-0",
        "Lv021/Lv021-00000401-0",
        "Lv021/Lv021-00000421-0",
        "Lv021/Lv021-00000701-0",
        "Lv021/Lv021-00000721-0",
    ],
    "2-1": [
        // 关卡元素：纯路线
        "Lv021/Lv021-00000101",
        "Lv021/Lv021-00000121",
        "Lv021/Lv021-00000401",
        "Lv021/Lv021-00000421",
        "Lv021/Lv021-00000701",
        "Lv021/Lv021-00000721",
    ],
    "2-11": [
        // 关卡元素：移动平台
        "Lv021/Lv021-00100101",
        "Lv021/Lv021-00100121",
        "Lv021/Lv021-00100401",
        "Lv021/Lv021-00100421",
        "Lv021/Lv021-00100701",
        "Lv021/Lv021-00100721",
    ],
    "2-21": [
        // 关卡元素：蜘蛛网
        "Lv021/Lv021-00200101",
        "Lv021/Lv021-00200121",
        "Lv021/Lv021-00200401",
        "Lv021/Lv021-00200421",
        "Lv021/Lv021-00200701",
        "Lv021/Lv021-00200721",
    ],
    "2-31": [
        // 关卡元素：地刺-固定
        "Lv021/Lv021-00300101",
        "Lv021/Lv021-00300121",
        "Lv021/Lv021-00300401",
        "Lv021/Lv021-00300421",
        "Lv021/Lv021-00300701",
        "Lv021/Lv021-00300721",
    ],
    "2-51": [
        // 关卡元素：火柱
        "Lv021/Lv021-00500101",
        "Lv021/Lv021-00500121",
        "Lv021/Lv021-00500401",
        "Lv021/Lv021-00500421",
        "Lv021/Lv021-00500701",
        "Lv021/Lv021-00500721",
    ],
    "2-61": [
        // 关卡元素：火球
        "Lv021/Lv021-00600101",
        "Lv021/Lv021-00600121",
        "Lv021/Lv021-00600401",
        "Lv021/Lv021-00600421",
        "Lv021/Lv021-00600701",
        "Lv021/Lv021-00600721",
    ],
    "2-71": [
        // 关卡元素：小鸟1
        "Lv021/Lv021-00700101",
        "Lv021/Lv021-00700121",
        "Lv021/Lv021-00700401",
        "Lv021/Lv021-00700421",
        "Lv021/Lv021-00700701",
        "Lv021/Lv021-00700721",
    ],
    "2-81": [
        // 关卡元素：滚石1
        "Lv021/Lv021-00800101",
        "Lv021/Lv021-00800121",
        "Lv021/Lv021-00800401",
        "Lv021/Lv021-00800421",
        "Lv021/Lv021-00800701",
        "Lv021/Lv021-00800721",
    ],

    // 关卡阶段3（困难难度）（LV-3）（每个路段为1000像素）
    "3-0": [
        // 关卡元素：纯路线-带道具
        "Lv031/Lv031-00000101-0",
        "Lv031/Lv031-00000121-0",
        "Lv031/Lv031-00000401-0",
        "Lv031/Lv031-00000421-0",
        "Lv031/Lv031-00000701-0",
        "Lv031/Lv031-00000721-0",
    ],
    "3-1": [
        // 关卡元素：纯路线
        "Lv031/Lv031-00000101",
        "Lv031/Lv031-00000121",
        "Lv031/Lv031-00000401",
        "Lv031/Lv031-00000421",
        "Lv031/Lv031-00000701",
        "Lv031/Lv031-00000721",
    ],
    "3-11": [
        // 关卡元素：移动平台
        "Lv031/Lv031-00100101",
        "Lv031/Lv031-00100121",
        "Lv031/Lv031-00100401",
        "Lv031/Lv031-00100421",
        "Lv031/Lv031-00100701",
        "Lv031/Lv031-00100721",
    ],
    "3-21": [
        // 关卡元素：蜘蛛网
        "Lv031/Lv031-00200101",
        "Lv031/Lv031-00200121",
        "Lv031/Lv031-00200401",
        "Lv031/Lv031-00200421",
        "Lv031/Lv031-00200701",
        "Lv031/Lv031-00200721",
    ],
    "3-31": [
        // 关卡元素：地刺-固定
        "Lv031/Lv031-00300101",
        "Lv031/Lv031-00300121",
        "Lv031/Lv031-00300401",
        "Lv031/Lv031-00300421",
        "Lv031/Lv031-00300701",
        "Lv031/Lv031-00300721",
    ],
    "3-51": [
        // 关卡元素：火柱
        "Lv031/Lv031-00500101",
        "Lv031/Lv031-00500121",
        "Lv031/Lv031-00500401",
        "Lv031/Lv031-00500421",
        "Lv031/Lv031-00500701",
        "Lv031/Lv031-00500721",
    ],
    "3-61": [
        // 关卡元素：火球
        "Lv031/Lv031-00600101",
        "Lv031/Lv031-00600121",
        "Lv031/Lv031-00600401",
        "Lv031/Lv031-00600421",
        "Lv031/Lv031-00600701",
        "Lv031/Lv031-00600721",
    ],
    "3-71": [
        // 关卡元素：小鸟1
        "Lv031/Lv031-00700101",
        "Lv031/Lv031-00700121",
        "Lv031/Lv031-00700401",
        "Lv031/Lv031-00700421",
        "Lv031/Lv031-00700701",
        "Lv031/Lv031-00700721",
    ],
    "3-81": [
        // 关卡元素：滚石1
        "Lv031/Lv031-00800101",
        "Lv031/Lv031-00800121",
        "Lv031/Lv031-00800401",
        "Lv031/Lv031-00800421",
        "Lv031/Lv031-00800701",
        "Lv031/Lv031-00800721",
    ],


    // 固定关卡（Normal）
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


    // 随机关卡（Random）
    "201-1": [
        // 关卡（每个路段为3000像素）
        "Random/Random011-00000111",
        "Random/Random011-00000181",
        "Random/Random011-00000201",
    ],


    // 奖励关卡（Special）
    "0-1": [
        // 关卡（每个路段为5000像素）
        "Special/Special111-00000101",
    ],


    // 随机道具（Item）
    "9999-1": [
        // 关卡（每个路段为500像素）
        "Item/Item011-00000101",

        "Item/Item011-00000111",
        "Item/Item011-00000111",
        "Item/Item011-00000111",

        "Item/Item011-00000121",
        "Item/Item011-00000121",
        "Item/Item011-00000121",

        "Item/Item011-00000131",
        "Item/Item011-00000131",
        "Item/Item011-00000131",

        "Item/Item011-00000141",
        "Item/Item011-00000141",
        "Item/Item011-00000141",

        "Item/Item011-00000151",
    ],
    // 随机道具（Item）
    "9999-11": [
        // 关卡（每个路段为500像素）
        "Item/Item011-00000101",
        "Item/Item011-00000111",
    ],
    // 随机道具（Item）
    "9999-21": [
        // 关卡（每个路段为500像素）
        "Item/Item011-00000101",
        "Item/Item011-00000111",
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
            // 商店显示的封面图
            shopCover: "images/map/DX2_Taurus/TextureDX2_TaurusBackground-1.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/01_oushiza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            imageScale: 1.2,
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
            // 商店显示的封面图
            shopCover: "images/map/DX2_Aries/TextureDX2_AriesBackground-1.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/05_ohitsujiza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Capricorn/TextureDX2_CapricornBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Capricorn/TextureDX2_CapricornRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Capricorn/TextureDX2_CapricornRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Capricorn/TextureDX2_CapricornRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Capricorn/TextureDX2_CapricornRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Capricorn/TextureDX2_CapricornBackground01.png",
                "images/map/DX2_Capricorn/TextureDX2_CapricornBackground02.png",
                "images/map/DX2_Capricorn/TextureDX2_CapricornBackground03.png",
            ],
            // 商店显示的封面图
            shopCover: "images/map/DX2_Capricorn/TextureDX2_CapricornBackground-1.png",
            // 主页封面图
            mainCover: "images/map/DX2_Capricorn/TextureDX2_CapricornMap.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/09_yagiza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Scorpius/TextureDX2_ScorpiusRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Scorpius/TextureDX2_ScorpiusRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Scorpius/TextureDX2_ScorpiusRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Scorpius/TextureDX2_ScorpiusRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground01.png",
                "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground02.png",
                "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground03.png",
            ],
            // 商店显示的封面图
            shopCover: "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground-1.png",
            // 主页封面图
            mainCover: "images/map/DX2_Scorpius/TextureDX2_ScorpiusMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/04_sasori.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Aquarius/TextureDX2_AquariusBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
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
            // 商店显示的封面图
            shopCover: "images/map/DX2_Aquarius/TextureDX2_AquariusBackground-1.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/03_mizugameza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Cancer/TextureDX2_CancerBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Cancer/TextureDX2_CancerRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Cancer/TextureDX2_CancerRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Cancer/TextureDX2_CancerRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Cancer/TextureDX2_CancerRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Cancer/TextureDX2_CancerBackground01.png",
                "images/map/DX2_Cancer/TextureDX2_CancerBackground02.png",
                "images/map/DX2_Cancer/TextureDX2_CancerBackground03.png",
            ],
            // 商店显示的封面图
            shopCover: "images/map/DX2_Cancer/TextureDX2_CancerBackground-1.png",
            // 主页封面图
            mainCover: "images/map/DX2_Cancer/TextureDX2_CancerMap.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/11_kaniza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Gemini/TextureDX2_GeminiBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Gemini/TextureDX2_GeminiRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Gemini/TextureDX2_GeminiRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Gemini/TextureDX2_GeminiRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Gemini/TextureDX2_GeminiRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Gemini/TextureDX2_GeminiBackground01.png",
                "images/map/DX2_Gemini/TextureDX2_GeminiBackground02.png",
                "images/map/DX2_Gemini/TextureDX2_GeminiBackground03.png",
            ],
            // 商店显示的封面图
            shopCover: "images/map/DX2_Gemini/TextureDX2_GeminiBackground-1.png",
            // 主页封面图
            mainCover: "images/map/DX2_Gemini/TextureDX2_GeminiMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/06_futagoza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Leo/TextureDX2_LeoBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Leo/TextureDX2_LeoRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Leo/TextureDX2_LeoRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Leo/TextureDX2_LeoRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Leo/TextureDX2_LeoRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Leo/TextureDX2_LeoBackground01.png",
                "images/map/DX2_Leo/TextureDX2_LeoBackground02.png",
                "images/map/DX2_Leo/TextureDX2_LeoBackground03.png",
            ],
            // 商店显示的封面图
            shopCover: "images/map/DX2_Leo/TextureDX2_LeoBackground-1.png",
            // 主页封面图
            mainCover: "images/map/DX2_Leo/TextureDX2_LeoMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 0.9, 0],
        // 背景的Y轴位置
        bgY: [0, 0, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/12_shishiza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Libra/TextureDX2_LibraBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Libra/TextureDX2_LibraRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Libra/TextureDX2_LibraRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Libra/TextureDX2_LibraRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Libra/TextureDX2_LibraRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Libra/TextureDX2_LibraBackground01.png",
                "images/map/DX2_Libra/TextureDX2_LibraBackground02.png",
                "images/map/DX2_Libra/TextureDX2_LibraBackground03.png",
            ],
            // 商店显示的封面图
            shopCover: "images/map/DX2_Libra/TextureDX2_LibraBackground-1.png",
            // 主页封面图
            mainCover: "images/map/DX2_Libra/TextureDX2_LibraMap.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/08_tenbinza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Pisces/TextureDX2_PiscesBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
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
            // 商店显示的封面图
            shopCover: "images/map/DX2_Pisces/TextureDX2_PiscesBackground-1.png",
            // 主页封面图
            mainCover: "images/map/DX2_Pisces/TextureDX2_PiscesMap.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/10_uoza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Sagittarius/TextureDX2_SagittariusRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Sagittarius/TextureDX2_SagittariusRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Sagittarius/TextureDX2_SagittariusRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Sagittarius/TextureDX2_SagittariusRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground01.png",
                "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground02.png",
                "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground03.png",
            ],
            // 商店显示的封面图
            shopCover: "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground-1.png",
            // 主页封面图
            mainCover: "images/map/DX2_Sagittarius/TextureDX2_SagittariusMap.png",
        },
        // 视差背景系数：左右
        horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
        // 视差背景系数：上下
        verticalParallaxDepth: [1, 1, 1, 0],
        // 背景的Y轴位置
        bgY: [0, 128, 256],
        // 背景缩放系数
        bgScale: [1, 1, 1],
        // 自行车速度（基础：20）
        bikeVelocity: 20,
        // 重力（基础：-175）
        gravity: -175,
        // 跳跃爆发力（基础：12800）
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/02_iteza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
            image: "images/map/DX2_Virgo/TextureDX2_VirgoBackground-1.png",
            // 解锁图片缩放
            imageScale: 1.2,
        },
        // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
        texture: {
            // 侧边
            side: "images/map/DX2_Virgo/TextureDX2_VirgoRoad01SideSkin.png",
            // 底部
            top: "images/map/DX2_Virgo/TextureDX2_VirgoRoad01TopSkin.png",
            // 侧边
            side2: "images/map/DX2_Virgo/TextureDX2_VirgoRoad02SideSkin.png",
            // 底部
            top2: "images/map/DX2_Virgo/TextureDX2_VirgoRoad02TopSkin.png",
            // 背景 有多少层背景就配置多少张
            bg: [
                "images/map/DX2_Virgo/TextureDX2_VirgoBackground01.png",
                "images/map/DX2_Virgo/TextureDX2_VirgoBackground02.png",
                "images/map/DX2_Virgo/TextureDX2_VirgoBackground03.png",
            ],
            // 商店显示的封面图
            shopCover: "images/map/DX2_Virgo/TextureDX2_VirgoBackground-1.png",
            // 主页封面图
            mainCover: "images/map/DX2_Virgo/TextureDX2_VirgoMap.png",
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
        jumpForce: 12800,
        // BGM路径
        bgmPath: "myLaya/laya/assets/sounds/07_otomeza.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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

        // 第1阶段
        //路段1
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


        // 第2阶段
        // 奖励阶段
        {
            list: ["0-1",],
            length: 5000,
            velocity: 1,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1,
        },
        //路段1
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1,
        },
        //路段2
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1,
        },
        //路段3
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1,
        },
        //路段4
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1,
        },
        //路段5
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1,
        },
        //路段6
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1,
        },
        //路段7
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1,
        },
        //路段8
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1,
        },
        //路段9
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1,
        },


        // 第3阶段
        // 奖励阶段
        {
            list: ["0-1",],
            length: 5000,
            velocity: 1.2,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.2,
        },
        //路段1
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
        //路段2
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
        //路段3
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
        //路段5
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
        //路段6
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
        //路段8
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
        //路段9
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.2,
        },


    ],
    // 无限循环旅程
    infiniteRoadSectionList: [
        // 奖励阶段
        {
            list: ["0-1",],
            length: 5000,
            velocity: 1.4,
        },
        // 道具
        {
            list: ["9999-1",],
            length: 500,
            velocity: 1.4,
        },
        //路段1
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
        //路段2
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
        //路段3
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
        //路段5
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
        //路段6
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
        //路段8
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
        //路段9
        {
            list: ["201-1",],
            length: 3000,
            velocity: 1.4,
        },


    ],
};

// 无尽模式复活次数
Config.endlessMode.rebornTimes = 3;

// 背景的Y轴位置（没有填的地图，默认会用这个，作为忘填保险用）
Config.bgY = [0, 0, 256];

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

// 复活拉回的时间（单位秒）（正式对外用1秒，内部测试用0.5秒）
Config.rebornDragDuration = 1;
// 复活气泡漂浮时间
Config.rebornFloatFrame = 300;
// 复活气泡漂浮速度
Config.rebornFloatVelocity = 10;

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
    res: {
        upgradeSound: "myLaya/laya/assets/sounds/Sound0028.mp3"
    }
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

// 商店广告金币配置
Config.rewardGoldList = [
    {
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        rewardCoin: 3000,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 0,
    },
    {
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        rewardCoin: 3000,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 10,
    },
    {
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        rewardCoin: 3000,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 30,
    },
    {
        // 获得的金币数量（钻石物品此项设置为零或者去掉）
        rewardCoin: 3000,
        // 所需在线时长（单位：分钟）
        onlineMinutes: 60,
    },
];

// 商店广告钻石配置
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
        // 实际区域宽度
        bodyWidth: 64,
        // 实际区域高度
        bodyHeight: 40,
        // 触碰到的时候的自行车受到的冲击力大小
        contactBikeImpulse: 250,
        // 触碰到的时候的小鸟受到的冲击力大小
        contactBirdImpulse: 125,
        // 出现音效
        appearSoundPath: "myLaya/laya/assets/sounds/SE310.mp3",
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
        jumpForce: 2560,
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
        velocity: 1000,
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
        userUsedEffectPath: "myLaya/laya/assets/prefabs/MagnetEffect.prefab.json",
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
        userUsedEffectPath: "myLaya/laya/assets/prefabs/MagnetEffect.prefab.json",
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

// 排行模式相关配置
Config.rankMode = {
    // 入场消费金币
    costCoin: 2000,
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
    types: ["backgrounds", "floors", "spoils", "pets"],
    // 背景相关配置 最少要有一个id为1的
    backgrounds: [
        {
            id: 1,
            path: "images/map/DX2_Taurus/TextureDX2_TaurusBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
        },
        {
            id: 2,
            path: "images/map/DX2_Aries/TextureDX2_AriesBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
                [12, 1, 2],
                [13, 1],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle2",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe2",
                // 解锁图片
                image: "images/map/DX2_Aries/TextureDX2_AriesBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 3,
            path: "images/map/DX2_Capricorn/TextureDX2_CapricornBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle3",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe3",
                // 解锁图片
                image: "images/map/DX2_Capricorn/TextureDX2_CapricornBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 4,
            path: "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle4",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe4",
                // 解锁图片
                image: "images/map/DX2_Scorpius/TextureDX2_ScorpiusBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 5,
            path: "images/map/DX2_Aquarius/TextureDX2_AquariusBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle5",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe5",
                // 解锁图片
                image: "images/map/DX2_Aquarius/TextureDX2_AquariusBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 6,
            path: "images/map/DX2_Cancer/TextureDX2_CancerBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle6",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe6",
                // 解锁图片
                image: "images/map/DX2_Cancer/TextureDX2_CancerBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 7,
            path: "images/map/DX2_Gemini/TextureDX2_GeminiBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle7",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe7",
                // 解锁图片
                image: "images/map/DX2_Gemini/TextureDX2_GeminiBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 8,
            path: "images/map/DX2_Leo/TextureDX2_LeoBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle8",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe8",
                // 解锁图片
                image: "images/map/DX2_Leo/TextureDX2_LeoBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 9,
            path: "images/map/DX2_Libra/TextureDX2_LibraBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle9",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe9",
                // 解锁图片
                image: "images/map/DX2_Libra/TextureDX2_LibraBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 10,
            path: "images/map/DX2_Pisces/TextureDX2_PiscesBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle10",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe10",
                // 解锁图片
                image: "images/map/DX2_Pisces/TextureDX2_PiscesBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 11,
            path: "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle11",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe11",
                // 解锁图片
                image: "images/map/DX2_Sagittarius/TextureDX2_SagittariusBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
            },
        },
        {
            id: 12,
            path: "images/map/DX2_Virgo/TextureDX2_VirgoBackground-1.png",
            // 场景物件缩放
            itemScale: 1.41,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 400],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "BackgroundUnlockTitle12",
                // 解锁描述
                dsc: "BackgroundUnlockDescribe12",
                // 解锁图片
                image: "images/map/DX2_Virgo/TextureDX2_VirgoBackground-1.png",
                // 解锁图片缩放
                imageScale: 1.2,
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
                [1, 50000],
                [2, 400],
                [4, 12000],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
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
                [1, 50000],
                [2, 400],
                [4, 72000],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
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
                [1, 50000],
                [2, 400],
                [4, 216000],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
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
                [1, 50000],
                [2, 400],
                [4, 864000],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
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
                [1, 50000],
                [2, 400],
                [4, 3456000],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
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
                [1, 50000],
                [2, 400],
                [4, 6912000],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
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
            id: 1,
            path: "images/home/item/decoDX2_Aquarius-101.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle1",
                // 解锁描述
                dsc: "SpoilUnlockDescribe1",
                // 解锁图片
                image: "images/home/item/decoDX2_Aquarius-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 21,
            path: "images/home/item/decoDX2_Cancer-101.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle2",
                // 解锁描述
                dsc: "SpoilUnlockDescribe2",
                // 解锁图片
                image: "images/home/item/decoDX2_Cancer-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 22,
            path: "images/home/item/decoDX2_Cancer-103.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle3",
                // 解锁描述
                dsc: "SpoilUnlockDescribe3",
                // 解锁图片
                image: "images/home/item/decoDX2_Cancer-103.png",
                // 解锁图片缩放
                imageScale: 1,
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle4",
                // 解锁描述
                dsc: "SpoilUnlockDescribe4",
                // 解锁图片
                image: "images/home/item/decoDX2_Capricorn-1.png",
                // 解锁图片缩放
                imageScale: 1,
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle5",
                // 解锁描述
                dsc: "SpoilUnlockDescribe5",
                // 解锁图片
                image: "images/home/item/decoDX2_Capricorn-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 33,
            path: "images/home/item/decoDX2_Capricorn-102.png",
            // 场景物件缩放
            itemScale: 0.3,
            // 物件图标缩放
            iconScale: 0.2,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 20000],
                [2, 200],
                [5, 9000],
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
                title: "SpoilUnlockTitle6",
                // 解锁描述
                dsc: "SpoilUnlockDescribe6",
                // 解锁图片
                image: "images/home/item/decoDX2_Capricorn-102.png",
                // 解锁图片缩放
                imageScale: 0.8,
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle7",
                // 解锁描述
                dsc: "SpoilUnlockDescribe7",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle8",
                // 解锁描述
                dsc: "SpoilUnlockDescribe8",
                // 解锁图片
                image: "images/home/item/decoDX2_Gemini-102.png",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle9",
                // 解锁描述
                dsc: "SpoilUnlockDescribe9",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-3.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 52,
            path: "images/home/item/decoDX2_Leo-102.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle10",
                // 解锁描述
                dsc: "SpoilUnlockDescribe10",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-102.png",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle11",
                // 解锁描述
                dsc: "SpoilUnlockDescribe11",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-103.png",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle12",
                // 解锁描述
                dsc: "SpoilUnlockDescribe12",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-104.png",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle13",
                // 解锁描述
                dsc: "SpoilUnlockDescribe13",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-105.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 61,
            path: "images/home/item/decoDX2_Libra-101.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle14",
                // 解锁描述
                dsc: "SpoilUnlockDescribe14",
                // 解锁图片
                image: "images/home/item/decoDX2_Libra-101.png",
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
                [1, 20000],
                [2, 200],
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
            id: 71,
            path: "images/home/item/decoDX2_Pisces-1.png",
            // 场景物件缩放
            itemScale: 0.5,
            // 物件图标缩放
            iconScale: 0.4,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle16",
                // 解锁描述
                dsc: "SpoilUnlockDescribe16",
                // 解锁图片
                image: "images/home/item/decoDX2_Pisces-1.png",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle17",
                // 解锁描述
                dsc: "SpoilUnlockDescribe17",
                // 解锁图片
                image: "images/home/item/decoDX2_Pisces-2.png",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle18",
                // 解锁描述
                dsc: "SpoilUnlockDescribe18",
                // 解锁图片
                image: "images/home/item/decoDX2_Pisces-101.png",
                // 解锁图片缩放
                imageScale: 1,
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
                [1, 20000],
                [2, 200],
                [5, 9000],
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
                title: "SpoilUnlockTitle19",
                // 解锁描述
                dsc: "SpoilUnlockDescribe19",
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
                [1, 20000],
                [2, 200],
                [5, 9000],
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
                title: "SpoilUnlockTitle20",
                // 解锁描述
                dsc: "SpoilUnlockDescribe20",
                // 解锁图片
                image: "images/home/item/decoDX2_Sagittarius-1.png",
                // 解锁图片缩放
                imageScale: 0.8,
            },
        },
        {
            id: 82,
            path: "images/home/item/decoDX2_Sagittarius-101.png",
            // 场景物件缩放
            itemScale: 0.4,
            // 物件图标缩放
            iconScale: 0.2,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 20000],
                [2, 200],
                [5, 9000],
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
                title: "SpoilUnlockTitle21",
                // 解锁描述
                dsc: "SpoilUnlockDescribe21",
                // 解锁图片
                image: "images/home/item/decoDX2_Sagittarius-101.png",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle22",
                // 解锁描述
                dsc: "SpoilUnlockDescribe22",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle23",
                // 解锁描述
                dsc: "SpoilUnlockDescribe23",
                // 解锁图片
                image: "images/home/item/decoDX2_Scorpius-3.png",
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
                [1, 20000],
                [2, 200],
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
                title: "SpoilUnlockTitle24",
                // 解锁描述
                dsc: "SpoilUnlockDescribe24",
                // 解锁图片
                image: "images/home/item/decoDX2_Taurus-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
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
                [1, 20000],
                [2, 200],
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
                image: "images/home/item/decoDX2_Taurus-102.png",
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
                [1, 20000],
                [2, 200],
                [5, 5000],
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
                image: "images/home/item/decoDX2_Virgo-101.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
    ],
    // 宠物板相关配置 最少要有一个id为1的
    pets: [
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
                [1, 50000],
                [2, 500],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle1",
                // 解锁描述
                dsc: "PetUnlockDescribe1",
                // 解锁图片
                image: "images/home/item/decoDX2_Aquarius-1.png",
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
                [1, 50000],
                [2, 500],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle2",
                // 解锁描述
                dsc: "PetUnlockDescribe2",
                // 解锁图片
                image: "images/home/item/decoDX2_Aquarius-3.png",
                // 解锁图片缩放
                imageScale: 1,
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
                [1, 50000],
                [2, 500],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
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
                [1, 50000],
                [2, 500],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle4",
                // 解锁描述
                dsc: "PetUnlockDescribe4",
                // 解锁图片
                image: "images/home/item/decoDX2_Cancer-1.png",
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
                [1, 50000],
                [2, 500],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle5",
                // 解锁描述
                dsc: "PetUnlockDescribe5",
                // 解锁图片
                image: "images/home/item/decoDX2_Gemini-1.png",
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
                [1, 50000],
                [2, 500],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle6",
                // 解锁描述
                dsc: "PetUnlockDescribe6",
                // 解锁图片
                image: "images/home/item/decoDX2_Gemini-2.png",
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
                [1, 50000],
                [2, 500],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle7",
                // 解锁描述
                dsc: "PetUnlockDescribe7",
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
                [1, 50000],
                [2, 500],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle8",
                // 解锁描述
                dsc: "PetUnlockDescribe8",
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
                [1, 50000],
                [2, 500],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle9",
                // 解锁描述
                dsc: "PetUnlockDescribe9",
                // 解锁图片
                image: "images/home/item/decoDX2_Leo-6.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 61,
            path: "images/home/item/decoDX2_Libra-1.png",
            // 场景物件缩放
            itemScale: 0.1,
            // 物件图标缩放
            iconScale: 0.1,
            // 宠物跳动时间间隔（单位：秒）
            petsJumpInterval: 2,
            // 宠物跳动旋转角度（单位：角度）
            petsJumpRotation: 5,
            // 宠物移动的速度（单位：像素）
            petsVelocity: 0.5,
            // 解锁条件 填入对应条件的ID，以及对应参数(第一位是条件ID，之后条件中有几位参数，就按对应顺序填写对应参数)
            // 比如条件是1，那么其中有一位参数表示需要花费的金币，那么就填写[1,1000]，表示需要花费一千金币解锁
            unlockConditions: [
                [1, 50000],
                [2, 500],
                [6, 100000],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle10",
                // 解锁描述
                dsc: "PetUnlockDescribe10",
                // 解锁图片
                image: "images/home/item/decoDX2_Libra-1.png",
                // 解锁图片缩放
                imageScale: 0.3,
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
                [1, 50000],
                [2, 500],
                [7, 10],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle11",
                // 解锁描述
                dsc: "PetUnlockDescribe11",
                // 解锁图片
                image: "images/home/item/decoDX2_Scorpius-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
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
                [1, 50000],
                [2, 500],
                [8, 10],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
            },
            // 解锁显示内容（有配置就显示，没配置就不显示）
            unlockInfo: {
                // 解锁内容标题
                title: "PetUnlockTitle12",
                // 解锁描述
                dsc: "PetUnlockDescribe12",
                // 解锁图片
                image: "images/home/item/decoDX2_Taurus-1.png",
                // 解锁图片缩放
                imageScale: 1,
            },
        },
        {
            id: 102,
            path: "images/home/item/decoDX2_Taurus-3.png",
            // 场景物件缩放
            itemScale: 0.5,
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
                [1, 50000],
                [2, 500],
                [9, 10],
            ],
            // 解锁奖励 填入对应的奖励比率
            unlockRewards: {
                coinPercent: 0.1,
                distancePercent: 0.1,
                scorePercent: 0.1,
                expPercent: 0.1,
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
    eatGoldCoin: "myLaya/laya/assets/sounds/SoundSE319.mp3",
    eatStar: "myLaya/laya/assets/sounds/SoundSE319.mp3",
    eatExp: "myLaya/laya/assets/sounds/SoundSE319.mp3",
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
        rewardCoin: 1000000,
        // 奖励钻石
        rewardDiamond: 2000000,
    },
    {
        // 在线分钟数
        onlineMinutes: 5,
        // 奖励金币
        rewardCoin: 3000,
        // 奖励钻石
        rewardDiamond: 40,
    },
    {
        // 在线分钟数
        onlineMinutes: 10,
        // 奖励金币
        rewardCoin: 5000,
        // 奖励钻石
        rewardDiamond: 60,
    },
    {
        // 在线分钟数
        onlineMinutes: 15,
        // 奖励金币
        rewardCoin: 7000,
        // 奖励钻石
        rewardDiamond: 80,
    },
    {
        // 在线分钟数
        onlineMinutes: 30,
        // 奖励金币
        rewardCoin: 9000,
        // 奖励钻石
        rewardDiamond: 100,
    },
];

// 每天重置各种奖励的时间（小时）(范例：0为凌晨0点，23为晚上11点)
Config.resetRewardHour = 0;

// 签到奖励列表
// 按顺序从上往下是第一天到第七天
Config.signRewardList = [
    {coin: 2000},
    {bike: 2},
    {diamond: 200},
    {bike: 51},
    {coin: 15000},
    {diamond: 400},
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
        condition: [4, 43],
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
        condition: [4, 60],
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
        condition: [4, 20],
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
        condition: [4, 120],
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
        condition: [4, 180],
        // 解锁内容标题
        title: "SystemUnlockTitle2",
        // 解锁描述
        dsc: "SystemUnlockDescribe2",
        // 解锁图片
        image: "myLaya/laya/assets/images/english/Match.png",
        // 解锁图片缩放
        imageScale: 1.5,
    },
    // 排行榜
    rankButton: {
        // 解锁条件
        condition: [10, 0],
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
        condition: [10, 0],
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
};

// 闯关模式地图配置
Config.gameLevelMode = {
    // 闯关模式复活次数
    rebornTimes: 111,
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
            jumpForce: 12800,
            // BGM路径
            bgmPath: "myLaya/laya/assets/sounds/01_oushiza.mp3",
            // 道具随机表
            itemRandomTableList: {
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
                Magnet: 1,
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
                {diamond: 40, exp: 10},
                {diamond: 40, coin: 2000},
                {bike: 1, coin: 2000},
                {diamond: 40, coin: 2000},
                {bike: 4, coin: 2000},
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
            jumpForce: 12800,
            // BGM路径
            bgmPath: "myLaya/laya/assets/sounds/05_ohitsujiza.mp3",
            // 道具随机表
            itemRandomTableList: {
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
                Magnet: 1,
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
                {diamond: 40, coin: 2000},
                {diamond: 40, coin: 2000},
                {diamond: 40, coin: 2000},
                {diamond: 40, coin: 2000},
                {bike: 2, coin: 2000},
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
            jumpForce: 12800,
            // BGM路径
            bgmPath: "myLaya/laya/assets/sounds/03_mizugameza.mp3",
            // 道具随机表
            itemRandomTableList: {
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
                Magnet: 1,
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
                {diamond: 40, coin: 2000},
                {diamond: 40, coin: 2000},
                {diamond: 40, coin: 2000},
                {diamond: 40, coin: 2000},
                {bike: 20, coin: 2000},
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
            jumpForce: 12800,
            // BGM路径
            bgmPath: "myLaya/laya/assets/sounds/04_ice.mp3",
            // 道具随机表
            itemRandomTableList: {
                Accelerate: 1,
                PowerJump: 1,
                UnlimitedJump: 1,
                Magnet: 1,
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
                {diamond: 40, coin: 2000},
                {diamond: 40, coin: 2000},
                {diamond: 40, coin: 2000},
                {diamond: 40, coin: 2000},
                {bike: 21, coin: 2000},
            ],
        },
//卡5        {
//卡5            // 解锁需要的星星数
//卡5            starCountUnlockNeeded: 55,
//卡5            // 地图描述
//卡5            dsc: "Select Map5",
//卡5            // 主页封面图
//卡5            mainCover: "images/map/DX3_Rococo/TextureDX3_RococoMap.png",
//卡5            // 地图所需的图片路径（看描述还是不明白是啥的话 可以直接打开对应的文件看看）
//卡5            texture: {
//卡5                // 侧边
//卡5                side: "images/map/DX3_Rococo/TextureDX3_RococoRoad01SideSkin.png",
//卡5                // 底部
//卡5                top: "images/map/DX3_Rococo/TextureDX3_RococoRoad01TopSkin.png",
//卡5                // 侧边
//卡5                side2: "images/map/DX3_Rococo/TextureDX3_RococoRoad02SideSkin.png",
//卡5                // 底部
//卡5                top2: "images/map/DX3_Rococo/TextureDX3_RococoRoad02TopSkin.png",
//卡5                // 背景 有多少层背景就配置多少张
//卡5                bg: [
//卡5                    "images/map/DX3_Rococo/TextureDX3_RococoBackground01.png",
//卡5                    "images/map/DX3_Rococo/TextureDX3_RococoBackground02.png",
//卡5                    "images/map/DX3_Rococo/TextureDX3_RococoBackground03.png",
//卡5                ],
//卡5            },
//卡5            // 视差背景系数：左右
//卡5            horizontalParallaxDepth: [0.9, 0.8, 0.5, 0],
//卡5            // 视差背景系数：上下
//卡5            verticalParallaxDepth: [1, 1, 1, 0],
//卡5            // 背景的Y轴位置
//卡5            bgY: [0, 128, 0],
//卡5            // 背景缩放系数
//卡5            bgScale: [1, 1, 1],
//卡5            // 自行车速度（基础：20）
//卡5            bikeVelocity: 20,
//卡5            // 重力（基础：-175）
//卡5            gravity: -175,
//卡5            // 跳跃爆发力（基础：12800）
//卡5            jumpForce: 12800,
//卡5            // BGM路径
//卡5            bgmPath: "myLaya/laya/assets/sounds/07_rococo.mp3",
//卡5            // 道具随机表
//卡5            itemRandomTableList: {
//卡5                Accelerate: 1,
//卡5                PowerJump: 1,
//卡5                UnlimitedJump: 1,
//卡5                Magnet: 1,
//卡5            },
//卡5            // 每一关的地图配置
//卡5            levelList: [
//卡5                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡5                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡5                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡5                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡5                "myLaya/laya/pages/Map/Map-1-3.scene.json",
//卡5            ],
//卡5            rewardList: [
//卡5                {diamond: 40, coin: 2000},
//卡5                {diamond: 40, coin: 2000},
//卡5                {diamond: 40, coin: 2000},
//卡5                {diamond: 40, coin: 2000},
//卡5                {bike: 7, coin: 2000},
//卡5            ],
//卡5        },
//卡6        {
//卡6            // 解锁需要的星星数
//卡6            starCountUnlockNeeded: 66,
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
//卡6            jumpForce: 12800,
//卡6            // BGM路径
//卡6            bgmPath: "myLaya/laya/assets/sounds/10_uoza.mp3",
//卡6            // 道具随机表
//卡6            itemRandomTableList: {
//卡6                Accelerate: 1,
//卡6                PowerJump: 1,
//卡6                UnlimitedJump: 1,
//卡6                Magnet: 1,
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
//卡6                {diamond: 40, coin: 2000},
//卡6                {diamond: 40, coin: 2000},
//卡6                {diamond: 40, coin: 2000},
//卡6                {diamond: 40, coin: 2000},
//卡6                {bike: 7, coin: 2000},
//卡6            ],
//卡6        },
//卡7        {
//卡7            // 解锁需要的星星数
//卡7            starCountUnlockNeeded: 77,
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
//卡7            jumpForce: 12800,
//卡7            // BGM路径
//卡7            bgmPath: "myLaya/laya/assets/sounds/08_sengoku.mp3",
//卡7            // 道具随机表
//卡7            itemRandomTableList: {
//卡7                Accelerate: 1,
//卡7                PowerJump: 1,
//卡7                UnlimitedJump: 1,
//卡7                Magnet: 1,
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
//卡7                {diamond: 40, coin: 2000},
//卡7                {diamond: 40, coin: 2000},
//卡7                {diamond: 40, coin: 2000},
//卡7                {diamond: 40, coin: 2000},
//卡7                {bike: 7, coin: 2000},
//卡7            ],
//卡7        },
//卡8        {
//卡8            // 解锁需要的星星数
//卡8            starCountUnlockNeeded: 88,
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
//卡8            horizontalParallaxDepth: [0.9, 1, 0.5, 0],
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
//卡8            jumpForce: 12800,
//卡8            // BGM路径
//卡8            bgmPath: "myLaya/laya/assets/sounds/BGM_103.mp3",
//卡8            // 道具随机表
//卡8            itemRandomTableList: {
//卡8                Accelerate: 1,
//卡8                PowerJump: 1,
//卡8                UnlimitedJump: 1,
//卡8                Magnet: 1,
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
//卡8                {diamond: 40, coin: 2000},
//卡8                {diamond: 40, coin: 2000},
//卡8                {diamond: 40, coin: 2000},
//卡8                {diamond: 40, coin: 2000},
//卡8                {bike: 7, coin: 2000},
//卡8            ],
//卡8        },
//卡9        {
//卡9            // 解锁需要的星星数
//卡9            starCountUnlockNeeded: 99,
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
//卡9            horizontalParallaxDepth: [0.9, 1, 0.5, 0],
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
//卡9            jumpForce: 12800,
//卡9            // BGM路径
//卡9            bgmPath: "myLaya/laya/assets/sounds/BGM_105.mp3",
//卡9            // 道具随机表
//卡9            itemRandomTableList: {
//卡9                Accelerate: 1,
//卡9                PowerJump: 1,
//卡9                UnlimitedJump: 1,
//卡9                Magnet: 1,
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
//卡9                {diamond: 40, coin: 2000},
//卡9                {diamond: 40, coin: 2000},
//卡9                {diamond: 40, coin: 2000},
//卡9                {diamond: 40, coin: 2000},
//卡9                {bike: 7, coin: 2000},
//卡9            ],
//卡9        },
    ],
};

// 抽奖相关配置
Config.drawWeightList = [
    {
        "type": "bike",
        "id": 0,
        "weight": 8
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
        "weight": 2
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
        "weight": 200
    },
];

// 玩家等级所需总经验(范例：1级=0,2级=10，3级=30，也就是2级升3级需要30-10=20经验)
Config.playerLevelNeededExp = [
    0, 10, 30, 60, 100,
    150, 210, 280, 360, 450,
    550, 660, 780, 910, 1050,
    1200, 1360, 1530, 1710, 1900,
    2100, 2310, 2530, 2760, 3000,
    3250, 3510, 3780, 4060, 4350,
    4650, 4960, 5280, 5610, 5950,
    6300, 6660, 7030, 7410, 7800,
    8200, 8610, 9030, 9460, 9900,
    10350, 10810, 11280, 11760, 12250,
    12750, 13260, 13780, 14310, 14850,
    15400, 15960, 16530, 17110, 17700,
    18300, 18910, 19530, 20160, 20800,
    21450, 22110, 22780, 23460, 24150,
    24850, 25560, 26280, 27010, 27750,
    28500, 29260, 30030, 30810, 31600,
    32400, 33210, 34030, 34860, 35700,
    36550, 37410, 38280, 39160, 40050,
    40950, 41860, 42780, 43710, 44650,
    45600, 46560, 47530, 48510
];

// 升级自行车相关配置
Config.upgradeBike = {
    // 每次升级消耗金币
    costCoin: [
        1000, 2000, 3000, 4000, 5000,
        6000, 7000
    ],
    // 每次升级增加的值
    addedValueEachTime: 0.5,
    // 每项最大值
    maxValue: 6,
    // 每个玩家级别最多能升级多少次自行车（按顺序多用每个级别的次数）（对应玩家等级和可升级次数）
    playerLevelLimitTimes: [
        1, 2, 3, 4, 5,
        6, 7, 48
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

export default Config;
