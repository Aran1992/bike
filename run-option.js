const RunOption = {
    // 为1就是调试模式 为0就是正常模式
    debug: 0,
    // 排名竞赛NPC是否出现（0就出现 为1就不出现）
    removeAllEnemy: 0,
    // 强制排名模式地图ID，如果为-1的话就是不进行强制，ID从0开始，对应Config.mapList顺序
    fixedMapID: -1,
    // 是否显示死亡线（1就显示 为0就不显示）
    showDeadLine: 0,
    // 是否显示自行车状态（1就显示 为0就不显示）
    showBikeState: 0,
    // 镜头跟随敌方自行车（1就跟随 为0就不跟随）
    cameraFollowEnemy: 0,
};
export default RunOption;
