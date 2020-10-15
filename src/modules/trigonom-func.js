"use strict";

const trigonometFunc = {
  description: "Trigonometric functions",

  massPQ : [],

  getFunction(numberFunc, countPQ, newX) {            // Вызываем функцию для вычисления в соответствии с нажатой кнопкой выбора функции
    switch(numberFunc) {                              // где numberFunc - номер вызываемой функции для вычисления
      case 0 :       //  Вычисления для функции 0
          return this.sin( countPQ, globalVar.getFi(newX) );
          break;
      case 1 :       //  Вычисления для функции 1
          return this.summSin( countPQ, globalVar.getFi(newX) );
          break;
      case 2 :       //  Вычисления для функции 2
          return this.summSinNechet( countPQ, globalVar.getFi(newX) );
          break;
      case 3 :       //  Вычисления для функции 3
          return this.summSinDiv( countPQ, globalVar.getFi(newX), Math.sin(globalVar.getFi(newX)) );
          break;
      case 4 :       //  Вычисления для функции 4
          return this.sinProd( countPQ, globalVar.getFi(newX), Math.sin(globalVar.getFi(newX)) );
          break;
      case 5 :       //  Вычисления для функции 1
          return this.summCos( countPQ, globalVar.getFi(newX) );
          break;
      case 6 :       //  Вычисления для функции 1
          return this.summSinZnakoPeremen( countPQ, globalVar.getFi(newX) );
          break;
      case 7 :       //  Вычисления для функции 1
          return this.summCosZnakoPeremen( countPQ, globalVar.getFi(newX) );
          break;
      default:
            return 'Нет такой функции';
            break
      };
  },

  setZiroMassPQ(i=0) {
    this.massPQ[0] = i;
  },
  sin(n, fi) {
    this.massPQ[n] = Math.sin(n*fi);
    return this.massPQ[n];
  },
  cos(n, fi) {
    let rezult = 0;
    return rezult = Math.cos(n*fi);
  },
  summSin(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + Math.sin(n*fi);
    return this.massPQ[n];
  },
  summSinZnakoPeremen(n, fi) {
    if (n % 2 === 0) {
      this.massPQ[n] = this.massPQ[n-1] - Math.sin(n*fi);
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.sin(n*fi);
    }
    return this.massPQ[n];
  },
  summCosZnakoPeremen(n, fi) {
    if (n % 2 === 0) {
      this.massPQ[n] = this.massPQ[n-1] - Math.cos(n*fi);
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.cos(n*fi);
    }
    return this.massPQ[n];
  },
  summSinNechet(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + Math.sin((2*n-1)*fi);
    return this.massPQ[n];
  },
  summCos(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + Math.cos(n*fi);
    return this.massPQ[n];
  },
  summSinDiv(n, fi, constanta) {
    if (n % 2 === 0) {
      this.massPQ[n] = this.massPQ[n-1] - (Math.sin(n*fi)/constanta);
    } else {
      this.massPQ[n] = this.massPQ[n-1] + (Math.sin(n*fi)/constanta);
    }
    return this.massPQ[n];
  },
  sinProd(n, fi) {
    this.massPQ[n] = 4 * Math.sin((n+1)*fi) * Math.sin(n*fi);
    return this.massPQ[n];
  },
  getMassPQ(i) {
    return this.massPQ[i];
  },
  clearMassPQ() {
    this.massPQ = [];
  }
};