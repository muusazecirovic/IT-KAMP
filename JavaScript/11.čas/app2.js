// hoisting

a = 5;

console.log(a);

// let a; deklarisanje nakon inicijalizacije nije dozvoljeno putem let
// const a;deklarisanje nakon inicijalizacije nije dozvoljeno putem let
var a; //deklarisanje nakon inicijalizacije jeste dozvoljeno putem var

console.log(myfunc());

function myfunc() {
  let a = 10;
  return a;
}

const myArrow = () => {
  let a = 14;
  return a;
};

// Dobra praksa je uvek prvo deklarisati neku funkciju pa je tek pposle toga koristiti,
// kako bi izbegli greske u kodu
