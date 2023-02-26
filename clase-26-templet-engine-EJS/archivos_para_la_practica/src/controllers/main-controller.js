const platos = [{
    id: 1,
    nombre: 'Carpaccio fresco',
    description: 'Entrada Carpaccio de salmón con cítricos.',
    precio: 65.50,
    img: 'Carpaccio.jpg'
},
{
    id: 2,
    nombre: 'Risotto de berenjena',
    description: 'Risotto de berenjena y queso de cabra.',
    precio: 47.00,
    img: 'Risotto.jpg'
},
{
    id: 3,
    nombre: 'Mousse de arroz',
    description: 'Mousse de arroz con leche y aroma de azahar.',
    precio: 27.50,
    img: 'Mousse.jpg'
},
{
    id: 4,
    nombre: 'Espárragos blancos',
    description: 'Espárragos blancos con vinagreta de verduras y jamón ibérico.',
    precio: 37.50,
    img: 'esparragos.png'
}
];

module.exports = {
    home: (req, res)=>{
        res.render('index', {platos: platos})
    },
    detalle: (req, res)=>{
        let idProducto = req.params.id
        let platoUsuario = platos.find((plato) => plato.id == idProducto)
        if(platoUsuario == undefined){
            res.send("Plato típico")
        }else{
            res.render("detalleMenu", {plato: platoUsuario})
        }
        
        //res.render('detalleMenu', {plato: platoUsuario})
    },
};



/*
        let idProducto = req.params.id
        for (let i = 0; i < platos.length; i++) {
            const plato = platos[i];
            if(platos[i].id == idProducto){
                res.render('detalleMenu', {plato,})
            }
            res.send('Plato Típico')
        }*/