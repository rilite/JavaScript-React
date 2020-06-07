// Callback функция - это функция, которая должна быть выполнена после того, как другая функция завершила свое выполнение

"use strict";

function learnJS(lang, calldack) {
  console.log(`Я учу ${lang}`);
  calldack();
}

function done() {
  console.log("Я прошел этот урок!");
}

learnJS('JavaScript', done);