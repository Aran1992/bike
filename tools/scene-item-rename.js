const path = require("path");
const fs = require("fs");

function main(dirPath) {
    let files = fs.readdirSync(dirPath);
    files.forEach(file => {
        let filePath = path.join(dirPath, file);
        let data = fs.readFileSync(filePath, "utf8");
        data = data.replace(/"name":".*?"/g, `"name":"Road"`).replace(/"label":".*?"/g, `"label":"Road"`);
        console.log("filePath", filePath);
        console.log("data", data);
        fs.writeFileSync(filePath, data, "utf8");
    });
}

main(`C:\\Works\\bike\\myLaya\\laya\\pages`);