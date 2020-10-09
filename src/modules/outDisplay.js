"use strict";
let sell = document.getElementsByClassName('s1');   // Ячейка таблицы

function getColName(numberFunc, col, countPQ) {
  colName = tableHeader2[numberFunc].colName[col];
    switch(colName) {                               // где colName - имя колонки таблицы из массива tableHeader2
      case 'number' :       // Номер (1 столбца)
          return globalVar.Numb;
          break
      case 'pq' :           // Номер (2 столбца)
          return trigonometFunc.sin(countPQ+1, globalVar.getFi());
          break
      case 'modulR' :  {     // Номер (3 столбца)
          globalVar.setMassR(
            trigonometFunc.sin(globalVar.Numb, globalVar.getFi()), countPQ
          );

          return rFiAlgoritm.modulR(globalVar.getMassR(countPQ), countPQ);
      }
          break
      case 'argumentFi' :  { // Номер (4 столбца)
          globalVar.setMassFi(
            trigonometFunc.sin(globalVar.Numb, globalVar.getFi()), countPQ
          );
          return rFiAlgoritm.argumentFi(globalVar.getMassFi(countPQ), countPQ);
      }
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

  chouseColumn(numberFunc, col, cellNumber, countPQ) {           // Получения данных для текущей колонки для вывода на экран
    for (let i = 0; i < tableMain.numberColumns(numberFunc); i++) {
      sell[cellNumber].innerHTML = getColName(numberFunc, col, countPQ);
    }
  }
};