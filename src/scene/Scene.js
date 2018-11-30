import {Container} from "../libs/pixi-wrapper";
import EventMgr from "../mgr/EventMgr";

export default class Scene extends Container {
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
        for (let event of this.eventTable) {
            EventMgr.unregisterEvent(event, this.eventTable[event]);
        }
        this.eventTable = undefined;
    }

    onShow() {
    }

    onHide() {
    }

    registerEvent(event, handler) {
        handler = handler.bind(this);
        this.eventTable[event] = handler;
        EventMgr.registerEvent(event, handler);
    }

    unregisterEvent(event) {
        EventMgr.unregisterEvent(event, this.eventTable[event]);
        this.eventTable[event] = undefined;
    }
}
