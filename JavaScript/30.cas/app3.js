const godine = [
  { starost: 19 },
  { starost: 19 },
  { starost: 19 },
  { starost: 18 },
  { starost: 16 },
  { starost: 18 },
  { starost: 14 },
  { starost: 17 },
];
const punoletni = godine.filter((element) => element.starost > 17);
console.log(punoletni);
