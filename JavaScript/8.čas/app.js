// danas radimo funkcije

function nazivfunkcije() {
  return 5;
}
console.log(nazivfunkcije());
// drugi primer
function zbirtriipet() {
  return 3 + 5;
}

console.log(zbirtriipet());

// treci primer
// prilikom definisanja funkcije u zagradu stavljamo(prema potrebi)parametre
// koje funkcija koristi unutar sebe.
function zbirdvabroja(prvibroj, drugibroj) {
  return prvibroj + drugibroj;
}
// prilikom pozivanja funkcije u zagradi stavljamo argumente na osnovu kojih se funkcija izvrsava
console.log(zbirdvabroja(5, 14));
