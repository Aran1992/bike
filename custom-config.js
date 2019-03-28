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

// 地图配置
Config.mapList = [
    {
        // 显示给人看的名字
        showName: "Test1",
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
        bgmPath: "sound/SoundBGM102.mp3",
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
        // 显示给人看的名字
        showName: "Test2",
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
        bgmPath: "sound/SoundBGM103.mp3",
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
        // 显示给人看的名字
        showName: "Test3",
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
        bgmPath: "sound/SoundBGM105.mp3",
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
        // 显示给人看的名字
        showName: "Test4",
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
        bgmPath: "sound/SoundBGM105.mp3",
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
        // 显示给人看的名字
        showName: "Test5",
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
        bgmPath: "sound/bgm1.mp3",
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
        // 显示给人看的名字
        showName: "Test6",
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
        bgmPath: "sound/bgm1.mp3",
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
        // 显示给人看的名字
        showName: "Test7",
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
        bgmPath: "sound/bgm1.mp3",
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
        // 显示给人看的名字
        showName: "Test8",
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
        bgmPath: "sound/bgm1.mp3",
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
        // 显示给人看的名字
        showName: "Test9",
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
        bgmPath: "sound/bgm1.mp3",
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
        // 显示给人看的名字
        showName: "Test10",
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
        bgmPath: "sound/bgm1.mp3",
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
        // 显示给人看的名字
        showName: "Test11",
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
        bgmPath: "sound/bgm1.mp3",
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
        // 显示给人看的名字
        showName: "Test12",
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
        bgmPath: "sound/bgm1.mp3",
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

// 自行车密度
Config.bikeDensity = 1;

// 自行车跳跃的时候的旋转角度 顺时针旋转是正数
Config.bikeJumpingRotation = -30;

// 无尽模式配置
Config.endlessMode.sceneList = [
    {
        id: 0,
        // 免费解锁所需总距离
        unlockDistance: 0,
        // 花费解锁所需钻石
        unlockCostDiamond: 0,
        // 显示给人看的名字
        showName: "Map1",
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
        bgmPath: "sound/SoundBGM102.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
                "Lv021/Lv021-00800101",
                "Lv021/Lv021-00800121",
                "Lv021/Lv021-00800401",
                "Lv021/Lv021-00800421",
                "Lv021/Lv021-00800701",
                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
                "Lv021/Lv021-00700101",
                "Lv021/Lv021-00700121",
                "Lv021/Lv021-00700401",
                "Lv021/Lv021-00700421",
                "Lv021/Lv021-00700701",
                "Lv021/Lv021-00700721",

                // 关卡元素：火球
//                "Lv021/Lv021-00600101",
//                "Lv021/Lv021-00600121",
//                "Lv021/Lv021-00600401",
//                "Lv021/Lv021-00600421",
//                "Lv021/Lv021-00600701",
//                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
//                "Lv021/Lv021-00500101",
//                "Lv021/Lv021-00500121",
//                "Lv021/Lv021-00500401",
//                "Lv021/Lv021-00500421",
//                "Lv021/Lv021-00500701",
//                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
//                "Lv021/Lv021-00300101",
//                "Lv021/Lv021-00300121",
//                "Lv021/Lv021-00300401",
//                "Lv021/Lv021-00300421",
//                "Lv021/Lv021-00300701",
//                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
//                "Lv021/Lv021-00200101",
//                "Lv021/Lv021-00200121",
//                "Lv021/Lv021-00200401",
//                "Lv021/Lv021-00200421",
//                "Lv021/Lv021-00200701",
//                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
                "Lv021/Lv021-00100101",
                "Lv021/Lv021-00100121",
                "Lv021/Lv021-00100401",
                "Lv021/Lv021-00100421",
                "Lv021/Lv021-00100701",
                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map1",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 1,
        // 免费解锁所需总距离
        unlockDistance: 12000,
        // 花费解锁所需钻石
        unlockCostDiamond: 10,
        // 显示给人看的名字
        showName: "Map2",
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
        bgmPath: "sound/SoundBGM103.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
//                "Lv021/Lv021-00800101",
//                "Lv021/Lv021-00800121",
//                "Lv021/Lv021-00800401",
//                "Lv021/Lv021-00800421",
//                "Lv021/Lv021-00800701",
//                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
                "Lv021/Lv021-00700101",
                "Lv021/Lv021-00700121",
                "Lv021/Lv021-00700401",
                "Lv021/Lv021-00700421",
                "Lv021/Lv021-00700701",
                "Lv021/Lv021-00700721",

                // 关卡元素：火球
//                "Lv021/Lv021-00600101",
//                "Lv021/Lv021-00600121",
//                "Lv021/Lv021-00600401",
//                "Lv021/Lv021-00600421",
//                "Lv021/Lv021-00600701",
//                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
                "Lv021/Lv021-00500101",
                "Lv021/Lv021-00500121",
                "Lv021/Lv021-00500401",
                "Lv021/Lv021-00500421",
                "Lv021/Lv021-00500701",
                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
                "Lv021/Lv021-00300101",
                "Lv021/Lv021-00300121",
                "Lv021/Lv021-00300401",
                "Lv021/Lv021-00300421",
                "Lv021/Lv021-00300701",
                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
//                "Lv021/Lv021-00200101",
//                "Lv021/Lv021-00200121",
//                "Lv021/Lv021-00200401",
//                "Lv021/Lv021-00200421",
//                "Lv021/Lv021-00200701",
//                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
//                "Lv021/Lv021-00100101",
//                "Lv021/Lv021-00100121",
//                "Lv021/Lv021-00100401",
//                "Lv021/Lv021-00100421",
//                "Lv021/Lv021-00100701",
//                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map2",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 2,
        // 免费解锁所需总距离
        unlockDistance: 36000,
        // 花费解锁所需钻石
        unlockCostDiamond: 50,
        // 显示给人看的名字
        showName: "Map3",
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
        bgmPath: "sound/SoundBGM105.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
//                "Lv021/Lv021-00800101",
//                "Lv021/Lv021-00800121",
//                "Lv021/Lv021-00800401",
//                "Lv021/Lv021-00800421",
//                "Lv021/Lv021-00800701",
//                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
//                "Lv021/Lv021-00700101",
//                "Lv021/Lv021-00700121",
//                "Lv021/Lv021-00700401",
//                "Lv021/Lv021-00700421",
//                "Lv021/Lv021-00700701",
//                "Lv021/Lv021-00700721",

                // 关卡元素：火球
                "Lv021/Lv021-00600101",
                "Lv021/Lv021-00600121",
                "Lv021/Lv021-00600401",
                "Lv021/Lv021-00600421",
                "Lv021/Lv021-00600701",
                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
                "Lv021/Lv021-00500101",
                "Lv021/Lv021-00500121",
                "Lv021/Lv021-00500401",
                "Lv021/Lv021-00500421",
                "Lv021/Lv021-00500701",
                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
//                "Lv021/Lv021-00300101",
//                "Lv021/Lv021-00300121",
//                "Lv021/Lv021-00300401",
//                "Lv021/Lv021-00300421",
//                "Lv021/Lv021-00300701",
//                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
                "Lv021/Lv021-00200101",
                "Lv021/Lv021-00200121",
                "Lv021/Lv021-00200401",
                "Lv021/Lv021-00200421",
                "Lv021/Lv021-00200701",
                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
//                "Lv021/Lv021-00100101",
//                "Lv021/Lv021-00100121",
//                "Lv021/Lv021-00100401",
//                "Lv021/Lv021-00100421",
//                "Lv021/Lv021-00100701",
//                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map3",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 3,
        // 免费解锁所需总距离
        unlockDistance: 72000,
        // 花费解锁所需钻石
        unlockCostDiamond: 100,
        // 显示给人看的名字
        showName: "Map4",
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
        bgmPath: "sound/SoundBGM105.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
//                "Lv021/Lv021-00800101",
//                "Lv021/Lv021-00800121",
//                "Lv021/Lv021-00800401",
//                "Lv021/Lv021-00800421",
//                "Lv021/Lv021-00800701",
//                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
                "Lv021/Lv021-00700101",
                "Lv021/Lv021-00700121",
                "Lv021/Lv021-00700401",
                "Lv021/Lv021-00700421",
                "Lv021/Lv021-00700701",
                "Lv021/Lv021-00700721",

                // 关卡元素：火球
//                "Lv021/Lv021-00600101",
//                "Lv021/Lv021-00600121",
//                "Lv021/Lv021-00600401",
//                "Lv021/Lv021-00600421",
//                "Lv021/Lv021-00600701",
//                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
//                "Lv021/Lv021-00500101",
//                "Lv021/Lv021-00500121",
//                "Lv021/Lv021-00500401",
//                "Lv021/Lv021-00500421",
//                "Lv021/Lv021-00500701",
//                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
//                "Lv021/Lv021-00300101",
//                "Lv021/Lv021-00300121",
//                "Lv021/Lv021-00300401",
//                "Lv021/Lv021-00300421",
//                "Lv021/Lv021-00300701",
//                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
                "Lv021/Lv021-00200101",
                "Lv021/Lv021-00200121",
                "Lv021/Lv021-00200401",
                "Lv021/Lv021-00200421",
                "Lv021/Lv021-00200701",
                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
                "Lv021/Lv021-00100101",
                "Lv021/Lv021-00100121",
                "Lv021/Lv021-00100401",
                "Lv021/Lv021-00100421",
                "Lv021/Lv021-00100701",
                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map4",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 4,
        // 免费解锁所需总距离
        unlockDistance: 144000,
        // 花费解锁所需钻石
        unlockCostDiamond: 150,
        // 显示给人看的名字
        showName: "Map5",
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
        bgmPath: "sound/bgm1.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
                "Lv021/Lv021-00800101",
                "Lv021/Lv021-00800121",
                "Lv021/Lv021-00800401",
                "Lv021/Lv021-00800421",
                "Lv021/Lv021-00800701",
                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
                "Lv021/Lv021-00700101",
                "Lv021/Lv021-00700121",
                "Lv021/Lv021-00700401",
                "Lv021/Lv021-00700421",
                "Lv021/Lv021-00700701",
                "Lv021/Lv021-00700721",

                // 关卡元素：火球
//                "Lv021/Lv021-00600101",
//                "Lv021/Lv021-00600121",
//                "Lv021/Lv021-00600401",
//                "Lv021/Lv021-00600421",
//                "Lv021/Lv021-00600701",
//                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
                "Lv021/Lv021-00500101",
                "Lv021/Lv021-00500121",
                "Lv021/Lv021-00500401",
                "Lv021/Lv021-00500421",
                "Lv021/Lv021-00500701",
                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
//                "Lv021/Lv021-00300101",
//                "Lv021/Lv021-00300121",
//                "Lv021/Lv021-00300401",
//                "Lv021/Lv021-00300421",
//                "Lv021/Lv021-00300701",
//                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
//                "Lv021/Lv021-00200101",
//                "Lv021/Lv021-00200121",
//                "Lv021/Lv021-00200401",
//                "Lv021/Lv021-00200421",
//                "Lv021/Lv021-00200701",
//                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
//                "Lv021/Lv021-00100101",
//                "Lv021/Lv021-00100121",
//                "Lv021/Lv021-00100401",
//                "Lv021/Lv021-00100421",
//                "Lv021/Lv021-00100701",
//                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map5",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 5,
        // 免费解锁所需总距离
        unlockDistance: 216000,
        // 花费解锁所需钻石
        unlockCostDiamond: 200,
        // 显示给人看的名字
        showName: "Map6",
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
        bgmPath: "sound/bgm1.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
                "Lv021/Lv021-00800101",
                "Lv021/Lv021-00800121",
                "Lv021/Lv021-00800401",
                "Lv021/Lv021-00800421",
                "Lv021/Lv021-00800701",
                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
//                "Lv021/Lv021-00700101",
//                "Lv021/Lv021-00700121",
//                "Lv021/Lv021-00700401",
//                "Lv021/Lv021-00700421",
//                "Lv021/Lv021-00700701",
//                "Lv021/Lv021-00700721",

                // 关卡元素：火球
//                "Lv021/Lv021-00600101",
//                "Lv021/Lv021-00600121",
//                "Lv021/Lv021-00600401",
//                "Lv021/Lv021-00600421",
//                "Lv021/Lv021-00600701",
//                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
                "Lv021/Lv021-00500101",
                "Lv021/Lv021-00500121",
                "Lv021/Lv021-00500401",
                "Lv021/Lv021-00500421",
                "Lv021/Lv021-00500701",
                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
//                "Lv021/Lv021-00300101",
//                "Lv021/Lv021-00300121",
//                "Lv021/Lv021-00300401",
//                "Lv021/Lv021-00300421",
//                "Lv021/Lv021-00300701",
//                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
//                "Lv021/Lv021-00200101",
//                "Lv021/Lv021-00200121",
//                "Lv021/Lv021-00200401",
//                "Lv021/Lv021-00200421",
//                "Lv021/Lv021-00200701",
//                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
                "Lv021/Lv021-00100101",
                "Lv021/Lv021-00100121",
                "Lv021/Lv021-00100401",
                "Lv021/Lv021-00100421",
                "Lv021/Lv021-00100701",
                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map6",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 6,
        // 免费解锁所需总距离
        unlockDistance: 432000,
        // 花费解锁所需钻石
        unlockCostDiamond: 250,
        // 显示给人看的名字
        showName: "Map7",
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
        bgmPath: "sound/bgm1.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
                "Lv021/Lv021-00800101",
                "Lv021/Lv021-00800121",
                "Lv021/Lv021-00800401",
                "Lv021/Lv021-00800421",
                "Lv021/Lv021-00800701",
                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
//                "Lv021/Lv021-00700101",
//                "Lv021/Lv021-00700121",
//                "Lv021/Lv021-00700401",
//                "Lv021/Lv021-00700421",
//                "Lv021/Lv021-00700701",
//                "Lv021/Lv021-00700721",

                // 关卡元素：火球
                "Lv021/Lv021-00600101",
                "Lv021/Lv021-00600121",
                "Lv021/Lv021-00600401",
                "Lv021/Lv021-00600421",
                "Lv021/Lv021-00600701",
                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
//                "Lv021/Lv021-00500101",
//                "Lv021/Lv021-00500121",
//                "Lv021/Lv021-00500401",
//                "Lv021/Lv021-00500421",
//                "Lv021/Lv021-00500701",
//                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
//                "Lv021/Lv021-00300101",
//                "Lv021/Lv021-00300121",
//                "Lv021/Lv021-00300401",
//                "Lv021/Lv021-00300421",
//                "Lv021/Lv021-00300701",
//                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
                "Lv021/Lv021-00200101",
                "Lv021/Lv021-00200121",
                "Lv021/Lv021-00200401",
                "Lv021/Lv021-00200421",
                "Lv021/Lv021-00200701",
                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
//                "Lv021/Lv021-00100101",
//                "Lv021/Lv021-00100121",
//                "Lv021/Lv021-00100401",
//                "Lv021/Lv021-00100421",
//                "Lv021/Lv021-00100701",
//                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map7",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 7,
        // 免费解锁所需总距离
        unlockDistance: 864000,
        // 花费解锁所需钻石
        unlockCostDiamond: 300,
        // 显示给人看的名字
        showName: "Map8",
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
        bgmPath: "sound/bgm1.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
//                "Lv021/Lv021-00800101",
//                "Lv021/Lv021-00800121",
//                "Lv021/Lv021-00800401",
//                "Lv021/Lv021-00800421",
//                "Lv021/Lv021-00800701",
//                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
//                "Lv021/Lv021-00700101",
//                "Lv021/Lv021-00700121",
//                "Lv021/Lv021-00700401",
//                "Lv021/Lv021-00700421",
//                "Lv021/Lv021-00700701",
//                "Lv021/Lv021-00700721",

                // 关卡元素：火球
                "Lv021/Lv021-00600101",
                "Lv021/Lv021-00600121",
                "Lv021/Lv021-00600401",
                "Lv021/Lv021-00600421",
                "Lv021/Lv021-00600701",
                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
                "Lv021/Lv021-00500101",
                "Lv021/Lv021-00500121",
                "Lv021/Lv021-00500401",
                "Lv021/Lv021-00500421",
                "Lv021/Lv021-00500701",
                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
                "Lv021/Lv021-00300101",
                "Lv021/Lv021-00300121",
                "Lv021/Lv021-00300401",
                "Lv021/Lv021-00300421",
                "Lv021/Lv021-00300701",
                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
//                "Lv021/Lv021-00200101",
//                "Lv021/Lv021-00200121",
//                "Lv021/Lv021-00200401",
//                "Lv021/Lv021-00200421",
//                "Lv021/Lv021-00200701",
//                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
//                "Lv021/Lv021-00100101",
//                "Lv021/Lv021-00100121",
//                "Lv021/Lv021-00100401",
//                "Lv021/Lv021-00100421",
//                "Lv021/Lv021-00100701",
//                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map8",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 8,
        // 免费解锁所需总距离
        unlockDistance: 1728000,
        // 花费解锁所需钻石
        unlockCostDiamond: 300,
        // 显示给人看的名字
        showName: "Map9",
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
        bgmPath: "sound/bgm1.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
                "Lv021/Lv021-00800101",
                "Lv021/Lv021-00800121",
                "Lv021/Lv021-00800401",
                "Lv021/Lv021-00800421",
                "Lv021/Lv021-00800701",
                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
//                "Lv021/Lv021-00700101",
//                "Lv021/Lv021-00700121",
//                "Lv021/Lv021-00700401",
//                "Lv021/Lv021-00700421",
//                "Lv021/Lv021-00700701",
//                "Lv021/Lv021-00700721",

                // 关卡元素：火球
//                "Lv021/Lv021-00600101",
//                "Lv021/Lv021-00600121",
//                "Lv021/Lv021-00600401",
//                "Lv021/Lv021-00600421",
//                "Lv021/Lv021-00600701",
//                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
//                "Lv021/Lv021-00500101",
//                "Lv021/Lv021-00500121",
//                "Lv021/Lv021-00500401",
//                "Lv021/Lv021-00500421",
//                "Lv021/Lv021-00500701",
//                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
                "Lv021/Lv021-00300101",
                "Lv021/Lv021-00300121",
                "Lv021/Lv021-00300401",
                "Lv021/Lv021-00300421",
                "Lv021/Lv021-00300701",
                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
                "Lv021/Lv021-00200101",
                "Lv021/Lv021-00200121",
                "Lv021/Lv021-00200401",
                "Lv021/Lv021-00200421",
                "Lv021/Lv021-00200701",
                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
//                "Lv021/Lv021-00100101",
//                "Lv021/Lv021-00100121",
//                "Lv021/Lv021-00100401",
//                "Lv021/Lv021-00100421",
//                "Lv021/Lv021-00100701",
//                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
//                "Lv031/Lv031-00100101",
//                "Lv031/Lv031-00100121",
//                "Lv031/Lv031-00100401",
//                "Lv031/Lv031-00100421",
//                "Lv031/Lv031-00100701",
//                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map9",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 9,
        // 免费解锁所需总距离
        unlockDistance: 3456000,
        // 花费解锁所需钻石
        unlockCostDiamond: 300,
        // 显示给人看的名字
        showName: "Map10",
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
        bgmPath: "sound/bgm1.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
//                "Lv021/Lv021-00800101",
//                "Lv021/Lv021-00800121",
//                "Lv021/Lv021-00800401",
//                "Lv021/Lv021-00800421",
//                "Lv021/Lv021-00800701",
//                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
//                "Lv021/Lv021-00700101",
//                "Lv021/Lv021-00700121",
//                "Lv021/Lv021-00700401",
//                "Lv021/Lv021-00700421",
//                "Lv021/Lv021-00700701",
//                "Lv021/Lv021-00700721",

                // 关卡元素：火球
                "Lv021/Lv021-00600101",
                "Lv021/Lv021-00600121",
                "Lv021/Lv021-00600401",
                "Lv021/Lv021-00600421",
                "Lv021/Lv021-00600701",
                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
//                "Lv021/Lv021-00500101",
//                "Lv021/Lv021-00500121",
//                "Lv021/Lv021-00500401",
//                "Lv021/Lv021-00500421",
//                "Lv021/Lv021-00500701",
//                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
                "Lv021/Lv021-00300101",
                "Lv021/Lv021-00300121",
                "Lv021/Lv021-00300401",
                "Lv021/Lv021-00300421",
                "Lv021/Lv021-00300701",
                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
//                "Lv021/Lv021-00200101",
//                "Lv021/Lv021-00200121",
//                "Lv021/Lv021-00200401",
//                "Lv021/Lv021-00200421",
//                "Lv021/Lv021-00200701",
//                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
                "Lv021/Lv021-00100101",
                "Lv021/Lv021-00100121",
                "Lv021/Lv021-00100401",
                "Lv021/Lv021-00100421",
                "Lv021/Lv021-00100701",
                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
//                "Lv031/Lv031-00800101",
//                "Lv031/Lv031-00800121",
//                "Lv031/Lv031-00800401",
//                "Lv031/Lv031-00800421",
//                "Lv031/Lv031-00800701",
//                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
//                "Lv031/Lv031-00200101",
//                "Lv031/Lv031-00200121",
//                "Lv031/Lv031-00200401",
//                "Lv031/Lv031-00200421",
//                "Lv031/Lv031-00200701",
//                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map10",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 10,
        // 免费解锁所需总距离
        unlockDistance: 5184000,
        // 花费解锁所需钻石
        unlockCostDiamond: 300,
        // 显示给人看的名字
        showName: "Map11",
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
        bgmPath: "sound/bgm1.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
                "Lv021/Lv021-00800101",
                "Lv021/Lv021-00800121",
                "Lv021/Lv021-00800401",
                "Lv021/Lv021-00800421",
                "Lv021/Lv021-00800701",
                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
//                "Lv021/Lv021-00700101",
//                "Lv021/Lv021-00700121",
//                "Lv021/Lv021-00700401",
//                "Lv021/Lv021-00700421",
//                "Lv021/Lv021-00700701",
//                "Lv021/Lv021-00700721",

                // 关卡元素：火球
//                "Lv021/Lv021-00600101",
//                "Lv021/Lv021-00600121",
//                "Lv021/Lv021-00600401",
//                "Lv021/Lv021-00600421",
//                "Lv021/Lv021-00600701",
//                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
//                "Lv021/Lv021-00500101",
//                "Lv021/Lv021-00500121",
//                "Lv021/Lv021-00500401",
//                "Lv021/Lv021-00500421",
//                "Lv021/Lv021-00500701",
//                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
//                "Lv021/Lv021-00300101",
//                "Lv021/Lv021-00300121",
//                "Lv021/Lv021-00300401",
//                "Lv021/Lv021-00300421",
//                "Lv021/Lv021-00300701",
//                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
                "Lv021/Lv021-00200101",
                "Lv021/Lv021-00200121",
                "Lv021/Lv021-00200401",
                "Lv021/Lv021-00200421",
                "Lv021/Lv021-00200701",
                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
                "Lv021/Lv021-00100101",
                "Lv021/Lv021-00100121",
                "Lv021/Lv021-00100401",
                "Lv021/Lv021-00100421",
                "Lv021/Lv021-00100701",
                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
//                "Lv031/Lv031-00700101",
//                "Lv031/Lv031-00700121",
//                "Lv031/Lv031-00700401",
//                "Lv031/Lv031-00700421",
//                "Lv031/Lv031-00700701",
//                "Lv031/Lv031-00700721",

                // 关卡元素：火球
//                "Lv031/Lv031-00600101",
//                "Lv031/Lv031-00600121",
//                "Lv031/Lv031-00600401",
//                "Lv031/Lv031-00600421",
//                "Lv031/Lv031-00600701",
//                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
//                "Lv031/Lv031-00500101",
//                "Lv031/Lv031-00500121",
//                "Lv031/Lv031-00500401",
//                "Lv031/Lv031-00500421",
//                "Lv031/Lv031-00500701",
//                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
//                "Lv031/Lv031-00300101",
//                "Lv031/Lv031-00300121",
//                "Lv031/Lv031-00300401",
//                "Lv031/Lv031-00300421",
//                "Lv031/Lv031-00300701",
//                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map11",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
    {
        id: 11,
        // 免费解锁所需总距离
        unlockDistance: 6912000,
        // 花费解锁所需钻石
        unlockCostDiamond: 300,
        // 显示给人看的名字
        showName: "Map12",
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
        bgmPath: "sound/bgm1.mp3",
        // 里程提示（单位米）（10秒大约走200米）
        distanceNotice: [100, 200, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000],
        // 每个难度的长度（单位像素）（1米=16像素）（几个难度就要填几个，最后一个难度虽然重复但要填不然会报错）
        roadSectionLengthList: [5000, 10000, 10000, 4500, 10000],
        roadSectionList: [

            // 关卡阶段1（安全阶段）（LV-1）
            [
                // 关卡元素：纯路线
                "Lv011/Lv011-00000121",
                "Lv011/Lv011-00000401",
                "Lv011/Lv011-00000421",
                "Lv011/Lv011-00000701",
                "Lv011/Lv011-00000721",

                "Lv011/Lv011-00000101"
            ],

            // 关卡阶段2（普通难度）（LV-2）
            [
                // 关卡元素：滚石1
                "Lv021/Lv021-00800101",
                "Lv021/Lv021-00800121",
                "Lv021/Lv021-00800401",
                "Lv021/Lv021-00800421",
                "Lv021/Lv021-00800701",
                "Lv021/Lv021-00800721",

                // 关卡元素：小鸟1
                "Lv021/Lv021-00700101",
                "Lv021/Lv021-00700121",
                "Lv021/Lv021-00700401",
                "Lv021/Lv021-00700421",
                "Lv021/Lv021-00700701",
                "Lv021/Lv021-00700721",

                // 关卡元素：火球
                "Lv021/Lv021-00600101",
                "Lv021/Lv021-00600121",
                "Lv021/Lv021-00600401",
                "Lv021/Lv021-00600421",
                "Lv021/Lv021-00600701",
                "Lv021/Lv021-00600721",

                // 关卡元素：火柱
                "Lv021/Lv021-00500101",
                "Lv021/Lv021-00500121",
                "Lv021/Lv021-00500401",
                "Lv021/Lv021-00500421",
                "Lv021/Lv021-00500701",
                "Lv021/Lv021-00500721",

                // 关卡元素：地刺-固定
                "Lv021/Lv021-00300101",
                "Lv021/Lv021-00300121",
                "Lv021/Lv021-00300401",
                "Lv021/Lv021-00300421",
                "Lv021/Lv021-00300701",
                "Lv021/Lv021-00300721",

                // 关卡元素：蜘蛛网
                "Lv021/Lv021-00200101",
                "Lv021/Lv021-00200121",
                "Lv021/Lv021-00200401",
                "Lv021/Lv021-00200421",
                "Lv021/Lv021-00200701",
                "Lv021/Lv021-00200721",

                // 关卡元素：移动平台
                "Lv021/Lv021-00100101",
                "Lv021/Lv021-00100121",
                "Lv021/Lv021-00100401",
                "Lv021/Lv021-00100421",
                "Lv021/Lv021-00100701",
                "Lv021/Lv021-00100721",

                // 关卡元素：纯路线-带道具
                "Lv021/Lv021-00000101-0",
                "Lv021/Lv021-00000121-0",
                "Lv021/Lv021-00000401-0",
                "Lv021/Lv021-00000421-0",
                "Lv021/Lv021-00000701-0",
                "Lv021/Lv021-00000721-0",

                // 关卡元素：纯路线
                "Lv021/Lv021-00000121",
                "Lv021/Lv021-00000401",
                "Lv021/Lv021-00000421",
                "Lv021/Lv021-00000701",
                "Lv021/Lv021-00000721",

                "Lv021/Lv021-00000101"
            ],

            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ],

            // 关卡阶段4（奖励关卡）（Special-1）
            [
                // 关卡元素：纯路线
                "Special011/Special011-00000102",
                "Special011/Special011-00000121",
                "Special011/Special011-00000122",

                "Special011/Special011-00000101"
            ],


            // 关卡阶段3（困难难度）（LV-3）
            [
                // 关卡元素：滚石1
                "Lv031/Lv031-00800101",
                "Lv031/Lv031-00800121",
                "Lv031/Lv031-00800401",
                "Lv031/Lv031-00800421",
                "Lv031/Lv031-00800701",
                "Lv031/Lv031-00800721",

                // 关卡元素：小鸟1
                "Lv031/Lv031-00700101",
                "Lv031/Lv031-00700121",
                "Lv031/Lv031-00700401",
                "Lv031/Lv031-00700421",
                "Lv031/Lv031-00700701",
                "Lv031/Lv031-00700721",

                // 关卡元素：火球
                "Lv031/Lv031-00600101",
                "Lv031/Lv031-00600121",
                "Lv031/Lv031-00600401",
                "Lv031/Lv031-00600421",
                "Lv031/Lv031-00600701",
                "Lv031/Lv031-00600721",

                // 关卡元素：火柱
                "Lv031/Lv031-00500101",
                "Lv031/Lv031-00500121",
                "Lv031/Lv031-00500401",
                "Lv031/Lv031-00500421",
                "Lv031/Lv031-00500701",
                "Lv031/Lv031-00500721",

                // 关卡元素：地刺-固定
                "Lv031/Lv031-00300101",
                "Lv031/Lv031-00300121",
                "Lv031/Lv031-00300401",
                "Lv031/Lv031-00300421",
                "Lv031/Lv031-00300701",
                "Lv031/Lv031-00300721",

                // 关卡元素：蜘蛛网
                "Lv031/Lv031-00200101",
                "Lv031/Lv031-00200121",
                "Lv031/Lv031-00200401",
                "Lv031/Lv031-00200421",
                "Lv031/Lv031-00200701",
                "Lv031/Lv031-00200721",

                // 关卡元素：移动平台
                "Lv031/Lv031-00100101",
                "Lv031/Lv031-00100121",
                "Lv031/Lv031-00100401",
                "Lv031/Lv031-00100421",
                "Lv031/Lv031-00100701",
                "Lv031/Lv031-00100721",

                // 关卡元素：纯路线-带道具
                "Lv031/Lv031-00000101-0",
                "Lv031/Lv031-00000121-0",
                "Lv031/Lv031-00000401-0",
                "Lv031/Lv031-00000421-0",
                "Lv031/Lv031-00000701-0",
                "Lv031/Lv031-00000721-0",

                // 关卡元素：纯路线
                "Lv031/Lv031-00000121",
                "Lv031/Lv031-00000401",
                "Lv031/Lv031-00000421",
                "Lv031/Lv031-00000701",
                "Lv031/Lv031-00000721",

                "Lv031/Lv031-00000101"
            ]
        ],
        // 地图的描述，用于商店显示，内容为空或者没有该项的时候商店会自动隐藏描述
        dsc: "Map12",
        // 道具随机权重表（无尽模式-随机道具-模块1）
        itemRandomTable: {
            Accelerate: 1,
            PowerJump: 1,
            UnlimitedJump: 1,
            Magnet: 1,
        },
    },
];

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

// 抽奖重置时间间隔（单位：秒）（可用乘法计算）
Config.freeDrawInterval = 8 * 60 * 60;

// 提示相关配置
Config.notice = {
    // 字体颜色
    fill: "white",
    // 字体大小
    fontSize: 50,
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
    }
};

// 商店游戏币配置
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

// 商店礼包配置
// 礼包ID已经对应上功能了，不要更改ID和描述的对应关系，但是可以修改礼包的顺序
Config.presentList = [
    {
        // 礼包ID
        id: 1,
        // 礼包描述
        dsc: "Unlock All Bike",
        // 购买所需货币
        costMoney: 50,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum01.png",
    },
    {
        // 礼包ID
        id: 2,
        // 礼包描述
        dsc: "Unlock All Endless Scene",
        // 购买所需货币
        costMoney: 200,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum02.png",
    },
    {
        // 礼包ID
        id: 3,
        // 礼包描述
        dsc: "1 Money \n= 50 Diamond + 5000 Gold Coins",
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
        dsc: "6 Money \n= 150 Diamond + 15000 Gold Coins",
        // 购买所需货币
        costMoney: 6,
        // 购买礼包获得的钻石数量
        getDiamond: 150,
        // 购买礼包获得金币数量
        getCoin: 15000,
        imagePath: "myLaya/laya/assets/images/money-icon/MainMenuItemCourseNum04.png",
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
        bodyWidth: 88,
        // 实际区域高度
        bodyHeight: 672,
        // 实际区域X轴偏移
        bodyOffsetX: 20,
        // 实际区域Y轴偏移
        bodyOffsetY: 40,
    },
    // 大火墙
    bigFireWall: {
        // 实际区域宽度
        bodyWidth: 88,
        // 实际区域高度
        bodyHeight: 1192,
        // 实际区域X轴偏移
        bodyOffsetX: 20,
        // 实际区域Y轴偏移
        bodyOffsetY: 40,
    },
    // 小鸟
    bird: {
        // 实际区域宽度
        bodyWidth: 64,
        // 实际区域高度
        bodyHeight: 40,
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
            },
            // 增益：强化跳跃
            106: {
                portable: 0,
                effect: "PowerJump",
            },
            // 增益：无限跳跃
            111: {
                portable: 0,
                effect: "UnlimitedJump",
            },
            // 增益：磁铁（只能用于无尽模式，排名竞赛用会当机）
            121: {
                portable: 0,
                effect: "Magnet",
            },
            // 随机效果（机会命运）（还需要程序支持）
            9999: {
                portable: 0,
                effect: "Random",
            },
            // 害人道具：减速
            10: {
                portable: 1,
                effect: "Decelerate",
            },
            // 害人道具：削弱跳跃
            60: {
                portable: 1,
                effect: "WeakenJump",
            },
            // 害人道具：遮挡视线
            210: {
                portable: 1,
                effect: "BlockSight",
            },
            // 害人道具：束缚
            260: {
                portable: 1,
                effect: "SpiderWeb",
            },
            // 害人道具：封印
            1031: {
                portable: 1,
                effect: "Seal",
            },
            // 害人道具：落雷
            1036: {
                portable: 1,
                effect: "Thunder",
            },
            // 害人道具：香蕉皮炸弹
            1041: {
                portable: 1,
                effect: "BananaPeel",
            },
            // 增益道具：加速
            1010: {
                portable: 1,
                effect: "Accelerate",
            },
            // 增益道具：强化跳跃
            1060: {
                portable: 1,
                effect: "PowerJump",
            },
            // 增益道具：无限跳跃
            1110: {
                portable: 1,
                effect: "UnlimitedJump",
            },
            // 增益道具：磁铁（只能用于无尽模式，排名竞赛用会当机）
            1210: {
                portable: 1,
                effect: "Magnet",
            },
            // 随机道具
            99990: {
                portable: 1,
                effect: "Random",
            },
        }
    },
};

Config.defaultItemImagePath = "myLaya/laya/assets/images/crystal_grider_09.png";

Config.effect = {
    // 金币
    GoldCoin: {
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
    },
    // 减速（可做：害人减速道具、减速物件区域、减速带）
    Decelerate: {
        // 持续时间（单位：秒）
        duration: 5,
        // 对基础速度的修改比例（比如说基础为10，如果rate为-0.1，那么最终为 10 * ( 1 - 0.1 ) = 9; 如果rate为-0.6，那么最终为 10 * ( 1 - 0.6 ) = 4 ）
        rate: -0.5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
        // 使用害人道具对象目标类型（不填或者0就是随即其他一名玩家，1就是前一名玩家，2就是所有其他玩家）
        targetType: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_grider_09.png",
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/DecelerateEffect.prefab",
        // 承受者受击特效路径（只能是动画）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/DecelerateEffect2.prefab",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/buff_icon_04.png",
    },
    // 削弱跳跃（可做：害人削弱跳跃道具、削弱跳跃物件区域）
    WeakenJump: {
        // 持续时间（单位：秒）
        duration: 5,
        // 对基础跳跃力的修改比例（比如说基础为10，如果rate为-0.1，那么最终为 10 * ( 1 - 0.1 ) = 9; 如果rate为-0.6，那么最终为 10 * ( 1 - 0.6 ) = 4 ）
        rate: -0.5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
        // 使用害人道具对象目标类型（不填或者0就是随即其他一名玩家，1就是前一名玩家，2就是所有其他玩家）
        targetType: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_frog_09.png",
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/WeakenJumpEffect.prefab",
        // 承受者受击特效路径（只能是动画）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/WeakenJumpEffect.prefab",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/buff_icon_03.png",
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
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/TestAnimationEffect2.prefab",
        // 承受者受击特效路径（只能是动画）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/TestAnimationEffect1.prefab",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/buff_icon_06.png",
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
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/TestAnimationEffect2.prefab",
        // 承受者受击特效路径（只能是动画）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/TestAnimationEffect1.prefab",
        // 承受者持续特效路径（可以是动画或者静态图片）
        bearerBuffEffectPath: "myLaya/laya/assets/prefabs/SpiderWebBearerBuffEffect.prefab",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/buff_icon_07.png",
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
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/SealEffect.prefab",
        // 承受者受击特效路径（只能是动画）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/SealEffect.prefab",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/buff_icon_11.png",
    },
    // 落雷
    Thunder: {
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 0,
        // 使用害人道具对象目标类型（不填或者0就是随即其他一名玩家，1就是前一名玩家，2就是所有其他玩家）
        targetType: 2,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_icon1_09.png",
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/TestAnimationEffect2.prefab",
        // 承受者受击特效路径（只能是动画）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/ThunderEffect2.prefab",
    },
    // 加速（可做：增益加速道具、加速物件区域、加速带）
    Accelerate: {
        // 持续时间（单位：秒）
        duration: 5,
        // 对基础速度的修改比例（比如说基础为10，如果rate为-0.1，那么最终为 10 * ( 1 - 0.1 ) = 9; 如果rate为-0.6，那么最终为 10 * ( 1 - 0.6 ) = 4 ）
        rate: 0.5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_jet_09.png",
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/AccelerateEffec.prefab",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/buff_icon_05.png",
    },
    // 强化跳跃（可做：增益强化跳跃道具、强化跳跃物件区域）
    PowerJump: {
        // 持续时间（单位：秒）
        duration: 5,
        // 对基础跳跃力的修改比例（比如说基础为10，如果rate为-0.1，那么最终为 10 * ( 1 - 0.1 ) = 9; 如果rate为0.6，那么最终为 10 * ( 1 + 0.6 ) = 16 ）
        rate: 0.5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_drill_09.png",
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/PowerJumpEffect.prefab",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/buff_icon_02.png",
    },
    // 无限跳跃（可做：增益无限跳跃道具、无限跳跃物件区域）
    UnlimitedJump: {
        // 持续时间（单位：秒）
        duration: 5,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_wing_09.png",
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/UnlimitedJumpEffect.prefab",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/buff_icon_09.png",
    },
    // 磁铁（只能用于无尽模式，排名竞赛用会当机）（可做：增益磁铁道具、磁铁物件区域）
    Magnet: {
        // 持续时间（单位：秒）
        duration: 0.1,
        // 是否有益（1为有益，0为陷阱/害人）
        isHelpful: 1,
        // 吸取速度（单位：像素/秒）
        velocity: 1000,
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_dragon_09.png",
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/TestAnimationEffect2.prefab",
        // 持续效果ICON路径
        buffIconImagePath: "myLaya/laya/assets/images/buff_icon_01.png",
    },
    // 香蕉皮
    BananaPeel: {
        // 丢出去的香蕉皮的编辑器预制件
        peelPrefabPath: "myLaya/laya/assets/prefabs/BananaPeel.prefab",
        // 道具栏显示的道具图标
        imagePath: "myLaya/laya/assets/images/crystal_icon3_09.png",
        // 使用者使用特效路径（只能是动画）
        userUsedEffectPath: "myLaya/laya/assets/prefabs/TestAnimationEffect2.prefab",
        // 承受者受击特效路径（只能是动画）
        bearerSufferedEffectPath: "myLaya/laya/assets/prefabs/BananaPeel2.prefab",
    }
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
    costCoin: 1000,
};

// 钻石扭蛋花费
Config.diamondDrawCost = 50;
// 钻石复活花费
Config.diamondRebornCost = 10;

// 实时赛道的初始点位置
Config.racetrack = {
    startX: 30,
    startY: 80,
    playerYInterval: 5,
    totalLength: 420,
};

// 敌人自行车和玩家接触时的透明度（0完全透明 ~ 1完全不透明）
Config.enemy.contactPlayerAlpha = 0.6;

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

// 敌人挣脱蜘蛛网每次跳跃之间的时间间隔（单位：帧数（每秒大概60帧））
Config.enemy.spiderWebBreakIntervalFrame = 12;

// 使用道具提示消失的时间（单位：秒）
Config.itemUseHistoryDuration = 5;

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
    floorStartY: 128,
    // 家园的宽度（单位：像素）
    homeWidth: 720,
    // 家园的高度（单位：像素）
    homeHeight: 1500,
    // 宠物跳动时间间隔（单位：秒）
    petsJumpInterval: 2,
    // 宠物跳动旋转角度（单位：角度）
    petsJumpRotation: 5,
    // 宠物移动的速度（单位：像素）
    petsVelocity: 1,
    // 删除物件按钮的图片路径
    removeItemButtonImagePath: "myLaya/laya/assets/images/ButtonClose_Gray.png",
    // 场景物件默认缩放
    defaultSceneItemScale: 1,
    // 物件图标默认缩放
    defaultIconItemScale: 0.2,
    // 背景相关配置 最少要有一个id为1的
    bg: [
        {
            id: 1,
            path: "images/map/DX2_Aquarius/TextureDX2_AquariusBackground-1.png",
            name: "Background 1",
            itemScale: 2,
            iconScale: 0.1,
        },
        {
            id: 2,
            path: "images/map/DX2_Aries/TextureDX2_AriesBackground-1.png",
            name: "Background 2",
        },
        {
            id: 3,
            path: "images/map/DX2_Cancer/TextureDX2_CancerBackground-1.png",
            name: "Background 3",
        },
        {
            id: 4,
            path: "images/map/DX2_Capricorn/TextureDX2_CapricornBackground-1.png",
            name: "Background 4",
        },
        {
            id: 5,
            path: "images/map/DX2_Gemini/TextureDX2_GeminiBackground-1.png",
            name: "Background 5",
        },
        {
            id: 6,
            path: "images/map/DX2_Leo/TextureDX2_LeoBackground-1.png",
            name: "Background 6",
        },
        {
            id: 7,
            path: "images/map/DX2_Libra/TextureDX2_LibraBackground-1.png",
            name: "Background 7",
        },
        {
            id: 8,
            path: "images/map/DX2_Pisces/TextureDX2_PiscesBackground-1.png",
            name: "Background 8",
        },
    ],
    // 地板相关配置 最少要有一个id为1的
    floor: [
        {
            id: 1,
            path: "images/home/floor/floor001.jpg",
            name: "Floor 1",
            itemScale: 2,
            iconScale: 0.1,
        },
        {
            id: 2,
            path: "images/map/DX2_Aries/TextureDX2_AriesBackground03.png",
            name: "Floor 2",
        },
        {
            id: 3,
            path: "images/home/floor/floor001.jpg",
            name: "Floor 3",
        },
        {
            id: 4,
            path: "images/map/DX2_Aries/TextureDX2_AriesBackground03.png",
            name: "Floor 4",
        },
        {
            id: 5,
            path: "images/home/floor/floor001.jpg",
            name: "Floor 5",
        },
        {
            id: 6,
            path: "images/map/DX2_Aries/TextureDX2_AriesBackground03.png",
            name: "Floor 6",
        },
        {
            id: 7,
            path: "images/home/floor/floor001.jpg",
            name: "Floor 7",
        },
        {
            id: 8,
            path: "images/map/DX2_Aries/TextureDX2_AriesBackground03.png",
            name: "Floor 8",
        },
    ],
    // 战利品板相关配置 最少要有一个id为1的
    spoils: [
        {
            id: 1,
            path: "images/home/item/decoDX2_Aquarius-101.png",
            name: "Spoils 1",
        },
        {
            id: 2,
            path: "images/home/item/decoDX2_Cancer-101.png",
            name: "Spoils 2",
        },
        {
            id: 3,
            path: "images/home/item/decoDX2_Cancer-103.png",
            name: "Spoils 3",
        },
        {
            id: 4,
            path: "images/home/item/decoDX2_Capricorn-101.png",
            name: "Spoils 4",
        },
        {
            id: 5,
            path: "images/home/item/decoDX2_Capricorn-102.png",
            name: "Spoils 5",
        },
        {
            id: 6,
            path: "images/home/item/decoDX2_Gemini-101.png",
            name: "Spoils 6",
        },
        {
            id: 7,
            path: "images/home/item/decoDX2_Leo-102.png",
            name: "Spoils 7",
        },
        {
            id: 8,
            path: "images/home/item/decoDX2_Gemini-101.png",
            name: "Spoils 8",
        },
        {
            id: 9,
            path: "images/home/item/decoDX2_Leo-103.png",
            name: "Spoils 9",
        },
        {
            id: 10,
            path: "images/home/item/decoDX2_Leo-104.png",
            name: "Spoils 10",
        },
        {
            id: 11,
            path: "images/home/item/decoDX2_Leo-105.png",
            name: "Spoils 11",
        },
        {
            id: 12,
            path: "images/home/item/decoDX2_Libra-101.png",
            name: "Spoils 12",
        },
    ],
    // 宠物板相关配置 最少要有一个id为1的
    pets: [
        {
            id: 1,
            path: "images/home/item/decoDX2_Aquarius-1.png",
            name: "Pet 1",
        },
        {
            id: 2,
            path: "images/home/item/decoDX2_Aquarius-3.png",
            name: "Pet 2",
        },
        {
            id: 3,
            path: "images/home/item/decoDX2_Aries-1.png",
            name: "Pet 3",
        },
        {
            id: 4,
            path: "images/home/item/decoDX2_Cancer-1.png",
            name: "Pet 4",
        },
        {
            id: 5,
            path: "images/home/item/decoDX2_Capricorn-1.png",
            name: "Pet 5",
        },
        {
            id: 6,
            path: "images/home/item/decoDX2_Gemini-1.png",
            name: "Pet 6",
        },
        {
            id: 7,
            path: "images/home/item/decoDX2_Gemini-2.png",
            name: "Pet 7",
        },
        {
            id: 8,
            path: "images/home/item/decoDX2_Leo-1.png",
            name: "Pet 8",
        },
    ]
};

export default Config;
