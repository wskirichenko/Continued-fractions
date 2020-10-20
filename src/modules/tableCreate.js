"use strict";
// ---------------------------------------------------------------------------
//          Модуль таблиц с метадими его создания
// ---------------------------------------------------------------------------
const tableHeader2 = {
  0 : { // Массив с заголоквами таблицы - 4 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения подходящих", "Значения модуля r",
      "Значения аргумента fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi"
    ]
  },
  1 : { // Массив с заголоквами таблицы - 6 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения частичных сумм, a_n", "Значения модуля r",
      "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi", "eR", "eFi"
    ]
  },
  2 : { // Массив с заголоквами таблицы - 7 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения подходящих 2", "Значения экспоненты", "Значения модуля r",
      "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ],
    colName: [
      "number", "pq", "pqExp", "modulR", "argumentFi", "eR", "eFi"
    ]
  },
  3 : { // Массив с заголоквами таблицы - 6 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения подходящих", "Значения модуля r",
      "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi", "eR", "eFi"
    ]
  },
  4 : { // Массив с заголоквами таблицы - Определение значения предела Никипорца
    title : "Tаблица ",
    headers : [
      "Номер, n", "Значения частичных сумм, a_n", "Значения модуля r",
      "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi", "eR", "eFi"
    ]
  },
  5 : { // Массив с заголоквами таблицы - 6 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения частичных сумм, a_n", "Значения модуля r",
      "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi", "eR", "eFi"
    ]
  },
  6 : { // Массив с заголоквами таблицы - 6 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения частичных сумм, a_n", "Значения модуля r",
      "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi", "eR", "eFi"
    ]
  },
  7 : { // Массив с заголоквами таблицы - 6 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения частичных сумм, a_n", "Значения модуля r",
      "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi", "eR", "eFi"
    ]
  },
  8 : { // Массив с заголоквами таблицы - 6 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения частичных сумм, a_n", "Значения модуля r",
      "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi", "eR", "eFi"
    ]
  },
  9 : { // Массив с заголоквами таблицы - 6 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения частичных сумм, a_n", "Значения модуля r",
      "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi", "eR", "eFi"
    ]
  }

};
const funcIamges = {
  '-1' : {
    mainImg :   "",
    secondImg : "",
    altImgText: 'Нет функции',
    text: 'Ни одна функция не выбрана'
  },
  0 : {
    mainImg :   "../../img/func-00.png",
    secondImg : "../../img/func-00.png",
    altImgText: 'sin(n fi)',
    text: 'Функция синус sin(n fi)'
  },
  1 : {
    mainImg :   "../../img/func-01.png",
    secondImg : "../../img/func-01.png",
    altImgText: 'summSin(n fi)',
    text: 'Функция сумма синусов sin(n fi)'
  },
  2 : {
    mainImg :   "../../img/func-02.png",
    secondImg : "../../img/func-02.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция сумма нечётных синусов sin(n fi)'
  },
  3 : {
    mainImg :   "../../img/func-03.png",
    secondImg : "../../img/func-03.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция сумма нечётных синусов sin(n fi)'
  },
  4 : {
    mainImg :   "../../img/func-04.png",
    secondImg : "../../img/func-04.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция сумма нечётных синусов sin(n fi)'
  },
  5 : {
    mainImg :   "../../img/func-05.png",
    secondImg : "../../img/func-05.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция сумма нечётных синусов sin(n fi)'
  },
  6 : {
    mainImg :   "../../img/func-06.png",
    secondImg : "../../img/func-06.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция сумма нечётных синусов sin(n fi)'
  },
  7 : {
    mainImg :   "../../img/func-07.png",
    secondImg : "../../img/func-07.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция сумма нечётных синусов sin(n fi)'
  },
  8 : {
    mainImg :   "../../img/func-08.png",
    secondImg : "../../img/func-08.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция сумма нечётных синусов sin(n fi)'
  },
  9 : {
    mainImg :   "../../img/func-09.png",
    secondImg : "../../img/func-09.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция сумма нечётных синусов sin(n fi)'
  },
};
const tableMain = {
  description: "Create Table",

  numberColumns(type_table) {                 // Вычисления кол-ва колонок для очередной таблицы
    return tableHeader2[type_table].headers.length;
  },

  // Метод создания заголовков для таблицы
  addHed(type_table, i) {             // где i - номер текущей таблицы (countPushs)
    number_of_columns = tableHeader2[type_table].headers.length; // Вычисляем количество колонок в заголовоке
    h2 = document.createElement('h2');        // Создаём элемент h2
    main_panel.appendChild(h2);               // Добавляем внутрь 'main_panel' новый h2
    h2.className = 'h2-table';                // Присваеваем h2 класс
    $(".h2-table")[i].innerHTML = tableHeader2[type_table].title + (i+1); // Добавляем title из массива tableHeader

    p = document.createElement('p');          // Создаём элемент p
    main_panel.appendChild(p);                // Добавляем внутрь 'main_panel' новый p
    p.className = 'p-table';                  // Присваеваем p класс
    $(".p-table")[i].innerHTML = "fi = " + globalVar.getMassX(i); // Добавляем значения очередного х

    table = document.createElement('table');  // Создаём элемент table
    main_panel.appendChild(table);            // Добавляем внутрь 'main_panel' новый table
    table.setAttribute("id", `table_${i}`);   // Добавляем id для table
    table.className = 'table-main';           // Присваеваем table класс table-main

    thead = document.createElement('thead');  // Создаём элемент thead
    $(".table-main")[i].appendChild(thead);   // Добавляем внутрь 'table-main' новый thead
    thead.setAttribute("id", `thead_${i}`);   // Добавляем id для thead
    thead.className = 'thead';                // Присваеваем thead класс

    tr = document.createElement('tr');        // Создаём элемент tr
    $(".thead")[i].appendChild(tr);           // Добавляем внутрь таблицы новый tr

    for (var j = 0; j < number_of_columns; j++) {  // Выводим заголовки таблицы начиная от 0 до количество колонок
      th = document.createElement('th');      // Создаём элемент th
      tr.appendChild(th);                     // Добавляем внутрь tr новый th
      th.className = 'th-hed';                // Присваеваем th класс
      // $(".th-hed")[col_tables+j].innerHTML = tableHeader2[type_table].headers[j]; // Добавляем заголовок из массива tableHeader2.headers
      $(".th-hed")[globalVar.getNumbTables() +j].innerHTML = tableHeader2[type_table].headers[j]; // Добавляем заголовок из массива tableHeader2.headers
    }

    tbody = document.createElement('tbody');  // Создаём элемент tbody
    tbody.setAttribute("id", `tbody_${i}`);   // Добавляем id для tbody
    tbody.className = 'tbody';                // Присваеваем tbody класс
    $(".table-main")[i].appendChild(tbody);   // Добавляем внутрь 'table-main' новый tbody

    //  col_tables = col_tables+number_of_columns;
    globalVar.setNumbTables(globalVar.getNumbTables() + number_of_columns)
  },

  // Метод создания строки в main_tabl
  createTr() {
    tr = document.createElement('tr');        // Создаём элемент tr
    tr.className = 'tabl';                    // Присваеваем ему класс tabl
    tbody.appendChild(tr);                    // Добавляем внутрь (tbody className="tbody") новый tr
  },

  // Метод создания ячейки в строке main_tabl
  createTd(n) {
    td = document.createElement('td');  // Создаём элемент td
    td.className = 's1';                // Присваеваем ему класс
    $(".tabl")[n].appendChild(td);      // Добавляем внутрь строки (tr) новую ячейку (td)
  },

  // Метод удаления заданного элемента
  clearElement(element) {
    let elementLength = element.length; // Получаем количество элементов
    for (let i = elementLength-1; i > -1; i--) {
      element[i].remove();              // Удаляем очередной элемент из DOM дерева
    }
  }
};

const descripFunc = {
  description: "Description function",
  descript(numberFunc) {
    console.log('background-image= ', funcIamges[numberFunc].mainImg);
    $("#img_func").css("backgroundImage", 'url(' + funcIamges[numberFunc].mainImg + ')' );
    $(".modal-func__top__text")[0].innerHTML = funcIamges[numberFunc].text;
  }
}
