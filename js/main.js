// js-call-search

// custom-cover

// после загрузки страницы найти все элементы с классом .js-call-search 
// эсли такие элементы есть - слушать событие клика по ним.
// по клику - дабавлять или удалять для тега body активный класс .new-search-active

document.addEventListener('DOMContentLoaded', function () {
  // Находим все элементы с классом .js-call-search
  var searchCallers = document.querySelectorAll('.js-call-search');

  // Функция для переключения класса
  function toggleSearchActive() {
    document.body.classList.toggle('new-search-active');
  }

  // Проверяем, существуют ли такие элементы
  if (searchCallers.length > 0) {
    // Добавляем обработчик события клика к каждому найденному элементу
    searchCallers.forEach(function (caller) {
      caller.addEventListener('click', toggleSearchActive);
    });
  };

  // Находим кнопку по классу
  const closeButton = document.querySelector('.new-search__close-btn');

  // Проверяем, существует ли кнопка
  if (closeButton) {
    // Добавляем обработчик события клик для кнопки
    closeButton.addEventListener('click', function () {
      // Удаляем активный класс у элемента body
      document.body.classList.remove('new-search-active');
    });
  };

  // Находим элемент по классу
  const customCover = document.querySelector('.custom-cover');

  // Проверяем, существует ли элемент
  if (customCover) {
    // Добавляем обработчик события клик для элемента
    customCover.addEventListener('click', function () {
      // Удаляем активный класс у элемента body
      document.body.classList.remove('new-search-active');
    });
  }

});
