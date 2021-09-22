const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log('servidor corriendo');
});

/*app.get('/', function(req,res){
    res.sendFile(path.join(__dirname , '/views/home.html'));  
});*/

app.get('/404', function(req,res){
    res.send('Error página no encontrada');   
});

app.get('/', function(req,res){
    res.send('Error página no encontrada');   
});