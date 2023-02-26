const path = require("path")

const express = require('express');
const app = express();

const rutaAPublic = path.join(__dirname, "../public")
const static = express.static(rutaAPublic);
app.use(static);



app.get("/",(rep, res) =>{
    //const miRuta = path.join(__dirname, "views/index.html");
    //res.sendFile("./views/index.html")
    res.sendFile(path.join(__dirname, "views/index.html"))
});
app.get("/lovelace",(rep, res) =>{
    res.sendFile(path.join(__dirname, "views/lovelace.html"))
});
app.get("/babbage",(rep, res) =>{
    res.sendFile(path.join(__dirname, "views/babbage.html"))
});
app.get("/berners-lee",(rep, res) =>{
    res.sendFile(path.join(__dirname, "views/berners-lee.html"))
});
app.get("/clarke",(rep, res) =>{
    res.sendFile(path.join(__dirname, "views/clarke.html"))
});
app.get("/hamilton",(rep, res) =>{
    res.sendFile(path.join(__dirname, "views/hamilton.html"))
});
app.get("/hopper",(rep, res) =>{
    res.sendFile(path.join(__dirname, "views/hopper.html"))
});
app.get("/turing",(rep, res) =>{
    res.sendFile(path.join(__dirname, "views/turing.html"))
});

app.listen(3000, () => {
    console.log('El servidor prendió')
})
