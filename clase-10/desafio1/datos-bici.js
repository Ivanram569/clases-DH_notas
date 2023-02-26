let fs = require ('fs');

function importarBicicletas(){
    //leer el archivo "bicicletas.json" del sisitema de archivos
    //fs.readFileSync 
    //guardame los contenidos en una variable '' (string)
    const archivosJson = fs.readFileSync("./bicicleta.json", "utf-8");
    //parseo el json a una array y lo guerdo en variable 'bicicletas'
    const bicicletas = JSON.parse(archivosJson);
    //retorno bicicletasS
    return bicicletas
}

module.exports = importarBicicletas;