//!generics
// const num: Array<number> = [1, 2, 3];
// num.push("one");
// const num: number[] = [1, 2, 3];
// num.push("one");

// const check: Record<string, boolean> = {
//   drive: true,
//   kpp: false,
//   // test: 1
// }

//!проміси
// const promise = new Promise(function(resolve, reject){
// })
// promise.then(f1,f2);

// console.log('start');
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("data");
//   }, 3000)
// })
// promise.then(console.log);
// console.log('end');

// console.log('start');
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("data");
//     reject("exception");
//   }, 3000)
// });
// promise.then(
//   (e) => console.log('resolve: ', e),
//   (e) => console.log('reject:', e)
// );
// console.log('end');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("data"), 3000);
//   setTimeout(() => reject(new Error("exception")), 2000);
// })
// promise.then(
//   result => console.log("fulfilled: " + result),
//   error => console.log("rejected: " + error)
// )

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("data"), 3000);
//   setTimeout(() => reject(new Error("exception")), 2000);
// })
// promise
//   .then(result => console.log("fulfilled: " + result))
//   .catch(error => console.log("rejected: " + error))

//!промісіфікація
// function get(url: string) {
//   return new Promise(function (resolve, reject) {
//     const xmlHttpRequest = new XMLHttpRequest();
//     xmlHttpRequest.open("GET", url, true);
//     xmlHttpRequest.onload = function () {
//       if (this.status == 200) {
//         resolve(this.response);
//       } else {
//         const error: any = new Error(this.statusText)
//         error.code = this.status;
//         reject(error);
//       }
//     }
//     xmlHttpRequest.onerror = function () {
//       reject(new Error("Network Error"))
//     }
//     xmlHttpRequest.send();
//   });
// }

// get("https://jsonplaceholder.typicode.com/users")
//   .then((users) => console.log(users))
//   .catch((e) => console.log(e))

//!async
// console.log('start');
// async function f() {
//   return 777;
// }
// f().then((result) => console.log("fulfilled: " + result));
// console.log('end');

// console.log('start');
// async function f() {
//   return Promise.resolve(777);
// }
// f().then((result) => console.log("fulfilled: " + result));
// console.log('end');

//!await
// async function f() {
//   console.log('start');
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('test');
//       resolve("ok!");
//     }, 3000)
//   })
//   const result = await promise;
//   console.log(result);
//   console.log('end');
// }
// f();

// console.log('start');
// const p = new Promise<number>((resolve, reject) => {
//   resolve(777);
// });
// p.then(console.log);
// console.log('end');

// function logMiddleware(data: number): number {
//   console.log(data);
//   return data;
// }
// const res = logMiddleware(10);

// function logMiddleware(data: number | string): number | string {
//   console.log(data);
//   return data;
// }
// const res = logMiddleware("one");
// console.log(res.length);

// function logMiddleware(data: any): any {
//   console.log(data);
//   return data;
// }
// const res = logMiddleware("one");
// console.log(res.length);

// function logMiddleware<T>(data: T): T {
//   console.log(data);
//   return data;
// }
// const res = logMiddleware(10);
// const res = logMiddleware<string>("one");
// console.log(res.length);
// const res = console.log(true);

// function getSplitHalf(data: number[]): number[] {
//   const length = data.length / 2;
//   return data.slice(0, length);
// }
// console.log(getSplitHalf([1, 2, 3]));
// function getSplitHalf(data: any): any {
//   const length = data.length / 2;
//   return data.slice(0, length);
// }
// console.log(getSplitHalf([1,2,3]));
// function getSplitHalf<T>(data: Array<T>): Array<T> {
//   const length = data.length / 2;
//   return data.slice(0, length);
// }
// console.log(getSplitHalf<number>([1, 2, 3]));
// console.log(getSplitHalf<string>(["one", "two", "three"]));
// console.log(getSplitHalf([1, "one", true]));

//toString котра буде преобразовувати у строку або undefined, якщо не можлива
// function toString<T>(data: T): string | undefined {
//   if (Array.isArray(data)) {
//     return data.toString();
//   }
//   switch (typeof data) {
//     case 'string':
//       return data;
//     case 'number':
//     case 'symbol':
//     case 'bigint':
//     case 'function':
//       return data.toString();
//     case 'object':
//       return JSON.stringify(data);
//     default:
//       return undefined;
//   }
// }
// const res1 = toString<string>("one");
// const res2 = toString(345);

// function getSplitHalf<T>(data: Array<T>): Array<T> {
//   const length = data.length / 2;
//   return data.slice(0, length);
// }
// let split: <T>(data: Array<T>) => Array<T> = getSplitHalf;

// const logLine = {
//   timeStamp: new Date(),
//   data: {
//     a: 1
//   }
// }

// interface ILogLine<T> {
//   timeStamp: Date,
//   data: T
// }

// const logLine: ILogLine<{ a: number }> = {
//   timeStamp: new Date(),
//   data: {
//     a: 1
//   }
// }

// class Vehicle {
//   run: number;
//   constructor(run: number) {
//     this.run = run;
//   }
// }
// class LCV extends Vehicle {
//   capacity: number;
//   constructor(run: number, capacity: number) {
//     super(run);
//     this.capacity = capacity;
//   }
// }
// function convertKmToMiles<T>(vehicle: T): T {
//   vehicle.run = vehicle.run / 0.62;
//   return vehicle;
// }
// function convertKmToMiles<T extends Vehicle>(vehicle: T): T {
//   vehicle.run = vehicle.run / 0.62;
//   return vehicle;
// }
// convertKmToMiles("one")
// convertKmToMiles(new LCV(200, 20));

// interface Vehicle {
//   run: number
// }
// interface LCV extends Vehicle {
//   capacity: number
// }
// class Truck implements LCV {
//   constructor(public run: number, public capacity: number) {
//   }
// }
// function convertKmToMiles<T extends Vehicle>(vehicle: T): T {
//   vehicle.run = vehicle.run / 0.62;
//   return vehicle;
// }
// const result = convertKmToMiles(new Truck(100, 200));

//створити функцію, котра будет сортувати масив
//будь яких объектів по id
//якщо в объектах немаэ id, то ми не зможемо в функцію їх передати.
//функція повертає в результаті відсортований масив
const data = [
  { id: 2, name: 'Петр' },
  { id: 1, name: 'Іван' },
  { id: 3, name: 'Степан' },
]