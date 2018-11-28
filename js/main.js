const
    {
        Application,
        Graphics,
        Container,
        Sprite,
        Texture,
        Text,
        TextStyle,
        loader,
    } = PIXI,
    TilingSprite = PIXI.extras.TilingSprite,
    AnimatedSprite = PIXI.extras.AnimatedSprite,
    resources = loader.resources,
    {
        Vec2,
        World,
        Edge,
        Circle,
        Polygon,
        Box,
    } = planck;

let app;

class MyApplication extends Application {
    constructor(args) {
        super(args);

        this.scenesContainer = this.stage;
        this.sceneWidth = args.width;
        this.sceneHeight = args.height;

        this.sceneClassTable = {
            "StartScene": StartScene,
            "MapGameScene": MapGameScene,
            "EndlessGameScene": EndlessGameScene,
            "GameOverScene": GameOverScene,
        };
        this.sceneTable = {};

        this.eventTable = {};
    }

    showScene(sceneName, ...args) {
        if (this.sceneTable[sceneName] === undefined) {
            let scene = this.sceneClassTable[sceneName];
            this.sceneTable[sceneName] = new scene();
            app.scenesContainer.addChild(this.sceneTable[sceneName]);
        }
        this.sceneTable[sceneName].show(...args);
    }

    hideScene(sceneName) {
        if (this.sceneTable[sceneName]) {
            this.sceneTable[sceneName].hide();
        }
    }

    dispatchEvent(event, ...args) {
        if (this.eventTable[event]) {
            this.eventTable[event].forEach(handler => handler(...args));
        }
    }

    registerEvent(event, handler) {
        if (this.eventTable[event] === undefined) {
            this.eventTable[event] = [];
        }
        this.eventTable[event].push(handler);
    }

    unregisterEvent(event, handler) {
        if (this.eventTable[event]) {
            Utils.removeItemFromArray(this.eventTable[event], handler);
        }
    }

    loadResources(resPathList, loadedCallback) {
        resPathList = Array.from(new Set(resPathList));
        resPathList = resPathList.filter(path => resources[path] === undefined);
        loader.add(resPathList).load(loadedCallback);
    }
}

class Scene extends Container {
    constructor() {
        super();
        this.eventTable = {};
        this.onCreate();
    }

    destroy() {
        this.onDestroy();
        this.parent.removeChild(this);
    }

    show(...args) {
        this.visible = true;
        this.onShow(...args);
    }

    hide() {
        this.visible = false;
        this.onHide();
    }

    onCreate() {
    }

    onDestroy() {
    }

    onShow() {
    }

    onHide() {
    }

    registerEvent(event, handler) {
        handler = handler.bind(this);
        this.eventTable[event] = handler;
        app.registerEvent(event, handler);
    }
}

class StartScene extends Scene {
    onCreate() {
        let textContainer = new Container();
        this.addChild(textContainer);
        let x = app.sceneWidth / 2;
        let textListHeight = config.startScene.mapText.fontSize * (config.mapList.length + 1);
        let y = (app.sceneHeight - textListHeight) / 2;
        textContainer.position.set(x, y);

        let textStyle = new TextStyle(config.startScene.mapText);

        let emText = new Text("Endless Mode", textStyle);
        textContainer.addChild(emText);
        emText.anchor.set(0.5, 0);
        emText.position.set(0, 0);
        emText.interactive = true;
        emText.buttonMode = true;
        emText.on("pointerdown", () => this.onClickEndlessModeText());

        config.mapList.forEach((mapConfig, mapIndex) => {
            let text = new Text(`MAP-${mapIndex}: ${mapConfig.showName}`, textStyle);
            textContainer.addChild(text);
            text.anchor.set(0.5, 0);
            text.position.set(0, text.height * (mapIndex + 1));
            text.interactive = true;
            text.buttonMode = true;
            text.on("pointerdown", () => this.onClickMapText(mapIndex));
        });
    }

    onClickEndlessModeText(mapIndex) {
        app.hideScene("StartScene");
        app.showScene("EndlessGameScene", mapIndex);
    }

    onClickMapText(mapIndex) {
        app.hideScene("StartScene");
        app.showScene("MapGameScene", mapIndex);
    }
}

class GameScene extends Scene {
    onCreate() {
        this.registerEvent("Restart", this.onRestart);
        this.registerEvent("AteItem", this.onAteItem);

        window.addEventListener("keydown", this.onKeydown.bind(this));

        this.gameContainer = new Container();
        this.addChild(this.gameContainer);
        let scale = app.sceneHeight / config.designHeight;
        this.gameContainer.scale.set(scale, scale);
        this.gameContainer.position.set.x = (app.sceneWidth - scale * config.designWidth) / 2;
        this.gameContainer.interactive = true;
        this.gameContainer.buttonMode = true;
        this.gameContainer.on("pointerdown", this.onClickGameContainer.bind(this));

        this.cameraContainer = new Container();
        this.gameContainer.addChild(this.cameraContainer);

        this.createBottomMask();

        this.createFPSText();

        this.createScoreText();

        this.gameStatus = "end";
        this.gameLoopFunc = this.pause.bind(this);
        app.ticker.add(this.gameLoop.bind(this));
    }

    onShow() {
        this.updateScoreText(0);

        this.isContactFatalEdge = false;

        this.cameraContainer.removeChildren();
        this.cameraContainer.position.set(0, 0);

        this.birdList = [];

        this.bikeAccFrame = undefined;

        this.initEnvironment();

        app.loadResources(this.getResPathList(), this.onLoadedAllRes.bind(this));
    }

    initEnvironment() {
        this.bikeCommonVelocity = config.bikeVelocity;
        this.bikeAccVelocity = config.bikeAccVelocity;
        this.gravity = config.gravity;
        this.jumpForce = config.jumpForce;
        this.horizontalParallaxDepth = config.horizontalParallaxDepth;
        this.verticalParallaxDepth = config.verticalParallaxDepth;
    }

    getResPathList() {
        return [
            config.bikeAtlasPath,
            config.finalFlagImagePath,
            config.goldCoinAniJson,
            config.accGemAniJson,
            config.fireWallAniJson,
            config.birdAniJson,
        ];
    }

    onRestart() {
        this.onShow();
    }

    onLoadedAllRes() {
        this.world = new World({gravity: Vec2(0, this.gravity)});

        this.world.on('begin-contact', this.onBeginContact.bind(this));
        this.world.on('pre-solve', this.onPreSolve.bind(this));

        this.createBg();

        this.closeViewContainer = new Container();
        this.cameraContainer.addChild(this.closeViewContainer);

        this.createGameContent();

        this.gameStatus = "play";
        this.gameLoopFunc = this.play.bind(this);
    }

    onBeginContact(contact) {
        let fixtureList = [
            contact.getFixtureA(),
            contact.getFixtureB(),
        ];
        let index = fixtureList.map(fixture => fixture.getBody()).indexOf(this.bikeBody);
        if (index !== -1) {
            fixtureList.splice(index, 1);
            let userData = fixtureList[0].getBody().getUserData();
            if (userData && userData.type === "Road") {
                this.jumping = false;
                this.jumpCount = 0;
            }
            userData = fixtureList[0].getUserData();
            if (userData && userData.isFatal) {
                this.isContactFatalEdge = true;
            }
        }
    }

    onPreSolve(contact) {
        if (this.gameStatus === "end") {
            return contact.setEnabled(false);
        }
        let bodyList = [
            contact.getFixtureA().getBody(),
            contact.getFixtureB().getBody(),
        ];
        let index = bodyList.indexOf(this.bikeBody);
        if (index !== -1) {
            bodyList.splice(index, 1);
            let body = bodyList[0];
            let userData = body.getUserData();
            if (userData) {
                switch (userData.type) {
                    case "AccGem":
                    case "GoldCoin": {
                        if (body.isAwake()) {
                            app.dispatchEvent("AteItem", userData.type);
                        }
                        contact.setEnabled(false);
                        body.setAwake(false);
                        body.getUserData().sprite.visible = false;
                        break;
                    }
                    case "BigFireWall":
                    case "SmallFireWall": {
                        this.isContactFatalEdge = true;
                        break;
                    }
                }
            }
        } else if (bodyList.find(b => b.getUserData() && b.getUserData().type === "BlackBird")) {
            contact.setEnabled(false);
        }
    }

    onClickGameContainer() {
        if (this.gameStatus === "play") {
            if (this.jumpCount < config.jumpMaxCount) {
                let velocity = this.bikeBody.getLinearVelocity();
                this.bikeBody.setLinearVelocity(Vec2(velocity.x, 0));
                this.bikeBody.applyForceToCenter(Vec2(0, this.jumpForce));
                this.bikeSprite.rotation = angle2radius(config.bikeJumpingRotation);
                this.jumping = true;
                this.jumpCount += 1;
            }
        }
    }

    onKeydown(event) {
        switch (event.code) {
            case "ArrowUp": {
                this.onClickGameContainer();
                break;
            }
            case "Space": {
                if (this.gameStatus === "play") {
                    this.gameLoopFunc = this.pause.bind(this);
                    this.gameStatus = "pause";
                } else if (this.gameStatus === "pause") {
                    this.gameLoopFunc = this.play.bind(this);
                    this.gameStatus = "play";
                }
                break;
            }
        }
    }

    onAteItem(type) {
        switch (type) {
            case "GoldCoin": {
                this.updateScoreText(this.score + 1);
                break;
            }
            case "AccGem": {
                this.accelerateBike();
                break;
            }
        }
    }

    createBottomMask() {
        let canvas = Utils.createLinearGradientMask(config.designWidth, config.maskHeight, config.maskColorStop);
        let texture = Texture.fromCanvas(canvas);
        let sprite = new Sprite(texture);
        sprite.anchor.set(0, 1);
        sprite.position.set(0, config.designHeight);
        this.gameContainer.addChild(sprite);
    }

    createFPSText() {
        let style = new TextStyle({
            fill: "white",
            stroke: '#ff3300',
            strokeThickness: 1,
        });
        this.fpsText = new Text("FPS:0", style);
        this.fpsText.anchor.set(0, 0);
        this.addChild(this.fpsText);
    }

    createScoreText() {
        let style = new TextStyle({
            fill: "white",
            stroke: '#ff3300',
            strokeThickness: 1,
        });
        this.scoreText = new Text("", style);
        this.scoreText.anchor.set(1, 0);
        this.scoreText.position.set(app.sceneWidth, 0);
        this.addChild(this.scoreText);
    }

    createBg() {
        this.bgTextureList.forEach(texturePath => {
            let container = new Container();
            this.cameraContainer.addChild(container);
            let texture = resources[texturePath].texture;
            let scale = config.designHeight / texture.height;
            for (let i = 0; i < 2; i++) {
                let sprite = new Sprite(texture);
                container.addChild(sprite);
                sprite.scale.set(scale, scale);
                sprite.position.set(i * texture.width * scale, 0);
            }
        });
    }

    createBike(pp) {
        let rp = GameUtil.physicsPos2renderPos(pp);

        this.bikeSprite = new Sprite(resources[config.bikeAtlasPath].textures["0"]);
        this.closeViewContainer.addChild(this.bikeSprite);
        this.bikeSprite.anchor.set(0.5, 0.5);
        this.bikeSprite.scale.set(config.bikeScale, config.bikeScale);
        this.bikeSprite.position.set(rp.x, rp.y);

        this.bikeBody = this.world.createDynamicBody();
        this.bikeBody.createFixture(Circle(config.bikeRadius), {density: config.bikeDensity, friction: 1,});
        this.bikeBody.setPosition(pp);
        this.bikeBody.setLinearVelocity(Vec2(this.bikeCommonVelocity, 0));

        this.jumpCount = 0;
        this.bikeFrameCount = Utils.keys(resources[config.bikeAtlasPath].textures).length;
        this.bikeFrame = 0;
    }

    gameLoop(delta) {
        this.gameLoopFunc(delta);
    }

    play(delta) {
        this.fpsText.text = `FPS:${Math.floor(delta * config.fps)}`;

        this.world.step(1 / config.fps);

        let velocity = this.bikeBody.getLinearVelocity();
        let bikePhysicsPos = this.bikeBody.getPosition();

        this.syncBikeSprite(velocity, bikePhysicsPos);

        this.syncBirdSprite();

        this.judgeGameLose(velocity, bikePhysicsPos);

        this.judgeGameWin(bikePhysicsPos);

        this.moveCamera();

        this.keepBikeMove(velocity);

        this.keepBirdMove();
    }

    pause() {
    }

    updateScoreText(score) {
        this.score = score;
        this.scoreText.text = `SCORE:${this.score}`;
    }

    accelerateBike() {
        this.bikeAccFrame = 0;
    }

    syncBikeSprite(velocity, bikePhysicsPos) {
        let bikeRenderPos = GameUtil.physicsPos2renderPos(bikePhysicsPos);
        this.bikeSprite.position.set(bikeRenderPos.x, bikeRenderPos.y);
        if (this.gameStatus === "end") {
            this.bikeSprite.rotation = this.bikeBody.getAngle();
        } else if (!this.jumping) {
            this.bikeSprite.rotation = -Math.atan(velocity.y / velocity.x);

            this.bikeFrame += 1;
            if (this.bikeFrame >= this.bikeFrameCount) {
                this.bikeFrame = 0;
            }
            this.bikeSprite.texture = resources[config.bikeAtlasPath].textures[`${this.bikeFrame}`];
        }
    }

    judgeGameLose(velocity, bikePhysicsPos) {
        if (this.gameStatus === "play" && bikePhysicsPos.y < config.bikeGameOverHeight) {
            this.gameStatus = "end";
            app.showScene("GameOverScene", "Game Over");
        }
        if (this.gameStatus === "play" && this.isContactFatalEdge) {
            this.gameStatus = "end";
            this.bikeBody.setLinearVelocity(Vec2(0, 0));
            this.bikeBody.setAngularVelocity(config.bikeGameOverAngularVelocity);
            this.bikeBody.applyForceToCenter(Vec2(-5000, 10000));
            app.showScene("GameOverScene", "Game Over");
        }
    }

    judgeGameWin(bikePhysicsPos) {
        if (this.gameStatus === "play"
            && this.finalPoint
            && bikePhysicsPos.x > GameUtil.renderPos2PhysicsPos(this.finalPoint).x) {
            this.gameStatus = "win";
            app.showScene("GameOverScene", "Game Win");
        }
    }

    moveCamera() {
        if (this.gameStatus === "play") {
            let oldCameraX = this.cameraContainer.position.x;
            let oldCameraY = this.cameraContainer.position.y;

            this.cameraContainer.position.x = config.bikeLeftMargin - this.bikeSprite.position.x;

            let bikeY = this.cameraContainer.position.y + this.bikeSprite.position.y;
            if (bikeY < config.bikeCameraMinY) {
                this.cameraContainer.position.y = config.bikeCameraMinY - this.bikeSprite.position.y;
            } else if (bikeY > config.bikeCameraMaxY) {
                this.cameraContainer.position.y = config.bikeCameraMaxY - this.bikeSprite.position.y;
            }

            let cameraMoveX = this.cameraContainer.position.x - oldCameraX;
            let cameraMoveY = this.cameraContainer.position.y - oldCameraY;

            this.cameraContainer.children.forEach((child, index) => {
                child.position.x -= cameraMoveX * this.horizontalParallaxDepth[index];
                child.position.y -= cameraMoveY * this.verticalParallaxDepth[index];
            });
        }
    }

    keepBikeMove(velocity) {
        if (this.gameStatus === "play") {
            if (this.bikeAccFrame !== undefined) {
                if (this.bikeAccFrame >= config.accFrame) {
                    this.bikeAccFrame = undefined;
                    this.bikeBody.setLinearVelocity(Vec2(this.bikeCommonVelocity, velocity.y));
                } else {
                    this.bikeBody.setLinearVelocity(Vec2(this.bikeAccVelocity, velocity.y));
                    this.bikeAccFrame++;
                }
            } else {
                this.bikeBody.setLinearVelocity(Vec2(this.bikeCommonVelocity, velocity.y));
            }
        }
    }

    syncBirdSprite() {
        this.birdList.forEach(bird => {
            let pos = GameUtil.physicsPos2renderPos(bird.body.getPosition());
            bird.sprite.position.set(pos.x, pos.y);
        });
    }

    keepBirdMove() {
        this.birdList.forEach(bird => {
            let rp = GameUtil.physicsPos2renderPos(bird.body.getPosition());
            if (-this.cameraContainer.position.x + config.designWidth >= rp.x - bird.sprite.texture.width / 2) {
                let velocity = bird.body.getLinearVelocity();
                bird.body.setLinearVelocity(Vec2(-20, velocity.y));
                let gravity = -6.25 * this.gravity;
                if (bird.body.getPosition().y < bird.baseY) {
                    bird.body.applyForceToCenter(Vec2(0, gravity * 5));
                } else {
                    bird.body.applyForceToCenter(Vec2(0, gravity * 0.75));
                }
            }
        });
    }
}

class MapGameScene extends GameScene {
    onShow(mapIndex) {
        this.mapIndex = mapIndex;
        this.mapConfig = config.mapList[mapIndex];
        super.onShow();
    }

    initEnvironment() {
        this.bikeCommonVelocity = this.mapConfig.bikeVelocity || config.bikeVelocity;
        this.bikeAccVelocity = this.mapConfig.bikeAccVelocity || config.bikeAccVelocity;
        this.gravity = this.mapConfig.gravity || config.gravity;
        this.jumpForce = this.mapConfig.jumpForce || config.jumpForce;
        this.bgTextureList = this.mapConfig.texture.bg;
        this.horizontalParallaxDepth = this.mapConfig.horizontalParallaxDepth;
        this.verticalParallaxDepth = this.mapConfig.verticalParallaxDepth;
    }

    getResPathList() {
        return super.getResPathList()
            .concat(this.mapConfig.texture.bg)
            .concat([
                this.mapConfig.texture.side,
                this.mapConfig.texture.top,
                config.mapBasePath + this.mapConfig.sceneName + ".scene",
            ]);
    }

    onRestart() {
        this.onShow(this.mapIndex);
    }

    createGameContent() {
        let pathList = this.getRoadPathList();

        let lastPath = Utils.getLast(pathList);
        this.finalPoint = {
            x: (lastPath[lastPath.length - 6] + lastPath[lastPath.length - 4]) / 2,
            y: (lastPath[lastPath.length - 5] + lastPath[lastPath.length - 3]) / 2,
        };

        this.createMap();

        this.createFinalFlag();

        let pp = GameUtil.renderPos2PhysicsPos({x: pathList[0][2] + config.bikeLeftMargin, y: pathList[0][3]});
        pp.x += config.bikeRadius;
        pp.y += config.bikeRadius;
        this.createBike(pp);
    }

    getRoadPathList() {
        let json = JSON.parse(resources[config.mapBasePath + this.mapConfig.sceneName + ".scene"].data);
        return json.child
            .filter(data => data.type === "Lines")
            .map(data => {
                let path = data.props.points.split(",").map((intStr, i) => {
                    let value = parseInt(intStr);
                    if (i % 2 === 0) {
                        value += data.props.x;
                    } else {
                        value += data.props.y;
                    }
                    return value;
                });
                let maxY = path[1];
                for (let i = 1; i < path.length; i += 2) {
                    if (path[i] > maxY) {
                        maxY = path[i];
                    }
                }
                let bottomY = maxY + app.sceneHeight / 3 * 2;
                path = [path[0], bottomY].concat(path);
                path = path.concat([path[path.length - 2], bottomY]);
                return path;

            });
    }

    createMap() {
        let json = JSON.parse(resources[config.mapBasePath + this.mapConfig.sceneName + ".scene"].data);
        return json.child
            .map(data => {
                let type = GameUtil.getItemType(data);
                switch (type) {
                    case "Road": {
                        let path = data.props.points.split(",").map((intStr, i) => {
                            let value = parseInt(intStr);
                            if (i % 2 === 0) {
                                value += data.props.x;
                            } else {
                                value += data.props.y;
                            }
                            return value;
                        });
                        let maxY = path[1];
                        for (let i = 1; i < path.length; i += 2) {
                            if (path[i] > maxY) {
                                maxY = path[i];
                            }
                        }
                        let bottomY = maxY + app.sceneHeight / 3 * 2;
                        path = [path[0], bottomY]
                            .concat(path)
                            .concat([path[path.length - 2], bottomY]);
                        this.closeViewContainer.addChild(new Road(
                            this.world,
                            path,
                            this.mapConfig.texture.side,
                            this.mapConfig.texture.top
                        ));
                        break;
                    }
                    case "GoldCoin": {
                        let item = new GoldCoin(data, this.world);
                        this.closeViewContainer.addChild(item.sprite);
                        break;
                    }
                    case "AccGem": {
                        let item = new AccGem(data, this.world);
                        this.closeViewContainer.addChild(item.sprite);
                        break;
                    }
                    case "BigFireWall": {
                        let item = new BigFireWall(data, this.world);
                        this.closeViewContainer.addChild(item.sprite);
                        break;
                    }
                    case "SmallFireWall": {
                        let item = new SmallFireWall(data, this.world);
                        this.closeViewContainer.addChild(item.sprite);
                        break;
                    }
                    case "BlackBird": {
                        let item = new BlackBird(data, this.world);
                        this.birdList.push(item);
                        this.closeViewContainer.addChild(item.sprite);
                        break;
                    }
                    default : {
                        let item = new Item(data, this.world);
                        this.closeViewContainer.addChild(item.sprite);
                        break;
                    }
                }
            });
    }

    createFinalFlag() {
        let sprite = new Sprite(resources[config.finalFlagImagePath].texture);
        sprite.anchor.set(0.5, 1);
        sprite.scale.set(0.5, 0.5);
        sprite.position.set(this.finalPoint.x, this.finalPoint.y);
        this.closeViewContainer.addChild(sprite);
    }
}

class EndlessGameScene extends GameScene {
    initEnvironment() {
        super.initEnvironment();
        this.bgTextureList = config.endlessMode.texture.bg;
    }

    getResPathList() {
        let emConfig = config.endlessMode;
        return super.getResPathList()
            .concat(emConfig.texture.bg)
            .concat([
                emConfig.texture.side,
                emConfig.texture.top,
            ])
            .concat(emConfig.roadSectionList.map(section => `${emConfig.baseScenePath}${section.sceneName}.scene`));
    }

    createGameContent() {
        this.createBike(GameUtil.renderPos2PhysicsPos({x: 360, y: 640}));
    }
}

class GameOverScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, app.sceneWidth, app.sceneHeight)
            .endFill();
        this.addChild(mask);

        let textContainer = new Container();
        this.addChild(textContainer);
        let textListHeight = config.gameOverScene.msgText.fontSize + config.gameOverScene.buttonText.fontSize * 2;
        let y = (app.sceneHeight - textListHeight) / 2;
        textContainer.position.set(app.sceneWidth / 2, y);

        let textStyle = new TextStyle(config.gameOverScene.msgText);
        let gameOverText = new Text("Game Over", textStyle);
        this.gameOverText = gameOverText;
        textContainer.addChild(gameOverText);
        gameOverText.anchor.set(0.5, 0);
        gameOverText.position.set(0, 0);

        textStyle = new TextStyle(config.gameOverScene.buttonText);
        let selectMapText = new Text("Select Map", textStyle);
        textContainer.addChild(selectMapText);
        selectMapText.anchor.set(0.5, 0);
        selectMapText.position.set(0, config.gameOverScene.msgText.fontSize);
        selectMapText.interactive = true;
        selectMapText.buttonMode = true;
        selectMapText.on("pointerdown", this.onClickSelectMapText.bind(this));

        let restartText = new Text("Restart", textStyle);
        textContainer.addChild(restartText);
        restartText.anchor.set(0.5, 0);
        restartText.position.set(0, config.gameOverScene.msgText.fontSize + config.gameOverScene.buttonText.fontSize);
        restartText.interactive = true;
        restartText.buttonMode = true;
        restartText.on("pointerdown", this.onClickRestartText.bind(this));
    }

    onShow(msg) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);
        this.gameOverText.text = msg || "Game Over";
    }

    onClickSelectMapText() {
        app.hideScene("GameOverScene");
        app.hideScene("MapGameScene");
        app.hideScene("EndlessGameScene");
        app.showScene("StartScene");
    }

    onClickRestartText() {
        app.hideScene("GameOverScene");
        app.dispatchEvent("Restart");
    }
}

class Road extends Container {
    constructor(world, path, sideTexturePath, topTexturePath) {
        super();
        let rect = Utils.getPathRect(path);
        let pathInRoad = path.map((p, i) => i % 2 === 0 ? p - rect.x : p - rect.y);
        this.createSide(sideTexturePath, rect.width, rect.height);
        this.createTop(topTexturePath, pathInRoad);
        this.createEdgeMask(pathInRoad);
        this.createClipMask(pathInRoad);
        this.cacheAsBitmap = true;
        this.position.set(rect.x, rect.y);
        this.createPhysicsBody(world, path);
    }

    createSide(texturePath, width, height) {
        let texture = resources[texturePath].texture;
        let sprite = new TilingSprite(texture, width, height);
        this.addChild(sprite);
    }

    createTop(texturePath, path) {
        let texture = resources[texturePath].texture;
        for (let i = 2; i < path.length - 4; i += 2) {
            let sp = {x: path[i], y: path[i + 1]};
            let ep = {x: path[i + 2], y: path[i + 3]};
            let width = Utils.calcPointDistance(sp, ep);
            let sprite = new TilingSprite(texture, width, texture.height);
            this.addChild(sprite);
            sprite.position.set(sp.x, sp.y);
            sprite.rotation = Utils.calcRadius(sp, ep);
        }
    }

    createEdgeMask(path) {
        let edgeList = [
            {
                sp: {x: path[0], y: path[1]},
                ep: {x: path[2], y: path[3]},
            },
            {
                sp: {x: path[path.length - 4], y: path[path.length - 3]},
                ep: {x: path[path.length - 2], y: path[path.length - 1]},
            },
        ];
        edgeList.forEach(({sp, ep}) => {
            let edgeWidth = Math.abs(sp.y - ep.y);
            let canvas = Utils.createLinearGradientMask(edgeWidth, config.edgeHeight, config.edgeColorStop);
            let texture = Texture.fromCanvas(canvas);
            let sprite = new Sprite(texture);
            this.addChild(sprite);
            sprite.position.set(sp.x, sp.y);
            sprite.rotation = Utils.calcRadius(sp, ep);
        });
    }

    createClipMask(path) {
        let graphics = new Graphics();
        graphics.beginFill();
        graphics.drawPolygon(path);
        graphics.endFill();
        this.mask = graphics;
    }

    createPhysicsBody(world, path) {
        let pathInPhysics = path.map((value, i) => {
            if (i % 2 === 1) {
                value = config.designHeight - value;
            }
            return value * config.pixel2meter;
        });

        let body = world.createBody();
        body.setUserData({type: "Road"});
        for (let i = 0; i < pathInPhysics.length - 4; i += 2) {
            let sp = {
                    x: pathInPhysics[i],
                    y: pathInPhysics[i + 1]
                },
                ep = {
                    x: pathInPhysics[i + 2],
                    y: pathInPhysics[i + 3]
                };
            let fixture = body.createFixture(Edge(Vec2(sp.x, sp.y), Vec2(ep.x, ep.y)), {density: 0, friction: 1,});
            if (this.isFatalEdge(sp, ep)) {
                fixture.setUserData({isFatal: true});
            }
        }
    }

    isFatalEdge(sp, ep) {
        let x, y;
        if (sp.y > ep.y) {
            y = sp.y - ep.y;
            x = sp.x - ep.x;
        } else {
            y = ep.y - sp.y;
            x = ep.x - sp.x;
        }
        let angle = Math.atan(y / x);
        return config.fatalEdgeAngleRange[0] <= angle && angle <= config.fatalEdgeAngleRange[1];
    }
}

class GameUtil {
    static physicsPos2renderPos(pp) {
        return {
            x: pp.x * config.meter2pixel,
            y: config.designHeight - pp.y * config.meter2pixel
        }
    }

    static renderPos2PhysicsPos(rp) {
        return Vec2(
            rp.x * config.pixel2meter,
            (config.designHeight - rp.y) * config.pixel2meter
        );
    }

    static hexString2Int(str) {
        return parseInt(str.replace("#", ""), 16);
    }

    static pointsStr2path(str) {
        return str.split(",").map(str => parseInt(str));
    }

    static path2vertices(path) {
        let list = [];
        for (let i = 0; i < path.length; i += 2) {
            list.push(Vec2(path[i], path[i + 1]));
        }
        return list;
    }

    static getItemType(config) {
        return config.label.split("//")[0]
    }
}

class Item {
    constructor(config, world) {
        this.config = config;
        this.world = world;
        this.create();
    }

    create() {
        switch (this.config.type) {
            case "Circle": {
                this.sprite = new Graphics();
                let color = GameUtil.hexString2Int(this.config.props.fillColor);
                this.sprite.beginFill(color).drawCircle(0, 0, this.config.props.radius).endFill();
                this.sprite.position.set(this.config.props.x, this.config.props.y);

                let body = this.world.createBody();
                body.createFixture(Circle(this.config.props.radius * config.pixel2meter), {
                    density: 0,
                    friction: 1,
                });
                body.setPosition(GameUtil.renderPos2PhysicsPos(this.config.props));
                body.setUserData({type: GameUtil.getItemType(this.config), sprite: this.sprite});
                break;
            }
            case "Poly": {
                this.sprite = new Graphics();
                let color = GameUtil.hexString2Int(this.config.props.fillColor);
                let path = GameUtil.pointsStr2path(this.config.props.points);
                this.sprite.beginFill(color).drawPolygon(path).endFill();
                this.sprite.position.set(this.config.props.x, this.config.props.y);

                let body = this.world.createBody();
                let vertices = GameUtil.path2vertices(path.map(p => p * config.pixel2meter));
                body.createFixture(Polygon(vertices), {density: 0, friction: 1,});
                body.setPosition(GameUtil.renderPos2PhysicsPos(this.config.props));
                body.setUserData({type: GameUtil.getItemType(this.config), sprite: this.sprite});
                break;
            }
            case "Sprite": {
                let texture = resources[this.config.props.texture].texture;
                this.sprite = new Sprite(texture);
                this.sprite.position.set(this.config.props.x, this.config.props.y);

                if (this.config.props.scaleX !== undefined) {
                    this.sprite.scale.x = this.config.props.scaleX;
                }
                if (this.config.props.scaleY !== undefined) {
                    this.sprite.scale.y = this.config.props.scaleY;
                }

                let body = this.world.createBody();
                let width = texture.width / 2 * this.sprite.scale.x * config.pixel2meter;
                let height = texture.height / 2 * this.sprite.scale.y * config.pixel2meter;
                body.createFixture(Box(width, height), {density: 0, friction: 1,});
                body.setPosition(GameUtil.renderPos2PhysicsPos(this.config.props));
                body.setUserData({type: GameUtil.getItemType(this.config), sprite: this.sprite});
                break;
            }
        }
    }
}

class AniItem extends Item {
    create() {
        this.initAni();
        this.sprite = new AnimatedSprite(this.frames);
        this.sprite.position.set(this.config.props.x, this.config.props.y);
        this.sprite.scale.set(this.config.props.scaleX, this.config.props.scaleY);
        this.sprite.animationSpeed = this.animationSpeed;
        this.sprite.play();

        let body = this.world.createBody();
        let texture = this.frames[0];
        let width = texture.width / 2 * this.sprite.scale.x * config.pixel2meter;
        let height = texture.height / 2 * this.sprite.scale.y * config.pixel2meter;
        body.createFixture(Box(width, height), {density: 0, friction: 1,});
        let x = this.config.props.x + texture.width / 2 * this.sprite.scale.x;
        let y = this.config.props.y + texture.height / 2 * this.sprite.scale.y;
        body.setPosition(GameUtil.renderPos2PhysicsPos({x, y}));
        body.setUserData({type: GameUtil.getItemType(this.config), sprite: this.sprite});
    }
}

class GoldCoin extends AniItem {
    initAni() {
        let frames = [];
        for (let i = 0; i < 12; i++) {
            frames.push(Texture.fromFrame(`medal_${i < 10 ? "0" + i : i}.png`));
        }
        this.frames = frames;
        this.animationSpeed = 0.25;
    }
}

class AccGem extends AniItem {
    initAni() {
        let frames = [];
        for (let i = 0; i < 12; i++) {
            frames.push(Texture.fromFrame(`crystal_jet_${i < 10 ? "0" + i : i}.png`));
        }
        this.frames = frames;
        this.animationSpeed = 0.25;
    }
}

class BigFireWall extends AniItem {
    initAni() {
        let frames = [];
        for (let i = 1; i <= 4; i++) {
            frames.push(Texture.fromFrame(`firewallx4_0${i}.png`));
        }
        this.frames = frames;
        this.animationSpeed = 0.25;
    }
}

class SmallFireWall extends AniItem {
    initAni() {
        let frames = [];
        for (let i = 1; i <= 4; i++) {
            frames.push(Texture.fromFrame(`firewallx4B_0${i}.png`));
        }
        this.frames = frames;
        this.animationSpeed = 0.25;
    }
}

class BlackBird extends Item {
    initAni() {
        let frames = [];
        for (let i = 1; i <= 9; i++) {
            frames.push(Texture.fromFrame(`Bird0${i}.png`));
        }
        this.frames = frames;
        this.animationSpeed = 0.25;
    }

    create() {
        this.initAni();
        let texture = this.frames[0];
        this.sprite = new AnimatedSprite(this.frames);
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.position.set(this.config.props.x + texture.width / 2, this.config.props.y + texture.height / 2);
        this.sprite.scale.set(this.config.props.scaleX, this.config.props.scaleY);
        this.sprite.animationSpeed = this.animationSpeed;
        this.sprite.play();

        let body = this.world.createDynamicBody();
        let width = texture.width / 2 * this.sprite.scale.x * config.pixel2meter;
        let height = texture.height / 2 * this.sprite.scale.y * config.pixel2meter;
        let fixture = body.createFixture(Box(width, height), {density: 1, friction: 1,});
        fixture.setUserData({isFatal: true});
        let x = this.config.props.x + texture.width / 2 * this.sprite.scale.x;
        let y = this.config.props.y + texture.height / 2 * this.sprite.scale.y;
        let pp = GameUtil.renderPos2PhysicsPos({x, y});
        body.setPosition(pp);
        body.setUserData({type: GameUtil.getItemType(this.config), sprite: this.sprite});
        body.setAwake(false);
        this.body = body;
        this.baseY = pp.y;
    }
}

function main() {
    document.body.style.margin = "0";

    let resolution,
        appWidth,
        appHeight;

    let wwhRatio = window.innerWidth / window.innerHeight;
    let dwhRatio = config.designWidth / config.designHeight;
    if (wwhRatio >= dwhRatio) {
        resolution = window.innerHeight / config.designHeight;
        appWidth = config.designWidth;
        appHeight = config.designHeight;
    } else {
        resolution = window.innerWidth / config.designWidth;
        appWidth = config.designWidth;
        appHeight = config.designWidth / window.innerWidth * window.innerHeight;
    }

    app = new MyApplication({
        width: appWidth,
        height: appHeight,
        resolution: resolution,
        antialiasing: true,
        transparent: false,
    });
    document.body.appendChild(app.view);

    app.view.style.position = "absolute";
    app.view.style.left = (window.innerWidth - app.view.offsetWidth) / 2 + "px";
    app.view.style.top = (window.innerHeight - app.view.offsetHeight) / 2 + "px";

    app.showScene("StartScene");
}

main();
