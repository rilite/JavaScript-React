/**
* ! **************** setTimeout *****************
* ? принимает функцию, которая должна запуститься
* ? через определенное время (2000ms = 2s) один раз
*/
/*const timeId = setTimeout(function () {
  console.log('Hello, function!');
}, 2000);

const timeIАrrow = setTimeout(() => {
  console.log('Hello, Аrrow!');
}, 4000);

const timeIdText = setTimeout(function (text) {
  console.log(text);
}, 6000, 'Hello, text!');

// ********************************************

const timeIdLogger = setTimeout(logger, 2000);  // передача функции в setTimeout

function logger() {
  console.log('Hello, logger!');
}

// ********************************************

clearInterval(timeId); // остановка setTimeout
*/
// ********************************************

/**
* ! **************** setInterval *****************
* ? принимает функцию, которая должна запуститься
* ? через определенное время (2000ms = 2s) постоянно
*/
/*
const btn = document.querySelector('.btn');
let timeId,
  i = 0;

btn.addEventListener('click', () => {
  timeId = setInterval(logger, 500);
});



function logger() {
  if (i === 3) {
    clearInterval(timeId);
  }
  console.log('Hello, logger!');
  i++;
}
*/

/**
* ! **************** рекурсивный ****************
* ! **************** setTimeout *****************
*/
//* Особенность состоит в том, что рекурсивный setTimeout
//* будет ждать выполнения функции, в отличии от setInterval
/*
let id = setTimeout(function log() {
  console.log('Hello, рекурсивный setTimeout!');
  id = setTimeout(log, 500);
}, 500);
*/

/**
 * ! ****************** JS ********************* 
 * ! **************** Практика *****************
 * ! *************** Animatuion **************** 
 */

const btn = document.querySelector('.btn');
let timerId,
  i = 0;

function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0,
    forward = false;

  const id = setInterval(frame, 10);

  function frame() {

    if (pos < 301 && !forward) {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }

    if (pos === 299) {
      forward = true;
    }

    if (pos < 0 || pos == 300 || forward) {
      pos--;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }

    if (pos === 0) {
      clearInterval(id);
    }
  }
}

btn.addEventListener('click', myAnimation);