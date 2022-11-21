const automobil = {
  marka: "audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quatrro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP servis",
    vikend: "od 17 free",
    satnakarta: 50,
    dnevnakarta: 200,
    mesecnakarta: 2000,
  },
};
//Napraviti funkciju koja ce povecati vrednost svake karte za 20%,
//Nakon toga je primeniti za automobil objekat i ispisati automobil nakon toga

function povecajza20() {
  this.satnakarta += this.satnakarta * 0.2;
  this.dnevnakarta += this.dnevnakarta * 0.2;
  this.mesecnakarta += this.mesecnakarta * 0.2;
  return `Nove vrednosti za parking karte su ${this.satnakarta} ${this.dnevnakarta} ${this.mesecnakarta}`;
}
console.log(povecajza20.call(automobil.garaza));
console.log(automobil);
