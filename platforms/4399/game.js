import {main} from "../../src/main";
import NetworkMgr from "../../src/mgr/NetworkMgr";
import * as md5 from "md5";

window.PlatformHelper = {
    canLogout: false,
    showAd: callback => {
        window.H5API.callPlayAd(data => {
            if (data.canPlayAd) {
                window.H5API.playAd(data => {
                    callback(data.code === 10001);
                });
            } else {
                callback(true);
            }
        });
    },
    closeLogoScene() {
        if (window.logoScene && window.logoScene.parentNode) {
            setTimeout(() => {
                window.logoScene.parentNode.removeChild(window.logoScene);
            }, 2);
        }
    }
};

const CALLBACK_KEY = "36ffbe82a8c58d24237b42a91c7f6cc3";

function getArgs(url) {
    let args = {};
    url.split("?")[1].split("&").forEach(item => {
        let list = item.split("=");
        args[list[0]] = decodeURIComponent(list[1]);
    });
    return args;
}

function isLoginRight({gameId, time, userId, userName, sign}) {
    return md5(`gameId=${gameId}time=${time}userId=${userId}userName=${userName}${CALLBACK_KEY}`) === sign;
}

let args = getArgs(window.location.href);
if (isLoginRight(args)) {
    main(() => {
        let username = `4399-${args.userId}`;
        let playername = args.userName;
        let headurl = window.H5API.getUserAvatar(args.userId);
        let success = () => {
            App.showScene("MainScene");
        };
        NetworkMgr.requestLogin(username, username, playername, headurl,
            success,
            () => {
                NetworkMgr.requestRegister(username, username, () => {
                    NetworkMgr.requestLogin(username, username, playername, headurl,
                        success, undefined, true);
                });
            },
            true);
    });
}
