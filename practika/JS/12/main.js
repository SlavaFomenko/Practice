'use strict';
//! 1.. Создать объект project. У него есть название, например FaceBook.
//! У него есть developer, у которого есть имя, фамилия и address,
//! а у адреса есть страна и город.
//! С помощью деструктуризации вытащить страну и город.


{
  const project = {
    facebook: {
      developer: {
        country: 'Ukraine',
        city: 'Zhytomyr'
      }
    }
  }
  const { country, city } = project.facebook.developer;

  console.log(country);
  console.log(city);
}

//! 2. Есть данные в таком виде:
//! Ivan;Ivanov;1990;ivanov@gmail.com
//! Вытащить почту и год рождения с помощью деструктуризации

{
  const user = 'Ivan;Ivanov;1990;ivanov@gmail.com';

  const [, , birthYear, email,] = user.split(';');

  console.log(email);
  console.log(birthYear);
}

//! 3.В map поместить 10 слов англо-русских. 
//! В качестве ключа английское слово, в качестве значения -
//! русское. Например: mother->мама.
//! Пользователь вводить слово на английском, программа выдает
//! результат на русском.

{
  const translete = new Map();
  translete.set('hello', 'Привет')
    .set('house', 'Дом')
    .set('mother', 'Мама')
    .set('father', 'Папа')
    .set('dog', 'Собака')
    .set('cat', 'Кот')
    .set('mouse', 'Мышь')
    .set('bird', 'Птица')
    .set('fish', 'Рыба')
    .set('axe', 'Топор');

  alert("Перевод вашего слова - " + translete.get(prompt("Введите слово что бы перевести")))
}


//! 4.Создать объект телефон с помощью функции конструктора,
//! у него есть бренд, модель, цена, цвет.
//! Создать три объетка телефонов.
//! Например:
//! бренд samsung
//! модель x100
//! цена 1000грн
//! цвет красный
//! При преобразования к строке нужно отобразить информацию:
//! samsung x1000 1000грн

{
  function Phone(brend, model, price, color) {
    this.brend = brend;
    this.model = model;
    this.price = price;
    this.color = color;

    this.toString = () => { return this.brend + ' ' + this.model + ' ' + this.price }
  }

  const samsung = new Phone('Samsung', 'x100', '1500грн', 'red')
  const iphone = new Phone('iPhone', 'x', '2000грн', 'silver')
  const xiaomi = new Phone('xiaomi', 'pro', '400грн', 'black')

  console.log(samsung.toString());
  console.log(iphone.toString());
  console.log(xiaomi.toString());
}

//! 5.Пользователь вводит 10 чисел. Сохраняем эти данные в Set.
//! После того как он их ввел, отобразить все числа в alert.
//! Проверяем, что повторные значения не сохраняются.

{
  const numbers = new Set();
  let allNumbers = '';
  do {
    numbers.add(prompt('Введите число в Set'))
  } while (numbers.size <= 10); // цикл для того что бы в сете было 10 значений

  for (const num of numbers) {
    allNumbers += num + ' ';
  }
  alert(allNumbers);
}