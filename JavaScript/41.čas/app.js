// const je skraceno od constant i ne menja se
// var je varijabla odnosno promenljiva
// let je promenljiva unutar jednog blok koda

const randomObj = {
  name: "Elmaz",
  lname: "Niksic",
  city: "Novi Pazar",
  age: 26,
};

// destrukturizacija objekta-object destruction
// Razlaganje delova objekta na zasebne promenjive

// const { name, city } = randomObj;
// console.log(name);

// randomObj.age=27

const newobj = {
  ...randomObj,
  age: 27,
};

// console.log(newobj);
newobj.age === 27 ? console.log(newobj) : console.log("error");

// Class based components su komponente bazirane na klasama i metodama
