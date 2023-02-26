/*const importarCollectibles = require("./collectibles");

let hotToys = importarCollectibles("Hot Toys");
let bandai = importarCollectibles("Bandai");
let starWars = importarCollectibles("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

console.log(unifiedCollectibles)*/

//Deberás importar el módulo creado
const importar = require("./collectibles");
//Crear una variable por cada una de las marcas, invocando a la función importar y pasarle como argumento cada una de las marcas de las figuras coleccionables hotToys - bandai - starWars.
let hotToys = importar("Hot Toys");
let Bandai = importar("Bandai");
let starWars = importar("Star Wars");

//Crear un único array (unifiedCollectibles) con todas las listas de las marcas de las figuras coleccionables. Usa Spread Operator.

let unifiedCollectibles = [...hotToys,...Bandai,...starWars];

console.log(unifiedCollectibles);

//Crear un objeto literal (collectibles) que tenga como primer atributo (figuras) y contenga la lista de todas las figuras importadas.
//const collectibles = {
  //  figuras: unifiedCollectibles,
   // }
