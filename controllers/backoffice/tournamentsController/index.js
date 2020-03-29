'use strict'
var Tournament = require('./../../../models/tournaments');

function getTournaments(req, res){
    res.status(200).send({message: 'Hola'});
}

module.exports = { getTournaments }