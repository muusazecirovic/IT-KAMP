// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Rekurzija-pozivanje funkcije unutar iste
// Moze se postici efekatt petlje

function ispisivanje(n) {
  console.log(n);
  if (n - 1 > 0) {
    return ispisivanje(n - 1);
  }
}
console.log(ispisivanje(10));

// niz.filter(function(el)){
// return el>2
// }

// callback predstavlja funkciju koja se nadje kao argument neke druge funkcije(metode).
// let talib = "talib";
// function main(func) {
//   console.log("Ovo je kod koji se izvrsava unutar glavne funkcije");
//   func(talib);
// }
// main();

// Napraviti glavnu func koja ispisuje poruku da se radi o glavnoj funkciji,ali
// ispod toga neka se izvrsi pozivanje callback funkcje koja ima zadatak da izracuna aritmeticku
// sredinu 3 broja koji predstavljaju argument te callback funkcije
