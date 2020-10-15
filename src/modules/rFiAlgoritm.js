"use strict";

rFiAlgoritm = {
  description: "rFi-Algoritm",
  summ : 0,                     // Сумма элементов массива для r/fi-алгоритма
  colNegative : 0,              // Кол-во отрицательных подходящих
  massR : [],
  massFi : [],

  modulR(mass, i) {
    this.summ = this.summ+Math.log(Math.abs(mass)); // Сумма логорифмов
    this.massR[i] = Math.exp( (1/globalVar.getNumb()) * this.summ );   // корень n-й степени из произведение подходящих
    return this.massR[i];
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
    massR = [];
    massFi = [];
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

  getPogreshnR(numberFunc, arg, newX) {            // Вызываем функцию для вычисления в погрешности модуля r
    let pogresnost = 0;
    switch(numberFunc) {                           // где numberFunc - номер вызываемой функции для вычисления
      case 0 :       //  Погрешность для Sin
          pogresnost = Math.abs( arg - Math.sin(globalVar.getFi(newX)) ); // Неверно вычислена
          return pogresnost;
          break;
      case 1 :       //  Погрешность для суммы Sin
          pogresnost = Math.abs( (1/(4*Math.sin(globalVar.getFi(newX)/2))) - arg );
          return pogresnost;
          break;
      case 2 :       //  Погрешность для суммы Sin нечетное
          pogresnost = Math.abs( (1/(4*Math.sin(globalVar.getFi(newX)))) - arg );
          return pogresnost;
          break;
      case 3 :       //  Погрешность для суммы summSinDiv
          pogresnost = Math.abs( (1/(4*Math.sin(globalVar.getFi(newX) ))) - arg ); // Проверить (прохая точность)
          return pogresnost;
          break;
      case 4 :       //  Погрешность для суммы произведений sinProd
          pogresnost = Math.abs( 1 - arg );
          return pogresnost;
          break;
      case 5 :       //  Погрешность для суммы cos
          pogresnost = Math.abs( arg - Math.sin(globalVar.getFi(newX)) ); // Неверно вычислена
          return pogresnost;
          break;
      case 6 :       //  Погрешность для суммы знакопеременного Sin
          pogresnost = Math.abs( (1/(4*Math.abs(Math.cos(globalVar.getFi(newX)/2)))) - arg );
          return pogresnost;
          break;
      case 7 :       //  Погрешность для суммы знакопеременного cos
          pogresnost = Math.abs( (1/(4*Math.abs(Math.cos(globalVar.getFi(newX)/2)))) - arg );
          return pogresnost;
          break;
      default:
        return 'Нет погрешности для r';
        break
    };
  },

  getPogreshnFi(numberFunc, arg, newX) {            // Вызываем функцию для вычисления в погрешности модуля r
    let pogresnost = 0;
    switch(numberFunc) {                           // где numberFunc - номер вызываемой функции для вычисления
      case 0 :       //  Погрешность для Sin
          pogresnost = Math.abs( arg - 0 ); // Неверно вычислена
          return pogresnost;
          break;
      case 1 :       //  Погрешность для суммы Sin
          pogresnost = Math.abs( globalVar.getFi(newX)/2 - arg );
          return pogresnost;
          break;
      case 2 :       //  Погрешность для суммы Sin нечетное
          pogresnost = Math.abs( 0 - arg );  // Пока неизвестна
          return pogresnost;
          break;
      case 3 :       //  Погрешность для суммы summSinDiv
          pogresnost = Math.abs( (Math.PI/2 - arg/2) - arg ); // Неверно вычислена
          return pogresnost;
          break;
      case 4 :       //  Погрешность для суммы произведений sinProd
          pogresnost = Math.abs( globalVar.getFi(newX) - arg );
          return pogresnost;
          break;
      case 5 :       //  Погрешность для суммы cos
          pogresnost = Math.abs( globalVar.getFi(newX) - arg ); // Неверно вычислена
          return pogresnost;
          break;
      case 6 :       //  Погрешность для суммы знакопеременного Sin
          pogresnost = Math.abs( globalVar.getFi(newX) - arg );
          return pogresnost;
          break;
      case 7 :       //  Погрешность для суммы знакопеременного cos
          pogresnost = Math.abs( globalVar.getFi(newX) - arg );
          return pogresnost;
          break;
      default:
        return 'Нет погрешности для r';
        break
    }
  }
};