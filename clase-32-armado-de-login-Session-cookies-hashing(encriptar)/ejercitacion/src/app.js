const path = require('path');
const express = require('express');
const session = require('express-session')
const cookieParse = require('cookie-parser')

const mainRouter = require('./router/main-router');

const app = express();
app.listen(3000, (req, res)=>{
    console.log('prendió')
})

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

app.use(session({
    secret: 'cy9a94fcy8o4fy984fc9y8',
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParse());

app.use(mainRouter);