"use strict";

/** 
* ! function declaration 
*/
function showFirstMessage(text) {
  console.log(text);
}
showFirstMessage("Hello world!");


// function calc(a, b) {
//   return (a + b);
// }
// console.log(calc(5, 8));

/** 
* ! function expretion 
*/

const logger = function () {
  console.log("function expretion");
};
logger();

// ---------------------------------------------

/** 
* ! function arrow 
*/

let calc = (a, b) => a + b;

/** 
* ! Callback function 
*/

// - это функция, которая должна быть выполнена после того, как другая функция завершила свое выполнение

function learnJS(lang, calldack) {
  console.log(`Я учу ${lang}`);
  calldack();
}

function done() {
  console.log("Я прошел этот урок!");
}

learnJS('JavaScript', done);
