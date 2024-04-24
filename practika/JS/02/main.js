// 1. Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–2), подростком (12–18), взрослым 
// (18_60) или пенсионером (60– ...).

// =====================================
const age = Number(prompt("Введите ваш возраст."));
// =====================================

if(age > 0){
  if(age < 60){
    if((age >= 18) && (age < 60)){
      alert("Вы взрослый человек")
    } else {
      if((age > 12) && (age < 18)){
        alert("Вы подросток");
      } else {
        alert("Вы ребёнок");
      }
    }
    
  } else {
    alert("Вы пенсионер");
  }
} else {
  alert("Вы ввели неверный возраст");
}
// =====================================
// Вторая версия первого задания
// =====================================
// if(age > 0){
//   if(age >= 60){
//     alert("Вы пенсионер");
//   }
//   if((age >= 18) && (age < 60)){
//     alert("Вы взрослый человек");
//   }
//   if((age >= 12) && (age < 18)){
//     alert("Вы подросток");
//   }
//   if((age >= 0) && (age < 12)){
//     alert("Вы ребёнок");
//   }
// } else {
//   alert("Вы ввели неверный возраст");
// }
// =====================================

//==============================================================================

// 2. Запросить у пользователя год и проверить, високосный он 
// или нет. Високосный год кратен 4.

const year = Number(prompt("Введите год что бы узнать высокостный ли он"));

if(year % 4 == 0){
  alert("Год высокосный")
} else {
  alert("Год не высокосный")
}

//==============================================================================

// 3. Написать конвертор валют. Пользователь вводит количество USD,
// выбирает, в какую валюту хочет перевести: EUR, 
// UAN или AZN, и получает в ответ соответствующую сумму

const usd = Number(prompt("Введите количество USD"));
let valet;
let currency = prompt("Введите тип валюты для конвертации.Варианты ответа EUR,UAN, AZN.")
currency = currency.toUpperCase();

if(currency === "UAN"){
  valet = Math.round((usd*40.53) * 100) / 100;
  alert( usd + " USD " + " = " + valet + " UAN") 
}
if(currency === "EUR"){
  valet = Math.round((usd*36.25) * 100) / 100;
  alert( usd + " USD " + " = " + valet + " EUR") 
}
if(currency === "AZN"){
  valet = Math.round((usd*1.70) * 100) / 100;
  alert( usd + " USD " + " = " + valet + " AZN") 
}
if(currency != "EUR"  && currency != "UAN" && currency != "AZN")
alert("Вы ввели не существующую валюту.")

//==============================================================================

// 4. Запросить у пользователя сумму покупки и вывести сумму 
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 
// до 500 – 5%, от 500 и выше – 7%.

const  sumProduct = Number(prompt("Введите сумму покупки."));
let sumPayment = sumProduct;
const discount3 = sumProduct * 3 / 100;
const discount5 = sumProduct * 5 / 100;
const discount7 = sumProduct * 7 / 100;
if(sumProduct >= 200){
  if(sumProduct >= 500){
    sumPayment-discount7;
    alert("Сумма к оплате с учётом скидки 7% - " + (sumPayment - discount7) + ".");
  }
  if(sumProduct < 500 && sumProduct >= 300){
    sumPayment-discount5;
    alert("Сумма к оплате с учётом скидки 5% - " + (sumPayment - discount5) + ".");
  }
  if(sumProduct < 300 && sumProduct >=200){
    sumPayment-discount3;
    alert("Сумма к оплате с учётом скидки 3% - " + (sumPayment - discount3) + ".");
  }
} else {
  alert("Ваша сумма к оплате без скидки " + sumPayment + ".");
}

//==============================================================================
// 5. Запросить у пользователя длину окружности и периметр 
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 

const circleLenght = Number(prompt("Введите длину окружности."));
const perimeterSquare = Number(prompt("Введите перимтр квадрата."));
const circleDiameter = circleLenght / Math.PI;


if((perimeterSquare / 4) >= circleDiameter){
  alert("Данный круг может поместится в квадрат.")
} else {
  alert("Данный круг может не поместится в квадрат.")
}

//==============================================================================

// 6. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 
// балла. После вопросов выведите пользователю количество 
// набранных баллов.

alert("Введите правельный ответ.\n" +"1 правильный ответ = 2 балла.\n"+"Максимальное количество баллов 6.")
let score = 0;
let question1 = prompt("Какого цвета трава?\n" + "1. Cиняя.\n" + "2.Зелёная.\n" + "3.Красная\n");
question1 = question1.toUpperCase();
if((question1 == "2") || (question1 == "ЗЕЛЁНАЯ")){
  score = score + 2;
  alert("Вы ответили верно, трава действительно зелёная XD!")
} else {
  alert("Вы ответили не верно, к сожалению трава зелёная XD!")
}
let question2 =prompt("Что умеют птицы?\n" + "1. Читать.\n" + "2.Рисовать.\n" + "3.Летать.\n");
question2 = question2.toUpperCase();
if((question2 == "3") || (question2 == "ЛЕТАТЬ")){
  score = score + 2;
  alert("Вы ответили верно, они умеют летать XD!")
} else {
  alert("Вы ответили не верно, к сожалению они умеют только летать XD!")
}
let question3 =prompt("Кого можна увидеть на Антарктиде?\n" + "1.Пингвин.\n" + "2.Кенгуру.\n" + "3.Лев.\n");
question3 = question3.toUpperCase();
if((question3 == "1") || (question3 == "ПИНГВИН")){
  score = score + 2;
  alert("Вы ответили верно, там действительно есть пингвины XD!")
} else {
  alert("Вы ответили не верно, к сожалению там нет такого животного XD!")
}

alert("Вы набрали - " + score + " очков.")

//==============================================================================
// 7. Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д).

const keyNumber = Number(prompt("Введите число что бы узнать какой за ним стоит символ. (0-9)"))

if(keyNumber < 0 || keyNumber > 9){
  alert("Вы ввели не верное число")
}
if(keyNumber == 0){
  alert(keyNumber + " - )")
}
if(keyNumber == 1){
  alert(keyNumber + " - !")
}
if(keyNumber == 2){
  alert(keyNumber + " - @")
}
if(keyNumber == 3){
  alert(keyNumber + " - #")
}
if(keyNumber == 4){
  alert(keyNumber + " - $")
}
if(keyNumber == 5){
  alert(keyNumber + " - %")
}
if(keyNumber == 6){
  alert(keyNumber + " - ^")
}
if(keyNumber == 7){
  alert(keyNumber + " - &")
}
if(keyNumber == 8){
  alert(keyNumber + " - *")
}
if(keyNumber == 9){
  alert(keyNumber + " - (")
}

//==============================================================================

// 8*. Запросить у пользователя трехзначное и число и проверить, 
// есть ли в нем одинаковые цифры. Понадобится оператор %

const num = Number(prompt("Введите 3-х значное число."));
let number3 = num % 10;  // last number
let number2 = ((num - (num % 10)) / 10) % 10; // middle number
let number1 = (((num - (num % 10)) / 10) - number2) / 10;// first number

let brakeNumber = 0; //  число для проверки если одно из условий true то следуйщие проверки он пропускает

if(num <= 99){
  alert("Вы ввели слишком малое число")
  brakeNumber += 1
}
if (num >= 1000){
  alert("Вы ввели слишком большое число")
  brakeNumber += 1;
}

if((number1 == number2) && (number2 == number3)){
  alert("В вашем числе все числа одиннаковые")
  brakeNumber += 1;
}

if(brakeNumber != 1){
  if (number1 == number2){
    alert("Первое и воторое число одинаковые")
    brakeNumber + 1;
  }
}
if(brakeNumber != 1){
  if (number1 == number3){
    alert("Первое и последнее число одинаковые")
    brakeNumber + 1;
  }
}
if(brakeNumber != 1){
  if (number2 == number3){
    alert("Второе и последнее число одинаковые")
    brakeNumber + 1;
  }
}
if(brakeNumber != 1){
  if((number1 != number2) && (number1 != number3) && (number2 != number3)){
    alert("В числе "+ num + " нет одинаковых чисел.")
  }
}



//==============================================================================
