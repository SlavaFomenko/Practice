'use strict';
//! 1.По нажатию на кнопку начинает работать таймер от 5 до 1.
//! На экране должны отображаться значения таймера(5,4,3,2,1).
//! После того как таймер остановился - экран покраснел.
//! Повторно заустить таймер можно только после того, как
//! он закончился. При повторном запуске счет начинает сначала и 
//! экран снова белый.
const btnStartTimer = document.getElementById('btnStartTimer')

const counterTimer = document.getElementById('counterTimer');
let timerInterval = 0;

const startTimer = () => {
  let countTimer = 4;
  timerInterval = setInterval(() => {
    counterTimer.innerText = countTimer--;
    if (countTimer < 0) {
      clearInterval(timerInterval)
      btnStartTimer.disabled = false;
      document.body.style.backgroundColor = 'rgb(248, 48, 48)'

    }
  }, 1000);
}


btnStartTimer.onclick = () => {
  counterTimer.innerText = 5
  document.body.style.background = 'transparent'
  btnStartTimer.disabled = true;
  startTimer()
};

//! 2.Создать секундомер. Создать кнопку, по нажатию на которую будет
//! запускаться секундомер. Повторное нажатие - останавливает.
//! Повторное нажатие продолжает работу секундомера.
//! Значение секундомера отображать в div.
//! По нажатию на кнопку также меняется текст start/stop

const btnStopwatch = {
  btn: document.getElementById('btnStopwatch'),
  buttonState: 'start'
}
let stopwatchInterval;
let count = 1;
const counterStopwatch = document.getElementById('counterStopwatch')


function secToHMS(sec) {
  let str = ''
  let min = 0;
  let hour = 0;
  for (let i = 0; i <= sec; i++) {
    if (sec >= 60) {
      sec -= 60;
      min += 1
    }
    if (min >= 60) {
      min -= 60;
      hour += 1
    }
  }
  if (min <= 9) {
    min = '0' + min
  }
  if (sec <= 9) {
    sec = '0' + sec
  }
  if (hour <= 9) {
    hour = '0' + hour
  }
  return hour + ':' + min + ':' + sec;
}
// debugger;

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    counterStopwatch.innerText = secToHMS(count++);
  }, 1000)
}
// debugger
btnStopwatch.btn.addEventListener('click', () => {
  if(btnStopwatch.btn.innerText == 'START'){
    btnStopwatch.buttonState = 'start';
    btnStopwatch.btn.innerText = 'stop';
    startStopwatch();
  } else {
    clearInterval(stopwatchInterval);
    btnStopwatch.buttonState = 'stop';
    btnStopwatch.btn.innerText = 'start';
  }
});