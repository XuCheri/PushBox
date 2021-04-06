/*
 * @Author: your name
 * @Date: 2021-04-06 19:52:08
 * @LastEditTime: 2021-04-07 00:25:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \推箱子\module\play.js
 */


import * as map from "./map.js"

/**
 * @description: 玩家移动
 * @param {*} direction
 * @return {*}
 */
export function playerMove(direction) {
    var playerInfo = getPlayerInfo();
    var nextInfo = getPlayerNextInfo(playerInfo.row, playerInfo.col, direction);
    if (nextInfo.value === map.WALL) {
        return false;
    }
    if (nextInfo.value === map.SPACE) {
        exchange(playerInfo, nextInfo);
        return true;
    }else{
        var nextNextInfo = getPlayerNextInfo(nextInfo.row,nextInfo.col,direction);
        if(nextNextInfo.value === map.SPACE){
            exchange(nextInfo,nextNextInfo);
            exchange(playerInfo,nextInfo);
            return true;
        }else{
            return false;
        }
    }
}

/**
 * @description: 判断是否胜利
 * @param {*}
 * @return {*}
 */
export function isWin(){
    for(var i =0;i<map.correct.length;i++){
        var point = map.correct[i];
        if(map.content[point.row][point.col] !== map.BOX){
            return false;
        }
    }
    return true;
}


/**
 * @description: 得到玩家的位置
 * @param {*}
 * @return {*}
 */
function getPlayerInfo() {
    for (var row = 0; row < map.rowNumber; row++) {
        for (var col = 0; col < map.colNumber; col++) {
            if (map.content[row][col] === map.PLAYER) {
                return {
                    row,
                    col
                }
            }
        }
    }
    throw new Error("地图上居然没有玩家")
}


/** 
 * @description: 得到玩家在指定方向下一个位置的信息（第几行，第几列，内容）
 * @param {*} row
 * @param {*} col
 * @param {*} direction
 * @return {*}
 */
function getPlayerNextInfo(row, col, direction) {
    if (direction === "left") {
        return {
            row: row,
            col: col - 1,
            value: map.content[row][col - 1]
        }
    } else if (direction === "right") {
        return {
            row: row,
            col: col + 1,
            value: map.content[row][col + 1]
        }
    } else if (direction === "up") {
        return {
            row: row - 1,
            col: col,
            value: map.content[row - 1][col]
        }
    } else {
        return {
            row: row + 1,
            col: col,
            value: map.content[row + 1][col]
        }
    }
}



/**
 * @description: 交换两个点的坐标值
 * @param {*} point1
 * @param {*} point2
 * @return {*}
 */
function exchange(point1, point2) {
    var temp = map.content[point1.row][point1.col];
    map.content[point1.row][point1.col] = map.content[point2.row][point2.col];
    map.content[point2.row][point2.col] = temp;
}