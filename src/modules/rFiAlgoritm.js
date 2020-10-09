"use strict";

rFiAlgoritm = {
  description: "rFi-Algoritm",
  summ : 0,                     // Сумма элементов массива для r/fi-алгоритма
  colNegative : 0,              // Кол-во отрицательных подходящих

  modulR(mass, i) {
    let Rez = 0;
    this.summ = this.summ+Math.log(Math.abs(mass)); // Сумма логорифмов
    Rez = Math.exp( (1/globalVar.getNumb()) * this.summ );   // корень n-й степени из произведение подходящих
    return Rez;
  },
  argumentFi(mass, i) {  // где mas - массив с подходящими для которых нужно вычислить fi
    let Rez = 0;
    if (mass < 0) {          // Если очередной элемент массива отрицательный
        this.colNegative += 1;
    };
    Rez = (this.colNegative / globalVar.getNumb()) * Math.PI;
    return Rez;
  },
  clearRFi() {
    this.summ = 0;
    this.colNegative = 0;
  }
};