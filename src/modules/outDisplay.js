"use strict";
let sell = document.getElementsByClassName('s1');         // Ячейка таблицы

function getColName(numberFunc, col) {
  return tableHeader2[numberFunc].colName[col];
};

outDisplay = {
  description: "Output on display",

  chouseColumn(numberFunc, col, cellNumber) {
    switch(col) {                             // где col - колонка таблицы в которую будет выводится
      case 0 :    // Номер (1 столбца)
          sell[cellNumber].innerHTML = getColName(numberFunc, col);
          break
      case 1 :    // Номер (2 столбца)
          sell[cellNumber].innerHTML = col + ' ' + cellNumber;
          break
      case 2 :    // Номер (3 столбца)
          sell[cellNumber].innerHTML = col + ' ' + cellNumber;
          break
      case 3 :    // Номер (4 столбца)
          sell[cellNumber].innerHTML = col + ' ' + cellNumber;
          break

      default:
          sell[cellNumber].innerHTML = 'нет';
      break
    }
  }
};