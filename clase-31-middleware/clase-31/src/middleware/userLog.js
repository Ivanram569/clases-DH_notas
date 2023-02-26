const fs = require('fs');

function userLog(req, res, next){
    var fecha= Date();
    fs.appendFileSync('userLog.txt', 'El usuario ingresó a la ruta: ' + req.path + ' a las ' + fecha + "\n"); 
    next()
};

module.exports = userLog