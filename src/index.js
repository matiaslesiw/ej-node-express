//definiciones 
const express = require('express');
const app = express(); // servidor
const path = require('path') // trabajar con directorios


//seteos
app.set('port',3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'frontend'))
//middlewares

//rutas
app.use(require('./frontend/routes/routes'))
// archivos estaticos (iconos, imagenes, etc)

app.listen(app.get('port'), () =>{
    console.log("Hola mundo, puerto:",app.get('port'))
});