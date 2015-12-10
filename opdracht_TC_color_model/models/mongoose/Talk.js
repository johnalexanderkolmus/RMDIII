'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ObjectId = Schema.Types.ObjectId;

module.exports = () => {

  let schema = new Schema({

    text: {
      type: String,
      required: true
    },

    _creator: {
      type: ObjectId,
      required: 'User'
    },

    active: { //Best altijd toevoegen!!!!
      type: Boolean,
      default: true
    },

    created: {
      type: Date,
      default: Date.now
    }



  });

  return schema;

};

