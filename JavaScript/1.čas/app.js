document.getElementById("paragraf").innerHTML =
  "Ovo je paragraf dodat od strane JavaScripta";
// ispisati u konzoli recenicu:
console.log("Danas je pretoplo .Cekamo septembar za nesto svezije vreme");

// tipovi podataka u js
// za proveru tipa varijable (promenljive) u js u se koristi:
// type of operattor

// postoje:
//    1.primitivni (primitive) tipovi podataka;
//    2.neprimitivni (non-primitive) tipovi podataka;

// 1.1.String-niz karaktera koji se upisuje unutar navodnika.
//            on moze biti zapisan unutar obicnih ili duplih navodnika (nije bitno)
//            stringovi mogu biti bilo koji karakteri A-Z,0-9
//     Zapisivanje stringa:
("Danas je toplo");
"Danas je padala kisa"`Danas je padao sneg`;
String("Danas je duvao jak vetar.");

// 1.2 Number  - predstavlja broj u js u.
//               Moze biti zapisan sa decimalom ili bez nje
//               js ne razlikuje tipove kod brojeva,vec su svi brojevi isti
//               Zapisivanje brojeva:
0.382939834838;
1;
8 - 12;
// 1.3 Big int - Ovaj tip nam sluzi za skladistenje brojeva cija vrednost prelazi granicu number
//     Zapisivanje velikih brojeva:
BigInt(324895872589874209858794878238792);

// 1.4 Boolean - Predstavlja logicki entitet i moze imate dve vrednosti:
//               1. true
//               2. false
//               Najveca primena ovog tipa podatka se nalaziu slucajevima ispitivanja
//               Zapisivanje Booleana:
// Boolean("odredjeni uslov") => true or false

// 1.5 undefined - kada ima deklarisanu promenljivu ali nema vrednost
//                 tada undefined predstavlja vrednost za tu promenljivu

// 1.6 Null - Tip podatka null se javlja za nepostojecu ili promenljivu koja
//            nije validna  ili ne postoji

// 1.7 Symbol - to je novi tip podatka u js koristi se za anonimne i
//              jedinstvene vrednosti
