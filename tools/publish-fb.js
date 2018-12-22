const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const config = require("../webpack-fb.config");
const archiver = require("archiver");
// const child_process = require("child_process");

function copy_(src, dist, exceptList) {
    if (exceptList && exceptList.some(file => file === src)) {
        return;
    }
    if (fs.lstatSync(src).isFile()) {
        fs.mkdirSync(path.dirname(dist), {recursive: true});
        fs.writeFileSync(dist, fs.readFileSync(src));
    } else {
        fs.mkdirSync(dist, {recursive: true});
        fs.readdirSync(src).forEach(file => copy_(path.join(src, file), path.join(dist, file), exceptList));
    }
}

function copy(src, dist, exceptList) {
    src = path.resolve(src);
    dist = path.resolve(dist);
    exceptList = exceptList && exceptList.map(file => path.resolve(file));
    copy_(src, dist, exceptList);
}

function deleteAll(path) {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(file => {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteAll(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

webpack(config, () => {
    deleteAll("./publish-fb");

    [
        "images",
        "sound",
        "myLaya/laya/pages",
        "dist/bundle.js",
        "fbapp-config.json",
    ].forEach(file => copy(file, `publish-fb/${file}`));
    copy("index-fb.html", "publish-fb/index.html");

    let filePath = "publish-fb.zip";

    let output = fs.createWriteStream(filePath);

    let archive = archiver("zip", {
        zlib: {level: 9} // Sets the compression level.
    });

    output.on("close", function () {
        console.log(archive.pointer() + " total bytes");
        console.log("archiver has been finalized and the output file descriptor has closed.");
    });

    output.on("end", function () {
        console.log("Data has been drained");
    });

    archive.on("warning", function (err) {
        if (err.code === "ENOENT") {
            // log warning
        } else {
            // throw error
            throw err;
        }
    });

    archive.on("error", function (err) {
        throw err;
    });

    archive.pipe(output);

    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory("publish-fb/", false);

    archive.finalize();

    // let appID = "371465643397666";
    // let accessToken = "EAAYsfZAxiFmMBAAZBaXXjVZC7u7GNZBWwiZClM5Ozipk5O2PZAmYmNZCZADSSRBZCGr80Jq13KAZAmKJcmNUWLVXgR4xB2FQC1AUjx0gZBRBy3qcyu7nUnqXAFq5DnwB05MaDUVL84KZBZBgzg5AWcZCUVS7sZCoCit4ZC46ZCeMlrqpdYUphulG6KfByybqv";
    // let cmd = `curl -X POST https://graph-video.facebook.com/${appID}/assets -F "access_token=${accessToken}" -F "type=BUNDLE" -F "asset=@./${filePath}" -F "comment=Graph_API_upload"`;
    // child_process.exec(cmd, (err, stdout, stderr) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(`stdout: ${stdout}`);
    //     console.log(`stderr: ${stderr}`);
    // });

    deleteAll("./publish-fb");
});
