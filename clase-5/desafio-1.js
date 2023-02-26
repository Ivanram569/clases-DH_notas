/*
function alquiler (tipoDeVehiculo, diasDeAlquiler, silla){

    switch (tipoDeVehiculo)
        {
            case "compacto":valorVehiculo = 14000;
                break;
            case "mediano":
                valorVehiculo = 17000;
                break;
            case "camioneta":
                 valorVehiculo = 28000;
                break;
            default:
                console.log ("El vehiculo ingresado es incorrecto");
        }

        valorVehiculo = valorVehiculo * diasDeAlquiler;
        
        if (silla == true){
            valorVehiculo = valorVehiculo + (1200 * diasDeAlquiler);
        }
            
        console.log ( "Estimado Cliente: en base al tipo de vehiculo " + tipoDeVehiculo + " alquilado, considerando los " + diasDeAlquiler + 
        " dias utilizados, el monto total a pagar es de $" + valorVehiculo);
       
    }
    
    alquiler ("compacto",3,true);
    */


//====================================================================================================


    function costoAlquilarAuto(tipoAuto , cantidadDeDias , sillita){
        switch (tipoAuto) {
            case "compacto":
    
                    return 14000*cantidadDeDias+(cantidadDeDias* sillita*1200);
                break;
                case "mediano":
    
                        return 17000*cantidadDeDias+(cantidadDeDias* sillita*1200);
    
                break;
                case "camioneta":
                        return 28000*cantidadDeDias+(cantidadDeDias* sillita*1200);
    
                break;
    
    
        }
    }
    
    const tipoAuto = "camioneta";
    const cantidadDeDias = 3;
    const sillita = true;
    
    let montoApagar = costoAlquilarAuto(tipoAuto , cantidadDeDias , sillita);
    if (sillita){
    console.log("Estimado cliente: en base al tipo de vehiculo " + tipoAuto +" alquilado,\nconsiderando los "
    + cantidadDeDias+" días utilizados y el adicional de la silla para bebe,\nel monto total a pagar es $ "+ montoApagar);
    }
    else {console.log("Estimado cliente: en base al tipo de vehiculo " + tipoAuto +" alquilado,\nconsiderando los "
    + cantidadDeDias+" días utilizados , el monto total a pagar es $ "+ montoApagar);}

    //==================================================================================================================

    function alquiler(tipoVehiculo, diaAlquiler, sillaBebe){

        switch(tipoVehiculo){
            case 'compacto':
                var valor = 14000;
                break;
            case 'mediano':
                var valor = 17000;
                break;
            case 'camioneta':
                var valor = 28000;
                break;
        }
        if(sillaBebe=='si'){
            let total = (valor * diaAlquiler)+(1200*diaAlquiler);
          console.log('estimado cliente el monto total a pagar es de: '+total+'\n'+
                        'tipo de vehiculo seleccionado: '+tipoVehiculo+'\n'+
                        'has adquirido la silla de bebe'+'\n'+
                        'por un total de:'+diaAlquiler+' días');
        }
        else{
            let total = valor *diaAlquiler;
            console.log('estimado cliente el monto total a pagar es de: '+total+'\n'+
                        'tipo de vehiculo seleccionado: '+tipoVehiculo+'\n'+
                        'por un total de: '+diaAlquiler+' días');
        }
    }
    
    alquiler('mediano', 4, 'si');

    //=================================================================================================================

    function alquilerDeUnVehiculo (tipo, dia, silla){
        switch (tipo) {
            case "compacto":
             precio = 14000 ;
                if (silla == true){
                    precioExtra= precio + 1200;
                    precioExtra = precioExtra * dia
                    console.log("Estimado cliente, en base al alquiler de su vehiculo:" + precioExtra);
                }
                else {
                    precio = precio * dia
                    console.log("El alquiler le cuesta:" + precio);
                }
    
            break;
            case    "mediano":
                precio = 17000;
                if (silla == true){
                    precioExtra= precio + 1200;
                    precioExtra = precioExtra * dia
                    console.log("El alquiler le cuesta:" + precioExtra);
                }
                else {
                    precio = precio * dia
                    console.log("El alquiler le cuesta:" + precio);
                }
    
            break;
            case "camioneta":
                precio = 28000;
                if (silla == true){
                    precioExtra= precio + 1200;
                    precioExtra = precioExtra * dia
                    console.log("El alquiler le cuesta:" + precioExtra);
                }
                else {
                    precio = precio * dia
                    console.log("El alquiler le cuesta:" + precio);
                }
            break;
            default: {
                console.log('Ingrese una opcion valida')
            }
        }
    
    }
    
    //console.log(alquilerDeUnVehiculo("camioneta", 3, true));
    alquilerDeUnVehiculo("camioneta", 3, true)