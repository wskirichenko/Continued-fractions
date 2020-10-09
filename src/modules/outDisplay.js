"use strict";
let sell = document.getElementsByClassName('s1');   // Ячейка таблицы


outDisplay = {
  description: "Output on display",
  rTmp : 0,
  fiTmp : 0,

  getColName(numberFunc, col, countPQ) {
    colName = tableHeader2[numberFunc].colName[col];

    switch(colName) {                               // где colName - имя колонки таблицы из массива tableHeader2
      case 'number' :       // Номер (1 столбца)
          return globalVar.Numb;
          break;
      case 'pq' :           // Номер (2 столбца)
          trigonometFunc.setZiroMassPQ();
          trigonometFunc.sin(countPQ, globalVar.getFi());
          return trigonometFunc.massPQ[countPQ];
          break;
      case 'pq2' :          // Номер (2 столбца)
          trigonometFunc.setZiroMassPQ();
          trigonometFunc.summSin(countPQ, globalVar.getFi());
          return trigonometFunc.massPQ[countPQ];
          break;
      case 'modulR' :       // Номер (3 столбца)
          globalVar.setMassR( trigonometFunc.massPQ[countPQ], countPQ );
          this.rTmp = rFiAlgoritm.modulR(globalVar.getMassR(countPQ), countPQ);
          return this.rTmp;
          break
      case 'argumentFi' :   // Номер (4 столбца)
          globalVar.setMassFi( trigonometFunc.massPQ[countPQ], countPQ );
          this.fiTmp = rFiAlgoritm.argumentFi(globalVar.getMassFi(countPQ), countPQ);
          return this.fiTmp;
          break
      case 'eR' :           // Номер (5 столбца)
          return Math.abs( (1/(4*Math.sin(globalVar.getFi()/2))) - this.rTmp );
          break
      case 'eFi' :           // Номер (6 столбца)
          return Math.abs( globalVar.getFi()/2 - this.fiTmp );
          break
      case 'pqExp' :        // Номер (2-2 столбца)
          return colName;
          break

      default:
          return 'Несовпадение colName';
          break
    };
  },
  chouseColumn(numberFunc, col, cellNumber, countPQ) {           // Получения данных для текущей колонки для вывода на экран
    // for (let i = 0; i < tableMain.numberColumns(numberFunc); i++) {
      sell[cellNumber].innerHTML = this.getColName(numberFunc, col, countPQ);
    // }
  }
};