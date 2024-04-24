//! 0.Переписать все предыдущие задачи вместо function declaration - 
//! function expression.

// {

//   {
//       const num1 = Number(prompt("Введите первое число"));
//       const num2 = Number(prompt("Введите второе число"));

//       let compareNumbers = function (num1,num2){
//         if (num1 > num2){
//           return 1;
//         }
//         if (num1 < num2){
//           return -1;
//         }
//         return 0;
//       }

//       switch (compareNumbers(num1,num2)) {
//         case -1:
//           alert("Число " + num1 + " меньше чем число " + num2)
//           break;
//         case 0:
//           alert("Числа равны")
//           break;
//         case 1:
//           alert("Число " + num1 + " больше чем число " + num2)
//           break;
//       }
//     }
//   {
//     const number = Number(prompt("Введите число что бы узнать его факторал"));
//     let calcFactorial = function (num){
//       let factorial = 1;
//       for(let i = 1; i <= num; i++){
//         factorial = factorial * i;
//       }
//       return factorial;
//     }
//     const factorialNumber = calcFactorial(number);
//     alert(number + "! = " + factorialNumber)
//   }
//     const number = Number(prompt("Введите число"));
    
//     let perfectionNumerCheck= function  (num){
//       let delimeter = 0;
//       for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//           delimeter += i;
//         }
//       }
//       if(delimeter == num){
//         return true;
//       } else {
//         return false;
//       }
//     }
//       {
//         if (perfectionNumerCheck(number)){
//           alert("Да, ваше число совершенно")
//         } else {
//           alert("Нет, ваше число не совершенно")
//         }
//       }
//       const rangeStart = Number(prompt("Введите первое число диапазона"))
//       const rangeEnd = Number(prompt("Введите второе число диапазона"))
//       let derivationPerfectNumbers = function (num1, num2) {
//         let perfectNumbers = '';
//         for(let i = num1; i <= num2; i++){
//           if(perfectionNumerCheck(i)){
//             perfectNumbers += i + ";"
//           }
//         }
//         perfectNumbers = perfectNumbers.slice(0, -1);
//         alert("Совершенные числа из диапазона [" + num1 + ";"+ num2 + "] - " + perfectNumbers + ".")
//       }
//       derivationPerfectNumbers(rangeStart,rangeEnd);
// }
//! 1.Пользователь вводит число n. Функция печатает числа от n до 
//! этого одного.
//! Например 5: 
//! 5
//! 4
//! 3
//! 2
//! 1

// {
//   const number = Number(prompt("Введите число"));
//   let str = '';
//   function printNumbers(num,str) {
//       str += num + ' ';
//       --num;
//       console.log(str)
//       if (num === 0){
//         alert(str);
//         return
//       }
//       printNumbers(num,str);  
//   }
//   printNumbers(number,str);
// }

//! 2.Создать функцию, в ней просим у пользователя ввести слово exit с
//! помощью prompt. Если ввел что-то другое - просим повторно...
//! Если он ввел exit - с помощью alert говорим ему до свидания.
{ 
  exit();
  function exit() {
    let word = prompt('Введите "exit"');

    if(word === 'exit'){
      alert("Досвидания!")
      return;
    } else {
      exit();
    }
  }
}

//! 3*.Пользователь вводит число, посчитать сумму всех чисел этого числа.
//! Например 5: 1+2+3+4+5 = 15

{
  const number = Number(prompt("Введите число"));

  function printNumbers(num,sum = 0,str = num) {
      str += " + " + (num - 1);
      
      console.log(str)
      sum += num
      --num;
      if (num === 1){
        alert(str + " = " + (sum + 1));
        return
      }
      printNumbers(num,sum,str);  
    }
    printNumbers(number);
}