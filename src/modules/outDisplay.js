"use strict";
let sell = document.getElementsByClassName('s1');   // Ячейка таблицы

function getColName(numberFunc, col) {
  colName = tableHeader2[numberFunc].colName[col];
    switch(colName) {                               // где colName - имя колонки таблицы из массива tableHeader2
      case 'number' :       // Номер (1 столбца)
          return globalVar.Numb;
          break
      case 'pq' :           // Номер (2 столбца)
          return trigonometFunc.sin(globalVar.Numb, globalVar.get_fi());
          break
      case 'modulR' :       // Номер (3 столбца)
          return colName;
          break
      case 'argumentFi' :   // Номер (4 столбца)
          return colName;
          break
      case 'eR' :           // Номер (5 столбца)
          return colName;
          break
      case 'eFi' :           // Номер (6 столбца)
          return colName;
          break
      case 'pqExp' :        // Номер (2-2 столбца)
          return colName;
          break

      default:
          sell[cellNumber].innerHTML = 'Несовпадение colName';
      break
    };
};

outDisplay = {
  description: "Output on display",

  chouseColumn(numberFunc, col, cellNumber) {           // Получения данных для текущей колонки для вывода на экран
    for (let i = 0; i < tableMain.numberColumns(numberFunc); i++) {
      sell[cellNumber].innerHTML = getColName(numberFunc, col);
    }
  }
};