// Объекты, деструктуризация объектов (ES6)

"use strict";

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log("Test");
  }
};

// console.log(options.name); // посмотреть свойства
// delete options.width; // удаление свойства


// **************** Перебор свойств объекта ***********************


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
// *****************************************************************

// **************** Методы объекта *********************************

console.log(Object.keys(options)); // Массив всех ключей объекта
console.log(Object.keys(options).length); // Количество элементов массива

options.makeTest(); // Запуск функции внутри объекта
// ******************************************************************

// ************** Деструктуризация объекта **************************

const {
  border,
  bg
} = options.colors;

console.log(border);

// *******************************************************************