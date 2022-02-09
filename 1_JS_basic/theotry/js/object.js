// ******* Объекты *********

"use strict";

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  // makeTest: function () {
  //   console.log("Test");
  // }
};

// console.log(options["colors"]["bg"]); // посмотреть свойства
// console.log(options.colors.bg); // посмотреть свойства
// delete options.width; // удаление свойства


// **************** Перебор свойств объекта  for (let key in options) ***********************

// for (let key in options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// for (let key in options) {
//   if (typeof (options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   }
// }
// ***************** Количество пар ключ-значение ********************
let counter = 0;
for (let key in options) {
  counter++;
}
console.log(counter);

// **************** Методы объекта *********************************
console.log(Object.keys(options)); // Массив всех ключей объекта
console.log(Object.keys(options).length); // Количество элементов массива

options.makeTest(); // Запуск функции внутри объекта
// ******************************************************************

// ************** Деструктуризация объектов (ES6)**************************
// - это вытаскиывание свойств из вложенных обектов
const { border, bg } = options.colors;
console.log(border);

// *******************************************************************

/**
* ! Передача данных по ссылке и по значению *******
*/

// ** Передача данных в примитивных типах данных по значению **
let a = 5,
  b = a;

b = b + 10;

// console.log(a);
// console.log(b);

// **************** Передача данных в объектах по ссылке ****************
const obj = {
  a: 5,
  b: 1
};

// const copy = obj; // Передает ссылку на obj

// copy.a = 10;

// console.log(copy); // Передает ссылку на obj
// console.log(obj);  // Изменения происходят в copy и obj т.к. copy - это ссылка

/** 
* ! Копирование объектов
*/
/** 
* ? Копирование обектов через цикл for in
*/
// ** Поверхостное копирование (вложенный объект копируется как ссылка) ****

// function copy(mainObj) {
//   let objCopy = {};
//   for (let key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 4,
//   b: 5,
//   c: {
//     x: 7,
//     y: 10
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

/** 
* ? Поверхостное копирование обектов через метод Object.assign()

Object.assign(target, sources)
target - объект, в который хотим поместить.
sources - объект, который помещаем.

*/
const numbers = {
  a: 4,
  b: 5,
  c: {
    x: 7,
    y: 10
  }
};

const add = {
  d: 15,
  e: 48
};

console.log(Object.assign(numbers, add));


// ** клонируем в пустой объект
const clone = (Object.assign({}, add));
console.log(clone);

/** 
* ? Поверхостное копирование обектов через Spread оператор (оператор разворота)
*/

const ttt = {
  one: 1,
  two: 2
};

const newTtt = { ...ttt };

newTtt.two = 2222;

console.log(ttt);
console.log(newTtt);
