globalVar = {
  Numb : 1,           // Номер подходяшей (номер строки в табл, Первая колонка)
  fi   : document.getElementsByName("fi_1")[0].value,
  fi2  : document.getElementsByName("fi_2")[0].value,
  kolN : document.getElementById("kol-elementov").value,
  get_kolN() {
    return kolN = document.getElementById("kol-elementov").value
  },
  get_fi() {
    return fi = document.getElementsByName("fi_1")[0].value
  }
}