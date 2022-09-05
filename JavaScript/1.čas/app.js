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

// 2.Ne primitivni tipovi podataka (Non-Primitive dyta type)
//   Primitivni tipovi podataka koriste se za sabiranje promenljivih(Variabli)
//   Dok za pisanje nizova koristimo ne primitivne tipove podataka

//   Primjeri ne primitivnih tipova podataka:

// 2.1 Array (Nizovi) - Nizovi se koriste za skladistenje vise podataka unutar jedne promenljive
//                      Nizovi u Js-u imaju mogucnost skladistenja elemenata razlicitih
//                      tipova podataka.

// Zapisivanje nizova:
// Niz stringova
["Talib", "Muhammed", "Amina", "Ahmed"][
  // Nizovi brojeva
  (15, 17, 18, 19, 18)
][
  // Niz sa razlicitim tipovima podataka
  ("Talib", 15, false, "Ahmed", 19, true)
];

//  2.2. Object(Objekti) - Objekti su glavna stvar u js u i sluze za skladistenje nekih
//                         podataka,i oni se zapisuju po principu  ime,vrednost (name,value)
//                         takodje mogu sadrzati razlicite tipove podataka
//       Zapisivanje objekata:
//{
//  marka: "BMW";
//  godinaproizvodnje: 2006;
//  boja: "crna";
//  kubikaza: "2000ks";
//}

//  2.3. Set (Setovi) - setovi su slicni ,sa razlikom kod zapisivanja izmedju ostalog
//                      njihova najbitnija karakteristika je sto ne mogu imati duplikate
//   Zapisivanje:
new Set(["jabuka", "banana", "kruska", "bostan"]);

//  2.4.Maps (mape) - slican je objektu ali se drugacije zapisuje

//  Zapisivanje:
new Map(["jabuka", "banana", "kruska", "bostan"]);

// Svi tipovi podataka koji nisu primitivni tipovi imaju object tip kada ispitujemo
// preko funkcije type of
