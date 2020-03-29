'use strict'
var express = require('express');
// Cargamos el controlador
var TournamentsController = require('../../../controllers/backoffice/tournamentsController/index');
// Llamamos al router
var api = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.post('/getTournaments', TournamentsController.getTournaments);
// Exportamos la configuración
module.exports = api;