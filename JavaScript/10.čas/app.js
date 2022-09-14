// NASTAVAK METODA KOD STRINGOVA

// Menjanje sadrzaja se moze koristiti koriscenjem replace metode.

let recenica = "nekad zelimo zameniti sadrzaj nekim drugim";

let novarecenica = recenica.replace("sadrzaj", "tekst");

console.log(novarecenica);

let recenica2 =
  "Nekad zelimo da se na odredjenom mestu nadje sadrzaj koji nije isti  kao pre";

let novarecenica2 = recenica2.replace("sadrzaj", "tekst");

console.log(novarecenica2);

let recenica4 =
  "Nekad zelimo da se na odredjenom mestu nadje sadrzaj koji nije isti  kao pre";

let novarecenica5 = recenica4.replace(/sadrzaj/gi, "tekst");

let = recenica6 = "sta ako zelimo da budu sva slova velika";

console.log(recenica6.toUpperCase());

let recenica6 = "STA AKO ZELIMO DA BUDU SVA SLOVA VELIKA";

console.log(recenica6.toLowerCase());

var rece1 = "Ako predjemo prvi ciklus";
var rece2 = "nastavljamo sa oybiljnijim bavljenjem js om";

rece1And2 = rece1.concat(rece2);

console.log(rece1And2);

// Domaci zadatak
// Napraviti funkciju koja trazi od korisnka da unese neku recenicu,zatim funkciju koja
// vraca datu recenicu u vise oblik(spojenu u 1 string)
// prompt
// recenicu ispisanu velikim slovima
// ispisanu malim slovima
// pola ispisano velikim pola malim slovima
// ako se u recenici nadje skola neka bude zamenjena recju fakultet
//neka bude ispisano prvih 10 karaktera
//neka bude ispisano poslednjih 10 karaktera
