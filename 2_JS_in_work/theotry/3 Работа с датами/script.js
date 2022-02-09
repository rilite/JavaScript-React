'use strict';

const now = new Date(); // текущая дата и время
console.log(now);
/**
 * ! Геттеры (получение)
*/
/*
console.log(now.getFullYear()); // получение года
console.log(now.getMonth()); // получение месяца (0-11)
console.log(now.getDate()); // получение дня (1-31)

console.log(now.getDay()); // получение дня недели(воскресенье '0'; суббота '6')

console.log(now.getHours()); // получение часов
console.log(now.getUTCHours()); // получение часов UTC
console.log(now.getTimezoneOffset()); // получение разницы межну местным часовым поясом и UTC в минутах

console.log(now.getSeconds()); // получение секунд
console.log(now.getMilliseconds()); // получение дня милисекунд

console.log(now.getTime()); // получение количества прошедших милисекунд с 01.01.1970
*/

/**
 * ! Сеттеры (установка)
*/

console.log(now.setFullYear(1950)); // установка года
console.log(now.setMonth(3)); // установка месяца (0-11)
console.log(now.setDate(18)); // установка дня (1-31)


console.log(now.setHours(15)); // установка часов
console.log(now.setUTCHours(26)); // установка часов UTC

console.log(now.setSeconds(135)); // установка секунд
console.log(now.setMilliseconds(3165418)); // установка дня милисекунд

console.log(now.setTime(565649498)); // установка количества прошедших милисекунд с 01.01.1970

console.log(now.setHours(1));
console.log(now);