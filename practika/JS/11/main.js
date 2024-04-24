"use strict"

//! 1. Создать функцию коструктор User, который должен хранить следующую инф. о пользователе:
//! полное имя, возраст, пол, электронную почту, страну проживания,оклад, должность, отдел;
//! Создать массив юзеров(10 штук)

function User(firstName, age, gender, eMail, country, salary, job, departament) {
  this.firstName = firstName;
  this.age = age;
  this.gender = gender;
  this.eMail = eMail;
  this.country = country;
  this.salary = salary;
  this.job = job;
  this.departament = departament;

}
const users = [
  new User('Slava', 19, 'male', 'mrmagosj@gmail.com', 'Ukraine', 400, 'developer', 'front-end'),
  new User('Liza', 19, 'female', 'korzunliza2005@gmail.com', 'Ukraine', 350, 'designer', 'UX-UI'),
  new User('Danil', 16, 'male', 'danoprishko@gmail.com', 'Ukraine', 400, 'developer', 'back-end'),
  new User('Vlad', 20, 'male', 'vladislavYakysevich@ukr.net', 'Ukraine', 300, 'menedger', 'progect'),
  new User('Uliana', 23, 'female', 'ulianix@ukr.net', 'Japan', 300, 'analitic', 'progect'),
  new User('Ivan', 32, 'male', 'vanyaKorzun@ukr.net', 'Ukraine', 300, 'developer', 'back-end'),
  new User('Kirill', 20, 'male', 'kiriltarasyk@gmail.com', 'Ukraine', 350, 'menedger', 'progect'),
  new User('Dmitriy', 24, 'male', 'dmitriyMinto@usa.com', 'USA', 600, 'military', 'arm'),
  new User('Rica', 32, 'female', 'ricoLorenc@racing.jp', 'Japan', 400, 'racer', 'drift'),
  new User('Andrey', 17, 'male', 'andreyVirasik@gmail.com', 'Ukraine', 300, 'developer', 'front-end'),
];

//! 2. Получить пользователей у которых почта заканчивается на "@gmail.com" (Array User)
{
  const res = users.filter(user => { return user.eMail.includes("@gmail.com"); });
  console.log(res);
}
//! 3. Получить электронные почты всех совершеннолетних женщин,
//! не старше 30 лет, проживающих в Украине(Array String)

{
  const res = users
    .filter(user => { return user.age < 30 && user.age > 18 && user.gender == 'female' && user.country == 'Ukraine' })
    .map(user => user.eMail)
  console.log(res);
}
//! 4. Получить все возраста совершеннолетних мужчин(Array Number)

{
  const res = users
    .filter(user => { return user.age > 18 && user.gender == 'male' })
    .map(user => user.age)
  console.log(res);
}

//! 5. Найти самого старшего(User)

{
  const res = users.reduce((acum, currentAge) => { return currentAge.age > acum.age ? currentAge : acum })
  console.log(res);
}

//!*Для себя реализовать пузырьковую сортировку массива чисел 

{
  function bubbleSort(arr) {
    let a; //не знал как назвать переменную, думал назвать saveNextNum (отпишите в комент если можно как бы вы назвали переменную)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        a = arr[i + 1];
        arr[i + 1] = arr[i]
        arr[i] = a
        i = -1;
        console.log(arr)
      }
    }
    return arr;
  }
  const myArr = [6, 4, 7, 5, 8, 3, 4, 2, 1, 9];
  const res = bubbleSort(myArr);
  console.log(res);
}