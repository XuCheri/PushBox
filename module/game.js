/*
 * @Author: your name
 * @Date: 2021-04-07 00:10:10
 * @LastEditTime: 2021-04-07 00:26:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \推箱子\module\game.js
 */


import {playerMove, isWin} from "./play.js"
import  showUI from "./ui.js"

showUI();
var over = false;
var result = false;

window.onkeydown = function(e){
    if(over){
        return;
    }
    if(e.key === "ArrowUp"){
        result = playerMove("up");
    }
    else if(e.key === "ArrowDown"){
        result = playerMove("down");
    }
    else if(e.key === "ArrowLeft"){
        result = playerMove("left");
    }
    else if(e.key === "ArrowRight"){
        result = playerMove("right");
    }
    if(result){
        showUI();
        if(isWin()){
            console.log("Win!");
            over = true;
        }
    }
}
