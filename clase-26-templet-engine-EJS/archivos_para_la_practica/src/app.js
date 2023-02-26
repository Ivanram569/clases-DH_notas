const express = require('express');
const path = require('path');
const mainRouter = require('./routers/main-router')

const app = express();

app.listen(3000, ()=>{
    console.log("Se prendió");
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(mainRouter);