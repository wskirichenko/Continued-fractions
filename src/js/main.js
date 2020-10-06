"use strict";

$(document).ready(function () {
  // console.log(table.description);
  let kolN = 10,        // Кол-во итераций
      kolCol = 6,       // Кол-во колонок в табл
      btn = document.getElementById("btn_start"),           // Кнопка вычислить
      sell = document.getElementsByClassName('s1');         // Ячейка таблицы

  tableMain.addHed(kolCol);

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