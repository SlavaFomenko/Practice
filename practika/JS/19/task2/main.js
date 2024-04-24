'use strict';
const btns = document.querySelectorAll('#buttons > button')
function handlerClick(button) {
  const flexArea = document.getElementById('flexArea');
  flexArea.style.flexDirection = button.target.dataset.buttontype;
  // console.log(button.target)
}
// debugger
for(const btn of btns){
  btn.addEventListener('click',handlerClick)
}