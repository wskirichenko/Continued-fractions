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
      case 26 :       //  Вычисления для cos_sin_arctan(n, fi, a)
          return this.cos_sin_arctg( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 27 :       //  Вычисления для дроби a+( (a^2+fi^2)/(2a - (a^2+fi^2)/2a - ...) )
          return this.cepnayaDrob( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 127 :       //  Вычисления для дроби cos(a+( (a^2+fi^2)/(2a - (a^2+fi^2)/2a - ...) ))
          return this.cos_Drob( countPQ );
          break;
      case 28 :       //  Вычисления для дроби (a^2+fi^2)/(2a - (a^2+fi^2)/2a - ...) )
          return this.cepnayaDrob( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 29 :       //  Вычисления для sin(sin_arctan(n, fi, a))
          return this.sin_Sin_arctg( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 30 :       //  Вычисления для ch(sin_arctan(n, fi, a))
          return this.ch_Sin_arctg( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 31 :       //  Вычисления для Sh(sin_arctan(n, fi, a)) -- Не проверено
          return this.sh_Sin_arctg( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 32 :       //  Вычисления для exp(sin_arctan(n, fi, a)) --
          return this.exp_Sin_arctg( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 33 :       //  Вычисления для дроби по сокращённому алгоритму
          return this.Drob_smal( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 34 :       //  Вычисления для Cos(дроби) по сокращённому алгоритму
          return this.Drob_smal_cos( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 35 :       //  Вычисления для sin(дроби) по сокращённому алгоритму
          return this.Drob_smal_sin( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 36 :       //  Вычисления для tg(дроби) по сокращённому алгоритму
          return this.Drob_smal_tg( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 37 :       //  Вычисления для sin(sin_arctan(n, fi, a))
          return this.tg_Sin_arctg( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 38 :       //  Вычисления для th(дроби) по сокращённому алгоритму
          return this.Drob_smal_th( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 39 :       //  Вычисления для th(sin_arctan(n, fi, a))
          return this.th_Sin_arctg( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 40 :       //  Вычисления для th(дроби) по сокращённому алгоритму
          return this.Drob_smal_sh( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 41 :       //  Вычисления для th(дроби) по сокращённому алгоритму
          return this.Drob_smal_ch( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 42 :       //  Вычисления для sin(sin(n+1)/sin(n))
          return this.sin_sinDivsin( countPQ, globalVar.getFi(newX) );
          break;
      case 43 :       //  Вычисления для дроби по сокращённому алгоритму exp(Drobi)
          return this.exp_Drob_smal( countPQ, globalVar.getFi(newX) );
          break;
      case 44 :       //  Вычисления для дроби по сокращённому алгоритму sin(exp(Drobi))
          return this.sin_expDrob_smal( countPQ, globalVar.getFi(newX) );
          break;
      case 45 :       //  Вычисления для дроби по сокращённому алгоритму cos(exp(Drobi))
          return this.cos_expDrob_smal( countPQ, globalVar.getFi(newX) );
          break;
      case 46 :       //  Вычисления для дроби по сокращённому алгоритму tg(exp(Drobi))
          return this.tg_expDrob_smal( countPQ, globalVar.getFi(newX) );
          break;
      case 47 :       //  Вычисления для дроби по сокращённому алгоритму sin(sqrt*exp(Drobi)-1)
          return this.sin_sqrt_expDrob( countPQ, globalVar.getFi(newX) );
          break;
      case 48 :       //  Вычисления для дроби по сокращённому алгоритму cos(sqrt*exp(Drobi)-1)
          return this.cos_sqrt_expDrob( countPQ, globalVar.getFi(newX) );
          break;    
      case 49 :       //  Вычисления для дроби по сокращённому алгоритму cos(sqrt*exp(Drobi)-1)
          return this.tg_sqrt_expDrob( countPQ, globalVar.getFi(newX) );
          break;
      case 50 :       //  Вычисления для дроби по сокращённому алгоритму sqrt*exp(Drobi)-1
          return this.e_sqrt_expDrob( countPQ, globalVar.getFi(newX) );
          break;      
      case 51 :       //  Вычисления для функции суммы косинусов + 1
          return this.summCos_1( countPQ, globalVar.getFi(newX) );
          break;
      case 52 :       //  Вычисления для функции суммы косинусов + 1
          return this.summSin_1( countPQ, globalVar.getFi(newX) );
          break;
      case 53 :       //  Вычисления для sin( sin(n fi)/sin(n-1 fi) )
          return this.e_sin_sinDiv( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 54 :       //  Вычисления для дроби по сокращённому алгоритму 2
          return this.Drob_smal_2( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 55 :       //  Вычисления для sin( sqrt(a^2+fi^2) * sin(n fi)/sin(n-1 fi) )
          return this.sin_e_sinDiv( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 56 :       //  Вычисления для sin( sqrt(a^2+fi^2) * sin(n fi)/sin(n-1 fi) )
          return this.tg_e_sinDiv( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 57 :       //  Вычисления для sin(sin(n+1)/sin(n))
          return this.sin_x_sinDivsin( countPQ, globalVar.getFi(newX) );
          break;
      case 58 :       //  Вычисления для cos(sin(n+1)/sin(n))
          return this.cos_x_sinDivsin( countPQ, globalVar.getFi(newX) );
          break;
      case 59 :       //  Вычисления для tg(sin(n+1)/sin(n))
          return this.tg_x_sinDivsin( countPQ, globalVar.getFi(newX) );
          break;
      case 60 :       //  Вычисления для sin(a*sin((n+1)x)/sin(nx))
          return this.sin_x_SinxDivSinx( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 61 :       //  Вычисления для cos(a*sin((n+1)x)/sin(nx))
          return this.cos_x_SinxDivSinx( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 62 :       //  Вычисления для tg(a*sin((n+1)x)/sin(nx))
          return this.tg_x_SinxDivSinx( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;  
      case 63 :       //  Вычисления для sin( sqrt(a^2+fi^2) * sin(n fi)/sin(n-1 fi) )
          return this.cos_e_sinDiv( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;    
      case 64 :       //  Вычисления для sh(x* sin(n fi)/sin(n-1 fi))
          return this.sh_x_sinDivsin( countPQ, globalVar.getFi(newX) );
          break;         
      case 65 :       //  Вычисления для ch(x* sin(n fi)/sin(n-1 fi))
          return this.ch_x_sinDivsin( countPQ, globalVar.getFi(newX) );
          break;    
      case 66 :       //  Вычисления для th(x* sin(n fi)/sin(n-1 fi))
          return this.sh_ctg( countPQ, globalVar.getFi(newX) );
          break;   
      case 67 :       //  Вычисления для ch(x* sin(n fi)/sin(n-1 fi))
          return this.sh_Drobi( countPQ, globalVar.getFi(newX),  globalVar.getFi2() );
          break; 
      case 68 :       //  Вычисления для sin(n fi) new algorithm
          return this.sin_newRFi( countPQ, globalVar.getFi(newX) );
          break;       
      case 69 :       //  Вычисления для sin(n fi) new algorithm
          return this.cos_newRFi( countPQ, globalVar.getFi(newX) );
          break;    
      case 70 :       //  Вычисления для суммы sin(n fi) new algorithm
          return this.sin_newRFi_summ( countPQ, globalVar.getFi(newX) );
          break;   
      case 71 :       //  Вычисления для суммы cos(n fi) new algorithm
          return this.cos_newRFi_summ( countPQ, globalVar.getFi(newX) );
          break;   
      case 72 :       //  Вычисления для суммы (-1)^(n+1) * sin(n fi) new algorithm
          return this.sinZnakoPer_newRFi_summ( countPQ, globalVar.getFi(newX) );
          break;   
      case 73 :       //  Вычисления для суммы (-1)^(n+1) * cos(n fi) new algorithm
          return this.cosZnakoPer_newRFi_summ( countPQ, globalVar.getFi(newX) );
          break;     

      case 75 :       //  Вычисления для tg(y*ctg (n*fi))
          return this.tgY_ctgX( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;              
      case 76 :       //  Вычисления для tg(y*2sin (n*fi))
          return this.tgY_2sinX( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;   
      case 77 :       //  Вычисления для tg(y*2cos (n*fi))
          return this.tgY_2cosX( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;   
      case 78 :       //  Вычисления для tg(y*2cos (n*fi))
          return this.cosYCtgFi( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;   

      case 80 :       //  Вычисления для th(y * ctg(n*fi))
          return this.thY_ctgX( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 81 :       //  Вычисления для sh(y * ctg(n*fi))
          return this.shY_ctgX( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;
      case 82 :       //  Вычисления для ch(y * ctg(n*fi))
          return this.chY_ctgX( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;     
      case 83 :       //  Вычисления для ch(y * ctg(n*fi))
          // return this.summSin_R_Fi ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          return this.cos_summCtg_R_Fi ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          
          break;   
      case 831 :       //  Вычисления для ch(y * ctg(n*fi))
          // return this.atan_b_a ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          return this.atan_b_a_2 ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;  
      case 84 :       //  Вычисления для cosfi) + 2*sin(n*y)*sin(fi)
          return this.summ_cos_na_summ_sin ( countPQ, globalVar.getFi(newX) );
          break;  

      case 85 :       //  Вычисления для cosfi) + 2*sin(n*y)*sin(fi)
          return this.cos_p_2sin_sin ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;  
      case 86 :       //  Вычисления для cosfi) + 2*cos(n*y)*sin(fi)
          return this.cos_p_2cos_sin ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;            
      case 87 :       //  Вычисления для cosfi) + ctg(n*y)*sin(fi)
          return this.cos_p_ctg_sin ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;  
      case 88 :       //  Вычисления для cos(fi)+4sin^2(fi) + summ(cos(2n-1)fi)
          // return this.cos_p_4sin_summ_cos ( countPQ, globalVar.getFi(newX) );
          return this.tg_summ_cos_na_summ_sin ( countPQ, globalVar.getFi(newX) );
          break;  
      case 89 :       //  Вычисления для cos(fi)+4sin^2(fi) + summ((-1)^(n+1)*sin(2n-1)fi)
          // return this.cos_p_4sin_summ_sin ( countPQ, globalVar.getFi(newX) );
          return this.tg_4sin_summ_cos ( countPQ, globalVar.getFi(newX) );
          break;  
          
      case 90 :       //  Вычисления для tg( fi * Summ cos(2n-1)/Summ sin(2n-1) )
          return this.tg_summ_cos_na_summ_sin_necetn ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;  
      case 91 :       //  Вычисления для tg( fi * Summ cos(2n)/Summ sin(2n) )
          return this.tg_summ_cos_na_summ_sin_chetn ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;            
      case 92 :       //  Вычисления для tg( fi * Summ cos(2n)/Summ sin(2n) )
          return this.cos_p_summ_cos_na_summ_sin_nechetn_sin ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break; 
      case 93 :       //  Вычисления для tg( fi * Summ cos(2n)/Summ sin(2n) )
          return this.cos_p_summ_cos_na_summ_sin_chetn_sin ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break; 
      case 94 :       //  Вычисления для tg( fi * Summ cos(2n)/Summ sin(2n) )
          return this.cos_p_summ_sinChet_na_summ_sinNechet ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break; 
      case 95 :       //  Вычисления для tg( fi * Summ cos(2n)/Summ sin(2n) )
          return this.cos_p_summ_cosChet_na_summ_cosNechet ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break;           
      case 96 :       //  Вычисления для tg( fi * Summ cos(2n)/Summ sin(2n) )
          return this.cos_p_summ_cosZnakChet_na_summ_cosZnakNechet ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
          break; 
      case 97 :       //  Вычисления для tg( fi * Summ cos(2n)/Summ sin(2n) )
          return this.sin_ot_summ_cosNechet_na_summ_sinNechet ( countPQ, globalVar.getFi(newX), globalVar.getFi2() );
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
    // this.massPQ[1] = Math.cos(2);
    this.massPQ[1] = +(globalVar.getFi2());
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
  cos_sin_arctg(n, fi, a) {
    // this.massPQ[n] = Math.sqrt(a*a + fi*fi) * ( Math.sin((n+1)*Math.atan(fi/a))/Math.sin(n * Math.atan(fi/a)) ) - a;
    // return this.massPQ[n] = this.changedZiro(this.massPQ[n]);
    this.massPQ[n] = Math.sqrt(a*a + fi*fi) * ( Math.sin((n+1)*Math.atan(fi/a))/Math.sin(n * Math.atan(fi/a)) ) - a;

    return this.massPQ[n] = this.massPQ[n] //= this.massPQ[n] * (Math.sqrt(a*a + 4) * ( Math.sin((n+1)*Math.atan(2/a))/Math.sin(n * Math.atan(2/a)) ) - a);
  },
  cepnayaDrob(n, fi, a) {
    let pq1 = a,
        pqCh = a*a + fi*fi,
        pqZ = 2*a;
    for (var i = 1; i < n ; i++) {
      for (var i2 = i; i2 > 0 ; i2--) {
          if (i2 === i) {
              this.massPQ2[i2] = pqCh/pqZ;
          } else {
              this.massPQ2[i2] = pqCh/(pqZ-this.massPQ2[i2+1]);
          }
          if (i2 === 1) {
            this.massPQ[n] = pq1 - this.massPQ2[1];
          }
      }
    }
    return this.massPQ[n];
  },
  sin_Sin_arctg(n, fi, a) {
    this.massPQ[n] = Math.sqrt(a*a + fi*fi) * ( Math.sin((n+1)*Math.atan(fi/a))/Math.sin(n * Math.atan(fi/a)) ) - a;
    return this.massPQ[n] = Math.sin(this.massPQ[n]);
  },
  tg_Sin_arctg(n, fi, a) {
    this.massPQ[n] = Math.sqrt(a*a + fi*fi) * ( Math.sin((n+1)*Math.atan(fi/a))/Math.sin(n * Math.atan(fi/a)) ) - a;
    return this.massPQ[n] = Math.tan(this.massPQ[n]);
  },
  th_Sin_arctg(n, fi, a) {
    this.massPQ[n] = Math.sqrt(a*a + fi*fi) * ( Math.sin((n+1)*Math.atan(fi/a))/Math.sin(n * Math.atan(fi/a)) ) - a;
    return this.massPQ[n] = Math.tanh(this.massPQ[n]);
  },
  ch_Sin_arctg(n, fi, a) {
    let temp1 = 0;
    this.massPQ[n] = Math.sqrt(a*a + fi*fi) * ( Math.sin((n+1)*Math.atan(fi/a))/Math.sin(n * Math.atan(fi/a)) ) - a;
    if (Math.cosh(this.massPQ[n]) > 1000000) {
      this.massPQ[n] = 1000000
    } else {
      this.massPQ[n] = Math.cosh(this.massPQ[n]);
    }
    return this.massPQ[n]
  },
  sh_Sin_arctg(n, fi, a) {
    let tempSh;
    tempSh = Math.sqrt(a*a + fi*fi) * ( Math.sin((n+1)*Math.atan(fi/a))/Math.sin(n * Math.atan(fi/a)) ) - a;
    if (Math.sinh(tempSh) > 20) {
      this.massPQ[n] = Math.sinh(20);
    } else {
      if ( Math.sinh(tempSh) < -20) {
        this.massPQ[n] = Math.sinh(-20)
      } else {
        this.massPQ[n] = Math.sinh(tempSh);
      }
    }
    return this.massPQ[n]
  },
  exp_Sin_arctg(n, fi, a) {
    this.massPQ[n] = Math.sqrt(a*a + fi*fi) * ( Math.sin((n+1)*Math.atan(fi/a))/Math.sin(n * Math.atan(fi/a)) ) - a;
    if (Math.exp(this.massPQ[n]) > 1000000) {
      this.massPQ[n] = 1000000
    } else {
      if ( Math.abs(Math.exp(this.massPQ[n])) < 0.000001) {
        this.massPQ[n] = 0.000001
      } else {
        this.massPQ[n] = Math.exp(this.massPQ[n]);
      }
    }

    return this.massPQ[n]
  },

  cos_Drob(n) {
    this.massPQ[n] = Math.cos(this.massPQ[n]);
    return this.massPQ[n];
  },
  Drob_smal(n, fi, a) {
    let pq1 = a,
        pqCh = a*a + fi*fi;

    if (n === 1) {
      this.massPQ[n] = pq1;
    } else {
      this.massPQ[n] = pq1 - (pqCh/(pq1+this.massPQ[n-1]));
    }
    return this.massPQ[n];
  },

  exp_Drob_smal(n, fi) {
    let pq1 = 1,
        pqCh = 1 + (Math.PI*Math.PI)/4;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/((pq1*pq1)+this.massPQ2[n-1]));
    };

    if ( this.massPQ2[n] > 90) {
      return this.massPQ[n] = Math.exp(90);
    } else {
      if ( this.massPQ2[n] < -90 ) {
        return this.massPQ[n] = Math.exp(-90);
      }
      else {
        this.massPQ[n] = Math.exp(this.massPQ2[n]);
        return this.massPQ[n];
      }
    }
  },
  sin_expDrob_smal(n, fi) {
    let pq1 = 1,
        pqCh = 1 + (Math.PI*Math.PI)/4;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    };

    if ( this.massPQ2[n] > 90) {
      return this.massPQ[n] = Math.sin(fi*Math.exp(90));
    } else {
      if ( this.massPQ2[n] < -90 ) {
        return this.massPQ[n] = Math.sin(fi*Math.exp(-90));
      }
      else {
        this.massPQ[n] = Math.sin(fi * Math.exp(this.massPQ2[n]));
        return this.massPQ[n];
        // if ( this.massPQ[n] < -0.01325 ) {
        //   this.massPQ[n] = -1;
        //   return this.massPQ[n];
        // } else {
        //   if ( this.massPQ[n] < 0.01325 ) {
        //     this.massPQ[n] = 1;
        //     return this.massPQ[n];
        //   } else {
        //     return this.massPQ[n];
        //   }
        // }
      }
    }
  },

  cos_expDrob_smal(n, fi) {
    let pq1 = 1,
        pqCh = 1 + (Math.PI*Math.PI)/4;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/((pq1*pq1)+this.massPQ2[n-1]));
    };

    if ( this.massPQ2[n] > 90) {
      return this.massPQ[n] = Math.cos(Math.exp(90));
    } else {
      if ( this.massPQ2[n] < -90 ) {
        return this.massPQ[n] = Math.cos(Math.exp(-90));
      }
      else {
        this.massPQ[n] = Math.cos(fi * Math.exp(this.massPQ2[n]));
        return this.massPQ[n];
        // this.massPQ[n] = Math.cos(fi * Math.exp(this.massPQ2[n]));
        // if ( this.massPQ[n] < -0.000001 ) {
        //   this.massPQ[n] = -0.000001;
        //   return this.massPQ[n];
        // } else {
        //   if ( this.massPQ[n] < 0.000001 ) {
        //     this.massPQ[n] = 0.000001;
        //     return this.massPQ[n];
        //   } else {
        //     return this.massPQ[n];
        //   }
        // }
      }
    }
  },

  tg_expDrob_smal(n, fi) {
    let pq1 = 1,
        pqCh = 1 + (Math.PI*Math.PI)/4;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/((pq1*pq1)+this.massPQ2[n-1]));
    };

    if ( this.massPQ2[n] > 90) {
      return this.massPQ[n] = Math.tan(fi * Math.exp(90));
    } else {
      if ( this.massPQ2[n] < -90 ) {
        return this.massPQ[n] = Math.tan(fi * Math.exp(-90));
      }
      else {
        this.massPQ[n] = Math.tan(fi * Math.exp(this.massPQ2[n]));
        return this.massPQ[n];
        // this.massPQ[n] = Math.cos(fi * Math.exp(this.massPQ2[n]));
        // if ( this.massPQ[n] < -0.000001 ) {
        //   this.massPQ[n] = -0.000001;
        //   return this.massPQ[n];
        // } else {
        //   if ( this.massPQ[n] < 0.000001 ) {
        //     this.massPQ[n] = 0.000001;
        //     return this.massPQ[n];
        //   } else {
        //     return this.massPQ[n];
        //   }
        // }
      }
    }
  },

  sin_sqrt_expDrob(n, fi) {
    let pq1 = 1,
        pqCh = 1 + (Math.atan(fi) * Math.atan(fi));
        porog = 3.55;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    };

    if ( this.massPQ2[n] > porog) {
      return this.massPQ[n] = Math.sin(Math.sqrt(1+fi*fi) * Math.exp(porog) - 1);
    } else {
      if ( this.massPQ2[n] < -porog ) {
        return this.massPQ[n] = Math.sin(Math.sqrt(1+fi*fi) * Math.exp(-porog) - 1);
      }
      else {
        this.massPQ[n] = Math.sin(Math.sqrt(1+fi*fi) * Math.exp(this.massPQ2[n]) - 1);
        return this.massPQ[n];

      }
    }
  },

  cos_sqrt_expDrob(n, fi) {
    let pq1 = 1,
        pqCh = 1 + (Math.atan(fi) * Math.atan(fi));
        porog = 3.55;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    };

    if ( this.massPQ2[n] > porog) {
      return this.massPQ[n] = Math.cos(Math.sqrt(1+fi*fi) * Math.exp(porog) - 1);
    } else {
      if ( this.massPQ2[n] < -porog ) {
        return this.massPQ[n] = Math.cos(Math.sqrt(1+fi*fi) * Math.exp(-porog) - 1);;
      }
      else {
        this.massPQ[n] = Math.cos(Math.sqrt(1+fi*fi) * Math.exp(this.massPQ2[n]) - 1);
        return this.massPQ[n];

      }
    }
  },

  tg_sqrt_expDrob(n, fi) {
    let pq1 = 1,
        pqCh = 1 + (Math.atan(fi) * Math.atan(fi));
        porog = 3.55;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    };

    if ( this.massPQ2[n] > porog) {
      return this.massPQ[n] = Math.tan(Math.sqrt(1+fi*fi) * Math.exp(porog) - 1);
    } else {
      if ( this.massPQ2[n] < -porog ) {
        return this.massPQ[n] = Math.tan(Math.sqrt(1+fi*fi) * Math.exp(-porog) - 1);;
      }
      else {
        this.massPQ[n] = Math.tan(Math.sqrt(1+fi*fi) * Math.exp(this.massPQ2[n]) - 1);
        return this.massPQ[n];

      }
    }
  },

  e_sqrt_expDrob(n, fi) {
    let pq1 = 1,
        pqCh = 1 + (Math.atan(fi) * Math.atan(fi)),
        porog = 3.55;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    };

    if ( this.massPQ2[n] > porog) {
      return this.massPQ[n] = Math.sqrt(1+fi*fi) * Math.exp(porog) - 1;
    } else {
      if ( this.massPQ2[n] < -porog ) {
        return this.massPQ[n] = Math.sqrt(1+fi*fi) * Math.exp(-porog) - 1;
      }
      else {
        this.massPQ[n] = Math.sqrt(1+fi*fi) * Math.exp(this.massPQ2[n]) - 1;
        return this.massPQ[n];

      }
    }
  },

  //   Drob_smal(n, fi, a) {
  //   let pq1 = 1,
  //       pqCh = 1 + (Math.PI*Math.PI)/4;

  //   if (n === 1) {
  //     this.massPQ[n] = pq1;
  //   } else {
  //     this.massPQ[n] = pq1 - (pqCh/(pq1+this.massPQ[n-1]));
  //   }
  //   return this.massPQ[n];
  // },
  Drob_smal_cos(n, fi, a) {
    let pq1 = a,
    pqCh = a*a + fi*fi;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    }
    return this.massPQ[n] = Math.cos(this.massPQ2[n]);
  },
  Drob_smal_sin(n, fi, a) {
    let pq1 = a,
    pqCh = a*a + fi*fi;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    }
    return this.massPQ[n] = Math.sin(this.massPQ2[n]);
  },
  Drob_smal_tg(n, fi, a) {
    let pq1 = a,
    pqCh = a*a + fi*fi;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    }
    return this.massPQ[n] = Math.tan(this.massPQ2[n]);
  },
  Drob_smal_th(n, fi, a) {
    let pq1 = a,
    pqCh = a*a + fi*fi;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    }
    return this.massPQ[n] = Math.tanh(this.massPQ2[n]);
  },
  Drob_smal_sh(n, fi, a) {
    let pq1 = a,
    pqCh = a*a + fi*fi;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    }
    if ( this.massPQ2[n] > 10) {
      return this.massPQ[n] = Math.sinh(10);
    } else {
      if ( this.massPQ2[n] < -10) {
        return this.massPQ[n] = Math.sinh(-10);
      }
      else {
        return this.massPQ[n] = Math.sinh(this.massPQ2[n]);
      }
    }
  },
  Drob_smal_ch(n, fi, a) {
    let pq1 = a,
    pqCh = a*a + fi*fi;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(pq1+this.massPQ2[n-1]));
    }
    if ( this.massPQ2[n] > 10) {
      return this.massPQ[n] = Math.cosh(10);
    } else {
      if ( this.massPQ2[n] < -10) {
        return this.massPQ[n] = Math.cosh(-10);
      }
      else {
        return this.massPQ[n] = Math.cosh(this.massPQ2[n]);
      }
    }
  },
  sin_sinDivsin(n, fi) {
    this.massPQ[n] = Math.sin( Math.sin((n+1)*fi)/Math.sin(n*fi) );
    return this.massPQ[n];
  },
  summCos_1(n, fi) {
    if (n === 1) {
      this.massPQ[n] = 1;
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.cos((n-1)*fi);
    }
    return this.massPQ[n];
  },
  summSin_1(n, fi) {
    if (n === 1) {
      this.massPQ[n] = 1;
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.sin((n-1)*fi);
    }
    return this.massPQ[n];
  },

  e_sin_sinDiv(n, fi, a) {
    this.massPQ[n] =  Math.sqrt(a*a + fi*fi) * ( Math.sin( (n+1) * Math.atan(fi/a) ) / Math.sin(n * Math.atan(fi/a)) );
    return this.massPQ[n];
  },
  Drob_smal_2(n, fi, a) {
    let pq1 = 2*a,
        pqCh = a*a + fi*fi;

    if (n === 1) {
      this.massPQ[n] = pq1;
    } else {
      this.massPQ[n] = pq1 - (pqCh/(this.massPQ[n-1]));
    }
    return this.massPQ[n];
  },
  sin_e_sinDiv(n, fi, a) {
    this.massPQ[n] = Math.sin( Math.sqrt(a*a + fi*fi) * ( Math.sin( (n+1) * Math.atan(fi/a) ) / Math.sin(n * Math.atan(fi/a)) ) );
    return this.massPQ[n];
  },
  tg_e_sinDiv(n, fi, a) {
    this.massPQ[n] = Math.tan( Math.sqrt(a*a + fi*fi) * ( Math.sin( (n+1) * Math.atan(fi/a) ) / Math.sin(n * Math.atan(fi/a)) ) );
    return this.massPQ[n];
  },
  sin_x_sinDivsin(n, fi) {
    let pi_2 = Math.PI/2 - 0.001;
    this.massPQ[n] = Math.sin(fi * ( Math.sin((n+1)*pi_2)/Math.sin(n*pi_2) ) );
    // this.massPQ[n] = ( Math.sin((n+1)*pi_2)/Math.sin(n*pi_2) ) ;
    return this.massPQ[n];
  },
  cos_x_sinDivsin(n, fi) {
    let pi_2 = Math.PI/2 - 0.001;
    this.massPQ[n] = Math.cos( fi * (Math.sin((n+1)*pi_2)/Math.sin(n*pi_2)) );
    return this.massPQ[n];
  },
  tg_x_sinDivsin(n, fi) {
    let pi_2 = Math.PI/2 - 0.001;
    this.massPQ[n] = Math.tan( fi * (Math.sin((n+1)*pi_2)/Math.sin(n*pi_2)) );
    return this.massPQ[n];
  },

  sin_x_SinxDivSinx(n, fi, a) {
    this.massPQ[n] = Math.sin( a * ( Math.sin((n+1)*fi)/Math.sin(n*fi) ) );
    return this.massPQ[n];
  },
  cos_x_SinxDivSinx(n, fi, a) {
    this.massPQ[n] = Math.cos( a * ( Math.sin((n+1)*fi)/Math.sin(n*fi) ) );
    return this.massPQ[n];
  },
  tg_x_SinxDivSinx(n, fi, a) {
    this.massPQ[n] = Math.tan( a * ( Math.sin((n+1)*fi)/Math.sin(n*fi) ) );
    return this.massPQ[n];
  },
  cos_e_sinDiv(n, fi, a) {
    this.massPQ[n] = Math.cos( Math.sqrt(a*a + fi*fi) * ( Math.sin( (n+1) * Math.atan(fi/a) ) / Math.sin(n * Math.atan(fi/a)) ) );
    return this.massPQ[n];
  },

  sh_x_sinDivsin(n, fi) {
    let pi_2 = Math.PI/2 - 0.001,
        chislo = 10000000;
        this.massPQ[n] = Math.sinh(fi * ( Math.sin((n+1)*pi_2)/Math.sin(n*pi_2) ) );
    if ( this.massPQ[n] > chislo) {
      return this.massPQ[n] = chislo //Math.sinh(chislo);
    } else {
      if ( this.massPQ[n] < -chislo) {
        return this.massPQ[n] = -chislo // Math.sinh(-chislo);
      }
      else {
        return this.massPQ[n] = Math.sinh(fi * ( Math.sin((n+1)*pi_2)/Math.sin(n*pi_2) ) );
      }
    }
    return this.massPQ[n];
  },
  ch_x_sinDivsin(n, fi) {
    let pi_2 = Math.PI/2 - 0.001;
    this.massPQ[n] = Math.cosh(fi * ( Math.sin((n+1)*pi_2)/Math.sin(n*pi_2) ) );
    return this.massPQ[n];
  },
  sh_ctg(n, fi) {
    let chislo = 10000000;
    this.massPQ[n] = Math.sinh(fi * ( Math.cos(n) ) );
    if ( Math.abs(this.massPQ[n]) > chislo) {
      return this.massPQ[n] = chislo;
    } else {
      return this.massPQ[n];
    }
  },

  sh_Drobi(n, fi, a) {
    let pq1 = a,
        pqCh = a*a + fi*fi;

    if (n === 1) {
      this.massPQ2[n] = pq1;
    } else {
      this.massPQ2[n] = pq1 - (pqCh/(this.massPQ2[n-1]));
    }
    this.massPQ[n] = Math.sinh(this.massPQ2[n]);
    return this.massPQ[n];
  },

  sin_newRFi(n, fi) {
    this.massPQ[n] = Math.sin(n*fi);
    return this.massPQ[n];
  },
  cos_newRFi(n, fi) {
    this.massPQ[n] = Math.cos(n*fi);
    return this.massPQ[n];
  },
  sin_newRFi_summ(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + Math.sin(n*fi);
    return this.massPQ[n];
  },
  cos_newRFi_summ(n, fi) {
    this.massPQ[n] = this.massPQ[n-1] + Math.cos(n*fi);
    return this.massPQ[n];
  },
  sinZnakoPer_newRFi_summ(n, fi) {
    if (n % 2 === 0) {
      this.massPQ[n] = this.massPQ[n-1] - Math.sin(n*fi);
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.sin(n*fi);
    }
    return this.massPQ[n];
  },
  cosZnakoPer_newRFi_summ(n, fi) {
    if (n % 2 === 0) {
      this.massPQ[n] = this.massPQ[n-1] - Math.cos(n*fi);
    } else {
      this.massPQ[n] = this.massPQ[n-1] + Math.cos(n*fi);
    }
    return this.massPQ[n];
  },

  tgY_ctgX(n, fi, y) {
    this.massPQ[n] = Math.tan(fi * 1/Math.tan(n*y) );
    return this.massPQ[n];
  },
  tgY_2sinX (n, fi, y) {
    this.massPQ[n] = Math.tan(fi * 2*Math.sin(n*y) );
    return this.massPQ[n];
  },
  tgY_2cosX (n, fi, y) {
    // this.massPQ[n] = Math.tan(fi * 2*Math.cos(n*y) );
    this.massPQ[n] = Math.sin(fi * 2*Math.cos(n*y) );
    return this.massPQ[n];
  },
  cosYCtgFi(n, fi, y) {
    this.massPQ[n] = Math.cos(fi * 1/Math.tan(n*y) );
    return this.massPQ[n];
  },

  thY_ctgX(n, fi, y) {
    this.massPQ[n] = Math.tanh(fi * 1/Math.tan(n*y) );
    return this.massPQ[n];
  },
  shY_ctgX (n, fi, y) {
    let porog = 10000
    this.massPQ[n] = Math.sinh(fi * 1/Math.tan(n*y) );
    if ( this.massPQ[n] > porog) {
      return this.massPQ[n] = porog;
    } else {
      if ( this.massPQ[n] < -porog ) {
        return this.massPQ[n] = -porog;
      }
      else {
        return this.massPQ[n];
      }
    }
  },
  chY_ctgX (n, fi, y) {
    let porog = 10000
    this.massPQ[n] = Math.cosh(fi * 1/Math.tan(n*y) );
    if ( this.massPQ[n] > porog) {
      return this.massPQ[n] = porog;
    } else {
      if ( this.massPQ[n] < -porog ) {
        return this.massPQ[n] = -porog;
      }
      else {
        return this.massPQ[n];
      }
    }
  },

  summSin_R_Fi(n, fi, f) {
    let a2 = 0,
        b2 = 0;
    this.massPQ2[n] = this.massPQ2[n-1] + Math.sin(n*fi);
    a2 = (this.massPQ2[n] + Math.cos(f)) * (this.massPQ2[n] + Math.cos(f));
    b2 = Math.sin(f) * Math.sin(f);
    this.massPQ[n] = Math.sqrt(a2 + b2);
    return this.massPQ[n];
  },
  atan_b_a(n, fi, f) {
    let a = 0,
        b = 0;
    this.massPQ2[n] = this.massPQ2[n-1] + Math.sin(n*fi);
    a = this.massPQ2[n] + Math.cos(f);
    b = Math.sin(f);
    this.massPQ3[n] = Math.atan(b/a);
    return this.massPQ3[n];
  },
  cos_summCtg_R_Fi(n, fi, f) {
    let a2 = 0,
        b2 = 0;
    this.massPQ2[n] = Math.cos(fi)+ 1/Math.tan(n*f)*Math.sin(fi) +Math.cos(f);
    a2 = ( this.massPQ2[n] * this.massPQ2[n] );
    b2 = Math.sin(f) * Math.sin(f);
    this.massPQ[n] = Math.sqrt(a2 + b2);
    return this.massPQ[n];
  },
  atan_b_a_2(n, fi, f) {
    let a = 0,
        b = 0;
    a = Math.cos(fi) + 1/Math.tan(n*fi)*Math.sin(fi) + Math.cos(f);;
    b = Math.sin(f);
    this.massPQ3[n] = Math.atan(b/a);
    return this.massPQ3[n];
  },

  summ_cos_na_summ_sin(n, fi) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos(n*fi);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin(n*fi);
    this.massPQ[n] = Math.cos(fi) + this.massPQ2[n]/this.massPQ3[n] * Math.sin(fi);
    return this.massPQ[n];
  },

  cos_p_2sin_sin(n, fi, x) {
    this.massPQ[n] = Math.cos(fi) + 2*Math.sin(n*x) * Math.sin(fi);
    return this.massPQ[n];
  },
  cos_p_2cos_sin(n, fi, x) {
    this.massPQ[n] = Math.cos(fi) + 2*Math.cos(n*x) * Math.sin(fi);
    return this.massPQ[n];
  },
  cos_p_ctg_sin(n, fi, x) {
    this.massPQ[n] = Math.cos(fi) + 1/Math.tan(n*x) * Math.sin(fi);
    return this.massPQ[n];
  },
  cos_p_4sin_summ_cos(n, fi) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n-1)*fi);
    this.massPQ[n] = Math.cos(fi) + 4*(Math.sin(fi)*Math.sin(fi)) * this.massPQ2[n];
    return this.massPQ[n];
  },
  cos_p_4sin_summ_sin(n, fi) {
    if (n % 2 === 0) {
      this.massPQ2[n] = this.massPQ2[n-1] - Math.sin((2*n-1)*fi);
    } else {
      this.massPQ2[n] = this.massPQ2[n-1] + Math.sin((2*n-1)*fi);
    }
    this.massPQ[n] = Math.cos(fi) + 4*Math.cos(fi)*Math.sin(fi) * this.massPQ2[n];
    return this.massPQ[n];
  },
  tg_summ_cos_na_summ_sin(n, fi) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos(n*fi);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin(n*fi);
    this.massPQ[n] = Math.tan(this.massPQ2[n]/this.massPQ3[n]); 
    return this.massPQ[n];
  },
  tg_4sin_summ_cos(n, fi) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n-1)*fi);
    this.massPQ[n] = Math.tan(4*Math.sin(fi)*this.massPQ2[n]); 
    return this.massPQ[n];
  },

  tg_summ_cos_na_summ_sin_necetn (n, y, f) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n-1)*f);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n-1)*f);
    this.massPQ[n] =  Math.tan( y * this.massPQ2[n]/this.massPQ3[n] );
    return this.massPQ[n];
  },
  tg_summ_cos_na_summ_sin_chetn (n, y, f) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n)*f);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n)*f);
    this.massPQ[n] =  Math.tan( y * this.massPQ2[n]/this.massPQ3[n] );
    return this.massPQ[n];
  },

  cos_p_summ_cos_na_summ_sin_nechetn_sin(n, y, f) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n-1)*f);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n-1)*f);
    this.massPQ[n] =  Math.cos(y) + this.massPQ2[n]/this.massPQ3[n] * Math.sin(y);
    return this.massPQ[n];
  },
  cos_p_summ_cos_na_summ_sin_chetn_sin(n, y, f) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n)*f);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n)*f);
    this.massPQ[n] =  Math.cos(y) + this.massPQ2[n]/this.massPQ3[n] * Math.sin(y);
    return this.massPQ[n];
  },


  cos_p_summ_sinChet_na_summ_sinNechet(n, y, f) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.sin((2*n)*y);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n-1)*y);
    this.massPQ[n] =  Math.cos(y) + this.massPQ2[n]/this.massPQ3[n] * Math.sin(y);
    return this.massPQ[n];
  },
  cos_p_summ_cosChet_na_summ_cosNechet(n, y, f) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n)*y);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.cos((2*n-1)*y);
    this.massPQ[n] =  Math.cos(y) + this.massPQ2[n]/this.massPQ3[n] * Math.sin(y);
    return this.massPQ[n];
  },

  cos_p_summ_cosZnakChet_na_summ_cosZnakNechet(n, y, f) {
    if (n % 2 === 0) {
      this.massPQ2[n] = this.massPQ2[n-1] - Math.cos((2*n)*y);
      this.massPQ3[n] = this.massPQ3[n-1] - Math.cos((2*n-1)*y);
    } else {
      this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n)*y);
      this.massPQ3[n] = this.massPQ3[n-1] + Math.cos((2*n-1)*y);
    }
    this.massPQ[n] =  Math.cos(y) + this.massPQ2[n]/this.massPQ3[n] * Math.sin(y);
    return this.massPQ[n];
  },
  sin_ot_summ_cosNechet_na_summ_sinNechet(n, y, f) {
    this.massPQ2[n] = this.massPQ2[n-1] + Math.cos((2*n-1)*y);
    this.massPQ3[n] = this.massPQ3[n-1] + Math.sin((2*n-1)*y);
    this.massPQ[n] =  Math.sin(y * this.massPQ2[n]/this.massPQ3[n] );
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
    rFiAlgoritm.summFi = [];
  }
};