var Inspiration = Backbone.Model.extend({

	defaults: {

		"title": "No Title",
		"description": "No Description",
		"class": "No Class",
		"image": "",

	},

	urlRoot: '/RMDII_2015/OPDRACHTEN/INSPIRATIE/api/inspiration',

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = Inspiration;