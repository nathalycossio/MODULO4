const express = require('express');
const { resolve } = require('path');
const app = express();
const path = require('path');


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(process.env.PORT||3000, () => {
    console.log('Servidor corriendo ❤️  PORT:3000');
});

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));  
});


app.get('/register', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/register.html'));  
});

app.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/register.html'));  
});

app.post

/*app.get('/', function(req,res){
    res.send('Hola');   
});*/

app.get('/404', function(req,res){
    res.send('Error página no encontrada');   
});

