"use strict";

trigonometFunc = {
  description: "Trigonometric functions",

  massPQ : [],
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
  getMassPQ(i) {
    return this.massPQ[i];
  },
};