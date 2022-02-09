'use strict';

const btn = document.querySelector('button'),
  btns = document.querySelectorAll('button'),
  overlay = document.querySelector('.overlay');


//  ***********  Не использовать *********

// btn.onclick = function () {
//   alert('Click!');
// };

//  ***********  Использовать *********

// btn.addEventListener('click', () => {
//   alert('Click!');
// });
//  ****************************************
// let i = 0;

/** 
* ? Всплытие мобытий - это когда обработчик срабатывает на
* ? вложенном элементе, затем на родителе и выше и выше
*/

const deleteElevent = (e) => {
  // e.target.remove();
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElevent);
  // }
};

// btn.addEventListener('click', deleteElevent);
// overlay.addEventListener('click', deleteElevent);



// *** Отмена стандартного поведения браузра ***

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();  // помещается в начале кода

  console.log(event.target);
});


// *** Навешивание событий на несколько однотипных классав одновркменно


btns.forEach(item => {
  item.addEventListener('click', deleteElevent, { once: true }); // once: true - выполняется один раз
});