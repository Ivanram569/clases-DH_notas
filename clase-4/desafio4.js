let valor1 = 10;
let valor2 = 2;
let operador = "+"

// el null es por si no da default siempre, lo de Truthy vs falsy

let resultado = null;

switch(operador){
    case "+": {
        resultado = valor1 + valor2;
        break;
    }
    case "-": {
        resultado = valor1 - valor2;
        break;
    }
    case "*": {
        resultado = valor1 * valor2;
        break;
    }
    case "/": {
        resultado = valor1 / valor2;
        break;
    }
    default: {
        console.log('Las operaciones aceptadas son: + - * /')
    }
}

if (resultado != null){
    console.log(
        "El resulttado de " + valor1 + operador + valor2 + "=" + resultado
        );
}
