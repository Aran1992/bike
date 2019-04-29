const utils = require("../../tools/utils");
const fs = require("fs");
const webpack = require("webpack");
const config = require("./webpack.config");
const i18n = require("../../tools/i18n").i18n;
const language = require("./publish.config").language;
const pack = require("../../tools/pack").pack;

function removeDir() {
    utils.deleteAll("./publish");
}

function createDir() {
    fs.mkdirSync("./publish");
}

function createCode(callback) {
    webpack(config, callback);
}

function createLanguageText() {
    i18n(language, "../../i18n.csv", "./dist/i18n.json");
}

function createSceneJSON() {
    pack("../../myLaya/laya");
}

function copyRes() {
    [
        "images",
        "sound",
        "myLaya/laya/pages",
        "myLaya/laya/assets/animations",
        "myLaya/laya/assets/images",
        "myLaya/laya/assets/prefabs",
    ].forEach(file => utils.copy(`../../${file}`, `./publish/${file}`));
    utils.copy("./dist", "./publish/dist");
    utils.copy("./index.html", "./publish/index.html");
}

removeDir();
createDir();
createCode(() => {
    createLanguageText();
    createSceneJSON();
    copyRes();
});
