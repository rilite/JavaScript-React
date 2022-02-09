// ********************* Массивы ***************************

"use strict";

const arr = [1, 2, 3, 6, 8];

// arr.pop(); // удаление последнего элемента массива arr
// arr.push(55); // добавление элемента в конец массива arr

// ********* Перебор массива ***************
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ************   for (let value of arr) ****************
// можно испльзовать break и continue
// for (let value of arr) { 
//   console.log(value);
// }
// ********* arr.forEach(function (item, i, arr)*********
// arr.forEach(function (item, i, arr) {
//   console.log(`порядковый номер ${i}: значение элемента ${item}, внутри массива ${arr}`);
// });

/** 
* ! *********************   Методы массивов *********************
*/

// ********** Превращает стоку в массив **********
const str = prompt("", "");
const products = str.split(", ");

// !********** Объединение элементов массива в строку **********!
const productsJoin = products.join("; ");

/** 
* ! ********************* Метод сортировки *********************
*/

// ********** Сортировка строк по алфавиту **********
products.sort();

// ********** Сортировка чисел **********
// const arr = [1, 52, 23, 6, 18];
arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}
console.log(arr);

// ********** Поверхностная копия массивов **********

/** 
* ? Копирование массивов через метод .slice()
*/

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'jlkj;j';

console.log(oldArray);
console.log(newArray);

/** 
* ? Копирование массивов через Spread оператор (оператор разворота)
*/

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];

const joinArr = [...video, ...blogs]; //** делает объединение массивов
const internet = [...video, ...blogs, 'vk', 'facebook'];  // *** разворачивает с добавлением

console.log(joinArr);
console.log(internet);


// *** Пример ***

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const numb = [3, 6, 9]; // допустим принимаем из сервера

log(...numb);
