//! 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.

{
  const num1 = Number(prompt("Введите первое число."));
  const num2 = Number(prompt("Введите второе число."));
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  alert("Сумма чисел в диапазоне [" + num1 + ";" + num2 + "] равна " + sum);
  sum = 0;

  {
    let i = num1;
    while (i <= num2) {
      sum += i;
      i++;
    }
    alert("Сумма чисел в диапазоне [" + num1 + ";" + num2 + "] равна " + sum);
    sum = 0;
  }

  {
    let i = num1;
    do {
      sum += i;
      i++;
      console, console.log("I - " + i);
      console, console.log("SUM - " + sum);
    } while (i <= num2);
    alert("Сумма чисел в диапазоне [" + num1 + ";" + num2 + "] равна " + sum);
    sum = 0;
  }
}

//!2. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

{
  let num1;
  let sign;
  let num2;
  let sum;
  let stopCalculator = true;

  for (let i = true; i === true; i = stopCalculator) {
    num1 = Number(prompt("Введите первое число для примера"));
    sign = prompt("Введите знак. (* , + , - , /)");
    num2 = Number(prompt("Введите второе число для примера"));

    switch(sign){
      case '+':
        sum = num1 + num2;
        break;
      case '-':
        sum = num1 - num2;
        break;
      case '*':
        sum = num1 * num2;
        break;
      case '/':
        sum = num1 / num2;
        break;
    }
    stopCalculator = confirm(num1 + " " + sign + ' ' + num2 + " = " + sum + "\nНажмите отмена для выхода");
  }

  {
    while(stopCalculator === true){
      num1 = Number(prompt("Введите первое число для примера"));
      sign = prompt("Введите знак. (* , + , - , /)");
      num2 = Number(prompt("Введите второе число для примера"));

      switch(sign){
        case '+':
          sum = num1 + num2;
          break;
        case '-':
          sum = num1 - num2;
          break;
        case '*':
          sum = num1 * num2;
          break;
        case '/':
          sum = num1 / num2;
          break;
      }
      stopCalculator = confirm(num1 + " " + sign + ' ' + num2 + " = " + sum + "\nНажмите отмена для выхода");
    }
  }

  {
    do{
      num1 = Number(prompt("Введите первое число для примера"));
      sign = prompt("Введите знак. (* , + , - , /)");
      num2 = Number(prompt("Введите второе число для примера"));

      switch(sign){
        case '+':
          sum = num1 + num2;
          break;
        case '-':
          sum = num1 - num2;
          break;
        case '*':
          sum = num1 * num2;
          break;
        case '/':
          sum = num1 / num2;
          break;
      }
      stopCalculator = confirm(num1 + " " + sign + ' ' + num2 + " = " + sum + "\nНажмите отмена для выхода");
    }while (stopCalculator === true);
  }
}

//!3*. Запросить у пользователя число и вывести все делители этого числа.

{
  const number = Number(prompt("Введите число что что бы узнать его делители"));
  let checkingIntegrity = 0;
  let divider = " ";

  for (let i = 1; i <= number; i++) { // цикл не починаеться з 0 тому, що коли при виконанні дії число буде ділитись на 0, відповідно резулятат буде +- бескінечність

    checkingIntegrity = number / i;

    if (checkingIntegrity === Math.trunc(checkingIntegrity)) {
      divider += checkingIntegrity + ", ";
    }
  }

  alert("Делители числа " + number + " :" + divider);

  {
    divider = " ";
    let i = 1;
    while (i <= number) {
      checkingIntegrity = number / i;

      if (checkingIntegrity === Math.trunc(checkingIntegrity)) {
        divider += checkingIntegrity + ", ";
      }
      i++;
    }
    alert("Делители числа " + number + " :" + divider);
  }
  {
    let i = 1;
    divider = " ";
    do {
      checkingIntegrity = number / i;

      if (checkingIntegrity === Math.trunc(checkingIntegrity)) {
        divider += checkingIntegrity + ", ";
      }
      i++;
    } while (i <= number);
    alert("Делители числа " + number + " :" + divider);
  }
}

//!4. Запросить у пользователя 10 чисел и подсчитать, сколько
//! он ввел положительных, отрицательных и нулей. При этом
//! также посчитать, сколько четных и нечетных. Вывести
//! статистику на экран. Учтите, что достаточно одной переменной
//! (не 10) для ввода чисел пользователем.

{
  let num;
  let positiveNumber = 0;
  let negativeNumber = 0;
  let evenNumber = 0;
  let oddNumber = 0;
  let zeroNumber = 0;

  for(let i = 1; i <= 10; i++){
    num = Number(prompt("Введите число под номером - " + i))

    if(num > 0){
      positiveNumber++;
    }
    if(num < 0){
      negativeNumber++;
    }
    if((num / 2) === 0){
      evenNumber++;
    }
    if((num / 2 ) !== 0){
      oddNumber++;
    }
    if(num === 0){
      zeroNumber++;
    }
  }

  alert("Результаты!\n" +
        "\nПоложительных чисел - " + positiveNumber +
        "\nОтрицательных чисел - " + negativeNumber +
        "\nЧетных чисел - " + oddNumber +
        "\nНечетных чисел - " + evenNumber +
        "\nНулей - " + zeroNumber);

  {
    let i = 0;
    while (i<=10) {
      num = Number(prompt("Введите число под номером - " + i))

      if(num > 0){
        positiveNumber++;
      }
      if(num < 0){
        negativeNumber++;
      }
      if((num / 2) === 0){
        evenNumber++;
      }
      if((num / 2 ) !== 0){
        oddNumber++;
      }
      if(num === 0){
        zeroNumber++;
      }
      i++;
    }
    alert("Результаты!\n" +
        "\nПоложительных чисел - " + positiveNumber +
        "\nОтрицательных чисел - " + negativeNumber +
        "\nЧетных чисел - " + oddNumber +
        "\nНечетных чисел - " + evenNumber +
        "\nНулей - " + zeroNumber);
  }
  {
    let i = 0;
    do{
      num = Number(prompt("Введите число под номером - " + i))

      if(num > 0){
        positiveNumber++;
      }
      if(num < 0){
        negativeNumber++;
      }
      if((num / 2) === 0){
        evenNumber++;
      }
      if((num / 2 ) !== 0){
        oddNumber++;
      }
      if(num === 0){
        zeroNumber++;
      }
      i++;
    }while(i <= 10)
    alert("Результаты!\n" +
        "\nПоложительных чисел - " + positiveNumber +
        "\nОтрицательных чисел - " + negativeNumber +
        "\nЧетных чисел - " + oddNumber +
        "\nНечетных чисел - " + evenNumber +
        "\nНулей - " + zeroNumber);
  }
}

//!5. Зациклить вывод дней недели таким образом: «День недели.
//!Хотите увидеть следующий день?» и так до тех пор, пока
//!пользователь нажимает OK.(switch внутри цикла)

{
  let stopCycle;
  
  for (let i = 1; i <= 7; i++) {
    switch (i) {
      case 1:
        stopCycle = confirm("Понедельник! Хочешь узнать что дальше?");
        break;
      case 2:
        stopCycle = confirm("Вторник! Хочешь узнать что дальше?");
        break;
      case 3:
        stopCycle = confirm("Среда! Хочешь узнать что дальше?");
        break;
      case 4:
        stopCycle = confirm("Четверг! Хочешь узнать что дальше?");
        break;
      case 5:
        stopCycle = confirm("Пятница! Хочешь узнать что дальше?");
        break;
      case 6:
        stopCycle = confirm("Субота! Хочешь узнать что дальше?");
        break;
      case 7:
        stopCycle = confirm("Воскресенье! Хочешь узнать что дальше?");
        break;
    }
    if (stopCycle === false) {
      break;
    } else if (i == 7 && stopCycle == true) {
      i = 0;
    }
  }

  {
    let i = 1;
    while (i <= 7) {
      switch (i) {
        case 1:
          stopCycle = confirm("Понедельник! Хочешь узнать что дальше?");
          break;
        case 2:
          stopCycle = confirm("Вторник! Хочешь узнать что дальше?");
          break;
        case 3:
          stopCycle = confirm("Среда! Хочешь узнать что дальше?");
          break;
        case 4:
          stopCycle = confirm("Четверг! Хочешь узнать что дальше?");
          break;
        case 5:
          stopCycle = confirm("Пятница! Хочешь узнать что дальше?");
          break;
        case 6:
          stopCycle = confirm("Субота! Хочешь узнать что дальше?");
          break;
        case 7:
          stopCycle = confirm("Воскресенье! Хочешь узнать что дальше?");
          break;
      }
      if (stopCycle === false) {
        break;
      } else if (i == 7 && stopCycle == true) {
        i = 0;
      }
      i++;
    }
  }
  {
    let i = 1;
    do {
      switch (i) {
        case 1:
          stopCycle = confirm("Понедельник! Хочешь узнать что дальше?");
          break;
        case 2:
          stopCycle = confirm("Вторник! Хочешь узнать что дальше?");
          break;
        case 3:
          stopCycle = confirm("Среда! Хочешь узнать что дальше?");
          break;
        case 4:
          stopCycle = confirm("Четверг! Хочешь узнать что дальше?");
          break;
        case 5:
          stopCycle = confirm("Пятница! Хочешь узнать что дальше?");
          break;
        case 6:
          stopCycle = confirm("Субота! Хочешь узнать что дальше?");
          break;
        case 7:
          stopCycle = confirm("Воскресенье! Хочешь узнать что дальше?");
          break;
      }
      if (stopCycle === false) {
        break;
      } else if (i == 7 && stopCycle == true) {
        i = 0;
      }
      i++;
    }while(i <= 7)
  }
  

}
  

