"use strict";
 let col_tables = 0;
$(document).ready(function () {
  // console.log(table.description);
  let kolN = 10,        // Кол-во итераций
      kolCol = 6,       // Кол-во колонок в табл
      numberFunc = 0,   // Порядковый номер функции
      countPushs = -1,  // Кол-во нажатий на кнопки с функциями
      count = 0,
      cellNumber = 0,   // Номен ячейки в таблице для записи оченедного значения
      btn = document.getElementById("btn_start"),           // Кнопка вычислить
      btn_clear = document.getElementById("btn_clear"),     // Кнопка отчистить
      vFunc = document.getElementsByClassName("func-chouse-btn"),  // Кнопки выбора Функции
      sell = document.getElementsByClassName('s1');         // Ячейка таблицы
  // ---------------------------------------------------------------------------
  vFunc[0].onclick = (e) => {
    numberFunc = e.currentTarget.getAttribute('value');
    console.log('numberFunc=', numberFunc);
    countPushs = countPushs + 1;
    vibor(numberFunc, countPushs);
  };
  vFunc[1].onclick = (e) => {
    numberFunc = e.currentTarget.getAttribute('value');
    countPushs = countPushs + 1;
    vibor(numberFunc, countPushs);
  };
  vFunc[2].onclick = (e) => {
    numberFunc = e.currentTarget.getAttribute('value');
    countPushs = countPushs + 1;
    vibor(numberFunc, countPushs);
  };


  function vibor(numberFunc, countPushs) {
    tableMain.addHed(numberFunc, countPushs);

  };

  function Vivod(col, cellNumber) {   // где cellNumber - порядковый номер ячейки табицы куда выводим
    sell[cellNumber].innerHTML = cellNumber;
  };

  // ---------------------------------------------------------------------------
  //          Кнопка Вычислить
  // ---------------------------------------------------------------------------
  btn.onclick = function() {
    for (var j = 0; j < kolN; j++) {
      tableMain.createTr();
      for (var i = 0; i < tableMain.numberColumns(numberFunc); i++) {
        tableMain.createTd(count);
        Vivod(i, cellNumber);
        cellNumber +=1;
      }
      count +=1;
      console.log('count=',count, 'cellNumber=', cellNumber);
    };
  };


  // ---------------------------------------------------------------------------
  //          Кнопка отчистить
  // ---------------------------------------------------------------------------
  btn_clear.onclick = function() {
    tableMain.clearElement(document.getElementsByTagName("table"));
    tableMain.clearElement(document.getElementsByTagName("h2"));
    col_tables = 0;
    countPushs = -1;
    count = 0;
    cellNumber = 0;
  };



  /* ---- For auto change Date ---- */
  var date = new Date;
  $("#data_year").text(date.getFullYear());

})