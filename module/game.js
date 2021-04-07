/*
 * @Author: your name
 * @Date: 2021-04-07 00:10:10
 * @LastEditTime: 2021-04-07 08:42:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \推箱子\module\game.js
 */


import {
    playerMove,
    isWin
} from "./play.js"
import showUI from "./ui.js"

showUI();
var over = false;
var result = false;

window.onkeydown = function (e) {
    if (over) {
        return;
    }
    if (e.key === "ArrowUp") {
        result = playerMove("up");
    } else if (e.key === "ArrowDown") {
        result = playerMove("down");
    } else if (e.key === "ArrowLeft") {
        result = playerMove("left");
    } else if (e.key === "ArrowRight") {
        result = playerMove("right");
    }
    if (result) {
        showUI();
        if (isWin()) {
            console.log("Win!");
            var div = document.createElement('div');
            div.innerHTML = "win!"
            div.style.textAlign="center";
            document.getElementsByTagName("body")[0].appendChild(div);
            
            over = true;
        }
    }
}

var up = document.getElementsByClassName("up")[0];
var down = document.getElementsByClassName("down")[0];
var left = document.getElementsByClassName("left")[0];
var right = document.getElementsByClassName("right")[0];
up.onclick = function () {
    result = playerMove("up");
    if (result) {
        showUI();
        if (isWin()) {
            console.log("Win!");
            var div = document.createElement('div');
            div.innerHTML = "win!"
            div.style.textAlign="center";
            document.getElementsByTagName("body")[0].appendChild(div);
            html.appendchild(div);
            over = true;
        }
    }
}
down.onclick = function () {
    result = playerMove("down");
    if (result) {
        showUI();
        if (isWin()) {
            console.log("Win!");
            var div = document.createElement('div');
            div.innerHTML = "win!"
            div.style.textAlign="center";
            document.getElementsByTagName("body")[0].appendChild(div);
            html.appendchild(div);
            over = true;
        }
    }
}
left.onclick = function () {
    result = playerMove("left");
    if (result) {
        showUI();
        if (isWin()) {
            console.log("Win!");
            var div = document.createElement('div');
            div.innerHTML = "win!"
            div.style.textAlign="center";
            document.getElementsByTagName("body")[0].appendChild(div);
            html.appendchild(div);
            over = true;
        }
    }
}
right.onclick = function () {
    result = playerMove("right");
    if (result) {
        showUI();
        if (isWin()) {
            console.log("Win!");
            var div = document.createElement('div');
            div.innerHTML = "win!"
            div.style.textAlign="center";
            document.getElementsByTagName("body")[0].appendChild(div);
            html.appendchild(div);
            over = true;
        }
    }
}