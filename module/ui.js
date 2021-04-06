/*
 * @Author: your name
 * @Date: 2021-04-06 16:21:15
 * @LastEditTime: 2021-04-06 19:45:52
 * @LastEditors: Please set LastEditors
 * @Description: 该模块用于将地图显示在页面上
 * @FilePath: \推箱子\module\ui.js
 */

import * as map from "./map.js"
var divContainer = document.getElementById("game");
var pieceWidth = 45;
var pieceHeight = 45;



/**
 * @description: 该函数用于显示地图
 * @param {*}
 * @return {*}
 */
function setDivContainer() {
    // 设置div的宽高
    divContainer.style.width = map.colNumber * pieceWidth + "px";
    divContainer.style.height = map.rowNumber * pieceHeight + "px";
}


/**
 * @description: 判断该行该列是否是正确位置
 * @param {*} row 行
 * @param {*} col 列
 * @return {*}
 */
function isCorrect(row, col) {
    for (const iterator of map.correct) {
        if (iterator.row === row && iterator.col === col)
            return true;
    }
    return false;
}


/**
 * @description: 根据行和列创建一个div加入容器
 * @param {*} row   行
 * @param {*} col   列
 * @return {*}
 */
function setOnePiece(row, col) {
    var value = map.content[row][col];

    var div = document.createElement("div");
    div.className = "item";
    div.style.left = col * pieceWidth + "px";
    div.style.top = row * pieceHeight + "px";

    var correct = isCorrect(row, col);
    value === map.PLAYER ? div.classList.add("player") :
        value === map.WALL ? div.classList.add("wall") :
        value === map.BOX ? (correct ? div.classList.add("correctBox") :
            div.classList.add("box")) :
        correct ? div.classList.add("correct") : div.classList.add("a");


    divContainer.appendChild(div);
}





/**
 * @description: 根据地图在页面上设置相应的元素
 * @param {*}
 * @return {*}
 */
function setDivContent() {
    // 1.清空元素
    divContainer.innerHTML = "";
    // 2.遍历地图内容，设置元素
    for (var row = 0; row < map.rowNumber; row++) {
        for (var col = 0; col < map.colNumber; col++) {
            setOnePiece(row, col);
        }
    }
}




export default function () {
    setDivContainer();
    setDivContent();
}