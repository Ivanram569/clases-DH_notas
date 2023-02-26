function asientosDisponibles(disponibles, asientoSolicitado){
    let mensajeFinal = ''

    for (i = 0; i < disponibles.length ; i++){
        let unAsientoDisponible = disponibles[i]
        if (asientoSolicitado == unAsientoDisponible){
           return 'Felicitaciones, el asiento número ' + asientoSolicitado +  ' está disponible';
        }
    }
        return mensajeFinal = 'Lo sentimos, el asiento número ' + asientoSolicitado + ' está ocupado, pero aún quedan ' + disponibles.length + ' asientos disponibles';
}

//============================================================================================//

function asientosDisponibles(disponibles, asientoSolicitado){
    
    if (disponibles.includes(asientoSolicitado) == true){
        return 'se encontró'
    }
    return 'no se encontró'
}

console.log(asientosDisponibles([15, 28, 44, 70], 30));