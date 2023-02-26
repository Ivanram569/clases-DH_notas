const velocidadAvion = 270;
const altura = 140
let velocidaCorrecta = true
let alturaCorrecta = true

if(velocidadAvion > 268 && velocidadAvion < 278){
    velocidaCorrecta = true 
}else{
    velocidaCorrecta = false
};

if(altura > 150 && altura < 300){
    alturaCorrecta = true
}else{
    velocidaCorrecta = false
};

if(alturaCorrecta && velocidaCorrecta){
    console.log("Su aluta es de: " + altura + "m., y su velocidad es de: " + velocidadAvion + "km/hr. Por ende puede aterrizar.");
} else {
    console.log("Su aluta es de: " + altura + "m., y su velocidad es de: " + velocidadAvion + "km/hr. Recuerde que la velocidad debe estar comprendida entre 268 a 278 km/hr, y la altura debe estar comprendida entre 150 m a 300 m. Por ende no puede aterrizar.");
};