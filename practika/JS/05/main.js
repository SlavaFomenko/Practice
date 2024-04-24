//! 1. Написать функцию, которая принимает 2 числа и возвращает -1,
//! если первое меньше, чем второе; 1 – если первое
//! больше, чем второе; и 0 – если числа равны.

{
  const num1 = Number(prompt("Введите первое число"));
  const num2 = Number(prompt("Введите второе число"));
  
  function compareNumbers(num1,num2){
    if (num1 > num2){
      return 1;
    }
    if (num1 < num2){
      return -1;
    }
    return 0;
  }

  switch (compareNumbers(num1,num2)) {
    case -1:
      alert("Число " + num1 + " меньше чем число " + num2)
      break;
    case 0:
      alert("Числа равны")
      break;
    case 1:
      alert("Число " + num1 + " больше чем число " + num2)
      break;
  }
}

//! 2.Написать функцию, которая вычисляет факториал переданного ей числа
//! и возвращает его в качестве результата.

{
  const number = Number(prompt("Введите число что бы узнать его факторал"))
  const factorialNumber = calcFactorial(number);
  function calcFactorial(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
      factorial = factorial * i;
    }
    return factorial;
  }
  alert(number + "! = " + factorialNumber)
}

//! 3. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//! Совершенное число – это 
//! число, равное сумме всех своих собственных делителей кроме найбольшего.
//! В качестве результата функция возвращает true или false
//! Примеры совершенных чисел:
//! 6  = 1 + 2 + 3
//! 28 = 1 2 4 7 14
//! 496 = 1, 2, 4, 8, 16, 31, 62, 124, 248 

{ 
  const number = Number(prompt("Введите число"));
  if (perfectionNumerCheck(number)){
    alert("Да, ваше число совершенно")
  } else {
    alert("Нет, ваше число не совершенно")
  }
}

function perfectionNumerCheck (num){
    let delimeter = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            delimeter += i;
        }
    }
    if(delimeter == num){
      return true;
    } else {
      return false;
    }
  }

//! 4. Написать функцию, которая принимает минимальное и 
//! максимальное значения для диапазона, и выводит только 
//! те числа из диапазона, которые являются совершенными. 
//! Используйте написанную ранее функцию, чтобы узнавать, 
//! совершенное число или нет.
//! Например 3 и 500:
//! 6
//! 28
//! 496

{
  const rangeStart = Number(prompt("Введите первое число диапазона"))
  const rangeEnd = Number(prompt("Введите второе число диапазона"))
  derivationPerfectNumbers(rangeStart,rangeEnd);
  function derivationPerfectNumbers(num1, num2) {
    let perfectNumbers = '';
    for(let i = num1; i <= num2; i++){
      if(perfectionNumerCheck(i)){
        perfectNumbers += i + ";"
      }
    }
    perfectNumbers = perfectNumbers.slice(0, -1);
    alert("Совершенные числа из диапазона [" + num1 + ";"+ num2 + "] - " + perfectNumbers + ".")
  }
}