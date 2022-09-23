// function toLower() {
//   let recenica = prompt("unesite recenicu:");
//   return recenica.toLowerCase();
// }
// console.log(toLower());

// 2.
// const ispalindrom = function () {
//   let recenica = prompt("Unesite neku recenicu:");
//   let duzina = recenica.length;
//   let obrnutarecenica = "";
//   for (let i = duzina - 1; i >= 0; i--) {
//     obrnutarecenica += recenica[i];
//   }
//   if (obrnutarecenica === recenica) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // 3
// function lastspace(){
// let recenica=prompt("Unesite neku recenicu:");
// const
// }

// 4.
// const duzinaprvereci = function () {
//   let recenica = prompt("Unesite neku recenicu:");
//   duzina=recenica.length
//   for (let i =duzina   i++)
// };

// 5
function trecarec() {
  let recenicaA = prompt("Unesite prvu recenicu:");
  let recenicaB = prompt("Unesite drugu recenicu:");
  let prvarec = "";
  let drugarec = "";
  let prvispace = recenicaA.indexOf(" ");
  let poslednjispace = recenicaB.lastIndexOf(" ");
  for (let i = 0; i < prvispace; i++) {
    prvarec += recenicaA[i];
  }
  for (let i = poslednjispace + 1; i < recenicaB.length; i++) {
    drugarec += recenicaB[i];
  }
  return prvarec.concat(" ", drugarec);
}
console.log(trecarec());
