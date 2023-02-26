let autosImportados = require('./autos');

let concesionaria = {
   autos: autosImportados,
};

/*--------------------------------------------

let  autos = require ("./autos");

let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente) {
    let autoSalida = null
    this.autos.find(auto => {
        if(auto.patente === patente){
            autoSalida = auto
        }
    })
    return autoSalida
},

}

//-------------------------

let autos = require("./autos");

let concesionaria = {
   autos: autos,

   buscarAuto: function (patente) {
      let autoSalida = null
      this.autos.find(auto => {
         if (auto.patente === patente) {
            autoSalida = auto;
         }
      })
      return autoSalida;
   },

   venderAuto: function (patente) {
    let autoBuscado = this.buscarAuto(patente);
    // si existe el auto buscado, le cambiamos el valor de vendio a true
    if(autoBuscado){
        autoBuscado.vendido = true;
        return autoBuscado;
     } else {
        return 'no existe';
     }
     
 
     //o si no existe que retorne null
 
    },
    autosParaLaVenta: function (vendido) {
        let autosParaVender = this.autos.filter((elauto) => {
           return elauto.vendido == vendido
        });
        if (autosParaVender.length > 0){
           return autosParaVender
        } else {
           return 'chupachichi kekeré'
        }
     }
 }

 function () {
    return autos = this.autos.filter(function(elauto) {
       return !elauto.vendido 
    });
},*/