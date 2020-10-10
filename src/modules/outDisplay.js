"use strict";
let sell = document.getElementsByClassName('s1');   // Ячейка таблицы


outDisplay = {
  description: "Output on display",
  rTmp : 0,
  fiTmp : 0,
  PQtemp : 0,

  getFunction(numberFunc, countPQ) {                  // Вузываем функцию для вычисления в соответствии с нажатой кнопкой выбора функции
    switch(numberFunc) {                              // где numberFunc - номер вызываемой функции для вычисления
      case 0 :       //  Вычисления для функции 0
          return trigonometFunc.sin( countPQ, globalVar.getFi() );
          break;
      case 1 :       //  Вычисления для функции 1
          return trigonometFunc.summSin( countPQ, globalVar.getFi() );
          break;
      case 2 :       //  Вычисления для функции 1
          return trigonometFunc.summCos( countPQ, globalVar.getFi() );
          break;

      default:
            return 'Нет такой функции';
            break
      };
  },

  getColName(numberFunc, col, countPQ) {
    colName = tableHeader2[numberFunc].colName[col];

    switch(colName) {                               // где colName - имя колонки таблицы из массива tableHeader2
      case 'number' :       // Номер (1 столбца)
          return globalVar.Numb;
          break;
      case 'pq' :           // Номер (2 столбца)
          trigonometFunc.setZiroMassPQ();           // Устанавливаем нулевой элемент массива massPQ в 0
          this.PQtemp = this.getFunction(numberFunc, countPQ)
          return this.PQtemp
          //trigonometFunc.getMassPQ(countPQ);
          break;
      case 'modulR' :       // Номер (3 столбца)
          this.rTmp = rFiAlgoritm.modulR(trigonometFunc.massPQ[countPQ], countPQ);

          rFiAlgoritm.setMassR( this.rTmp, countPQ );
          return rFiAlgoritm.getMassR(countPQ);
          break
      case 'argumentFi' :   // Номер (4 столбца)
          this.fiTmp = rFiAlgoritm.argumentFi(trigonometFunc.massPQ[countPQ], countPQ);

          rFiAlgoritm.setMassFi( this.fiTmp, countPQ );
          return rFiAlgoritm.getMassFi(countPQ);
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