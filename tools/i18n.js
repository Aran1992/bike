const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");
exports.i18n = language => {
    let buf = fs.readFileSync("../i18n.xlsx");
    let wb = xlsx.read(buf, {type: "buffer"});
    let sheet = wb.Sheets.Sheet1;
    let column;
    for (let code = 65; ; code++) {
        column = String.fromCharCode(code);
        if (sheet[`${column}2`] && sheet[`${column}2`].v === language) {
            break;
        }
    }
    let table = {};
    for (let row = 3, id = sheet[`A${row}`]; id; row++, id = sheet[`A${row}`]) {
        if (table[id.v]) {
            throw(`存在复数个ID为${id.v}的条目`);
        }
        table[id.v] = sheet[`${column}${row}`].v;
    }
    let dir = "../dist/";
    try {
        fs.mkdirSync(dir);
    } catch (e) {
    } finally {
        fs.writeFileSync(path.join(dir, "i18n.json"), JSON.stringify(table));
    }
    console.log("i18n generate success");
};
