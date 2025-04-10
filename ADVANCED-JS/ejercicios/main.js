// 1. Funciones flecha

// Convierte la siguiente función en una función flecha:

// function greetings() {
//   return "Hola";
// }

const greetings = () => {
  return "Hola";
};

console.log(greetings());

// Convierte la siguiente función en una función flecha en línea:

// function division(a, b) {
//   return a / b;
// }

const division = (a, b) => {
  return a / b;
};

console.log(division(4, 2));

// También se puede hacer de una manera más corta de este modo:

const division2 = (a, b) => a / b;

// Convierte la siguiente función en una función flecha:

// function myName(name) {
//   return `Mi nombre es ${name}`;
// }

const myName = (name) => {
  return `Mi nombre es ${name}`;
};

console.log(myName("Ainhoa"));

// También se puede hacer de una manera más corta de este modo:

const myName2 = (name) => `Mi nombre es ${name}`;

// Convierte las siguientes funciones en funciones flecha:

// function test2() {
// console.log("Función test 2 ejecutada.");
// }

// function test1(callback) {
// callback();
// }

const test2 = () => {
  console.log("Función test 2 ejecutada.");
};
const test1 = (callback) => {
  callback();
};

console.log(test1(test2));

// 2. Foreach

// Utiliza el siguiente array para resolver los próximos ejercicios:

let people = [
  { name: "Jamiro", age: 45 },
  { name: "Juan", age: 35 },
  { name: "Paco", age: 34 },
  { name: "Pepe", age: 14 },
  { name: "Pilar", age: 24 },
  { name: "Laura", age: 24 },
  { name: "Jenny", age: 10 },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola.

let mayores25 = [];

people.forEach((persona) => {
  if (persona.age >= 25) mayores25.push(persona.age);
});
console.log(mayores25);

// Crea un array con la gente que empieza por J.

let personasJ = [];

people.forEach((persona) => {
  if (persona.name.startsWith("J")) personasJ.push(persona.name);
});
console.log(personasJ);

// 3. Map

// Utilizando el array people de antes, crea un array con la gente mayor de 25 años y muéstralo por consola.

const mayorDe25 = [];

const listadoMayores = people.map((person) => {
  if (person.age >= 25) {
    mayorDe25.push(person.name);
  }
});

console.log(mayorDe25);

// Crea un array con la gente que empieza por J.

const j = [];

people.map((person) => {
  if (person.name.startsWith("J")) {
    j.push(person.name);
  }
});

// Dado el siguiente array, crea otro que sea el resultado de elevar cada número a si mismo:

// const numbers = [ 4, 5, 6, 7, 8, 9, 10]
// // Resultado esperado
// // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const numbers = [4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map((number) => number ** number);

console.log(newNumbers);

// 4. Filter

// Utilizando el array people de antes, crea un array con la gente mayor de 25 años y muéstralo por consola.

const mayoresDe25 = people.filter((persona) => persona.age >= 25);

console.log(mayoresDe25);

// Crea un array con la gente que empieza por J.

const empiezanConJ = people.filter((persona) => persona.name.startsWith("J"));

console.log(empiezanConJ);

// Crea un segundo array que devuelva los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = numbers2.filter((number) => number % 2 !== 0);
console.log(impares);

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];
/* [
			'Que rico Tempeh me voy a comer!',
			'Que rica Tofu burguer me voy a comer!'
			]
	*/

let comidaVegana = [];

const vegan = foodList.filter((food) => food.isVeggie === true);
vegan.forEach((food) => {
  comidaVegana.push(`Que rico ${food.name} me voy a comer!`);
});
console.log(comidaVegana);

//  5. Reduce

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const nums = [39, 2, 4, 25, 62];

const multiplicacion = nums.reduce(
  (acumulador, numero) => acumulador * numero,
  1
);
console.log(multiplicacion); // 483600

// ### Extras

// ## Map

// Dado el siguiente array, crea un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

// // Resultado esperado
// /*
//     [
//       'Pepe es TheBoss y le gusta leer y ver pelis',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Luis es programador y le gusta dormir y comprar',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Carlos es secretario y le gusta fútbol y queso'
//     ]
//  */

const frasesStaff = staff.map((persona) => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(
    " y "
  )}`;
});
console.log(frasesStaff);

// - [ ] 2.- Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];

const frasesComida = foodList2.map((comida) => {
  switch (comida) {
    case "Pizza":
      return "Como soy de Italia, amo comer Pizza";
    case "Ramen":
      return "Como soy de Japón, amo comer Ramen";
    case "Paella":
      return "Como soy de Valencia, amo comer Paella";
    case "Entrecot":
      return "Aunque no como carne, el Entrecot es sabroso";
    default:
      return `Me gusta comer ${comida}`;
  }
});

console.log(frasesComida);

// //Resultado esperado
// /* [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
//    ]
// */

// ## Filter

// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/

const productosCaros = inventory.filter((producto) => producto.price > 300);

const nombres = productosCaros.map((producto) => producto.name);

console.log(nombres);

// ## Reduce

// Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  "Me",
  "llamo",
  "Ainhoa",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

// // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const fraseFinal = sentenceElements.reduce(
  (frase, palabra) => frase + " " + palabra
);

console.log(fraseFinal);
