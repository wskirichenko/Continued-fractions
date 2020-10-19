"use strict";

$(document).ready(function () {
  let numberFunc = 0,    // Порядковый номер функции
      countPushs = -1,    // Кол-во нажатий на кнопки с функциями
      btn = document.getElementById("btn_start"),           // Кнопка вычислить
      btn_clear = document.getElementById("btn_clear"),     // Кнопка отчистить
      //vFunc = document.getElementsByClassName("func-chouse-btn"),  // Кнопки выбора Функции
      vFunc = document.getElementsByClassName("func"),      // Кнопки выбора Функции
      chose_funk =  document.getElementById("chose_funk"),  // Кнопки вызова окна для выбора функций
      cancel =  document.getElementById("cancel"),          // Кнопки закрытия окна для выбора функций
      selectFunc =  document.getElementById("sel_func"),     // Кнопки закрытия окна для выбора функций
      close_modal = document.getElementById("close_modal"),

      some = document.getElementById("some"),               // Переключатель для вычисления насколько значений
      one =  document.getElementById("one"),                // Переключатель для вычисления одного значения
      podrad =  document.getElementById("podrad"),          // Переключатель для вывлда строк табл. подряд
      stepen2 =  document.getElementById("stepen2"),        // Переключатель для вывлда строк табл. по степени 2
      interval =  document.getElementById("interval");      // Переключатель для вывлда строк табл. на интервале
      none_cifri = document.getElementById("none_cifri");   // Переключатель для вывода цифр в ячейки табл. без ограничений
      kol_cifri  = document.getElementById("kol_cifri");    // Переключатель для вывода цифр в ячейки табл. с ограничениями
  // ---------------------------------------------------------------------------
  [].forEach.call( vFunc, function(e) { // Перебираем все Кнопки выбора функций и вешаем на них события
      e.onclick = function(e) {
        numberFunc = parseInt(e.currentTarget.getAttribute('value'), 10); // Запоменаем номер-идентификатор выбранной функции
        claerClass(document.querySelectorAll(".select"));   // Удаляем отрображения что функция выбрана для всех функций
        e.srcElement.classList.add("select");               // Добавляем отрображения выбора для выбранной функции
        descripFunc.descript(numberFunc);                   // Меняем описание в разделе описания для выбранной функции
      }
  });

  claerClass = (elemSelect) => {
    for (var i = 0; i < elemSelect.length; i++) {
      elemSelect[i].classList.remove('select')
    }
  }

  // vFunc[0].onclick = (e) => {
  //   numberFunc = parseInt(e.currentTarget.getAttribute('value'), 10);
  //   console.log('numberFunc=', numberFunc);
  //   countPushs = countPushs + 1;
  //   // globalVar.setMassX(parseFloat(document.getElementsByName("int_ot")[0].value))
  //   vibor(numberFunc, countPushs);
  // };

  // ---------------------------------------------------------------------------
  //          Кнопка подтверждения выбор функции
  // ---------------------------------------------------------------------------
  selectFunc.onclick = () => {
    countPushs = countPushs + 1;                          // Наращиваем чсётчик количества выбора для текущей функции
    globalVar.setMassX(outDisplay.stepСalculations());    // Вычисляем интервал х для нескольких таблиц и записываем его в массив massX
    vibor(numberFunc, countPushs);
    $('#modal_func').addClass('display-hidden');          // Закрываем окно выбора функции
  }

  // ---------------------------------------------------------------------------
  //          Открываем окно выбора функций
  // ---------------------------------------------------------------------------
  chose_funk.onclick = (e) => {
    $('#modal_func').removeClass('display-hidden');
    descripFunc.descript(numberFunc);                   // Меняем описание в разделе описания для выбранной функции

  }
  // ---------------------------------------------------------------------------
  //          Закрываем окно выбора функций
  // ---------------------------------------------------------------------------
  cancel.onclick = () => {
    $('#modal_func').addClass('display-hidden');
  };
  close_modal.onclick = () => {
    $('#modal_func').addClass('display-hidden');
  }

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

  // ---------------------------------------------------------------------------
  //  Переключатели выбора ограничения кол-ва цифр в выводимых в табл. числах
  // ---------------------------------------------------------------------------
  none_cifri.onclick = () => {
    $("#kol_cifri").prop("checked", false);
  }
  kol_cifri.onclick = () => {
    $("#none_cifri").prop("checked", false);
    outDisplay.getKolСifr();
  }

  // Функция установки начальных параметров
  clearAllVar = () => {
    rFiAlgoritm.clearRFi();
    trigonometFunc.clearMassPQ();
    globalVar.setNumb(1);                   // Устанавливаем в 1 номер строки для следующей таблицы
  }

  // ---------------------------------------------------------------------------
  //          Кнопка Вычислить
  // ---------------------------------------------------------------------------
  btn.onclick = () => {
    let countPQ = 1,                        // Счётчик подходящих для массива massPQ
        newX = 0;                           // Значения из massX при выводы несколькоих табл.
    if (numberFunc != -1) {                 // Если выбрана функция для вычисления
      if (globalVar.getFlagTabl()) {        // Если рассчитываем несколько таблиц
        for (var i1 = 0; i1 < outDisplay.stepСalculations(); i1++) {  // Цикл вычисления нескольких таблиц
          newX = globalVar.getMassX(i1);
          for (var numbCol = 0; numbCol < globalVar.getKolN(); numbCol++) {
            outDisplay.chouseColumn(numberFunc, countPQ, numbCol, newX);
            countPQ += 1;                   // Наращиваем счётчик подходящих
            globalVar.incNumb(1);           // Устанавливаем следующий номер строки для текущей таблицы
          };
          if ( i1 < (outDisplay.stepСalculations()-1) ) { // Не выводим лишний заголовок
            tableMain.addHed(numberFunc, i1+1);
          }
          countPQ = 1;                      // После вычисления одной таблицы сбрасываем счётчик подходящих
          clearAllVar();
        };
        globalVar.clearMassX();                       // После расчёта всех таблиц сбрасываем массив с х
      } else {                              // Иначе рассчитёт ведётся только для одной таблицы
          for (var numbCol = 0; numbCol < globalVar.getKolN(); numbCol++) {
            outDisplay.chouseColumn(numberFunc, countPQ, numbCol, 0);
            countPQ += 1;                   // Наращиваем счётчик подходящих
            globalVar.incNumb(1);           // Устанавливаем следующий номер строки для текущей таблицы
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
    outDisplay.setCount(0);
    globalVar.setCellNumber(0);
    numberFunc = 0;
    clearAllVar();
  };


  /* ---- For auto change Date ---- */
  var date = new Date;
  $("#data_year").text(date.getFullYear());

})