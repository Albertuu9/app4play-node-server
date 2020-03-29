'use strict'
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var TournamentSchema = Schema({
    to_name: String,
    to_max_users: Number,
    to_type: String,
    to_admin_id: String,
    to_start_date: Date,
    to_finish_date: Date, 
    to_creation_date: Date,
    to_update_date: Date
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Tournament', TournamentSchema);