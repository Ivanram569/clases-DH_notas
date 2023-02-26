module.exports = (req, res, next)=>{
    if(req.cookies.userData){
        next();
    }else{
        res.redirect('/login');
    }
}