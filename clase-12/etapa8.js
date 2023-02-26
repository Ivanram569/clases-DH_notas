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
      CAPAZ QUE ANDA
      */
   },
   listaDeVentas: function(){
      let autoQueSeVendio = this.autos.filter(function(miAuto){
         return miAuto.vendido == true
      });
      let listaDePrecioDeLosVendidos = autoQueSeVendio.map((miAutovendido)=>{
         return miAutovendido.precio;
      });
      return listaDePrecioDeLosVendidos
   },
   totalDeVentas: function(){
      /*let losPrecios = this.listaDeVentas();
      if(losPrecios.length > 0){
         resultado = losPrecios.reduce((suma, miPrecio)=>{
         return suma + miPrecio;
      })
      return resultado;
      }else{
         return null
      }*/
      // EL DE ARRIBA NO ANDA EN EL PLAYGROUD, PORQUE DEVUELVE NULL Y TIENE QUE DEVOLVER SI O SI UN NUMERO
      //-----------------------------------------

      if(this.listaDeVentas().length > 0){  
      let resultado = this.listaDeVentas().reduce((suma, miPrecio)=>{
         return suma + miPrecio;
      })
      return resultado;
      }else{
         return 0;
      }

      //-------------------------------

      //EL DE ABAJO TAMBIEN ANDAA

      /*let valorInicial = 0;
      let resultado = this.listaDeVentas().reduce((suma, miPrecio)=>suma + miPrecio, valorInicial);
      return resultado*/
   }
};

console.log(concesionaria.totalDeVentas());