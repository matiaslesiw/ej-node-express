const express = require ('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index.ejs',{titulo:"CompraYa- Home"});
 });

 router.get('/carrito', (req, res) =>{
    res.render('carrito.ejs',{titulo:"CompraYa- Carrito"});
 });

 router.get('/mis-compras', (req, res) =>{
    res.render('mis-compras.ejs',{titulo:"CompraYa- Mis Compras"});
 });

 router.get('/mis-ventas', (req, res) =>{
    res.render('mis-ventas.ejs',{titulo:"CompraYa- Mis Ventas"});
 });

 module.exports = router;