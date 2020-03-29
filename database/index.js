'use strict'
var mongoose = require('mongoose');
const environment = require('./../config');
var app = require('./../app');
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect(environment.config.database_endpoint, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos all4play se ha realizado correctamente");
    
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen(environment.config.port, () => {
            console.log("servidor corriendo en " + environment.config.endpoint + environment.config.port);
        });
    })
    
    .catch(err => console.log(err));