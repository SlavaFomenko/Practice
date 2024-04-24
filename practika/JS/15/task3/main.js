'use strict';


const btnRed = document.querySelector("#btnRed");
const stylesBtnRed = window.getComputedStyle(btnRed);
const btnGreen = document.querySelector("#btnGreen");
const stylesBtnGreen = window.getComputedStyle(btnGreen);
const infoBtn = document.querySelector('#infoBtn');
let interval = null;
function prinInfo() {
  let propConut = 0;
  let prop = [
    'background-color :' + this.backgroundColor + '</br>',
    'font-size : ' + this.fontSize + '</br>',
    'color : ' + this.color + '</br>',
    'height :' + this.height + '</br>',
    'width : ' + this.width
  ]
  const addInfo = () => {
    interval = setInterval(() => {
      infoBtn.innerHTML += prop[propConut++];
      if (propConut == prop.length) {
        clearInterval(interval);
        prop = 0;
      }
    }, 1000)
  }
  addInfo();
}

btnRed.onclick = () => {
  clearInterval(interval);
  infoBtn.innerHTML = 'Info : </br>'
  prinInfo.call(stylesBtnRed)
};
btnGreen.onclick = () => {
  clearInterval(interval);
  infoBtn.innerHTML = 'Info : </br>'
  prinInfo.call(stylesBtnGreen)
};

// const btnRed = document.getElementById('btnRed');
// const styles = window.getComputedStyle(btnRed);
// console.log(styles.backgroundColor);


