const pagoMes = 10000;
const consumoKWH = 200;

let resultado = consumoKWH > 300 ? ((pagoMes * 20)/100) + pagoMes : pagoMes;

console.log("Debido a que su hogar tuvo un consumo de "+ consumoKWH + "kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + resultado);