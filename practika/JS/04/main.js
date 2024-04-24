//! 1.* Запросить 2 числа и найти только наибольший общий делитель.

//TODO При тесте программы использовал числа 36 и 48 общий делитель 12

{
  const num1 = Number(prompt("Введите первое число."));
  const num2 = Number(prompt("Введите второе число."));
  let testDivisor;
  let integerDivisor1 = 1;
  let integerDivisor2 = 1;
  let commonDivisor = 1;
  let maxСommonDivisor = 0;

  for (let i = 1; i <= num1; i++) {
    numberDivisor = num1 / i;

    if (numberDivisor === Math.trunc(numberDivisor)) {
      integerDivisor1 = numberDivisor;
    }
    for (let j = 1; j <= num2; j++) {
      numberDivisor = num2 / j;

      if (numberDivisor === Math.trunc(numberDivisor)) {
        integerDivisor2 = numberDivisor;
      }
      if (integerDivisor1 === integerDivisor2) {
        commonDivisor = integerDivisor1;
      }
      if (commonDivisor > maxСommonDivisor) {
        maxСommonDivisor = commonDivisor;
      }
    }
  }
  alert(
    "Максимальный общий делитель числа " +
      num1 +
      " и " +
      num2 +
      " является " +
      maxСommonDivisor
  );
}
//!2.** Определить количество цифр в введенном числе.
{
  let number = Number(prompt("Введите число"));
  if(isNaN(number)){
    alert("Вы ввели не цифры");
    number = Number(prompt("Введите число"));
  }
  if((number / Math.trunc(number) > 1)){
    do{
      number = number * 10;
    }while(number / Math.trunc(number) !== 1)
  }
  let amountNumber = 0;
  let lastNumberDel;
  let overwriteLastNumber = 0;
  let numberСounter = 2; //лічильник починаєтся з 2 тому, що ми при перших 2 операціях втрачаемо 2 числа
  lastNumberDel = (number - (number % 10)) / 10; // операія 1
  for (let i = 1; i <= number; i++) {
    overwriteLastNumber = (lastNumberDel - (lastNumberDel % 10)) / 10;// операція 2
    lastNumberDel = overwriteLastNumber;
    console.log(overwriteLastNumber);
    if(overwriteLastNumber === 0){
      break;
    } else {
      numberСounter++;
    }
  }
  alert("В числе " + number + " - "+ numberСounter + " цифр.")
}

//! 3. Вывести таблицу умножения для всех чисел от 2 до 9.
//! Каждое число необходимо умножить на числа от 1 до 10(вложеный цикл).
//! Результат в консоль выводить.

{
  let tableLine = "";
  let table = ""
  for(let i = 1; i <=10; i++){
    for(let j = 1; j <=10;j++){
      table = table + ((i * j) + "\t");
    }
    console.log(table)
    table = ""
  }
}
//!4. Прямоугольник из звездочек в консоле. Размер зависит от ввода пользователя
//! Например:
//! высота: 2
//! ширина: 3
//! Результат:
//! * * *
//! * * *

let height = prompt("Введите высоту прямоугольника");

if (isNaN(height)) {
  do {
    height = Number(
      prompt("Введите высоту прямоугольника (Положительное значение)")
    );
    if (height > 0) {
      break;
    }
  } while (true);
}
let width = Number(prompt("Введите ширину прямоугольника"));
if (isNaN(width)) {
  do {
    width = Number(prompt("Введите ширину прямоугольника (Положительное значение)"));
    if (width > 0) {
      break;
    }
  } while (true);
}
let rectangle = "";
for (let i = 0; i <= height; i++) {
  for (let j = 0; j <= width; j++) {
    rectangle = rectangle + ("*" + " ");
  }
  rectangle = rectangle + "\n";
}
alert(rectangle);
alert("Прямоугольник с вашими параметрами выведен также в консоль.")
console.log(rectangle);

//!5. Добавить в игру угадай число количество попыток 10.
//!Если за 10 попыток не отгадал - значит проиграл.

const min = 1;
const max = 100;
const compNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attempCount = 10;
console.log(compNumber);
alert("Я загадал число от 1 до 100, попробуй отгадай");
let userNumber;
do {
  attempCount--;
  if (attempCount === -1) {
    if(confirm("Ваши попытки исчерпаны , хотите начать сначала?")){
      attempCount = 10;
    } else {
      break;
    }
  }
  userNumber = prompt("Введите число");
  if (userNumber === null) {
    const answer = confirm("Вы хотите выйти?");
    if (answer === true) {
      break;
    }
    continue;
  }
  userNumber = Number(userNumber);

  if (isNaN(userNumber)) {
    alert("Вы ввели не число!");
    continue;
  }
  if (userNumber > 100 || userNumber < 1) {
    alert("Число должно быть от 1 до 100!");
    continue;
  }
  if (compNumber > userNumber) {
    alert("Мое число больше! Осталось " + attempCount + " попыток.");
  }
  if (compNumber < userNumber) {
    alert("Мое число меньше! Осталось " + attempCount + " попыток.");
  }
  if (compNumber === userNumber) {
    alert("Вы отгадали!");
  }
} while (compNumber !== userNumber);
