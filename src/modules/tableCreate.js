"use strict";
// ---------------------------------------------------------------------------
//          Модуль таблиц с метадими его создания
// ---------------------------------------------------------------------------

let tableHeader = [   // Массив с заголоквами таблицы
  "Номер №", "Значения подходящих", "Значения модуля r",
  "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
]

tableMain = {
  description: "Create Table",
  // Метод создания заголовков для таблицы
  addHed(number_of_columns) {
    tr = document.createElement('tr');    // Создаём элемент tr
    thead.appendChild(tr);                // Добавляем внутрь таблицы новый tr
    for (var i = 0; i < number_of_columns; i++) {
      th = document.createElement('th');  // Создаём элемент th
      tr.appendChild(th);                 // Добавляем внутрь tr новый th
      th.className = 't-hed';             // Присваеваем th класс
      $(".t-hed")[i].innerHTML = tableHeader[i]; // Добавляем заголовок
    }
  },
  // Метод создания строки
  createTr() {
    tr = document.createElement('tr');  // Создаём элемент tr
    tr.className = 'tabl';              // Присваеваем ему класс
    main_tabl.appendChild(tr);          // Добавляем внутрь (tbody className="main_tabl") новый tr
  },
  // Метод создания ячейки в строке
  createTd(n) {
    td = document.createElement('td');  // Создаём элемент td
    td.className = 's1';                // Присваеваем ему класс
    $(".tabl")[n].appendChild(td);      // Добавляем внутрь строки (tr) новую ячейку (td)
  }
}
