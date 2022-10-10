// Number tip podatka

// Js poznaje samo number tip podatka
// I brojevi mogu biti zapisani sa ili bey decimalnog zapisa

// NaN je JavaScript rezervisana rec koja ukazuje da broj zapravo nije legalni broj
// Ako ispitamo tip NaN rezultat dobijamo number

// console.log(isNaN(67 + "88"));

// console.log(isNaN(100 / "Apple"));
// // Infinity je vrednost kada za rezulat dobijemo broj koji je van granica maksimalog
// // broja prema racunanju u JS-u

// console.log(20 / 0);

// console.log(-1 / 0);

// // Heksadecimalni brojevi

// // U JS-u interpretira konstante kao heksadecimalne ako im je 0x

// let prom = 0xff;
// console.log(prom);

function mail1() {
  broj1 = prompt(Number("unesite broj"));
  broj2 = prompt(Number("unesite broj"));
  for (let i = 0; i < 24; i++) {
    if (i > 24) return "uneto vreme nije korektno";
  }

  for (let x = 0; x < 60; x++) {
    if (x > 60) return "uneto vreme nije korektno";
  }
}
