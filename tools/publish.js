const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const config = require("../webpack.config");

function copy(src, dist) {
    if (fs.lstatSync(src).isFile()) {
        fs.writeFileSync(dist, fs.readFileSync(src));
    } else {
        fs.mkdirSync(dist, {recursive: true});
        fs.readdirSync(src).forEach(file => copy(path.join(src, file), path.join(dist, file)));
    }
}

webpack(config, () => {
    copy("images", "publish/images");
    copy("myLaya/laya/pages", "publish/myLaya/laya/pages");
    copy("index.html", "publish/index.html");
    console.log("published");
});
