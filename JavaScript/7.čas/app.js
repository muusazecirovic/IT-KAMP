//let suma = 0;
//let brojdeljivih = 0;
//let broj = 1;
//let broj2 = Number(prompt("unesite neki broj"));
//for (broj; broj <= broj2; broj++) {
//  if (broj % 5 === 0) {
//    suma += broj;
//    brojdeljivih += 1;
//  }
//}
//console.log(
//  "Broj deljivih brojeva od 1 do" +
//    broj2 +
//    "sa 5 je:" +
//    brojdeljivih +
//    "Suma deljivih brojeva sa 5 je:" +
//    suma
//);

// let i = 99;
// let m = -99;
// for (i; i >= m; i--) {
//   if (i % 4 === 0) console.log(i + 14);
// }

//izracunati aritmeticku sredinu brojeva deljivih sa 3
//vrsi se od 3 do 17
zbirbr = 0;
suma = 0;
let i = 3;
let m = 17;
for (i; i <= m; i++) {
  if (i % 3 === 0) {
    suma += 1;
    zbirbr += i;
  }
}
aritsredina = zbirbr / suma;
console.log(aritsredina);
