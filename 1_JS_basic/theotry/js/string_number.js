"use strict";

//  Методы и свойства строк и чисел

// СТРОКИ

const str1 = "test";
console.log(str1.length); // СВОЙСТВО  -  Количество символов внутри строки (длина)

const arr = [1, 2, 4, 6, 12];
// console.log(arr.length);

// console.log(arr[1]);
// console.log(str1[2]);


const str = "test";
// Метод изменения регистров
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// ***************************************
const fruit = "Same Fruit";
// Метод поиска кусочка строки
console.log(fruit.indexOf('Fruit')); // номер символа начала
console.log(fruit.indexOf('q')); // поиск символа в переменной fruit (-1 значит нет символа)
// ***************************************


const logg = "Hello world";
// методы взаимодействия со строками
console.log(logg.slice(6, 11)); // вырезает символы (начало, конец), можно отр значения
console.log(logg.substring(6, 11)); // вырезает символы (начало, конец), нельзя отр значения
console.log(logg.substr(6, 5)); // вырезает символы (начало, количество символов)


// ********** ЧИСЛА ***************

const num = 12.2;
console.log(Math.round(num)); // округления до целого

const test = "12.2px";
console.log(parseInt(test)); // обрезание до целого и перевод в число
console.log(parseFloat(test)); // обрезание и перевод в число