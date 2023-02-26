const importarBicicletas = require("./datos-bici");

const dhBici = {
    bicicleta: importarBicicletas(),
    buscarBici: function(id){
// id es un number
// buscar la bicicletaque tenga el mismo id que recivo como parametro ('id')
// guerdar lo encontrado en una variable 'bicicleta'
const bicicletasFiltradas = this.bicicleta.filter((miBici)=>{
    return miBici.id == id
})
// retornar la bicicleta encontrada
if(bicicletasFiltradas.length > 0){
    return bicicletasFiltradas[0]
}
// si no la encontré la bicicleta, retornar null
else{
    return null
}
    },
    venderBici: function (id) {
        //"id" es numero
        //buscar una bici en base al id (usando this.buscarBici)
        // guardarla en una variable 'bici'
        const bici = this.buscarBici(id);
        //si la bici existe
        if (bici) {
          //  poner la propiedad bici.vendida en true
          bici.vendida = true;
          //  retornar la bici
          return bici;
        }
        //sino
        else {
          //  retornar "Bicicleta no encontrada"
          return "Bicicleta no encontrada";
        }
      },
    };
    
    console.log(dhBici.venderBici(15));
