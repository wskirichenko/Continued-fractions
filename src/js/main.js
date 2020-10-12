"use strict";

$(document).ready(function () {
  let numberFunc = -1,   // Порядковый номер функции
      countPushs = -1,  // Кол-во нажатий на кнопки с функциями
      btn = document.getElementById("btn_start"),           // Кнопка вычислить
      btn_clear = document.getElementById("btn_clear"),     // Кнопка отчистить
      vFunc = document.getElementsByClassName("func-chouse-btn"),  // Кнопки выбора Функции
      some = document.getElementById("some"),               // Переключатель для вычисления насколько значений
      one =  document.getElementById("one"),                 // Переключатель для вычисления одного значения
      podrad =  document.getElementById("podrad"),           // Переключатель для вывлда строк табл. подряд
      stepen2 =  document.getElementById("stepen2"),         // Переключатель для вывлда строк табл. по степени 2
      interval =  document.getElementById("interval");       // Переключатель для вывлда строк табл. на интервале

  // ---------------------------------------------------------------------------
  vFunc[0].onclick = (e) => {
    numberFunc = parseInt(e.currentTarget.getAttribute('value'), 10);
    console.log('numberFunc=', numberFunc);
    countPushs = countPushs + 1;
    vibor(numberFunc, countPushs);
  };
  vFunc[1].onclick = (e) => {
    numberFunc = parseInt(e.currentTarget.getAttribute('value'), 10);
    countPushs = countPushs + 1;
    vibor(numberFunc, countPushs);
  };
  vFunc[2].onclick = (e) => {
    numberFunc = parseInt(e.currentTarget.getAttribute('value'), 10);
    countPushs = countPushs + 1;
    vibor(numberFunc, countPushs);
  };

  // Функция выбора типа таблицы из объекта tableHeader2
  function vibor(numberFunc, countPushs) {
    tableMain.addHed(numberFunc, countPushs);
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
  //  Переключатели выбора отображения строк в таблице (подряд, кратно степени 2 и на интервале)
  // ---------------------------------------------------------------------------
  podrad.onclick = () => {
    $("#stepen2").prop("checked", false);
    $("#interval").prop("checked", false);
    globalVar.vivodStrok = 'podrad';
  }
  stepen2.onclick = () => {
    $("#podrad").prop("checked", false);
    $("#interval").prop("checked", false);
    globalVar.vivodStrok = 'stepen2';
  }
  interval.onclick = () => {
    $("#podrad").prop("checked", false);
    $("#stepen2").prop("checked", false);
    globalVar.vivodStrok = 'interval';
  }


  // Функция установки начальных параметров
  clearAllVar = (countPQ) => {
    rFiAlgoritm.clearRFi();
    globalVar.massR = [];
    globalVar.massFi = [];
    globalVar.massPQ = [];
    globalVar.setNumb(1);                   // Устанавливаем в 1 номер строки для следующей таблицы
  }

  // ---------------------------------------------------------------------------
  //          Кнопка Вычислить
  // ---------------------------------------------------------------------------
  btn.onclick = () => {
    let countPQ = 1;
    if (numberFunc != -1) {
      for (var j = 0; j < globalVar.getKolN(); j++) {
        outDisplay.chouseColumn(numberFunc, countPQ, j);
        countPQ += 1;
        globalVar.incNumb(1)                  // Устанавливаем следующий номер строки для текущей таблицы
      };
      countPQ = 1;
      clearAllVar();
    } else {
      alert("Выбирите одну из функций");
    }
  };

  // ---------------------------------------------------------------------------
  //          Кнопка отчистить
  // ---------------------------------------------------------------------------
  btn_clear.onclick = () => {
    tableMain.clearElement(document.getElementsByTagName("table"));
    tableMain.clearElement(document.getElementsByTagName("h2"));
    globalVar.setNumbTables(0);
    countPushs = -1;
    outDisplay.count = 0;
    globalVar.setCellNumber(0);
    numberFunc = -1;
    clearAllVar();
  };


  /* ---- For auto change Date ---- */
  var date = new Date;
  $("#data_year").text(date.getFullYear());

})