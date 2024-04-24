function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//! ЗАДАНИЕ 1
//! В одномерном массиве, заполненном случайными числами,
//! определить МАКСИМАЛЬНЫЙ элемент.

{
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = getRandomInt(0, 100)
  }

  let maxNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i]
    }
  }
  console.log(arr)
  console.log(maxNum)
}

//! ЗАДАНИЕ 2
//! В одномерном массиве, заполненном случайными числами,
//! найти сумму элементов,
//! значения которых меньше указанного пользователем.

{
  const num1 = Number(prompt("Введите первое число"));
  const num2 = Number(prompt("Введите второе число"));

  let sum = 0;
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = getRandomInt(0, 10)
  }
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < num1 || arr < num2){
      sum += arr[i]
    }
  }
  console.log(sum);
}

//! ЗАДАНИЕ 3
//! Дана температура воздуха за каждый день января.
//! Определить:
//! а) среднюю температуру за месяц;
//! б) сколько раз температура воздуха опускалась нижеуказанной метки.

{
  let airTemp = [];

  for (let i = 0; i < 31; i++) {
    airTemp[i] = getRandomInt(-30, 10)
  }

  console.log(airTemp);

  //? а) среднюю температуру за месяц;

  let arithmeticMean = 0;
  for (let i = 0; i < airTemp.length; i++) {
    arithmeticMean += airTemp[i]
  }
  arithmeticMean /= airTemp.length - 1;
  console.log(Math.trunc(arithmeticMean));

  //? б) сколько раз температура воздуха опускалась нижеуказанной метки.

  const mark = -10;
  let counterTemp = 0;
  for (let i = 0; i < airTemp.length; i++) {
    if (airTemp[i] < mark) {
      counterTemp++;
    }
  }
  console.log(counterTemp);
}

//! ЗАДАНИЕ 4
//! Заполнить два целочисленных массива A[10] и B[10].
//! Сформировать третий массив X[20], элементы которого будут взяты из A и B в порядке:
//! а) чередования (a0, b0, a1, b1, a2, b2, …, a9, b9);
//! б) следования (a0, a1, a2,…, a9, b0, b1, b2,…, b9).

{
  let a = [];
  let b = [];
  let x = [];

  for (let i = 0; i < 10; i++) {
    a[i] = getRandomInt(0, 10)
    b[i] = getRandomInt(0, 10)
  }
  console.log(a);
  console.log(b);

  //? а) чередования (a0, b0, a1, b1, a2, b2, …, a9, b9);

  //todo Первое решение

  let counterA = 0
  let counterB = 1
  for (let i = 0; i < 10; i++) {
    x[counterA] = a[i]
    x[counterB] = b[i]
    counterA += 2;
    counterB += 2
  }
  console.log('a 1.1) '+x);


  //todo Второе решение(PS. на свежую голову, пересмотрел пару и переписал)

  for (let i = 0; i < 10; i++) {
    x.push[a[i]]
    x.push[b[i]]
  }
  console.log('a 1.2) '+x);

  //? б) следования (a0, a1, a2,…, a9, b0, b1, b2,…, b9).

  x = []
  let counter = 0;
  for (let i = 9; i >= 0; i--) {
    x.unshift(a[i])
    x.push(b[counter]);
    counter++;
  }
  console.log('б 1.1) '+ x);
  x =[]
  console.log('б 1.2) '+ (x.concat(a,b)));
  


}