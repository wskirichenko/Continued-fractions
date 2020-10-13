globalVar = {
  Numb : 1,           // Номер строки в табл, Первая колонка
  fi   : 1,
  fi2  : 1,
  kolN : 1,
  vivodStrok : 'stepen2',
  numbTables : 0,     // Номер текущей таблицы (в которую будет производится вывод)
  cellNumber : 0,     // Номен ячейки в таблице для записи оченедного значения
  massX  : [],        // Массив фи для расчёта нескольких таблиц сразу
  massR  : [],
  massFi : [],
  flagTabl : false,   // Флаг указывающий на то, считаем несколько таблиц (true) или одну (false)
  setMassX(num) {
    this.massX[0] = num; // Устанавлевая -1 элемент массива с х в начальное значение
  },
  setNumb(num) {
    this.Numb = num;
  },
  getNumb() {
    return this.Numb;
  },
  incNumb(i=1) {
    this.Numb = this.Numb + i;
  },
  decNumb(i=1) {
    this.Numb = this.Numb - i;
  },

  getFlagTabl(){
    return this.flagTabl;
  },
  setFlagTabl(num) {
    this.flagTabl = num;
  },

  setNumbTables(num) {
    this.numbTables = num;
  },
  getNumbTables() {
    return this.numbTables;
  },
  getKolN() {
    this.kolN = document.getElementById("kol-elementov").value;
    return this.kolN;
  },
  deltaFi(i1) {   // Недописано
    let from =   parseFloat(document.getElementsByName("int_ot")[0].value),
        step =   parseFloat(document.getElementsByName("interval_tab")[0].value);
    this.setMassX(from);  // Устанавлевая стартовое значение для массива х равное начальному интервалу
    if (i1 === 0){
      this.massX[i1] = from;
    } else {
      this.massX[i1] = this.massX[i1-1]+step;
    }
    return this.massX[i1]
  },
  getFi(newX) {
    if (this.getFlagTabl()) {
      this.fi = newX
    } else {
      this.fi = document.getElementsByName("fi_1")[0].value;
    }
    return this.fi;
  },
  getFi2() {
    this.fi2 = document.getElementsByName("fi_2")[0].value;
    return this.fi2;
  },
  getMassX(i) {
    return this.massX[i];
  },
  getMassR(i) {
    return this.massR[i];
  },
  setMassR(num, i) {
    this.massR[i] = num;
  },
  getMassFi(i) {
    return this.massFi[i];
  },
  setMassFi(num, i) {
    this.massFi[i] = num;
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