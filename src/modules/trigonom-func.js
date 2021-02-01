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
          return this.summNecet_Cos_Div_NecetSin( countPQ, globalVar.getFi(newX) );
          break;
      case 18 :       //  Вычисления для суммы знакопеременного (-1)^(n+1)cos(2k-1)fi /sin(2k-1)fi
          return this.summCosZnakoPeremen_DivSin( countPQ, globalVar.getFi(newX) );
          break;
      case 19 :       //  Вычисления для суммы cos(k fi) /sin(k fi)
          return this.summCosDivSin( countPQ, globalVar.getFi(newX) );
          break;
      case 20 :       //  Вычисления для суммы sin(2k)fi /sin(2k-1)fi
          return this.summChetnSinDivNecetSin( countPQ, globalVar.getFi(newX) );
          break;
      case 21 :       //  Вычисления для суммы знакопеременного (-1)^(n+1)cos(2k-1)fi /(-1)^(n+1)sin(2k-1)fi
          return this.summCosZnakoPeremen_DivSin( countPQ, globalVar.getFi(newX) );
          break;
      case 22 :       //  Вычисления для суммы  (1+1/n)*sin(k fi)
          return this.summ_N_Sin( countPQ, globalVar.getFi(newX), 10 );
          break;
      case 23 :       //  Вычисления для суммы  (1+1/n)*sin(k fi)
          return 1/2 + this.summSin( countPQ, globalVar.getFi(newX) );
          break;
      case 24 :       //  Вычисления для суммы  (1+1/n)*sin(k fi)
          return 1/2 + this.summCos( countPQ, globalVar.getFi(newX) );
          break;
      case 25 :       //  Вычисления для суммы  (1+1/n)*cos(k fi)
          return this.summ_N_Cos( countPQ, globalVar.getFi(newX), 1 );
          break;
      case 26 :       //  Вычисления для суммы  (1+1/n)*cos(k fi)
          return this.cos_sin_arctg( countPQ, Math.atan(1) );
          break;
      case 27 :       //  Вычисления для суммы  (1+1/n)*cos(k fi)
          return this.cos_Drob( countPQ, 2, 5, 4 );
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
  setMassPQ2() {
    this.massPQ2[0] = 0;
    this.massPQ[1] = Math.cos(2);
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
  summNecet_Cos_Div_NecetSin(n, fi) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n-1)*fi);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n-1)*fi);
    this.massPQ[n] = this.massPQ2[n] / this.massPQ3[n];
    return this.massPQ[n];
  },
  summCosDivSin(n, fi) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos(n*fi);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin(n*fi);
    this.massPQ[n] = this.massPQ2[n] / this.massPQ3[n];
    return this.massPQ[n];
  },
  summChetnSinDivNecetSin(n, fi) {
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

  summZnPeremCos_Div_ZnPeremSin(n, fi) {
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

  summ_N_Sin(n, fi, konst) {
    this.massPQ[n] = this.massPQ[n-1] + (konst+1/n)*Math.sin(n*fi);
    return this.massPQ[n];
  },
  summ_N_Cos(n, fi, konst) {
    this.massPQ[n] = this.massPQ[n-1] + (konst+1/n)*Math.cos(n*fi);
    return this.massPQ[n];
  },
  cos_sin_arctg(n, konst) {
    this.massPQ[n] = Math.cos( Math.sqrt(2) * (Math.sin((n+1) * konst)/Math.sin(n * konst)) ) - 1;
    return this.massPQ[n] = this.changedZiro(this.massPQ[n]);
  },
  cos_Drob(n, pq1, pqCh, pqZ) {
    for (var i = 1; i < n ; i++) {
      for (var i2 = i; i2 > 0 ; i2--) {
          if (i2 === i) {
              this.massPQ2[i2] = pqCh/pqZ;
          } else {
              this.massPQ2[i2] = pqCh/(pqZ-this.massPQ2[i2+1]);
          }
          if (i2 === 1) {
            this.massPQ[n] = Math.cos(pq1 - this.massPQ2[1]);
          }
      }
    }
    return this.massPQ[n];
  },


  changedZiro(x) {
    if (x==0) {
      return 0.000001;
    } else {
      return x;
    }
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