'use strict';
//! 1. В классной работе есть КЛАСС Shape и Rectnagle.
//! Добавить ещё один дочерний класс Circle.
//! В Circle можно установить радиус.
//! У Circle также есть метод calcArea, но он делает
//! вычесление площади используя радиус.
//! Создать объект Circle у которого устанавливается цвета и радиус.
//! Создать объект Circle не устанавливая цвета, но чтоб был радиус.
//! Вызвать у них метод calcArea.

class Shape {
  constructor(borderColor = 'black', backgroundColor = 'white') {
    this.borderColor = borderColor;
    this.backgroundColor = backgroundColor;
  }
  printColor() {
    console.log(`border=${this.borderColor}, background=${this.backgroundColor}`);
  }
}

class Circle extends Shape {
  constructor(borderColor, backgroundColor, radius = 0) {
    super(borderColor, backgroundColor);
    this.radius = radius;
  }
  calcArea() {

    const circleArea = Math.PI * Math.pow(this.radius, 2);
    return circleArea.toFixed(2);
  }
}

const circle1 = new Circle('green', 'blue', 15);

//? не понял сути задачи "Создать объект Circle не устанавливая цвета";

const circle2 = new Circle(null, null, 15);   //todo вообще нет цветов
const circle3 = new Circle(undefined, undefined, 15);   //todo ипользуются стандартные методы так клас приходит undefiend и у родитеского класа на этот случай уже есть 2 дефолтных цвета
// console.log(circle3);

// console.log(circle1);
// console.log(circle2);
// console.log(circle1.calcArea());
// console.log(circle2.calcArea());

//! 2. Добавить в MyArray методы:
//! -some
//! -every
//! -map
//! -pop
//! -**reduce(понадобится рекурсия)

function MyArray() {
  this.length = 0;
}
MyArray.prototype.push = function (...args) {
  for (const v of args) {
    this[this.length++] = v;
  }
  return this.length;
}
MyArray.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}
MyArray.prototype.filter = function (callback) {
  const newArr = new MyArray();
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

//todo -some
MyArray.prototype.some = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true
    }
  }
  return false;
}

const arr = new MyArray();
arr.push(1, 2, 3, 4, 5);
console.log(arr)
console.log(arr.some((element) => {
  return element > 3;
}));
console.log('\n')

//todo -every

MyArray.prototype.every = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i]))
      return false;
  }
  return true
}
const arr2 = new MyArray();
arr2.push(5, 1, 5, 4);
// debugger
console.log(arr2)
console.log(arr2.every((element) => {
  return element > 3;
}));
console.log('\n')

//todo -map

MyArray.prototype.map = function (callback) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
}
console.log(arr2)
console.log(arr2.map((element) => {
  return element * element;
}));
console.log('\n')

//todo -pop

MyArray.prototype.pop = function () {
  const elem = this[this.length - 1];
  delete this[this.length - 1]
  this.length--
  return elem;
}
console.log(arr2)
console.log(arr2.pop());
console.log(arr2)
console.log('\n')

//todo -**reduce(понадобится рекурсия)

MyArray.prototype.reduce = function (callback ,acum = 0,arr = [],elem = 0) {
  while(elem<this.length){
    const currentValue = callback(acum, this[elem]);
    arr.push(currentValue);
    return this.reduce(callback,currentValue,arr,++elem)
  }
  return arr;
}
const arr3 = new MyArray();
arr3.push(1,2,3,4,5) 
// debugger
console.log(arr3);
console.log(arr3.reduce((acum, v) => {
  return acum + v;
}));

//! 3. Переписать MyArray используя ситаксис class.

{
  class MyArray {
    constructor (length = 0){
      this.length = 0;
    }
    push (...args){
      for (let i = 0; i < args.length; i++){
        this[i] = args[i];
        this.length++;
      }
    }
  }

  const arr = new MyArray();

  arr.push(1,2,3,4,5);
  console.log(arr);
}
