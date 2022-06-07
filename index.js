require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');


const PORT = 3010;
const app = express();
require('./database');
require('./backend/Users/user')

//Vistas
app.use(express.static('views'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors());



//Rutas

app.use('/api/users',require('./routes/users'))


app.get('/', (req,res) => {
    res.render('index.html')
})


//Puerto del programa
app.listen(PORT, (err) => {
    if(err) console.log('Ocurrio un error' + err)

    console.log('Servidor Conectado Correctamente en el Puerto ' + PORT)
    
})


