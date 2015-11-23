'use strict';

module.exports = [

  {

    method: 'GET',
    path: '/talks',
    handler: (request, reply) => {
      return reply.view('talks');
    }

  },

  {

    method: 'GET',
    path: '/',
    handler: (request, reply) => {

      return reply.redirect('/talks');

    }

  }

];
