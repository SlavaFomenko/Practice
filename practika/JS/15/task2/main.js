'use strict';


const btnRed = document.querySelector("#btnRed");
const btnGreen = document.querySelector("#btnGreen");
const infoRedBtn = document.querySelector('#infoRedBtn');
let interval = null;
function prinInfo() {

  let propConut = 0;
  let prop = [
    'background-color :' + this.style.backgroundColor + '</br>',
    'font-size : ' + this.style.fontSize + '</br>',
    'color : ' + this.style.color + '</br>',
    'height :' + this.style.height + '</br>',
    'width : ' + this.style.width
  ]
  const addInfo = () => {
    interval = setInterval(() => {
      infoRedBtn.innerHTML += prop[propConut++];
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
  infoRedBtn.innerHTML = 'Info : </br>'
  prinInfo.call(btnRed)
};
btnGreen.onclick = () => {
  clearInterval(interval);
  infoRedBtn.innerHTML = 'Info : </br>'
  prinInfo.call(btnGreen)
};


