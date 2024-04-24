'use strict';

const btnRed = document.querySelector("#btnRed");
const btnGreen = document.querySelector("#btnGreen");
const infoRedBtn = document.querySelector('#infoRedBtn');

function prinInfo() {
  infoRedBtn.innerHTML = ('color :' + this.style.backgroundColor + '</br>' +
    'font-size : ' + this.style.fontSize + '</br>' +
    'color : ' + this.style.color + '</br>' +
    'height :' + this.style.height + '</br>' +
    'width : ' + this.style.width)
}
btnRed.onclick = () => {prinInfo.call(btnRed) };
btnGreen.onclick = () => {prinInfo.call(btnGreen) };

