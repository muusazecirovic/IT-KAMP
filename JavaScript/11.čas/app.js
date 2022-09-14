const domaci = function () {
  let nekarecenica = prompt("unesite neku recenicu:");
  let duzina = nekarecenica.length;
  let polaDuzine = duzina / 2;
  let prvideo = nekarecenica.substr(0, polaDuzine).toUpperCase;
  let drugideo = nekarecenica.substr(polaDuzine, duzina).toLowerCase;

  let prva = nekarecenica.toUpperCase();
  let druga = nekarecenica.toLowerCase();
  let treca = prvideo.concat(drugideo);
  let cetvrta = nekarecenica.replace(/skola/gi, "fakultet");
  let peta = nekarecenica.slice(0, 10);
  let sesta = nekarecenica.slice(-10, duzina);
  return prva.concat(
    "\n",
    druga,
    "\n",
    treca,
    "\n",
    cetvrta,
    "\n",
    peta,
    "\n",
    sesta
  );
};

console.log(domaci());
