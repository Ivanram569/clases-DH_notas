let autosImportados = require('./autos');

let concesionaria = {
   autos: autosImportados,
   buscarAuto: function (patente){
      for (let i = 0; i < this.autos.length; i++) {
         const miAuto = this.autos[i];
      if(patente == miAuto.patente){
         return miAuto
         }
      }
      return null
   },
   venderAuto: function(patente){
      let autoEncontrado = this.buscarAuto(patente)
      if(autoEncontrado){
         autoEncontrado.vendido = true
      }
   },
   autosParaLaVenta: function(){
      let autosQueSePuedenVender = this.autos.filter(function(miAuto){
      return miAuto.vendido == false;
      });
      return autosQueSePuedenVender;
   },
   autosNuevos: function(){
   let paralaVenta = this.autosParaLaVenta()
      //filtrar "autos"
      let autosCasi0km = paralaVenta.filter(function(miAuto){
         //mirar el km: cada elemento, si es menor que 100
         return miAuto.km < 100;
         });
         //retornar solamente los que sean menores que 100
         return autosCasi0km;
   }
      /*
   let paralaVenta = this.autosParaLaVenta()
      return paralaVenta.filter(function(miAuto){
         return miAuto.km < 100;
         });
capaz que anda
   */
};

console.log(concesionaria.autosNuevos());









/*--------------------------------------------

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