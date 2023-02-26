const { validationResult } = require("express-validator");

module.exports = {
    showLogin: (req, res)=>{
        res.render('login')
    },
    login: (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render('login', {
                errors: errors.mapped()
            });
        }



        const data = req.body;
        //magia ahre
        res.cookie('userData', JSON.stringify(data));

        res.redirect('/');
    },
    home: (req, res)=>{
        const data = JSON.parse(req.cookies.userData);

        res.render('index', {
            name: data.name, 
            email: data.email,
            color: data.color,
            birthDate: data.birthDate,
        })
    },
}