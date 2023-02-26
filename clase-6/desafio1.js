const array = ["Tv","Heladera","Cocina","Licuadora","Microondas","Pava Electrica"];

/*Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por
la consola los resultados.*/
console.log(array[2]);

//Extraer el primer elemento del array y agregarlo al final del mismo.

const primerElemento = array.shift();
array.push(primerElemento);
console.log(array);

//Agregar al final del array dos (2) nuevos productos.

array.push("Aspiradora", "Tostador");
console.log(array);

//Mostrar por la consola la cantidad de elementos que contiene el array.
console.log(array.length);

/*Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.*/

const busqueda = "Tostador";
if (array.indexOf(busqueda) != -1){
    console.log("Producto encontrado.");
    }
    else
    {
    console.log("El producto buscado no existe.")
    }

//Unificar todos los elementos del array en una cadena de texto (string), separando los
//elementos por espacios en blanco.

const string = array.join(" ");
console.log(string);

//Determinar la cantidad de elementos que posee la cadena de texto obtenida.
const cantElementos = string.length;
console.log(cantElementos);

//Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
//función adecuada para ello.

const nuevoString = string.replace("Tostador","Notebook");
console.log(nuevoString);

/*Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma.*/

const nuevoArray = nuevoString.split(" ");
console.log(nuevoArray);