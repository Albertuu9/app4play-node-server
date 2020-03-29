'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Importamos las rutas
var tournaments_routes = require('./routes/backoffice/tournamentsRoutes/index'); 
//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cargamos las rutas
app.use('/api', tournaments_routes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;
