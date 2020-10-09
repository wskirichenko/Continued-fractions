"use strict";
$(document).ready(function () {
  // console.log(table.description);
  let numberFunc = 0,   // Порядковый номер функции
      countPushs = -1,  // Кол-во нажатий на кнопки с функциями
      count = 0,
      cellNumber = 0,   // Номен ячейки в таблице для записи оченедного значения
      btn = document.getElementById("btn_start"),           // Кнопка вычислить
      btn_clear = document.getElementById("btn_clear"),     // Кнопка отчистить
      vFunc = document.getElementsByClassName("func-chouse-btn"),  // Кнопки выбора Функции
      some = document.getElementById("some"),               // Переключатель для вычисления насколько значений
      one =  document.getElementById("one")                 // Переключатель для вычисления одного значения
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

  // Функция выбора типа таблицы из объекта tableHeader2
  function vibor(numberFunc, countPushs) {
    tableMain.addHed(numberFunc, countPushs);
  };

  // Функция вывода очередного значения в ячейку таблицы
  function Vivod(numberFunc, col, cellNumber, countPQ) {   // где cellNumber - порядковый номер ячейки табицы куда выводим
    outDisplay.chouseColumn(numberFunc, col, cellNumber, countPQ);
  };

  // ---------------------------------------------------------------------------
  //          Переключатели выбора вычисления 1 таблицы или нескольких
  // ---------------------------------------------------------------------------
  some.onclick = () => {
    $('#block_interval').removeClass('display-hidden');
    $("#one").prop("checked", false);
  }
  one.onclick = () => {
    $('#block_interval').addClass('display-hidden');
    $("#some").prop("checked", false);
  }

  // ---------------------------------------------------------------------------
  //          Кнопка Вычислить
  // ---------------------------------------------------------------------------
  btn.onclick = () => {
    let countPQ = 0;
    for (var j = 0; j < globalVar.getKolN(); j++) {
      tableMain.createTr();                 // Создаём строку в таблице
      for (var i = 0; i < tableMain.numberColumns(numberFunc); i++) {
        tableMain.createTd(count);          // Создаём ячейку в строке таблицы
        Vivod(numberFunc, i, cellNumber, countPQ);   // Выводим очередное значение в созданую ячейку с № cellNumber
        cellNumber +=1;                     // Наращиваем номер ячейки cellNumber
      }
      countPQ += 1;
      globalVar.incNumb(1)                  // Устанавливаем следующий номер строки для текущей таблицы
      count +=1;
    };
    globalVar.setNumb(1);                   // Устанавливаем в 1 номер строки для следующей таблицы
    countPQ = 0;
  };

  // ---------------------------------------------------------------------------
  //          Кнопка отчистить
  // ---------------------------------------------------------------------------
  btn_clear.onclick = () => {
    tableMain.clearElement(document.getElementsByTagName("table"));
    tableMain.clearElement(document.getElementsByTagName("h2"));
    globalVar.setNumbTables(0);
    countPushs = -1;
    count = 0;
    cellNumber = 0;
    rFiAlgoritm.clearRFi();
    globalVar.massR = [];
    globalVar.massFi = [];
  };


  /* ---- For auto change Date ---- */
  var date = new Date;
  $("#data_year").text(date.getFullYear());

})