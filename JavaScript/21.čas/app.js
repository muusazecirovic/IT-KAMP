const firsttask = (arr) => {
  const parni = [];
  for (let broj of arr) {
    if (broj % 2 === 0) {
      parni.push(broj);
    }
  }
  return parni;
};
console.log(firsttask([-66, -65, -576, 5, 6]));
