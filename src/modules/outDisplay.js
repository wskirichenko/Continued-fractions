"use strict";
let sell = document.getElementsByClassName('s1');   // Ячейка таблицы


outDisplay = {
  description: "Output on display",
  rTmp : 0,
  fiTmp : 0,
  count : 0,
  temp1 : 0,

  // Функция проверки кратности степени 2 
  typeDisplaing(i){
    if (i==0) return true;
    if (i==1) return true;
    if (i==3) return true;
    if (i==7) return true;
    if (i==15) return true;
    if (i==31) return true;
    if (i==63) return true;
    if (i==127) return true;
    if (i==255) return true;
    if (i==511) return true;
    if (i==1023) return true;
    if (i==2047) return true;
    if (i==4095) return true;
    if (i==8191) return true;
    if (i==16383) return true;
    if (i==32767) return true;
    if (i==65535) return true;
    if (i==131071) return true;
    if (i==262143) return true;
    if (i==524287) return true;
    if (i==1048575) return true;
    if (i==2097151) return true;
    if (i==4194303) return true;
  },
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
  chouseColumn(numberFunc, countPQ, j) {            // Получения данных для текущей колонки для вывода на экран
    if (outDisplay.typeDisplaing(j) == true) {      // Если ужно выводить на экран
        tableMain.createTr();                       // Создаём строку в таблице
        for (var i = 0; i < tableMain.numberColumns(numberFunc); i++) {
          tableMain.createTd(this.count);           // Создаём ячейку в строке таблицы
          sell[globalVar.getCellNumber()].innerHTML = this.getColName(numberFunc, i, countPQ);   // Выводим очередное значение в созданую ячейку с № cellNumber
          globalVar.incCellNumber(1);               // Наращиваем номер ячейки cellNumber
        }
        this.count +=1;
    } else {                                        // Иначе если не нужно выводить на экран всё равно производим расчёты
        for (var i = 0; i < tableMain.numberColumns(numberFunc); i++) {
          this.temp1 = this.getColName(numberFunc, i, countPQ);
        }
    }
  }
};