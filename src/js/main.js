"use strict";

$(document).ready(function () {
  let numberFunc = -1,    // Порядковый номер функции
      countPushs = -1,    // Кол-во нажатий на кнопки с функциями
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
    // globalVar.setMassX(parseFloat(document.getElementsByName("int_ot")[0].value))
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
  vFunc[3].onclick = (e) => {
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
    globalVar.setFlagTabl(true);
  }
  one.onclick = () => {
    $('#block_interval').addClass('display-hidden');
    $("#some").prop("checked", false);
    globalVar.setFlagTabl(false);
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
    // globalVar.massX = [];
    globalVar.setNumb(1);                   // Устанавливаем в 1 номер строки для следующей таблицы
  }

  // ---------------------------------------------------------------------------
  //          Кнопка Вычислить
  // ---------------------------------------------------------------------------
  btn.onclick = () => {
    let countPQ = 1,                        // Счётчик подходящих для массива massPQ
        newX = 0;
    if (numberFunc != -1) {                 // Если выбрана функция для вычисления
      if (globalVar.getFlagTabl()) {        // Если рассчитываем несколько таблиц
        for (var i1 = 0; i1 < outDisplay.stepСalculations(); i1++) {  // Цикл вычисления нескольких таблиц
          newX = globalVar.deltaFi(i1);
          for (var numbCol = 0; numbCol < globalVar.getKolN(); numbCol++) {
            outDisplay.chouseColumn(numberFunc, countPQ, numbCol, newX);
            countPQ += 1;                   // Наращиваем счётчик подходящих
            globalVar.incNumb(1)            // Устанавливаем следующий номер строки для текущей таблицы
          };
          if ( i1 < (outDisplay.stepСalculations()-1) ) { // Не выводим лишний заголовок
            tableMain.addHed(numberFunc, i1+1);
          }
          countPQ = 1;                      // После вычисления одной таблицы сбрасываем счётчик подходящих
          clearAllVar();
        }
      } else {                              // Иначе рассчитёт ведётся только для одной таблицы
          for (var numbCol = 0; numbCol < globalVar.getKolN(); numbCol++) {
            outDisplay.chouseColumn(numberFunc, countPQ, numbCol, 0);
            countPQ += 1;                   // Наращиваем счётчик подходящих
            globalVar.incNumb(1)            // Устанавливаем следующий номер строки для текущей таблицы
          };
          countPQ = 1;                      // После вычисления одной таблицы сбрасываем счётчик подходящих
          clearAllVar();
      }
    } else {                                // Если ни одна из функций не выбрана
      alert("Выбирите одну из функций");
    }
  };

  // ---------------------------------------------------------------------------
  //          Кнопка отчистить
  // ---------------------------------------------------------------------------
  btn_clear.onclick = () => {
    tableMain.clearElement(document.getElementsByTagName("table"));
    tableMain.clearElement(document.getElementsByClassName("h2-table"));
    tableMain.clearElement(document.getElementsByClassName("p-table"));
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