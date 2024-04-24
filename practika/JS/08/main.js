//! 1. Создать объект "Билет в кино". Продумать все свойства.
{
  const ticket = {
    ticketNumber : 1231,
    movieTitle : ' Shrek 3',
    discount : 10,
    price : 130,
    place : {
      hall : 3,
      row : 7,
      chair : 23,
    },
    time : {
      hour : 22,
      minut : 30,
    },
  }
}
//! 2. Создать объект project. У него есть название, например FaceBook.
//! У него есть developer, у которого есть имя, фамилия и address,
//! а у адреса есть страна и город.

{
  const project = {
    progectName : 'FaceBook',
    developer : {
      firstName : 'Vyacheslav',
      lastName : 'Fomenko',
      address : {
        country : 'Ukraine',
        city : 'Zhytomyr',
      }
    },
  }
}

//! 3.* Создать функцию копирования объекта user. У юзера есть имя и фамилия.
//! Функция принимает такой объект и возвращает КОПИЮ его, не ССЫЛКУ!

{
  const user = {
    firstName : 'Slava',
    lastName : 'Fomenko'
  }
  const copy = objectCopy(user)

  function objectCopy(original) {
    let copy = {};
    copy.firstName = original.firstName;
    copy.lastName = original.lastName;
    return copy
  }

  copy.test = true // проверка или не меняется объект user

  console.log(copy);
  console.log(user);
}
//! 4 Написать функцию, которая будет принимать в параметры объект и 
//! название свойcтва, проверять на наличие этого свойства в объекте и 
//! возвращать true или false.

{
  let myObject = {
    hello : 'hello',
    world : 'world'
  }
  propertyCheck(myObject, 'hello')
  function propertyCheck (object , property){
    return property in myObject
  }
}
//! 5.* 
//! Создать объект игрок. 
//! У него есть никнейм и метод shoot.
//! Метод shoot в параметры принимает объект оружие. 
//! Создать два варианта оружия: пистолет, автомат.
//! У оружия есть свойство патроны и метод выстрел(тоже shoot).
//! У пистолета это пив-пав, у автомата: тра-та-та в консоль. 
//! Во время выстрела у оружия отнимается пули. 
//! После каждого выстрела отображается количество оставшихся патронов.
//! Вызвать у игрока метод shoot два раза с пистолетом
//! и потом три раза с автоматом.

{
  const guns = {
    ak47 : {
      ammunition : 30,
      shoot (){
        console.log('тра-та-та')
      }
    },
    desertEagle : {
      ammunition : 7,
      shoot (){
        console.log('пив-пав')
      }
    }
  }
  const player = {
    nickname : 'N1ghtmare' ,
    shoot (weapon) {
      weapon.shoot();
      weapon.ammunition--;
      console.log("В пушке осталось - " + weapon.ammunition + " патронов!");
    },
  }
  player.shoot(guns.desertEagle);
  player.shoot(guns.desertEagle);
  player.shoot(guns.ak47);
  player.shoot(guns.ak47);
  player.shoot(guns.ak47);
}

// ------------------------------------

const ticket = {
  ticketNumber : 1231,
  movieTitle : ' Shrek 3',
  discount : 10,
  price : 130,
  place : {
    hall : 3,
    row : 7,
    chair : 23,
  },
  time : {
    hour : 22,
    minut : 30,
  },
}
const copy = deepCopy(ticket);
console.log(copy)
function deepCopy(object) {
  let copy= {};

  for (let key in object) {
    if (typeof object[key] === 'object' && object[key] !== null) {
      copy[key] = deepCopy(object[key]);
    } else {
      copy[key] = object[key];
    }
  }

  return copy;
}