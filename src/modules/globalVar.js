globalVar = {
  Numb : 1,           // Номер строки в табл, Первая колонка
  fi   : 1,
  fi2  : 1,
  kolN : 1,
  numbTables : 0,     // Номер текущей таблицы (в которую будет производится вывод)
  cellNumber : 0,     // Номен ячейки в таблице для записи оченедного значения 
  massR  : [],
  massFi : [],
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
  getFi() {
    this.fi = document.getElementsByName("fi_1")[0].value;
    return this.fi;
  },
  getFi2() {
    this.fi2 = document.getElementsByName("fi_2")[0].value;
    return this.fi2;
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