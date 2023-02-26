/*function reporteDePasajeros(estacion){
    let mensajeFinal = []
    switch(estacion){
        case 0:
        mensajeFinal = ['En la estación 0 hay 200 pasajeros arriba del tren'];
        break;
        case 1:
        mensajeFinal = ['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren'];
        break;
        case 2:
        mensajeFinal = ['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren'];
        break;
        case 3:
        mensajeFinal = ['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren'];
        break;
        case 4:
        mensajeFinal = ['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren', 'En la estación 4 hay 280 pasajeros arriba del tren'];
        break;
        case 5:
        mensajeFinal = ['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren', 'En la estación 4 hay 280 pasajeros arriba del tren', 'En la estación 5 hay 320 pasajeros arriba del tren'];
        break;
        default:
        mensajeFinal = 'Ingrese un numero de estación válido';
    }

    return mensajeFinal;
}*/
function reporteDePasajeros(estacion){
    const informes = [];
    let pasajeros = 200
    for( let i = 0; i <= estacion ; i++){
        switch(i){
            case 0:
                break;
            case 5:
                pasajeros += 120
                pasajeros -= 80
            break;
            default:
                pasajeros += 50;
                pasajeros -=30;
        }
        informes.push('En la estación '+ i + ' hay '+pasajeros+' pasajeros arriba del tren')
    }
    return informes
}



console.log(reporteDePasajeros(-3));