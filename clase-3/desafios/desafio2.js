let nombre = 'Ivan';
let apellido = 'Ramirez';
let sueldoActual = 10000;
let porcentajeAumento = 50;

let calculoAumento = ((sueldoActual * porcentajeAumento) / 100);

let nuevoSueldo = sueldoActual + calculoAumento;

console.log('Estimado: '+nombre+' '+apellido + '\nEn base a su sueldo actual:\n$'+ sueldoActual + '\nHa recibido un aumento del %' +
porcentajeAumento + ':\n' + '$' + calculoAumento + '\nSu nuevo sueldo es de:\n$'+nuevoSueldo)
