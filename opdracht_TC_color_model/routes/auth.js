'use strict';

let Joi = require('joi');
let validation = require('../modules/validation');

module.exports = [

  {

    method: 'GET',
    path: '/register', //register/{id}
    handler: (request, reply) => {
      return reply.view('register');
    }

  },

  {

    method: 'POST',
    path: '/register',

    handler: (request, reply) => {
      console.log(request.payload);
      return reply.redirect('/talks');
    },

    config: {

      validate: {

        payload: {
          username: Joi.string().required(),
          password: Joi.string().required(),
          email: Joi.string().email().required()
        },

        failAction: (request, reply, source, error) => {

          let errors = validation.errors(error);
          let values = request.payload;
          console.log(errors);

          return reply.view('register', {

            errors, values

          });
        }

      }

    }

  },

  {

    method: 'GET',
    path: '/login',
    handler: (request, reply) => {
      return reply.view('login');
    }

  }






];
