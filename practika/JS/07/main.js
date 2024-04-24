//! 1. Написать функцию, которая принимает 2 числа и возвращает -1,
//! если первое меньше, чем второе; 1 – если первое 
//! больше, чем второе; и 0 – если числа равны.

{
  const num1 = Number(prompt("Введите первое число"));
  const num2 = Number(prompt("Введите вторе число"));

  let comparesNumbers = (num1,num2) => {
    if (num1 < num2) {
      return -1;
    }
    if(num1 > num2){
      return 1;
    }
    return 0;
  }

  switch (comparesNumbers(num1,num2)) {
    case -1:
      alert("Перове число меньше чем второе");
      break;
    case 0:
      alert("Числа равны");
      break;
      case 1:
        alert("Перове число больше чем второе");
      break;
  }
}

//! 2. Написать функцию, которая вычисляет факториал переданного ей числа.

{
  const number = Number(prompt('Введите число'));
  let calcFactorial = num => {
    let result = 1;
    for(let i = 1; i <= num; i++){
      result = result * i;
    }
    return result;
  }
  alert(number + "! = " + calcFactorial(number));
}

//! 3. Написать функцию, которая принимает три отдельные 
//! цифры и превращает их в одно число. Например: цифры 
//! 1, 4, 9 превратятся в число 149.

{
  const firstNumber = Number(prompt("Введите первое число"))
  const secondNumber = Number(prompt("Введите второе число"))
  const thirdNumber = Number(prompt("Введите третье число"))

  let combineNumber1 = (num1,num2,num3) => {
    return (num1 * 100) + (num2 * 10) + num3
  }
  alert(combineNumber1(firstNumber,secondNumber,thirdNumber));

}

//! 4. Написать функцию, которая принимает длину и ширину 
//! прямоугольника и вычисляет его площадь. Если в функцию 
//! передали 1 параметр, то она вычисляет площадь квадрата.

{
  const width = Number(prompt("Введите ширину"));
  const height = Number(prompt("Введите высоту"));

  let calcArea = (width = 0, height = 0) => {
    if (width === 0){
      return height * height;
    }
    if(height === 0){
      return width * width;
    }
    return height * width;
  }
  alert("Площадь фигуры с вашими вараметрами равна " + calcArea(width , height));
}

//! 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это 
//! число, равное сумме всех своих собственных делителей.

{
  const number = Number(prompt("Введите число"));
  if (checkPerfectNum(number)){
    alert("Число совершенное")
  } else {
    alert("Число не совершенное")
  }
}

let checkPerfectNum = (num) => {
  let result = 0;
  for (let i = 1; i <= num / 2; i++){
    if (num % i === 0){
      result+=i
    }
  }
  if(result === num){
    return true;
  } else {
    return false;
  }
}

//! 6. Написать функцию, которая принимает минимальное и 
//! максимальное значения для диапазона, и выводит только 
//! те числа из диапазона, которые являются совершенными. 
//! Используйте написанную ранее функцию, чтобы узнавать, 
//! совершенное число или нет.

{
  const firstNumber = Number(prompt("Введите первое число"));
  const lastNumber = Number(prompt("Ведите второе число"))

  let derivationPerfectNumbers = (num1, num2) => {
    let perfectNumbers = '';
    for(let i = num1; i <= num2; i++){
      if(checkPerfectNum(i)){
        perfectNumbers += i + ";"
      }
    }
    perfectNumbers = perfectNumbers.slice(0, -1);
    alert("Совершенные числа из диапазона [" + firstNumber + ";"+ lastNumber + "] - " + perfectNumbers + ".")
  }
  derivationPerfectNumbers(firstNumber,lastNumber);
}

//! 7. Написать функцию, которая принимает время (часы, минуты, секунды)
//!  и выводит его на экран в формате «чч:мм:сс».
//!  Если при вызове функции минуты и/или секунды не были 
//! переданы, то выводить их как 00.

{
  const hours = Number(prompt("Введите часи"));
  const minutes = Number(prompt("Введите минуты"));
  const seconds = Number(prompt("Введите секунды"));

  let printTime = (hours, minutes, seconds) => {
    if(hours <= 9){
      hours = '0' + hours;
    }
    if(minutes <= 9){
      minutes = '0' + minutes;
    }
    if(seconds<= 9){
    seconds = '0' + seconds
    }

    if(hours === 0){
      hours = '00';
    }
    if(minutes === 0){
      minutes = '00';
    }
    if(seconds === 0){
      seconds === '00';
    }
    if(hours === 0){
      hours = '00';
    }
    return hours + ":" + minutes + ":" + seconds
  }
  alert(printTime(hours, minutes, seconds));
}

//! 8. Написать функцию, которая принимает часы, минуты и 
//! секунды и возвращает это время в секундах.

{
  const hours = Number(prompt("Введите часи"));
  const minutes = Number(prompt("Введите минуты"));
  const seconds = Number(prompt("Введите секунды"));


  alert(convertSeconds(hours, minutes,seconds));
}
  let convertSeconds = (hours, minutes, seconds) =>{
    return (hours * 3600) + (minutes * 60) + seconds
  }
//! 9. Написать функцию, которая принимает количество секунд, 
//! переводит их в часы, минуты и секунды и возвращает в 
//! виде строки «чч:мм:сс».

{
  const seconds = Number(prompt('Введите секунды'));
  alert(secondToDdMmSs(seconds));
}
let secondToDdMmSs = (seconds) =>{
    let hours = 0;
    let minutes = 0;

    while (seconds > 60){ 
      if(seconds >= 60){
        seconds -= 60;
        minutes+= 1;
      }
      if(minutes >= 60){
        minutes -= 60;
        hours+=1;
      }
    }
    return(printTime(hours,minutes,seconds));
  }
 
//! 10. Написать функцию, которая считает разницу между датами. 
//! Функция принимает 6 параметров, которые описывают 2 
//! даты, и возвращает результат в виде строки «чч:мм:сс». При 
//! выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, 
//! узнайте разницу в секундах, а потом разницу переведите 
//! обратно в «чч:мм:сс».

{
  const hours = Number(prompt("Введите часи"));
  const minutes = Number(prompt("Введите минуты"));
  const seconds = Number(prompt("Введите секунды"));

  const hours2 = Number(prompt("Введите часи - 2"));
  const minutes2 = Number(prompt("Введите минуты - 2"));
  const seconds2 = Number(prompt("Введите секунды - 2" ));

  let compareDates = (hours1 , minutes1 , seconds1 , hours2, minutes2 ,seconds2) => {
    let differenceTime = 0;
    if(convertSeconds(hours1,minutes1,seconds1) === convertSeconds(hours2,minutes2,seconds2)){
      alert("Разницы между датами нет")
      return;
    }
     if( convertSeconds(hours1,minutes1,seconds1) > convertSeconds(hours2,minutes2,seconds2)){
      differenceTime = convertSeconds(hours1,minutes1,seconds1) - convertSeconds(hours2,minutes2,seconds2);
     } else {
      differenceTime = convertSeconds(hours2,minutes2,seconds2) - convertSeconds(hours1,minutes1,seconds1);
     }
     return secondToDdMmSs(differenceTime);
  }
   alert( "Разница во времени " + compareDates(hours,minutes,seconds, hours2, minutes2,seconds2))
}