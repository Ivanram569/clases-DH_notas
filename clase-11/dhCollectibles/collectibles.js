const fs = require ('fs');
const path = require ("path");
//Crear una funcion en base a la marca recibida, busque los datos de un archivo determinado.

function importar(nombreMarca){

switch (nombreMarca){
    case "Hot Toys":
        ruta = path.join (__dirname,"./datos/figura1.json");
        break;
    case "Bandai":
        ruta = path.join (__dirname,"./datos/figura2.json");
        break;
    case "Star Wars":
        ruta = path.join (__dirname,"./datos/figura3.json");
}
figura = fs.readFileSync(ruta,"utf-8");
resultado = JSON.parse(figura)
return resultado;
}

module.exports = importar;