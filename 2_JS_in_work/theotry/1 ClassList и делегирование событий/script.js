'use strict';

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length); // ** просмотр количества классов у 1 кнопки
// console.log(btns[0].classList.item(0)); // ** просмотр первого классa у 1 кнопки
// console.log(btns[0].classList.add('red')); // ** добавление классa red для 1 кнопки
// console.log(btns[0].classList.add('gray', 'yellow')); // ** добавление нескольких классов для 1 кнопки
// console.log(btns[0].classList.remove('blue')); // ** удаление классa blue для 1 кнопки
// console.log(btns[0].classList.toggle('blue')); // ** добавление если нет и удаление, если класс blue для 1 кнопки

/*
if (btns[1].classList.contains('red')) {     // ** проверка на наличие конкретного класса
  console.log('red');                        // ** получем true или false
}
*/

/*
btns[1].addEventListener('click', () => {  // ** добаляем/удаляем класс через click
  btns[1].classList.toggle('red');
});
*/
/*
btns[0].addEventListener('click', () => {  // ** добаляем/удаляем класс через click
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
});
*/

/**
* !   ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
*/

const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (e) => {
  console.dir(e.target);  // просмотр target на всех потомках wrapper находим tagName: "BUTTON"
  // if (e.target && e.target.tagName == "BUTTON") {
  if (e.target && e.target.matches('button.red')) {   // matches('button') - проверка на совпадение
    console.log('Hello button red');
  }
});

/*
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Hello!');
  });
});
*/

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);