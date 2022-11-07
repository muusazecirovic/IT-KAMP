const niz = [
  "Harun",
  "Muusa",
  "Ahmed",
  "Amina",
  "Amina B",
  "Abdurahman",
  "Talib",
];
// Indexof()metoda pretrazuje niz i vraca nam index elementa koji predstavlja argument
// date metode.
// Ako se element koji pretrazujemo ne nalazi unutar niza,rezultat ce biti
function isimranhere(arr) {
  if (arr.indexOf("Imran") === -1) {
    return `Sad ce Imran doci`;
  }
}
console.log(isimranhere(niz));

// includes()metoda je ista kao kod stringova,vraca nam boolean u zavisnosti od toga
// da li se argument nalazi unutar niza na koji primenjujemo metodu

console.log(niz.includes("mejra"));
console.log(niz.includes("talib"));

// Js keys() i entries
