function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
"use strict"
//! ЗАДАНИЕ 1
//! В двумерном массиве размерами x на y, заполненном случайными числами,
//! определить МАКСИМАЛЬНЫЙ элемент.

{
  let arr = [];
  const x = 5;
  const y = 4;

  for (let i = 0; i < x; i++) {
    const innerArr = [];
    for (let j = 0; j < y; j++) {
      innerArr.push(getRandomInt(1, 100));
    }
    arr.push(innerArr);
  }
  console.log(arr);

  let max = arr[0][0];
  for (const inner of arr) {
    for (const v of inner) {
      if (v > max) {
        max = v;
      }
    }
  }
  console.log("max: " + max);
}

//! ЗАДАНИЕ 2
//! В двумерном массиве размерами x на y, заполненном случайными числами,
//! найти сумму элементов,
//! значения которых меньше указанного пользователем.

{
  let arr = [];
  const x = 4;
  const y = 3;
  const limit = Number(prompt('Введите порог для проверки числа.'))
  let sum = 0;

  for (let i = 0; i < x; i++) {
    const innerArr = [];
    for (let j = 0; j < y; j++) {
      innerArr.push(getRandomInt(1, 100));
    }
    arr.push(innerArr);
  }
  console.log(arr);
  for (const index of arr) {
    for (const prop of index) {
      if (prop < limit) {
        sum += prop;
      }
    }
  }

  console.log('sum = ' + sum);
}

//! ЗАДАНИЕ 3
//! Дана температура воздуха за каждый день января, февраля и марта.
//! Это массив массивов. Можно заполнить руками, можно запустить циклом и
//! сгенерировать случайные значения.
//! Определить:
//! а) среднюю температуру за месяцам(всего будет 3 значения)
//! б) среднюю температуру за три месяца

function fillMonth(day) {  //? решил использовать функ что бы избежать повторение однотипного кода в основном цикле (думаю это правильно)
  const innerArr = [];

  for (let j = 0; j < day; j++) {
    if (day === 30) {
      innerArr.push(getRandomInt(0, 20)); // в марте редко бывает  -10 градусов
      continue;
    }
    innerArr.push(getRandomInt(-10, 10));
  }
  return innerArr;
}

{
  const temp = [];


  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      temp.push(fillMonth(31));
    }
    if (i === 1) {
      temp.push(fillMonth(28));
    }
    if (i === 2) {
      temp.push(fillMonth(30));
    }
  }
  console.log(temp)

  let averageTempJan = 0;
  let averageTempFeb = 0;
  let averageTempMar = 0;
  let averageTemp;

  for (const month in temp) {
    for (const tepmOfMonth of temp[month]) {
      if (month == 0) {
        averageTempJan += tepmOfMonth;
      }
      if (month == 1) {
        averageTempFeb += tepmOfMonth;
      }
      if (month == 2) {
        averageTempMar += tepmOfMonth;
      }
    }
  }

  averageTemp = (averageTempFeb + averageTempJan + averageTempMar) / 89;

  console.log('Средняя температура за январь = ' + (averageTempJan / 31).toFixed(1));
  console.log('Средняя температура за февраль = ' + (averageTempFeb / 28).toFixed(1));
  console.log('Средняя температура за март = ' + (averageTempMar / 30).toFixed(1));
  console.log('Средняя температура за март , февраль , март = ' + (averageTemp).toFixed(1));
}

//! ЗАДАНИЕ 4 *
//! Трехмерный массив создать.
//! В массиве хранится информация о количестве жильцов
//! каждой квартиры пятиэтажного дома (4 подъезда, на
//! каждом этаже по 2 квартиры).

function numberToHomeAdress(roomNum, arr) { //функ которая возвращает масив с индексами для переданого номера квартиры (нигде не использовал)
  let roomCounter = 0;
  console.log(arr)
  for (let porch = 0; porch < arr.length; porch++) {
    for (let floor = 0; floor < arr[porch].length; floor++) {
      roomCounter++;
      if (roomNum === roomCounter) {
        return [porch, floor, 0];
      }
      roomCounter++;
      if (roomNum === roomCounter) {
        return [porch, floor, 1];
      }
    }
  }
}


{
  const house = [
    [[[3], [1]], [[3], [5]], [[2], [1]], [[0], [4]], [[2], [1]]],
    [[[2], [2]], [[2], [5]], [[4], [2]], [[2], [3]], [[6], [4]]],
    [[[1], [2]], [[7], [6]], [[1], [2]], [[2], [8]], [[4], [5]]],
    [[[1], [6]], [[4], [2]], [[5], [2]], [[2], [4]], [[4], [0]]],
  ];

  //! а) по выбранному номеру квартиры определить количество
  //! жильцов, а также их соседей проживающих на одном этаже;
  //! номер квартиры указывать индексами. 
  //! P.s. у квариры три индекса(подъезд, этаж и квартира)

  {
    const porch = 4;
    const floor = 3;
    const room = 2;

    const peopleOnFloor = Number(house[porch - 1][floor - 1][0]) + Number(house[porch - 1][floor - 1][1]);

    console.log(`В ${porch} подъезде, на ${floor} этаже, в кв. ${room} живет ${house[porch - 1][floor - 1][room - 1]} жителей`);
    console.log('В ' + porch + ' подъезде, на ' + floor + ' этаже живет ' + peopleOnFloor + ' жителей');
  }

  //! б) определить суммарное количество жильцов для
  //! каждого подъезда;
  {
    const peopleInHome = [];

    for (let porch = 0; porch < 4; porch++) {
      let peopleOnFloor = 0;
      for (let floor = 0; floor < 5; floor++) {
        peopleOnFloor += Number(house[porch][floor][0]) + Number(house[porch][floor][1]);
      }
      peopleInHome[porch] = [peopleOnFloor];
    }

    for (const porch in peopleInHome) {
      console.log('В подъезде ' + (Number(porch) + 1) + ' живет ' + peopleInHome[porch] + ' жильцов');
    }
  }
  //! в) определить номера квартир, где живут многодетные
  //! семьи. Условно будем считать таковыми, у которых
  //! количество членов семьи превышает пять человек.
  //! номер квартиры указывать индексами. 
  //! P.s. у квариры три индекса(подъезд, этаж и квартира)

  // for(const porch in house){
  //   for (const floor in house[porch]) {
  //     for (const room in house[porch][floor]) {
  //       if(house[porch][floor][room]> 7){
  //         console.log(`В ${Number(porch)+1} подъезде, на ${Number(floor)+1} этаже, в кв. ${Number(room)+1} живет многодетная семья`);
  //       }
  //     }
  //   }
  // }

  for (let porch = 0; porch < house.length; porch++) {
    for (let floor = 0; floor < house[porch].length; floor++) {
      for (let room = 0; room < house[porch][floor].length; room++) {
        if (house[porch][floor][room] > 5) {
          console.log(`В ${Number(porch) + 1} подъезде, на ${Number(floor) + 1} этаже, в кв. ${Number(room) + 1} живет многодетная семья`);
        }
      }
    }
  }
}