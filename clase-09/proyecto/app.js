let peliculas = require("./peliculas");
function mensaje(id) {
    for(let i = 0; i < peliculas.length ; i++ ){
       if (peliculas[i].id == id) {
        return ("La pelicula numero " + peliculas[i].id + " se llama " + peliculas[i].nombre);
        }
    }
    return "Id de pelicula no encontrada";
}

console.log(mensaje(8));