let movimientos = [50,-1000,29,-54,70];
let nombre ="";
let apellido ="";
function calcular(operaciones){
let retiro = 0;
let deposito = 0;
let saldoActual = 0;
  for(let i = 0; i < operaciones.length  ; i++){  
  if (operaciones[i]<0 ){
    retiro = retiro + operaciones[i];
    
   }else if (operaciones[i]>0){
    deposito = deposito + operaciones[i];
}
}
saldoActual = retiro + deposito;
let datos = [retiro,deposito,saldoActual];
return datos;
}

console.log(calcular(movimientos));
