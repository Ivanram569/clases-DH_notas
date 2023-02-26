const autos = require('./autos');
let autosImportados = require('./autos');

let personaEjemploJuan = {
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   }

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
   },
   puedeComprar: function(unAuto, unaPersona){
      let cuentaCuotas = unAuto.precio / unAuto.cuotas;
      if(unAuto.precio > unaPersona.capacidadDePagoTotal){
         return false
      }
      if (cuentaCuotas > unaPersona.capacidadDePagoEnCuotas){
         return false
      }
      return true
   },
   autosQuePuedeComprar: function(personaEjemplo){
      let autosParaLaVenta = this.autosParaLaVenta()
      let losQuePuedeConprar = autosParaLaVenta.filter(function(miAutoParaLaVenta){
         return this.puedeComprar(miAutoParaLaVenta, personaEjemplo)
      })
      return losQuePuedeConprar;

   /*
ANDA PERO EN EL PG NO POR UN TREMA DIDACTICO, HAY QUE USAR SI O SI EL THIS.
   autosQuePuedeComprar: function(personaEjemplo){
      let autosParaLaVenta = this.autosParaLaVenta()
      let losQuePuedeConprar = autosParaLaVenta.filter(function(miAutoParaLaVenta){
         return concesionaria.puedeComprar(miAutoParaLaVenta, personaEjemplo)
      })
      return losQuePuedeConprar;*/




      /*
PRIMER INTENTO CORRECTO QUE EL PG NO ME LO TOMA
      let listaDeAutosQuePuedeVender = [];
      let autosParaLaVenta = this.autosParaLaVenta();
      for (let i = 0; i < autosParaLaVenta.length; i++) {
         if(this.puedeComprar(autosParaLaVenta[i],personaEjemplo)){
         listaDeAutosQuePuedeVender.push(autosParaLaVenta[i]);
         }
      }
      return listaDeAutosQuePuedeVender*/


      
//llamr a la funcion autosparalaventa, que nos da una array de los autos con false
//con la funcion puedecomprar filtramos cad autos con los requisitos de la persona
//retornamos solo que que den true


   }
};

console.log(concesionaria.autosQuePuedeComprar(personaEjemploJuan));