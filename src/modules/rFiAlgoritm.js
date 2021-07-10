"use strict";
let resultTable = {
  r   : [],
  fi  : [],
  eR  : [],
  eFi : [],
  countStr : 0
};

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
  argumentFi_1(mass, i) {  // где mas - массив с подходящими для которых нужно вычислить fi
    let Rez = 0;
    if (mass < 1) {          // Если очередной элемент массива отрицательный
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
  kratnoPi(pi1, fi, arg) {
    while (Math.abs(fi) > Math.PI) {
      fi = fi / Math.PI
    }
    if ( Math.abs(fi) < pi1 ) {
      return Math.abs( Math.abs(fi) - arg );
    } else {
      return Math.abs( Math.PI - Math.abs(fi) - arg );
    }
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
      case 8 :       //  Погрешность для  2(cos(fi) - cos((2n+1)fi))
          pogresnost = Math.abs( 1 - arg );
          return pogresnost;
          break;
      case 9 :       //  Погрешность для  sin(n fi)/sin(n-1 fi)
          pogresnost = Math.abs( 1 - arg );
          return pogresnost;
          break;
      case 10 :       //  Погрешность для суммы знакопеременного cos
          pogresnost = Math.abs( (1/(4*Math.abs(Math.cos(globalVar.getFi(newX))))) - arg );
          return pogresnost;
          break;
      case 11 :       //  Погрешность для суммы знакопеременного cos
          pogresnost = Math.abs( (1/(4*Math.abs(Math.cos(globalVar.getFi(newX))))) - arg );
          return pogresnost;
          break;
      case 12 :       //  Погрешность для суммы Чётного sin
          pogresnost = Math.abs( (1/(4*Math.abs(Math.sin(globalVar.getFi(newX))))) - arg );
          return pogresnost;
          break;
      case 13 :       //  Погрешность для суммы Чётного cos
          pogresnost = Math.abs( (1/(4*Math.abs(Math.sin(globalVar.getFi(newX))))) - arg );
          return pogresnost;
          break;
      case 14 :       //  Погрешность для суммы Знакопеременного чётного sin
          pogresnost = Math.abs( (1/(4*Math.abs(Math.sin(globalVar.getFi(newX)/2)))) - arg );
          return pogresnost;
          break;
      case 15 :       //  Погрешность для суммы Знакопеременного чётного cos
          pogresnost = Math.abs( (1/(4*Math.abs(Math.sin(globalVar.getFi(newX)/2)))) - arg );
          return pogresnost;
          break;
      case 16 :       //  Погрешность для суммы sin(4k-1)
          pogresnost = Math.abs( (1/(4*Math.abs(Math.cos(2*globalVar.getFi(newX))))) - arg );
          return pogresnost;
          break;
      case 17 :       //  Погрешность для суммы sin(2k-1)fi /cos(2k-1)fi
          pogresnost = Math.abs( 1 - arg );
          return pogresnost;
          break;
      case 18 :       //  Погрешность для суммы sin(2k-1)fi /cos(2k-1)fi
          pogresnost = Math.abs( Math.tan(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 19 :       //  Погрешность для суммы sin(2k-1)fi /cos(2k-1)fi
          pogresnost = Math.abs( 1 - arg );
          return pogresnost;
          break;
      case 20 :       //  Погрешность для суммы
          pogresnost = Math.abs( 1 - arg );
          return pogresnost;
          break;
      case 21 :       //  Погрешность для суммы
          pogresnost = Math.abs( Math.tan(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 23 :       //  Погрешность для суммы 1/2+sin
          pogresnost = Math.abs( (1/(4*Math.abs(Math.sin(globalVar.getFi(newX)/2)))) - arg );
          return pogresnost;
          break;
      case 24 :       //  Погрешность для суммы 1/2+cos
          pogresnost = Math.abs( (1/(4*Math.abs(Math.sin(globalVar.getFi(newX)/2)))) - arg );
          return pogresnost;
          break;

      case 26 :       //  Погрешность для
          pogresnost = Math.abs( Math.cosh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );

          return pogresnost;
          break;

      case 28 :       //  Погрешность для дроби
          pogresnost = Math.abs( 1 - arg );
          return pogresnost;
          break;
      case 29 :       //  Погрешность для sin(sin_arctan(n, fi, a))
          pogresnost = Math.abs( 0.5 - arg );
          return pogresnost;
          break;

      case 33 :       //  Погрешность для дроби
          pogresnost = Math.abs( globalVar.getFi(newX) - arg );
          return pogresnost;
          break;
      case 34 :       //  Погрешность для дроби cos
          pogresnost = Math.abs( Math.cosh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 35 :       //  Погрешность для дроби sin
          pogresnost = Math.abs( Math.sinh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 36 :       //  Погрешность для дроби sin
          pogresnost = Math.abs( Math.tan(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;

      case 42 :       //  Погрешность для дроби sin
          pogresnost = Math.abs( Math.sinh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 43 :       //  Погрешность для exp(Drob)
          pogresnost = Math.abs( globalVar.getFi(newX) - arg );
          return pogresnost;
          break;
      case 44 :       //  Погрешность для sin(exp(Drob))
          pogresnost = Math.abs( Math.sinh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 45 :       //  Погрешность для cos(exp(Drob))
          pogresnost = Math.abs( Math.cosh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 46 :       //  Погрешность для tg(exp(Drob))
          pogresnost = Math.abs( Math.tanh(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 47 :       //  Погрешность для sin_sqrt_expDrob
          pogresnost = Math.abs( Math.sinh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 48 :       //  Погрешность для cos_sqrt_expDrob
          pogresnost = Math.abs( Math.cosh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 49 :       //  Погрешность для tg(exp(Drob))
          pogresnost = Math.abs( Math.tanh(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;

      case 55 :       //  Погрешность для sin(x*sin/sin)
          let b_1 = 2,
              B101 = globalVar.getFi(newX);
              pogresnost = Math.abs( Math.sqrt( Math.abs((Math.sin(b_1)*Math.cosh(B101))*(Math.sin(b_1)*Math.cosh(B101)) + (Math.cos(b_1)*Math.sinh(B101))*(Math.cos(2)*Math.sinh(B101))) ) / Math.exp(b_1*B101/2) - arg );
          return pogresnost;
          break;

      case 57 :       //  Погрешность для sin(x*sin/sin)
          pogresnost = Math.abs( Math.sinh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 58 :       //  Погрешность для sin(x*sin/sin)
          pogresnost = Math.abs( Math.cosh(globalVar.getFi(newX))/Math.exp(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 59 :       //  Погрешность для tg(exp(Drob))
          pogresnost = Math.abs( Math.tanh(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 60 :       //  Погрешность для 
          let B37 =  globalVar.getFi(newX);
          pogresnost =  Math.abs( Math.sqrt(Math.sin(Math.cos(B37)) * Math.cosh(Math.sin(B37)) * Math.sin(Math.cos(B37)) * Math.cosh(Math.sin(B37)) + Math.cos(Math.cos(B37)) * Math.sinh(Math.sin(B37)) * Math.cos(Math.cos(B37)) * Math.sinh(Math.sin(B37))) / Math.exp(Math.abs(Math.sin(B37))) - arg );
          return pogresnost;

      case 63 :       //  Погрешность для cos(cos(x*sin/sin))
          let b_2 = 2,
              B102 = globalVar.getFi(newX);
              pogresnost = Math.abs( Math.sqrt( Math.abs((Math.sin(b_2)*Math.cosh(B102))*(Math.sin(b_2)*Math.cosh(B102)) + (Math.cos(b_2)*Math.sinh(B102))*(Math.cos(2)*Math.sinh(B102))) ) / Math.exp(b_2*B102/2) - arg );
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
          pogresnost = Math.abs( (Math.PI/2 - globalVar.getFi(newX)/2) - arg ); // Неверно вычислена
          return pogresnost;
          break;
      case 4 :       //  Погрешность для суммы произведений sinProd
          pogresnost = Math.abs( globalVar.getFi(newX) - arg );
          return pogresnost;
          break;
      case 5 :       //  Погрешность для суммы cos
          pogresnost = Math.abs( globalVar.getFi(newX) - arg );   // Неверно вычислена
          return pogresnost;
          break;
      case 6 :       //  Погрешность для суммы знакопеременного Sin
          pogresnost = Math.abs( globalVar.getFi(newX)/2 - arg );
          return pogresnost;
          break;
      case 7 :       //  Погрешность для суммы знакопеременного cos
          pogresnost = Math.abs( globalVar.getFi(newX)/2 - arg );
          return pogresnost;
          break;
      case 8 :       //  Погрешность для  2(cos(fi) - cos((2n+1)fi))
          pogresnost = Math.abs( globalVar.getFi(newX) - arg );   // Проверить
          return pogresnost;
          break;
      case 9 :       //  Погрешность для  sin(n fi)/sin(n-1 fi)
          pogresnost = Math.abs( globalVar.getFi(newX) - arg );   // Проверить
          return pogresnost;
          break;
      case 10 :       //  Погрешность для суммы знакопеременного cos
          pogresnost = Math.abs( Math.PI/2 - arg );
          return pogresnost;
          break;
      case 11 :       //  Погрешность для суммы знакопеременного cos
          pogresnost = Math.abs( 0 - arg );
          return pogresnost;
          break;
      case 12 :       //  Погрешность для суммы Чётного sin
          if (globalVar.getFi(newX) < Math.PI) {
              pogresnost = Math.abs( globalVar.getFi(newX) - arg );
          } else {
              pogresnost = Math.abs( (globalVar.getFi(newX) - Math.PI) - arg );
          }
          return pogresnost;
          break;
      case 13 :       //  Погрешность для суммы Чётного cos
          pogresnost = Math.abs( (Math.PI/2 - globalVar.getFi(newX)/2) - arg );
          return pogresnost;
          break;
      case 14 :       //  Погрешность для суммы знакопеременного чётного sin
          pogresnost = Math.abs( (Math.PI/2 - globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 15 :       //  Погрешность для суммы знакопеременного чётного cos
          // if ( Math.abs(globalVar.getFi(newX)) < (Math.PI/2) ) {
          //   pogresnost = Math.abs( Math.abs(globalVar.getFi(newX)) - arg );
          // } else {
          //   pogresnost = Math.abs( Math.PI - Math.abs(globalVar.getFi(newX)) - arg );
          // }
          pogresnost = this.kratnoPi(Math.PI/2, globalVar.getFi(newX), arg);
          return pogresnost;
          break;
      case 16 :       //  Погрешность для суммы sin(4k-1)
            pogresnost = this.kratnoPi(Math.PI/2, globalVar.getFi(newX), arg);
          return pogresnost;
          break;
      case 17 :       //  Погрешность для суммы cos(2k-1)fi /sin(2k-1)fi
          pogresnost = Math.abs( Math.tan(globalVar.getFi(newX)) - arg );
          return pogresnost;
          break;
      case 18 :       //  Погрешность для суммы знакопеременного cos(2k-1)fi /sin(2k-1)fi
          pogresnost = Math.abs( 0 - arg );
          return pogresnost;
          break;
      case 19 :       //  Погрешность для суммы cos(2k-1)fi /sin(2k-1)fi
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
        break;
      case 20 :       //  Погрешность
        pogresnost = Math.abs( Math.abs(globalVar.getFi(newX)) - arg );
        return pogresnost;
        break;
      case 21 :       //  Погрешность
        pogresnost = Math.abs( 0 - arg );
        return pogresnost;
        break;
      case 22 :       //  Погрешность
        pogresnost = Math.abs( 0 - arg );
        return pogresnost;
        break;
      case 23 :       //  Погрешность
        pogresnost = Math.abs( 0 - arg );
        return pogresnost;
        break;
      case 24 :       //  Погрешность
        pogresnost = Math.abs(  Math.PI/2 + Math.abs(globalVar.getFi(newX)/2) - arg );
        return pogresnost;
        break;

      case 26 :       //  Погрешность
        pogresnost = Math.abs( Math.atan(Math.sinh(globalVar.getFi(newX))) - arg );
        return pogresnost;
      case 28 :       //  Погрешность для дроби
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
        break;

      case 29 :       //  Погрешность sin(sin_arctan(n, fi, a))
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;

      case 31 :       //  Погрешность для дроби
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
        break;

      case 33 :       //  Погрешность для дроби
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
        break;
      case 34 :       //  Погрешность sin(sin_arctan(n, fi, a))
        pogresnost = Math.abs( Math.atan(Math.sinh(globalVar.getFi(newX))) - arg );
        return pogresnost;
      case 35 :       //  Погрешность для дроби
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 36 :       //  Погрешность для дроби
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 37 :       //  Погрешность для дроби
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 38 :       //  Погрешность для дроби
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;

      case 42 :       //  Погрешность для exp(дроби)
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 43 :       //  Погрешность для exp(дроби)
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 44 :       //  Погрешность для sin(exp(дроби))
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 45 :       //  Погрешность для cos(exp(дроби))
        pogresnost = Math.abs( Math.atan(Math.sinh(globalVar.getFi(newX))) - arg );
        return pogresnost;
      case 46 :       //  Погрешность для cos(exp(дроби))
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 47 :       //  Погрешность для sin(exp(дроби))
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 48 :       //  Погрешность для cos(exp(дроби))
        pogresnost = Math.abs( Math.atan(Math.sinh(globalVar.getFi(newX))) - arg );
        return pogresnost;
      case 49 :       //  Погрешность для tg(exp(дроби))
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;


      case 57 :       //  Погрешность для sin(x*sin/sin)
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 58 :       //  Погрешность для cos(exp(дроби))
        pogresnost = Math.abs( Math.atan(Math.sinh(globalVar.getFi(newX))) - arg );
        return pogresnost;
      case 59 :       //  Погрешность для sin(x*sin/sin)
        pogresnost = Math.abs( Math.PI/2 - arg );
        return pogresnost;
      case 60 :       //  Погрешность для tg(exp(дроби))
        pogresnost = Math.abs( Math.PI - Math.abs( Math.atan( (Math.sinh(globalVar.getFi2(newX) * Math.sin(globalVar.getFi(newX)))) / (Math.sin( globalVar.getFi2(newX) * Math.cos(globalVar.getFi(newX)))) )) - arg );
        return pogresnost;
      default:
        return 'Нет погрешности для fi';
        break
    }
  },
};