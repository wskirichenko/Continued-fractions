"use strict";
let sell = document.getElementsByClassName('s1'),   // Ячейка таблицы
    intEnterTablSrt_from =  parseFloat(document.getElementsByName("interval_ot")[0].value),   // Число выбранное пользователем для начала интервала вывода
    intEnterTablSrt_before =  parseFloat(document.getElementsByName("interval_do")[0].value); // Число выбранное пользователем для конца интервала вывода

outDisplay = {
  description: "Output on display",
  rTmp : 0,
  fiTmp : 0,
  count : 0,          // Номер строки в таблице
  temp1 : 0,
  PQtemp : 0,

  getIntEnterTablSrt_from() {
    intEnterTablSrt_from = parseFloat(document.getElementsByName("interval_ot")[0].value);
    return intEnterTablSrt_from;
  },
  getIntEnterTablSrt_before() {
    intEnterTablSrt_before = parseFloat(document.getElementsByName("interval_do")[0].value);
    return intEnterTablSrt_before;
  },

  getFunction(numberFunc, countPQ, newX) {            // Вызываем функцию для вычисления в соответствии с нажатой кнопкой выбора функции
    switch(numberFunc) {                              // где numberFunc - номер вызываемой функции для вычисления
      case 0 :       //  Вычисления для функции 0
          return trigonometFunc.sin( countPQ, globalVar.getFi(newX) );
          break;
      case 1 :       //  Вычисления для функции 1
          return trigonometFunc.summSin( countPQ, globalVar.getFi(newX) );
          break;
      case 2 :       //  Вычисления для функции 1
          return trigonometFunc.summSinNechet( countPQ, globalVar.getFi(newX) );
          break;
      case 3 :       //  Вычисления для функции 1
          return trigonometFunc.summSinDiv( countPQ, globalVar.getFi(newX), Math.sin(globalVar.getFi(newX)) );
          break;
      default:
            return 'Нет такой функции';
            break
      };
  },

  // Выбор типа вывода строк в таблице (подряд, кратно степени 2 и на интервале)
  typeDisplaing(vivodStrok, i){
    if (vivodStrok === 'podrad') {
      if ( (i >= 0) && (i < 1000) ) { return true; }
    };
    if (vivodStrok === 'stepen2') {   // Функция проверки кратности степени 2
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
    };
    if (vivodStrok === 'interval') {
      let intFrom =  this.getIntEnterTablSrt_from(),
          intBefor = this.getIntEnterTablSrt_before();
      if ((intBefor - intFrom) > 1025) {   // Ограничения вывода неболее 1025 подряд
        intBefor = intFrom + 1025;
        if ( (i >= intFrom-1) && (i < intBefor) ) { return true; }
      } else {
        if ( (i >= intFrom-1) && (i < intBefor) ) { return true; }
      }
    }
  },

  stepСalculations() {
    let rez = 1,
        from =   parseFloat(document.getElementsByName("int_ot")[0].value),
        before = parseFloat(document.getElementsByName("int_do")[0].value),
        step =   parseFloat(document.getElementsByName("interval_tab")[0].value);
    if (globalVar.getFlagTabl()) {
      rez = Math.round((before - from)/step);
    } else {
      rez = 1;
    }
    return rez
  },

  getColName(numberFunc, col, countPQ, newX) {
    colName = tableHeader2[numberFunc].colName[col];

    switch(colName) {                               // где colName - имя колонки таблицы из массива tableHeader2
      case 'number' :       // Номер (1 столбца)
          return globalVar.Numb;
          break;
      case 'pq' :           // Номер (2 столбца)
          trigonometFunc.setZiroMassPQ(0);           // Устанавливаем нулевой элемент массива massPQ в 0
          this.PQtemp = this.getFunction(numberFunc, countPQ, newX)
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
          return Math.abs( (1/(4*Math.sin(globalVar.getFi(newX)/2))) - this.rTmp );
          break
      case 'eFi' :           // Номер (6 столбца)
          return Math.abs( globalVar.getFi(newX)/2 - this.fiTmp );
          break
      case 'pqExp' :        // Номер (2-2 столбца)
          return colName;
          break

      default:
          return 'Несовпадение colName';
          break
    };
  },
  chouseColumn(numberFunc, countPQ, numbCol, newX) {        // Получения данных для текущей колонки для вывода на экран
      if (this.typeDisplaing(globalVar.vivodStrok, numbCol) == true) {      // Если строку нужно выводить на экран
          tableMain.createTr();                       // Создаём строку в таблице
          for (var i = 0; i < tableMain.numberColumns(numberFunc); i++) {
            tableMain.createTd(this.getCount());           // Создаём ячейку в строке таблицы
            sell[globalVar.getCellNumber()].innerHTML = this.getColName(numberFunc, i, countPQ, newX);   // Выводим очередное значение в созданую ячейку с № cellNumber
            globalVar.incCellNumber(1);               // Наращиваем номер ячейки cellNumber
          }
          this.incCount(1);
      } else {                                        // Иначе если не нужно выводить на экран всё равно производим расчёты
          for (var i = 0; i < tableMain.numberColumns(numberFunc); i++) {
            this.temp1 = this.getColName(numberFunc, i, countPQ, newX);
          }
      }
  },
  getCount() {                    // Получаем номер очередной строки в таблице
    return this.count;
  },
  setCount(num) {
    this.count = num;
  },
  incCount(i=1) {                 // Наращиваем номер очередной строки в таблице на 1
    this.count = this.count + i;
  }
};