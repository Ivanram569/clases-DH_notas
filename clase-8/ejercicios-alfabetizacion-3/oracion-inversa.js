function InvertirTexto(oración) {
    //Obtengo el largo de la oración para poder recorrerla
    const largo = oración.length;
    //Inicializo la oración invertida
    let oraciónInvertida = "";
    //Ciclo para recorrer cada posición de la oración
    // i va de largo-1 a 0
    for (let i = largo - 1; i >= 0; i--) {
    //Agrego los caracteres desde el final de oración
    //Al principio de oraciónInvertida
    oraciónInvertida += oración[i];
    }
    //Devuelvo la oraciónInvertida
    return oraciónInvertida;
}

console.log(InvertirTexto('hola me llamo ivan ramirez'))