const express = require('express');
const app = express(); // servidor
app.set('port',3000);
const path = require('path') // trabajar con directorios

//middlewares

//rutas
app.get('/', (req, res) =>{
   res.sendFile(path.join(__dirname, 'frontend/index.html'));
});
// archivos estaticos (iconos, imagenes, etc)

app.listen(app.get('port'), () =>{
    console.log("Hola mundo, puerto:",app.get('port'))
});