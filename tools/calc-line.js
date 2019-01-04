const fs = require("fs");
const path = require("path");

let lineCount = 0;
let fileCount = 0;

let handler = (dirPath) => {
    let files = fs.readdirSync(dirPath);
    files.forEach(file => {
        let filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            handler(filePath);
        } else {
            let data = fs.readFileSync(filePath, "utf8");
            lineCount += data.split("\n").length;
            fileCount++;
        }
    });
};

handler("src");

console.log(lineCount);
console.log(fileCount);
