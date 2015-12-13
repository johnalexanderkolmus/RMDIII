'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bcrypt = require('bcryptjs');

module.exports = () => {

  let schema = new Schema({

    username: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    active: { //Best altijd toevoegen!!!!
      type: Boolean,
      default: true
    },

    created: {
      type: Date,
      default: Date.now
    },

    role: {
      type: String,
      default: 'user'
    }

  });

  schema.pre('save', function(next){

    let user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (erro, hash) => {
        // Store hash in your password DB.
        user.password = hash;
        next();

      });
    });


  });

  schema.methods.compare = function(entered){ // entered is het opgegeven wachtwoord.

    return new Promise((resolve, reject) => {

      bcrypt.compare(entered, this.password, (err, isMatch) =>{ // this is de user.

        if(err) return reject(err);
        return resolve(isMatch);

      });

    });

  };

  return schema;

};
