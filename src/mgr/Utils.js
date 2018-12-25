export default class Utils {
    static removeItemFromArray(array, item) {
        let index = array.findIndex(item_ => item === item_);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }

    static angle2radius(angle) {
        return angle / 180 * Math.PI;
    }

    static radius2angle(radius) {
        return radius / Math.PI * 180;
    }

    static createLinearGradientMask(width, height, colorStop) {
        let canvas = document.createElement("canvas");
        canvas.width = `${width}`;
        canvas.height = `${height}`;
        let ctx = canvas.getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, 0, height);
        colorStop.forEach(({offset, opacity}) => gradient.addColorStop(offset, `rgba(0, 0, 0, ${opacity})`));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        return canvas;
    }

    static calcPointDistance(p1, p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }

    static getPathRect(path) {
        let maxX = path[0], minX = path[0], maxY = path[1], minY = path[1];
        for (let i = 0; i < path.length - 2; i += 2) {
            let x = path[i];
            let y = path[i + 1];
            if (x > maxX) {
                maxX = x;
            } else if (x < minX) {
                minX = x;
            }
            if (y > maxY) {
                maxY = y;
            } else if (y < minY) {
                minY = y;
            }
        }
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }

    static calcRadius(sp, ep) {
        let x = ep.x - sp.x;
        let y = ep.y - sp.y;
        if (x > 0) {
            return Math.atan(y / x);
        } else if (x < 0) {
            return Math.atan(y / x) + Math.PI;
        } else if (x === 0) {
            if (y > 0) {
                return Math.PI / 2;
            } else if (y < 0) {
                return Math.PI / 2 * 3;
            } else {
                return 0;
            }
        }
    }

    static getLast(arr) {
        return arr[arr.length - 1];
    }

    static keys(json) {
        let arr = [];
        for (let key in json) {
            if (json.hasOwnProperty(key)) {
                arr.push(key);
            }
        }
        return arr;
    }

    static values(json) {
        let arr = [];
        for (let name in json) {
            if (json.hasOwnProperty(name)) {
                arr.push(json[name]);
            }
        }
        return arr;
    }

    static entryCount(json) {
        let count = 0;
        for (let key in json) {
            if (json.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    static getTexturePointColor(texture, x, y) {
        let canvas = document.createElement("canvas");
        canvas.width = `${texture.width}`;
        canvas.height = `${texture.height}`;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(texture.baseTexture.source, 0, 0, texture.width, texture.height);
        let data = ctx.getImageData(x, y, 1, 1).data;
        return data[0] * 256 * 256 + data[1] * 256 + data[2];
    }

    static isPointInRect(point, rect) {
        return point.x >= rect.x
            && point.x <= rect.x + rect.width
            && point.y >= rect.y
            && point.y <= rect.y + rect.height;
    }

    static successive(src, dst, delta) {
        if ((src < dst && src + delta > dst)
            || (src > dst && src + delta < dst)
            || src === dst) {
            return {value: dst, final: true};
        } else {
            return {value: src + delta, final: false};
        }
    }
}

