var Handlebars = require("hbsfy/runtime");
var Application = require("./classes/routers/Application.js");
var InspirationCollection = require('./classes/collections/InspirationCollection.js');


function init() {


			Window.Application = new Application();
			Backbone.history.start();

			var collection = new InspirationCollection();
			collection.fetch();





}

/*fallback.load({
		jQuery: [
		'//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
		'js/vendor/jquery/dist/jquery.min.js'
		],
		Modernizr: [
		'//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js',
		'js/vendor/modernizr/modernizr.js'
		]
	});*/

init();