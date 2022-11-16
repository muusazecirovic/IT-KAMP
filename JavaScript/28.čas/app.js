const mycar = {
  id: 1,
  model: "audi",
  serija: "a4",
  boja: "crvena",
  pogon: "prednji",
  menjac: "automatski",
  servis: {
    datum: "0,4maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};
console.log(mycar);

mycar.trenutnabrzina = 0;

mycar.povecanjebrzine = function (brzina) {
  if (this.trenutnabrzina > this.maksimalnabrzina) {
    console.log(`nije moguce voziti vise od maksimalne brzine`);
  }
  this.trenutnabrzina += brzina;
};

mycar.ukoci = function () {};
