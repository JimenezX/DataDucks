const express = require('express');
let exphbs = require('express-handlebars')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const path = require('path');
const res = require('express/lib/response');

const PORT = 3010;
const app = express();
require('./database');

//Vistas
app.use(express.static('views'));


//Rutas
app.get('/', (req,res) => {
    res.render('index.html')
})

app.get('/bienvenida',() => {
    res.render('bienvenida.html')
})

app.get('/create', ()=> {
    res.render('create-user.html')
})

app.get('/login', ()=>{
    res.render('log-in.html')
})


//Puerto del programa
app.listen(PORT, (err) => {
    if(err) console.log('Ocurrio un error' + err)

    console.log('Servidor Conectado Correctamente en el Puerto ' + PORT)
    
})


