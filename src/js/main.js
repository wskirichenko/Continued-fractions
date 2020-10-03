(() => {
  $(document).ready(function () {
    let kolN = 10,      // Кол-во итераций
        kolCol = 6      // Кол-во колонок в табл
        btn = document.getElementById("btn_start"),           // Кнопка вычислить
        sell = document.getElementsByClassName('s1');         // Ячейка таблицы

    let tableHeader = [   // Массив с заголоквами таблицы
        "Номер №", "Значения подходящих", "Значения модуля r",
        "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
    ]

    // ---------------------------------------------------------------------------
    //          Объект таблица с метадими его создания
    // ---------------------------------------------------------------------------
    let tableMain = {
      // Метод создания заголовков для таблицы
      addHed() {
        tr = document.createElement('tr');    // Создаём элемент tr
        thead.appendChild(tr);                // Добавляем внутрь таблицы новый tr
        for (var i = 0; i < kolCol; i++) {
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
    };

    tableMain.addHed();

    function Vivod(col, k) {   // где k - порядковый номер ячейки табицы куда выводим
      sell[k].innerHTML = k;
    };

    // ---------------------------------------------------------------------------
    //          Кнопка Вычислить
    // ---------------------------------------------------------------------------
    btn.onclick = function() {
      let count = 0,
          k = 0;
      for (var j = 0; j < kolN; j++) {
        tableMain.createTr();
        for (var i = 0; i < kolCol; i++) {
          tableMain.createTd(count);
          Vivod(i,k);
          k +=1;
        }
        count +=1;
      };
    }



    /* ---- For auto change Date ---- */
    var date = new Date;
    $("#data_year").text(date.getFullYear());

  })
})();