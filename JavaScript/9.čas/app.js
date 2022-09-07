function povrsina(prvibroj, drugibroj) {
  if (prvibroj === drugibroj) {
    return "Povrsina kvadrata iznosi" + prvibroj * drugibroj;
  } else {
    return "Povrsina pravougaonika iznosi" + prvibroj * drugibroj;
  }
}

// console.log(povrsina(15, 2));
// console.log(povrsina(4, 4));

// 2.nacin

const myfunction = function () {
  // radnja koja se obavlja
};

// Napraviti funkciju koja vraca zbir kvadrata dva broja
const mysecondfunction = function (prva, druga) {
  if (druga === undefined) {
    return prva ** 2 + 1;
  } else {
    return prva ** 2 + druga ** 2;
  }
};
console.log(mysecondfunction(5));
console.log(mysecondfunction(5, 4));

const mysecondfunction2 = function (prva, druga = 1) {
  return prva ** 2 + druga ** 2;
};
console.log(mysecondfunction2(3));
console.log(mysecondfunction2(3, 3));

// Ako neka funkcija ima difoltnu vrednost,ta vrednost se stavlja na poslednje mesto
// ako ih je vise,na poslednjim pozicijama
// Ne sme se desiti slucaj da prva vrednost bude difoltna a nakon nje ona koja nema
// difoltnu vrednost.

// arrow function:

const arrowfunc = () => {
  // kod za izvrsavanje
};

// napraviti funkciju koja na osnovu unetof argumenta vraca jedno od tri stanja:
// ako je unet pozitivan broj ispisuje poruku "ARGUMENT JE POZITIVAN BROJ"
// ako je unet NEGATIVAN broj ispisuje poruku "ARGUMENT JE NEGATIVAN BROJ"
// ako je uneta nula,ispisuje poruku"ARGUMENT JE NULA"
// ako je nije unet broj ispisuje poruku "ARGUMENT NIJE BROJ"

const arrowfunc1 = (broj) => {
  if (typeof broj !== "number") {
    return "ARGUMENT NIJE BROJ";
  } else if (broj < 0) {
    return "ARGUMENT JE NEGATIVAN BROJ";
  } else if (broj > 0) {
    return "ARGUMENT JE POZITIVAN BROJ";
  } else if (broj === 0) {
    return "ARGUMENT JE NULA";
  }
};
console.log(arrowfunc1(9));
console.log(arrowfunc1(-9));
console.log(arrowfunc1(0));
console.log(arrowfunc1("2"));
