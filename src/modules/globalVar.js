const globalVar = {
  Numb : 1,               // Номер строки в табл, Первая колонка
  fi   : 1,               // Основной параметр для вычислений fi (или x для нескольких таблиц)
  fi2  : 1,
  kolN : 1,
  vivodStrok : 'stepen2', // По умолчанию вывод настроен на вывод строк с номером кратным степени 2
  numbTables : 0,         // Номер текущей таблицы (в которую будет производится вывод)
  cellNumber : 0,         // Номен ячейки в таблице для записи оченедного значения
  massX  : [],            // Массив фи для расчёта нескольких таблиц сразу
  flagTabl : false,       // Флаг указывающий сколько таблиц считаем, несколько (true) или одну (false)
  setZiroMassX(num) {
    this.massX[0] = num;  // Устанавлевая 0 элемент массива х в начальное значение
  },
  setNumb(num) {          // Функция установки Номера строки в табл (цифры в Первой колонке табл.)
    this.Numb = num;
  },
  getNumb() {             // Функция получения Номера строки в табл (цифры в Первой колонке табл.)
    return this.Numb;
  },
  incNumb(i=1) {
    this.Numb = this.Numb + i;
  },
  decNumb(i=1) {
    this.Numb = this.Numb - i;
  },

  getFlagTabl(){          // Функция получения флага: Выводим 1 табл. или несколько табл.
    return this.flagTabl;
  },
  setFlagTabl(num) {      // Функция установки флага: Выводим 1 табл. или несколько табл.
    this.flagTabl = num;
  },

  setNumbTables(num) {    // Устанка Номера текущей таблицы (в которую будет производится вывод)
    this.numbTables = num;
  },
  getNumbTables() {       // Получение Номера текущей таблицы (в которую будет производится вывод)
    return this.numbTables;
  },
  getKolN() {             // Получение Количество подходящих (число до которого производятся вычисления)
    this.kolN = document.getElementById("kol-elementov").value;
    return this.kolN;
  },

  // При вычислении нескольких таблиц используем massX (а не fi)
  setMassX(kolI) {  // где kolI кол-во таблиц для вывода
  let from =   parseFloat(document.getElementsByName("int_ot")[0].value),
      step =   parseFloat(document.getElementsByName("interval_tab")[0].value);
    this.setZiroMassX(from);  // Устанавлевая стартовое значение для массива х равное начальному интервалу
    for (let j = 1; j < kolI; j++) {
      this.massX[j] = this.massX[j-1]+step;
    }
  },
  getFi(newX) {
    if (this.getFlagTabl()) {   // Если считаем несколько табл. то используем massX вместо fi
      this.fi = newX
    } else {                    // Если считаем 1 табл. то используем fi
      this.fi = document.getElementsByName("fi_1")[0].value;
    }
    return this.fi;
  },
  getFi2() {
    this.fi2 = document.getElementsByName("fi_2")[0].value;
    return this.fi2;
  },
  getMassX(i) {
    if (i == 0) {
      if (this.getFlagTabl()) { // Если считаем несколько табл. то massX[0] устанавливаем в значение из поля Выбор интервала От
        this.massX[0] = parseFloat(document.getElementsByName("int_ot")[0].value);
      } else {                  // иначе massX[0] устанавливаем в значение из поля fi 1
        this.massX[0] = document.getElementsByName("fi_1")[0].value;
      };
    } else {
      if (this.getFlagTabl() == false) {  // Если считаем 1 табл. то massX[0] устанавливаем в значение из поля fi 1
        this.massX[0] = document.getElementsByName("fi_1")[0].value;
        return this.massX[0];
      }
    }

    return this.massX[i];
  },
  clearMassX() {
    this.massX = [];
  },
  getCellNumber() {
    return this.cellNumber;
  },
  setCellNumber(num) {
    this.cellNumber = num;
  },
  incCellNumber(i=1) {
    this.cellNumber = this.cellNumber + i;
  },
}