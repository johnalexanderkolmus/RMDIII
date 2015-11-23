var Inspiration = require('../models/Inspiration.js');

var InspirationCollection = Backbone.Collection.extend({
	
	model: Inspiration,
	url: '/RMDII_2015/OPDRACHTEN/INSPIRATIE/api/inspiration',

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	},


});

module.exports = InspirationCollection;
