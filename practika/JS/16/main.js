'use strict';
//! 1.Подготовить свойство PI(3.14...) в своем математическом
//! объекте, таким образом, чтоб его нельзя было изменить или удалить.

{
  const myMath = {
    pi: 3.14
  }
  Object.defineProperty(myMath, 'pi', {
    configurable: false,
    writable: false
  });
}
//! 2.Свойства аксесоры(set get).
//! Создать объект для хранения данных о юзере(имя, фамилия, номер
//! телефона и адрес).
//! Номер телефона можно установить только
//! украинский(код страны должен быть в начале). Почта должна
//! быть только gmail. В имени и фамилии только латинские буквы и тире.
//! Все проверки в сеттерах.

{
  // debugger
  const user = {
    _firstName: '',
    _lastName: '',
    _phoneNumber: '',
    _email: '',
    set firstName(firstName) {
      if (/^[A-Za-z\-]+$/.test(firstName)) {
        this._firstName = firstName;
      } else {
        console.log('Error, firstName entered incorrectly');
      }
    },
    set lastName(lastName) {
      if (/^[A-Za-z\-]+$/.test(lastName)) {
        this._lastName = lastName
      } else {
        console.log('Error, lastName entered incorrectly');
      }
    },
    set phoneNumber(number) {
      const arrNumber = [...number];
      if (arrNumber[0] == '+' && arrNumber[1] == 3 && arrNumber[2] == 8) {
        if (arrNumber.length == 13) {
          this._phoneNumber = number;
        } else {
          console.log('Error, incorrect number of digits');
        }
      } else {
        console.log('Error, country code is incorrect');
      }
    },
    set email(email) {
      if (email.includes('@gmail.com')) {
        const emailName = email.split('@gmail.com')[0];
        const fullEmailNmane = email.replace('@gmail.com', '');
        if (emailName == fullEmailNmane) {
          this._email = email
        } else {
          console.log(`Error , "@gmail.com" is not at the end of the address`);
        }
      } else {
        console.log('Error, email is missing "@gmail.com."');
      }

    },
    get firstName() {
      return this._firstName
    },
    get lastName() {
      return this._lastName
    },
    get phoneNumber() {
      return this._phoneNumber
    },
    get email() {
      return this._email
    },
  }
}
//!3.Первую задачу переписать с помощью класса.

{
  class math {
    constructor(pi) {
      this.pi = pi;
    }
  }
  const myMath = new math(3.14);
  Object.defineProperty(myMath, 'pi', {
    configurable: false,
    writable: false
  });
  console.log(myMath.pi)
}
//! 4.* Реализовать интерактивную шпаргалку для визуализации свойства
//! flex-direction.
//! Пример на рисунке. По нажатию на кнопку элементы становятся
//! определенным образом(в зависимости от указанного значения);

const buttons = {
  btnRow: document.getElementById('btnRow'),
  btnRowReverse: document.getElementById('btnRowReverse'),
  btnColumn: document.getElementById('btnColumn'),
  btnColumnReverse: document.getElementById('btnColumnReverse')
}

let lastBtn = null;

const flexArea = document.getElementById('flexArea')
const styleFlexArea = flexArea.style.flexDirection

function flexAreaDirection() {
  const directionValue = (this.innerText).toLowerCase();
  console.log(directionValue);
  flexArea.style.flexDirection = directionValue;
}
function chengeBtnColorActive() {
  this.style.backgroundColor = 'rgb(152 223 251)';
  this.style.color = 'rgb(255, 255, 255)';
  this.style.fontSize = '100%';
  console.log(this);
}
function chengeBtnColorPaciveInactive() {
  this.style.backgroundColor = 'transparent';
  this.style.color = 'black';
  this.style.fontSize = '85%';
}

buttons.btnRow.onclick = () => {
  if (lastBtn != null) {
    chengeBtnColorPaciveInactive.call(lastBtn);
  }
  lastBtn = buttons.btnRow;
  flexAreaDirection.call(buttons.btnRow);
  chengeBtnColorActive.call(buttons.btnRow);
}
buttons.btnColumn.onclick = () => {
  if (lastBtn != null) {
    chengeBtnColorPaciveInactive.call(lastBtn);
  }
  lastBtn = buttons.btnColumn;

  flexAreaDirection.call(buttons.btnColumn);
  chengeBtnColorActive.call(buttons.btnColumn);
}
buttons.btnRowReverse.onclick = () => {
  if (lastBtn != null) {
    chengeBtnColorPaciveInactive.call(lastBtn);
  }
  lastBtn = buttons.btnRowReverse;

  flexAreaDirection.call(buttons.btnRowReverse);
  chengeBtnColorActive.call(buttons.btnRowReverse);
}
buttons.btnColumnReverse.onclick = () => {
  if (lastBtn != null) {
    chengeBtnColorPaciveInactive.call(lastBtn);
  }
  lastBtn = buttons.btnColumnReverse;

  flexAreaDirection.call(buttons.btnColumnReverse);
  chengeBtnColorActive.call(buttons.btnColumnReverse);
}

