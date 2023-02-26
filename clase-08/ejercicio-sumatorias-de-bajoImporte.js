function sumatoriaBajoImporte(arrayImportes){
    let sumaImportesBajos = 0;
    for (let i = 0; i < arrayImportes.length; i++){
        let guardar = arrayImportes[i]
        if (guardar > 0 && guardar < 1001){
            sumaImportesBajos = sumaImportesBajos + guardar;
    }
    }
    return sumaImportesBajos;
    }
    
    
    console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]))
    