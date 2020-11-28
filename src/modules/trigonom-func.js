"use strict";

const trigonometFunc = {
  description: "Trigonometric functions",

  massPQ : [],
  massPQ2 : [],
  massPQ3 : [],

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
          return this.sinProd( countPQ, globalVar.getFi(newX) );
          break;
      case 5 :       //  Вычисления для функции 5
          return this.summCos( countPQ, globalVar.getFi(newX) );
          break;
      case 6 :       //  Вычисления для функции 6
          return this.summSinZnakoPeremen( countPQ, globalVar.getFi(newX) );
          break;
      case 7 :       //  Вычисления для функции 7
          return this.summCosZnakoPeremen( countPQ, globalVar.getFi(newX) );
          break;
      case 8 :       //  Вычисления для  2(cos(fi) - cos((2n+1)fi))
          return this.cosRaznost( countPQ, globalVar.getFi(newX) );
          break;
      case 9 :       //  Вычисления для  sin(n fi)/sin(n-1 fi)
          return this.sinDiv( countPQ, globalVar.getFi(newX) );
          break;
      case 10 :       //  Вычисления для Summ( sin((2*n-1)fi) )
          return this.summSinNechetZnakoPeremen( countPQ, globalVar.getFi(newX) );
          break;
      case 11 :       //  Вычисления для Summ( cos((2*n-1)fi) )
          return this.summCosNechetZnakoPeremen( countPQ, globalVar.getFi(newX) );
          break;
      case 12 :       //  Вычисления для чётного синуса
          return this.summSinChetniy( countPQ, globalVar.getFi(newX) );
          break;
      case 13 :       //  Вычисления для чётного Косинуса
          return this.summCosChetniy( countPQ, globalVar.getFi(newX) );
          break;
      case 14 :       //  Вычисления для знакопеременного Summ( sin((2*n)fi) )
          return this.summSinChetnZnakoPeremen( countPQ, globalVar.getFi(newX) );
          break;
      case 15 :       //  Вычисления для знакопеременного Summ( cos((2*n)fi) )
          return this.summCosChetnZnakoPeremen( countPQ, globalVar.getFi(newX) );
          break;
      case 16 :       //  Вычисления для суммы sin(4k-1)
          return this.summSin4n_1( countPQ, globalVar.getFi(newX) );
          break;
      case 17 :       //  Вычисления для суммы cos(2k-1)fi /sin(2k-1)fi
          // return this.summCosDivSin3( countPQ, globalVar.getFi(newX) );
          return this.summ_N_Sin( countPQ, globalVar.getFi(newX) );
          break;
      case 18 :       //  Вычисления для суммы знакопеременного cos(2k-1)fi /sin(2k-1)fi
          return this.summCosZnakoPeremen_DivSin( countPQ, globalVar.getFi(newX) );
          break;

      default:
            return 'Нет такой функции';
            break
      };
  },

  setZiroMassPQ(i=0) {
    this.massPQ[0] = i;
    this.massPQ2[0] = i;
    this.massPQ3[0] = i;
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
  summSin4n_1(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + Math.sin((4*n-3)*fi);
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
  summSinNechetZnakoPeremen(n, fi) {
    if (n % 2 === 0) {
      this.massPQ[n] = this.massPQ[n-1] - Math.sin((2*n-1)*fi);
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.sin((2*n-1)*fi);
    }
    return this.massPQ[n];
  },
  summCosNechetZnakoPeremen(n, fi) {
    if (n % 2 === 0) {
      this.massPQ[n] = this.massPQ[n-1] - Math.cos((2*n-1)*fi);
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.cos((2*n-1)*fi);
    }
    return this.massPQ[n];
  },
  summSinChetnZnakoPeremen(n, fi) {
    if (n % 2 === 0) {
      this.massPQ[n] = this.massPQ[n-1] - Math.sin((2*n)*fi);
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.sin((2*n)*fi);
    }
    return this.massPQ[n];
  },
  summCosChetnZnakoPeremen(n, fi) {
    if (n % 2 === 0) {
      this.massPQ[n] = this.massPQ[n-1] - Math.cos((2*n)*fi);
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.cos((2*n)*fi);
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
  summCosNechet(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + Math.cos((2*n-1)*fi);
    return this.massPQ[n];
  },
  summSinChetniy(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + Math.sin((2*n)*fi);
    return this.massPQ[n];
  },
  summCosChetniy(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + Math.cos((2*n)*fi);
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
  cosRaznost(n, fi) {
    this.massPQ[n] = 2 * (Math.cos(fi) - Math.cos((2*n+1)*fi) );
    return this.massPQ[n];
  },
  sinDiv(n, fi) {
    this.massPQ[n] = Math.sin((n+1)*fi) / Math.sin(n*fi);
    return this.massPQ[n];
  },
  summCosDivSin(n, fi) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n-1)*fi);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n-1)*fi);
    this.massPQ[n] = this.massPQ2[n] / this.massPQ3[n];
    return this.massPQ[n];
  },
  summCosDivSin2(n, fi) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos(n*fi);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin(n*fi);
    this.massPQ[n] = this.massPQ2[n] / this.massPQ3[n];
    return this.massPQ[n];
  },
  summCosDivSin3(n, fi) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.sin((2*n)*fi);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n-1)*fi);
    this.massPQ[n] = this.massPQ2[n] / this.massPQ3[n];
    return this.massPQ[n];
  },
  summCosZnakoPeremen_DivSin(n, fi) {
    if (n % 2 === 0) {
      this.massPQ2[n] = this.massPQ2[n-1] - Math.cos((2*n-1)*fi);
    } else {
      this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n-1)*fi);
    }
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n-1)*fi);
    this.massPQ[n] = this.massPQ2[n] / this.massPQ3[n];
    return this.massPQ[n];
  },

  summCosZnakoPeremen_DivSin2(n, fi) {
    if (n % 2 === 0) {
      this.massPQ2[n] = this.massPQ2[n-1] - Math.cos((2*n-1)*fi);
    } else {
      this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n-1)*fi);
    }
    if (n % 2 === 0) {
      this.massPQ3[n] = this.massPQ3[n-1] - Math.sin((2*n-1)*fi);
    } else {
      this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n-1)*fi);
    }
    this.massPQ[n] = this.massPQ2[n] / this.massPQ3[n];
    return this.massPQ[n];
  },

  summ_N_Sin(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + (1+1/n)*Math.sin(n*fi);
    return this.massPQ[n];
  },

  getMassPQ(i) {
    return this.massPQ[i];
  },
  clearMassPQ() {
    this.massPQ = [];
    this.massPQ2 = [];
    this.massPQ3 = [];
  }
};