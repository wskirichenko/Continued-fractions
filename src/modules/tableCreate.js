"use strict";
// ---------------------------------------------------------------------------
//          Модуль таблиц с метадими его создания
// ---------------------------------------------------------------------------
const standartHeder = { // Массив с заголоквами таблицы - 6 колонки
  title : "Tаблица ",
  headers : [
    "Номер, n", "Значения частичных сумм, a_n", "Значения модуля r",
    "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
  ],
  colName: [
    "number", "pq", "modulR", "argumentFi", "eR", "eFi"
  ]
};
const col7_Header = {   // Массив с заголоквами таблицы - 7 колонки
  title : "Tаблица ",
  headers : [
    "Номер №", "Значения дроби Pn/Qn", "Значения cos(Pn/Qn)", "Значения модуля r",
    "Значения аргумента fi", "Погрешность модуля r", "Погрешность модуля fi"
  ],
  colName: [
    "number", "pq", "pqExp", "modulR", "argumentFi", "eR", "eFi"
  ]
};

const tableHeader2 = {
  0 : { // Массив с заголоквами таблицы - 4 колонки
    title : "Tаблица ",
    headers : [
      "Номер №", "Значения подходящих", "Значения модуля r",
      "Значения аргумента fi"
    ],
    colName: [
      "number", "pq", "modulR", "argumentFi"
    ]
  },
  1  : standartHeder,
  2  : standartHeder,
  3  : standartHeder,
  4  : standartHeder,
  5  : standartHeder,
  6  : standartHeder,
  7  : standartHeder,
  8  : standartHeder,
  9  : standartHeder,
  10 : standartHeder,
  11 : standartHeder,
  12 : standartHeder,
  13 : standartHeder,
  14 : standartHeder,
  15 : standartHeder,
  16 : standartHeder,
  17 : standartHeder,
  18 : standartHeder,
  19 : standartHeder,
  20 : standartHeder,
  21 : standartHeder,
  22 : standartHeder,
  23 : standartHeder,
  24 : standartHeder,
  25 : standartHeder,
  26 : standartHeder,
  27 : col7_Header,
  28 : standartHeder,
  29 : standartHeder,
  30 : standartHeder,
  31 : standartHeder,
  32 : standartHeder,
  33 : standartHeder,
  34 : standartHeder,
  35 : standartHeder,
  36 : standartHeder,
  37 : standartHeder,
  38 : standartHeder,
  39 : standartHeder,
  40 : standartHeder,
  41 : standartHeder,
  42 : standartHeder,
  43 : standartHeder,
  44 : standartHeder,
  45 : standartHeder,
  46 : standartHeder,
  47 : standartHeder,
  48 : standartHeder,
  49 : standartHeder,
  50 : standartHeder,
  51 : standartHeder,
  52 : standartHeder,
  53 : standartHeder,
  54 : standartHeder,
  55 : standartHeder,
  56 : standartHeder,
  57 : standartHeder,
  58 : standartHeder,
  59 : standartHeder,
  60 : standartHeder,
  61 : standartHeder,
  62 : standartHeder,
  63 : standartHeder,
};

const funcIamges = {
  '-1' : {
    mainImg :   "",
    secondImg : "",
    altImgText: 'Нет функции',
    text: 'Ни одна функция не выбрана'
  },
  0 : {
    mainImg :   "../../img/func-00.png",
    secondImg : "../../img/func-00.png",
    altImgText: 'sin(n fi)',
    text: 'Функция синус sin(n fi)'
  },
  1 : {
    mainImg :   "../../img/func-01.png",
    secondImg : "../../img/func-01.png",
    altImgText: 'summSin(n fi)',
    text: 'Функция сумма синусов sin(n fi)'
  },
  2 : {
    mainImg :   "../../img/func-02.png",
    secondImg : "../../img/func-02.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция сумма нечётных синусов sin(n fi)'
  },
  3 : {
    mainImg :   "../../img/func-03.png",
    secondImg : "../../img/func-03.png",
    altImgText: 'summSinDiv(n fi, sin(fi))',
    text: 'Функция сумма знкопеременного деления синусов sin(n fi)/sin(fi)'
  },
  4 : {
    mainImg :   "../../img/func-04.png",
    secondImg : "../../img/func-04.png",
    altImgText: 'summSinNechet(n fi)',
    text: 'Функция предел Никипорца через произведение sin(n fi) * sin(fi)'
  },
  5 : {
    mainImg :   "../../img/func-05.png",
    secondImg : "../../img/func-05.png",
    altImgText: 'summCos(n fi)',
    text: 'Функция сумма косинусов cos(n fi)'
  },
  6 : {
    mainImg :   "../../img/func-06.png",
    secondImg : "../../img/func-06.png",
    altImgText: 'summSinZnakoPeremen(n fi)',
    text: 'Функция сумма знакопеременых синусов (-1)^(n+1) sin(n fi)'
  },
  7 : {
    mainImg :   "../../img/func-07.png",
    secondImg : "../../img/func-07.png",
    altImgText: 'summCosZnakoPeremen(n fi)',
    text: 'Функция сумма знакопеременых косинусов (-1)^(n+1) cos(n fi)'
  },
  8 : {
    mainImg :   "../../img/func-08.png",
    secondImg : "../../img/func-08.png",
    altImgText: 'cosRaznost(n fi)',
    text: 'Функция разность косинусов 2( cos(fi) - cos((2n+1)fi) )'
  },
  9 : {
    mainImg :   "../../img/func-09.png",
    secondImg : "../../img/func-09.png",
    altImgText: 'sinDiv(n fi)',
    text: 'Функция предел Никипорца sin(n fi)/sin((n-1)fi)'
  },
  10 : {
    mainImg :   "../../img/func-10.png",
    secondImg : "../../img/func-10.png",
    altImgText: 'summSinNechetZnakoPeremen(n fi)',
    text: 'Функция сумма нечётных знакопеременных синусов sin((2n-1) fi)'
  },
  11 : {
    mainImg :   "../../img/func-11.png",
    secondImg : "../../img/func-11.png",
    altImgText: 'summCosNechetZnakoPeremen(n fi)',
    text: 'Функция сумма нечётных знакопеременных косинусов cos((2n-1) fi)'
  },
  12 : {
    mainImg :   "../../img/func-12.png",
    secondImg : "../../img/func-12.png",
    altImgText: 'summSinChetn(n fi)',
    text: 'Функция сумма чётных синусов sin((2n) fi)'
  },
  13 : {
    mainImg :   "../../img/func-13.png",
    secondImg : "../../img/func-13.png",
    altImgText: 'summCosChetn(n fi)',
    text: 'Функция сумма чётных косинусов cos((2n) fi)'
  },
  14 : {
    mainImg :   "../../img/func-14.png",
    secondImg : "../../img/func-14.png",
    altImgText: 'summSinChetnZnakoPeremen(n fi)',
    text: 'Функция сумма чётных знакопеременных синусов sin((2n) fi)'
  },
  15 : {
    mainImg :   "../../img/func-15.png",
    secondImg : "../../img/func-15.png",
    altImgText: 'summCosChetnZnakoPeremen(n fi)',
    text: 'Функция сумма чётных знакопеременных косинусов cos((2n) fi)'
  },
  16 : {
    mainImg :   "../../img/func-16.png",
    secondImg : "../../img/func-16.png",
    altImgText: 'summSin(4k-3)(n fi)',
    text: 'Функция сумма Sin((4n-3) fi)'
  },
  17 : {
    mainImg :   "../../img/func-17.png",
    secondImg : "../../img/func-17.png",
    altImgText: 'summNecet_Cos_Div_NecetSin((2k-1)fi)',
    text: 'Функция сумма дроби нечётных знакопеременных косинусов на синусы cos((2n-1) fi) / sin((2n-1) fi)'
  },
  18 : {
    mainImg :   "../../img/func-18.png",
    secondImg : "../../img/func-18.png",
    altImgText: 'summCosZnakoPeremen_DivSin((2k-1)fi)',
    text: 'Функция сумма  дроби  знакопеременного косинуса на синус ( (-1)^(n+1) * cos((2n-1) fi) ) / sin((2n-1) fi)'
  },
  19 : {
    mainImg :   "../../img/func-19.png",
    secondImg : "../../img/func-19.png",
    altImgText: 'summCosDivSin((2n-1) fi)',
    text: 'Функция сумма  cos((n fi) / sin(n fi)'
  },
  20 : {
    mainImg :   "../../img/func-20.png",
    secondImg : "../../img/func-20.png",
    altImgText: 'summChetnSinDivNecetSin((2n) fi)',
    text: 'Функция сумма дроби чётного синуса на нечётный синус sin((n fi) / sin((2n-1) fi)'
  },
  21 : {
    mainImg :   "../../img/func-21.png",
    secondImg : "../../img/func-21.png",
    altImgText: 'summCosZnakoPeremen_DivSin((2n) fi)',
    text: 'Функция сумма дроби знакопеременного нечётного косинуса на нечётный синус cos((2n-1) fi) / sin((2n-1) fi)'
  },
  22 : {
    mainImg :   "../../img/func-22.png",
    secondImg : "../../img/func-22.png",
    altImgText: 'summ_N_Sin(n fi)',
    text: 'Функция суммы (1+1/n)*sin(n fi)'
  },
  23 : {
    mainImg :   "../../img/func-23.png",
    secondImg : "../../img/func-23.png",
    altImgText: '1/2+summSin(n fi)',
    text: 'Функция сумма  (1/2)+sin(n fi) Ряд Дирихле'
  },
  24 : {
    mainImg :   "../../img/func-24.png",
    secondImg : "../../img/func-24.png",
    altImgText: '1/2+summCos(n fi)',
    text: 'Функция сумма  (1/2)+cos(n fi) Ряд Дирихле'
  },
  25 : {
    mainImg :   "../../img/func-25.png",
    secondImg : "../../img/func-25.png",
    altImgText: 'summ_N_Cos(n fi)',
    text: 'Функция суммы (1+1/n)*cos(n fi)'
  },
  26 : {
    mainImg :   "../../img/func-26.png",
    secondImg : "../../img/func-26.png",
    altImgText: 'cos_sin_arctan(n, fi, a)',
    text: 'Функция  sqrt(a*a + fi*fi) * ( sin((n+1)*atan(fi/a)) / sin(n * atan(fi/a)) ) - a;'
  },
  27 : {
    mainImg :   "../../img/func-27.png",
    secondImg : "../../img/func-27.png",
    altImgText: 'Drob(n, pq1, pqCh, pqZ)',
    text: 'Функция Дроби a+( (a^2+fi^2)/(2a - (a^2+fi^2)/2a - ...) )'
  },
  28 : {
    mainImg :   "../../img/func-28.png",
    secondImg : "../../img/func-28.png",
    altImgText: 'cos_Drob(n, pq1, pqCh, pqZ)',
    text: 'Функция  cos(Дроби)'
  },
  29 : {
    mainImg :   "../../img/func-29.png",
    secondImg : "../../img/func-29.png",
    altImgText: 'sin_Sin_arctan(n, fi, a)',
    text: 'Функция sin( sqrt(a*a + fi*fi) * ( sin((n+1)*atan(fi/a)) / sin(n * atan(fi/a)) ) - a );'
  },
  30 : {
    mainImg :   "../../img/func-30.png",
    secondImg : "../../img/func-30.png",
    altImgText: 'ch_Sin_arctan(n, fi, a)',
    text: 'Функция ch( sqrt(a*a + fi*fi) * ( sin((n+1)*atan(fi/a)) / sin(n * atan(fi/a)) ) - a );'
  },
  31 : {
    mainImg :   "../../img/func-31.png",
    secondImg : "../../img/func-31.png",
    altImgText: 'sh_Sin_arctan(n, fi, a)',
    text: 'Функция sh( sqrt(a*a + fi*fi) * ( sin((n+1)*atan(fi/a)) / sin(n * atan(fi/a)) ) - a );'
  },
  32 : {
    mainImg :   "../../img/func-32.png",
    secondImg : "../../img/func-32.png",
    altImgText: 'exp_Sin_arctan(n, fi, a)',
    text: 'Функция exp( sqrt(a*a + fi*fi) * ( sin((n+1)*atan(fi/a)) / sin(n * atan(fi/a)) ) - a );'
  },
  33 : {
    mainImg :   "../../img/func-28.png",
    secondImg : "../../img/func-28.png",
    altImgText: 'Drob_smal(n, pq1, pqCh, pqZ)',
    text: 'Функция  Вычисления Дроби по сокращённому алгоритму'
  },
  34 : {
    mainImg :   "../../img/func-34.png",
    secondImg : "../../img/func-34.png",
    altImgText: 'Drob_smal_cos(n, pq1, pqCh, pqZ)',
    text: 'Функция  Вычисления cos(Дроби) по сокращённому алгоритму'
  },
  35 : {
    mainImg :   "../../img/func-35.png",
    secondImg : "../../img/func-35.png",
    altImgText: 'Drob_smal_sin(n, pq1, pqCh, pqZ)',
    text: 'Функция  Вычисления sin(Дроби) по сокращённому алгоритму'
  },
  36 : {
    mainImg :   "../../img/func-36.png",
    secondImg : "../../img/func-36.png",
    altImgText: 'Drob_smal_sin(n, pq1, pqCh, pqZ)',
    text: 'Функция  Вычисления tg(Дроби) по сокращённому алгоритму'
  },
  37 : {
    mainImg :   "../../img/func-37.png",
    secondImg : "../../img/func-37.png",
    altImgText: 'Drob_smal_sin(n, pq1, pqCh, pqZ)',
    text: 'Функция  Вычисления tg(sin_atan)'
  },
  38 : {
    mainImg :   "../../img/func-38.png",
    secondImg : "../../img/func-38.png",
    altImgText: 'Drob_smal_th(n, fi, a)',
    text: 'Функция  Вычисления th(sin_atan)'
  },
  39 : {
    mainImg :   "../../img/func-39.png",
    secondImg : "../../img/func-39.png",
    altImgText: 'th_Sin_arctg(n, fi, a)',
    text: 'Функция  Вычисления th(sin_atan)'
  },
  40 : {
    mainImg :   "../../img/func-40.png",
    secondImg : "../../img/func-40.png",
    altImgText: 'Drob_smal_sh(n, fi, a)',
    text: 'Функция  Вычисления sh(sin_atan)'
  },
  41 : {
    mainImg :   "../../img/func-41.png",
    secondImg : "../../img/func-41.png",
    altImgText: 'Drob_smal_ch(n, fi, a)',
    text: 'Функция  Вычисления ch(sin_atan)'
  },
  42 : {
    mainImg :   "../../img/func-42.png",
    secondImg : "../../img/func-42.png",
    altImgText: 'sin_sinDivsin(n, fi)',
    text: 'Функция  Вычисления sin(sin(n+1)/sin(n))'
  },
  43 : {
    mainImg :   "../../img/func-43.png",
    secondImg : "../../img/func-43.png",
    altImgText: 'exp_Drob_smal(n, fi)',
    text: 'Функция  Вычисления exp(Drob)'
  },
  44 : {
    mainImg :   "../../img/func-44.png",
    secondImg : "../../img/func-44.png",
    altImgText: 'sin_expDrob_smal(n, fi)',
    text: 'Функция  Вычисления sin(exp(Drob))'
  },
  45 : {
    mainImg :   "../../img/func-45.png",
    secondImg : "../../img/func-45.png",
    altImgText: 'cos_expDrob_smal(n, fi)',
    text: 'Функция  Вычисления cos(exp(Drob))'
  },
  46 : {
    mainImg :   "../../img/func-46.png",
    secondImg : "../../img/func-46.png",
    altImgText: 'tg_expDrob_smal(n, fi)',
    text: 'Функция  Вычисления tg(exp(Drob))'
  },
  47 : {
    mainImg :   "../../img/func-47.png",
    secondImg : "../../img/func-47.png",
    altImgText: 'sin_sqrt_expDrob(n, fi)',
    text: 'Функция  Вычисления sin(sqrt*exp(Drob)-b)'
  },
  48 : {
    mainImg :   "../../img/func-48.png",
    secondImg : "../../img/func-48.png",
    altImgText: 'cos_sqrt_expDrob(n, fi)',
    text: 'Функция  Вычисления cos(sqrt*exp(Drob)-b)'
  },
  49 : {
    mainImg :   "../../img/func-49.png",
    secondImg : "../../img/func-49.png",
    altImgText: 'tg_sqrt_expDrob(n, fi)',
    text: 'Функция  Вычисления tg(sqrt*exp(Drob)-b)'
  },
  50 : {
    mainImg :   "../../img/func-49.png",
    secondImg : "../../img/func-49.png",
    altImgText: 'e_sqrt_expDrob(n, fi)',
    text: 'Функция  Вычисления sqrt*exp(Drob)-b)'
  },
  51 : {
    mainImg :   "../../img/func-05.png",
    secondImg : "../../img/func-05.png",
    altImgText: 'summCos_1(n, fi)',
    text: 'Функция сумма косинусов cos(n fi) +1 '
  },
  52 : {
    mainImg :   "../../img/func-01.png",
    secondImg : "../../img/func-01.png",
    altImgText: 'summSin_1(n, fi)',
    text: 'Функция сумма синусов sin(n fi) +1 '
  },
  53 : {
    mainImg :   "../../img/func-53.png",
    secondImg : "../../img/func-53.png",
    altImgText: 'e_sin_sinDiv(n, fi, a)',
    text: 'Функция синус от предела Никипорца e*sin( sin(n fi)/sin((n-1)fi) ) '
  },
  54 : {
    mainImg :   "../../img/func-54.png",
    secondImg : "../../img/func-54.png",
    altImgText: 'Drob_smal_2(n, fi, a)',
    text: 'Функция  Вычисления Дроби 2 по сокращённому алгоритму'
  },
  55 : {
    mainImg :   "../../img/func-55.png",
    secondImg : "../../img/func-55.png",
    altImgText: 'sin_e_sinDiv(n, fi, a)',
    text: 'Функция  Вычисления для sin( sqrt(a^2+fi^2) * sin(n fi)/sin(n-1 fi) )'
  },
  56 : {
    mainImg :   "../../img/func-56.png",
    secondImg : "../../img/func-56.png",
    altImgText: 'tg_e_sinDiv(n, fi, a)',
    text: 'Функция  Вычисления для tg( sqrt(a^2+fi^2) * sin(n fi)/sin(n-1 fi) )'
  },
  57 : {
    mainImg :   "../../img/func-57.png",
    secondImg : "../../img/func-57.png",
    altImgText: 'sin_x_sinDiv(n, fi)',
    text: 'Функция  Вычисления для sin( x*(sin(n+1)/sin(n)) )'
  },
  58 : {
    mainImg :   "../../img/func-58.png",
    secondImg : "../../img/func-58.png",
    altImgText: 'cos_x_sinDiv(n, fi)',
    text: 'Функция  Вычисления для cos( x*(sin(n+1)/sin(n)) )'
  },
  59 : {
    mainImg :   "../../img/func-59.png",
    secondImg : "../../img/func-59.png",
    altImgText: 'tg_x_sinDiv(n, fi)',
    text: 'Функция  Вычисления для tg( x*(sin(n+1)/sin(n)) )'
  },
  60 : {
    mainImg :   "../../img/func-57.png",
    secondImg : "../../img/func-57.png",
    altImgText: 'sin_x_SinxDivSinx(n, fi, a)',
    text: 'Функция  Вычисления для sin( x*((sin(n+1)x)/sin(nx)) )'
  },
  61 : {
    mainImg :   "../../img/func-58.png",
    secondImg : "../../img/func-58.png",
    altImgText: 'cos_x_SinxDivSinx(n, fi, a )',
    text: 'Функция  Вычисления для cos( x*((sin(n+1)x)/sin(nx)) )'
  },
  62 : {
    mainImg :   "../../img/func-59.png",
    secondImg : "../../img/func-59.png",
    altImgText: 'tg_x_SinxDivSinx(n, fi, a)',
    text: 'Функция  Вычисления для tg( x*((sin(n+1)x)/sin(nx)) )'
  },
  63 : {
    mainImg :   "../../img/func-63.png",
    secondImg : "../../img/func-63.png",
    altImgText: 'cos_e_sinDiv(n, fi, a)',
    text: 'Функция  Вычисления для cos( sqrt(a^2+fi^2) * sin(n fi)/sin(n-1 fi) )'
  },
};
let tableWidth = 1200;
const tableMain = {
  description: "Create Table",

  numberColumns(type_table) {                 // Вычисления кол-ва колонок для очередной таблицы
    return tableHeader2[type_table].headers.length;
  },

  // Метод создания заголовков для таблицы
  addHed(type_table, i) {             // где i - номер текущей таблицы (countPushs)
    number_of_columns = tableHeader2[type_table].headers.length; // Вычисляем количество колонок в заголовоке
    h2 = document.createElement('h2');        // Создаём элемент h2
    main_panel.appendChild(h2);               // Добавляем внутрь 'main_panel' новый h2
    h2.className = 'h2-table';                // Присваеваем h2 класс
    $(".h2-table")[i].innerHTML = tableHeader2[type_table].title + (i+1); // Добавляем title из массива tableHeader

    div = document.createElement('div');      // Создаём элемент div (в котором будет картинка формулы с текущей функцией)
    main_panel.appendChild(div);              // Добавляем внутрь 'main_panel' новый div
    div.className = 'func-img';               // Присваеваем div класс
    if (type_table < 10) {
      $(".func-img").addClass(`func-0${type_table}`); // Добавляем класс c изображением формулы текущей функции
    } else {
      $(".func-img").addClass(`func-${type_table}`);  // Добавляем класс c изображением формулы текущей функции
    }

    p = document.createElement('p');          // Создаём элемент p (в котором будет значения текущего fi)
    main_panel.appendChild(p);                // Добавляем внутрь 'main_panel' новый p
    p.className = 'p-table';                  // Присваеваем p класс
    $(".p-table")[i].innerHTML = "fi = " + globalVar.getMassX(i); // Добавляем значения очередного х

    table = document.createElement('table');  // Создаём элемент table
    main_panel.appendChild(table);            // Добавляем внутрь 'main_panel' новый table
    table.setAttribute("id", `table_${i}`);   // Добавляем id для table
    table.className = 'table-main';           // Присваеваем table класс table-main

    thead = document.createElement('thead');  // Создаём элемент thead
    $(".table-main")[i].appendChild(thead);   // Добавляем внутрь 'table-main' новый thead
    thead.setAttribute("id", `thead_${i}`);   // Добавляем id для thead
    thead.className = 'thead';                // Присваеваем thead класс

    tr = document.createElement('tr');        // Создаём элемент tr
    $(".thead")[i].appendChild(tr);           // Добавляем внутрь таблицы новый tr

    for (var j = 0; j < number_of_columns; j++) {  // Выводим заголовки таблицы начиная от 0 до количество колонок
      th = document.createElement('th');      // Создаём элемент th
      tr.appendChild(th);                     // Добавляем внутрь tr новый th
      th.className = 'th-hed';                // Присваеваем th класс
      // $(".th-hed")[col_tables+j].innerHTML = tableHeader2[type_table].headers[j]; // Добавляем заголовок из массива tableHeader2.headers
      $(".th-hed")[globalVar.getNumbTables() +j].innerHTML = tableHeader2[type_table].headers[j]; // Добавляем заголовок из массива tableHeader2.headers
    }

    tbody = document.createElement('tbody');  // Создаём элемент tbody
    tbody.setAttribute("id", `tbody_${i}`);   // Добавляем id для tbody
    tbody.className = 'tbody';                // Присваеваем tbody класс
    $(".table-main")[i].appendChild(tbody);   // Добавляем внутрь 'table-main' новый tbody

    // Вычисляем ширину таблицы
    tableWidth = $("thead").outerWidth()
    $(".func-img").width(tableWidth);         // Устанавливаем ширену изображения формулы равной ширене таблицы

    globalVar.setNumbTables(globalVar.getNumbTables() + number_of_columns)
  },

  // Метод создания строки в main_tabl
  createTr() {
    tr = document.createElement('tr');        // Создаём элемент tr
    tr.className = 'tabl';                    // Присваеваем ему класс tabl
    tbody.appendChild(tr);                    // Добавляем внутрь (tbody className="tbody") новый tr
  },

  // Метод создания ячейки в строке main_tabl
  createTd(n) {
    td = document.createElement('td');  // Создаём элемент td
    td.className = 's1';                // Присваеваем ему класс
    $(".tabl")[n].appendChild(td);      // Добавляем внутрь строки (tr) новую ячейку (td)
  },

  // Метод удаления заданного элемента
  clearElement(element) {
    let elementLength = element.length; // Получаем количество элементов
    for (let i = elementLength-1; i > -1; i--) {
      element[i].remove();              // Удаляем очередной элемент из DOM дерева
    }
  }
};

const descripFunc = {
  description: "Description function",
  descript(numberFunc) {
    console.log('background-image= ', funcIamges[numberFunc].mainImg);
    $("#img_func").css("backgroundImage", 'url(' + funcIamges[numberFunc].mainImg + ')' );
    $(".modal-func__top__text")[0].innerHTML = funcIamges[numberFunc].text;
  }
}
