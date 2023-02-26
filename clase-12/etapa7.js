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
      let autosCasi0km = paralaVenta.filter(function(miAuto){
         return miAuto.km < 100;
         });
         return autosCasi0km;
           /*
   let paralaVenta = this.autosParaLaVenta()
      return paralaVenta.filter(function(miAuto){
         return miAuto.km < 100;
         });
capaz que anda
   */
   },
   listaDeVentas: function(){
      //filtrar "autos" y guardar en "autoQueSeVendió" solo los que se vendieron
      let autoQueSeVendio = this.autos.filter(function(miAuto){
         return miAuto.vendido == true
      });
      //guardar en "listaDePrecioDeLosVendidos" la marca, el modelo y el precio
      let listaDePrecioDeLosVendidos = autoQueSeVendio.map((miAutovendido)=>{
         return miAutovendido.precio;
      });
      //retornar "listaDePrecioDeLosVendidos"
      return listaDePrecioDeLosVendidos
   }
};

//ver como puede retornar, ademas del precio, la marca y el modelo

console.log(concesionaria.listaDeVentas());
