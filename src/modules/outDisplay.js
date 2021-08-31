"use strict";
let sell = document.getElementsByClassName('s1'),   // Ячейка таблицы
    intEnterTablSrt_from =  parseFloat(document.getElementsByName("interval_ot")[0].value),   // Число выбранное пользователем для начала интервала вывода
    intEnterTablSrt_before =  parseFloat(document.getElementsByName("interval_do")[0].value), // Число выбранное пользователем для конца интервала вывода
    kolСifr =  parseInt(document.getElementsByName("kol_cifr")[0].value);     // Кол-во цифр при выводе в ячейку табл.

const outDisplay = {
  description: "Output on display",
  rTmp : 0,
  fiTmp : 0,
  count : 0,          // Номер строки в таблице
  temp1 : 0,
  PQtemp : 0,

  // Получения номера строки с которой надо начинать вывод при выборе Выводить на интервале
  getIntEnterTablSrt_from() {
    intEnterTablSrt_from = parseFloat(document.getElementsByName("interval_ot")[0].value);
    return intEnterTablSrt_from;
  },
  // Получения номера строки которой надо закончить вывод при выборе Выводить на интервале
  getIntEnterTablSrt_before() {
    intEnterTablSrt_before = parseFloat(document.getElementsByName("interval_do")[0].value);
    return intEnterTablSrt_before;
  },
  getKolСifr() {                    // Получаем kол-во цифр при выводе в ячейку табл.
    return this.kolСifr = parseInt(document.getElementsByName("kol_cifr")[0].value);
  },
  getFlagСifr() {                    // Проверяем переключатель ограничения вывода цифр
    return $("#kol_cifri").prop("checked");
  },

  // Выбор типа вывода строк в таблице (подряд, кратно степени 2 и на интервале)
  typeDisplaing(vivodStrok, i) {
    // Если выбран переключатель "Вывод строк подряд"
    if (vivodStrok === 'podrad') {
      if ( (i >= 0) && (i < 1000) ) { return true; }
    };
    // Если выбран переключатель "Выводить кратно степени 2"
    if (vivodStrok === 'stepen2') {
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
    // Если выбран переключатель "Выводить в интервале"
    if (vivodStrok === 'interval') {
      let intFrom =  this.getIntEnterTablSrt_from(),
          intBefor = this.getIntEnterTablSrt_before();
      if ((intBefor - intFrom) > 1025) {   // Ограничения вывода не более 1025 подряд
        intBefor = intFrom + 1025;
        if ( (i >= intFrom-1) && (i < intBefor) ) { return true; }
      } else {
        if ( (i >= intFrom-1) && (i < intBefor) ) { return true; }
      }
    }
  },

  obrezkaStr(a, kolcifr) {
    let stepen = 0,
        kol = 0,
        str = a.toString(),
        newstr = '',
        e = str.indexOf("e");
    if ( outDisplay.getFlagСifr() ) {
        if (str.length > 10) {
            if (e != -1) {
                newstr = str.substring(e+1, str.length);
                kol = str.length-e;
                stepen = +newstr;
                if (stepen<0) {
                    if (a>0) {
                        newstr = '0.';
                        for (i = 0; i < (Math.abs(stepen)-1); i++) {
                        newstr = newstr+'0';
                        }
                        newstr = newstr+str[0]+str.substring(2, str.length-kol);
                    }
                    if (a<0) {
                        newstr = '-0.';
                        for (i = 0; i < (Math.abs(stepen)-1); i++) {
                        newstr = newstr+'0';
                        }
                        newstr = newstr+str[1]+str.substring(3, str.length-kol);
                    }
                } else {
                    return newstr = 'Степень положительная, недописал пока';
                }
                return newstr = newstr.substring(0, kolcifr).replace('.', ',');
            }
            return newstr = str.substring(0, kolcifr).replace('.', ',');
        }
        return str;
    } else {
      return a;
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

    switch(colName) {       // где colName - имя колонки таблицы из массива tableHeader2
      case 'number' :       // Столбик таблицы с Номером подходящих
          return globalVar.Numb;
          break;
      case 'pq' :           // Столбик таблицы с результатами основной функцией вычисления (massPQ)
          // if (numberFunc == 9) {
          //   trigonometFunc.setZiroMassPQ(1);           // Устанавливаем нулевой элемент массива massPQ в 1
          // } else {
            trigonometFunc.setZiroMassPQ(0);           // Устанавливаем нулевой элемент массива massPQ в 0

            if (numberFunc == 27) {
              trigonometFunc.setMassPQ2();
            }
            if (numberFunc == 28) {
              trigonometFunc.setMassPQ2();
            }
            // if (numberFunc == 33) {
            //   trigonometFunc.setMassPQ2();
            // }
          // }
          this.PQtemp = trigonometFunc.getFunction(numberFunc, countPQ, newX)
          return this.PQtemp
          break;
      case 'modulR' :       // Столбик таблицы с результатами вычисления модуля r (massR)
          if ( (numberFunc == 68)  || (numberFunc == 69) || (numberFunc == 70) || (numberFunc == 71) || (numberFunc == 72) || (numberFunc == 73) ) {
            this.rTmp = rFiAlgoritm.modulR_summ(trigonometFunc.massPQ[countPQ], countPQ);
          } else {
            this.rTmp = rFiAlgoritm.modulR(trigonometFunc.massPQ[countPQ], countPQ);
          }
          rFiAlgoritm.setMassR( this.rTmp, countPQ );
          return rFiAlgoritm.getMassR(countPQ);
          break
      case 'argumentFi' :   // Столбик таблицы с результатами вычисления аргумента fi (massFi)
          if ( (numberFunc == 43)  ) {
            this.fiTmp = rFiAlgoritm.argumentFi_1(trigonometFunc.massPQ[countPQ], countPQ);
          } else {
            this.fiTmp = rFiAlgoritm.argumentFi(trigonometFunc.massPQ[countPQ], countPQ);
          }
          rFiAlgoritm.setMassFi( this.fiTmp, countPQ );
          return rFiAlgoritm.getMassFi(countPQ);
          break
      case 'eR' :           // Столбик таблицы с погрешностью при вычислении модуля r
          //return Math.abs( (1/(4*Math.sin(globalVar.getFi(newX)/2))) - this.rTmp );
          return rFiAlgoritm.getPogreshnR(numberFunc, this.rTmp, newX);
          break
      case 'eFi' :          // Столбик таблицы с погрешностью при вычислении аргумента fi
          // return Math.abs( globalVar.getFi(newX)/2 - this.fiTmp );
          return rFiAlgoritm.getPogreshnFi(numberFunc, this.fiTmp, newX);
          break
      case 'pqExp' :        // Пока используется только для функции 127
          this.PQtemp = trigonometFunc.getFunction(127, countPQ, newX)
          return this.PQtemp
          break

      default:
          return 'Несовпадение colName';
          break
    };
  },
  chouseColumn(numberFunc, countPQ, numbCol, newX) {        // Получения данных для текущей колонки для вывода на экран
      if (this.typeDisplaing(globalVar.vivodStrok, numbCol) == true) {  // Если строку нужно выводить на экран
          tableMain.createTr();                       // Создаём строку в таблице
          for (var i = 0; i < tableMain.numberColumns(numberFunc); i++) {
            tableMain.createTd(this.getCount());           // Создаём ячейку в строке таблицы
            sell[globalVar.getCellNumber()].innerHTML = this.obrezkaStr(this.getColName(numberFunc, i, countPQ, newX), this.getKolСifr() );   // Выводим очередное значение в созданую ячейку с № cellNumber
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
  setCount(num) {                 // Устанавливаем номер очередной строки в таблице
    this.count = num;
  },
  incCount(i=1) {                 // Наращиваем номер очередной строки в таблице на 1
    this.count = this.count + i;
  },

  calculationTime(tStart, tFinish) {
    p = document.createElement('p');          // Создаём элемент p
    main_panel.appendChild(p);                // Добавляем внутрь 'main_panel' новый p
    p.className = 'p-time-calc';                  // Присваеваем p класс
    $(".p-time-calc")[0].innerHTML = "Время вычислений составило " + this.obrezkaStr( (tFinish - tStart)/1000, 8 ) + " секунд."; // Добавляем значения очередного х
  }
};