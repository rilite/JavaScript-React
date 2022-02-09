window.addEventListener('DOMContentLoaded', () => {
  /** 
  * ! ======================= Работа с табами (start) ===========================
  */
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  //* скрываем картинки, описания к ним и активность кнопкам выбора(tab) 
  function hideTabContent() {
    tabContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  //* показываем картинку, описание к ним и активную кнопку выбора(tab) 
  function showTabContent(i = 0) {  // можно ставить по дефолту
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  /**
  * ! ===================== Работа с табами (finish) ==========================
  */
  /** 
    * ! ======================= Работа с таймером (start) ===========================
    */
  const deadline = '2022-02-10';  // **? дата конечного срока

  function getTimeRemaining(endtime) {      // **? подсчет разницы конечной даты с текущей
    const t = Date.parse(endtime) - Date.parse(new Date()),   // разница дат в милисекундах
      days = Math.floor((t / (1000 * 60 * 60 * 24))),         // количество дней
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),        // количество часов
      minutes = Math.floor((t / 1000 / 60) % 60),             // количество минут
      seconds = Math.floor((t / 1000) % 60);                  // количество секунд 

    // console.log(t);

    return {        // ** вывод объекта
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  // функция добавления нуля спереди, если число 0<=n<10
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {

    const timer = document.querySelector(selector),  // получение элемента (параметр задачется в вызове функции)
      days = timer.querySelector("#days"),           // получение элемента
      hours = timer.querySelector('#hours'),         // получение элемента
      minutes = timer.querySelector('#minutes'),     // получение элемента
      seconds = timer.querySelector('#seconds'),     // получение элемента
      timeInterval = setInterval(updateClock, 1000); // запуск обратного отсчета через 1 сек

    updateClock(); // мгновенный запуск отсчета. Чтобы не было задержки при открытии сайта

    function updateClock() {   // функция обновления обратного отсчета
      /** 
       ** запись полученного объекта, полученного в результате работы
       ** function getTimeRemaining(endtime) в переменную msec.
       ** Т.е. msec{'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds}
      */
      const msec = getTimeRemaining(endtime);

      days.innerHTML = getZero(msec.days);        // вставка в HTML меняющиеся значения дней
      hours.innerHTML = getZero(msec.hours);      // вставка в HTML меняющиеся значения часов
      minutes.innerHTML = getZero(msec.minutes);  // вставка в HTML меняющиеся значения минут
      seconds.innerHTML = getZero(msec.seconds);  // вставка в HTML меняющиеся значения секунд

      if (msec.total <= 0) {             // остановка обратного отсчета
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);



  /** 
    * ! ======================= Работа с таймером (finish) ===========================
    */

















});