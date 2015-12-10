'use strict';

let mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGO_URL); // als database online staat verbind met de eerste anders met die laatste.

let fs = require('fs'); // zit standaard in NODE!

let validateFileName = require('../modules/validateFileName');
let path = require('path');

module.exports.register = (server, options, next) => {

  fs.readdirSync('./models/mongoose').forEach(file => {

    if(!validateFileName(file)) return;

    let schema = require(`../models/mongoose/${file}`)();
    let name = path.basename(file, '.js');

    mongoose.model(name, schema);


    //console.log(schema;

  });

  next();

};

module.exports.register.attributes = {
  name: 'mongoose',
  version: '0.1.0'
};
