const webpack = require("webpack");
const config = require("./webpack.config");
const pack = require("../../tools/pack").pack;
const i18n = require("../../tools/i18n").i18n;
const language = require("./publish.config").language;
const utils = require("../../tools/utils");

pack("../../myLaya/laya");

i18n(language, "../../i18n.csv", "dist/i18n.json");

webpack(config, () => {
    utils.deleteAll("publish");
    [
        "images",
        "sound",
        "myLaya/laya/pages",
        "myLaya/laya/assets/animations",
        "myLaya/laya/assets/images",
        "myLaya/laya/assets/prefabs",
    ].forEach(file => utils.copy(`../../${file}`, `publish/${file}`));
    utils.copy("dist", "publish/dist");
    utils.copy("index.html", "publish/index.html");
});
