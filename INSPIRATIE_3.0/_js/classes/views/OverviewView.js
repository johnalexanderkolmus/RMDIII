var InspirationCollection = require('../collections/InspirationCollection.js');

var template = require('../../../_hbs/overview.hbs');


var OverviewView = Backbone.View.extend({


	template: template,
	tagName: 'article',
	id: 'menu',

	events: {
		
	},

	initialize: function(){

		this.collection = new InspirationCollection();
		console.log('initialize');
		//console.log(this.collection);
		this.listenTo(this.collection, 'sync', this.renderInspirations);
		this.collection.fetch();

	},

	renderInspirations: function(){

		console.log('renderinspirationssssss');
		console.log(this);
		this.$inspirations.empty();
		this.collection.forEach(this.renderInspiration, this);

	},

	renderInspiration: function(model){
		console.log('renderinspirationnnnn');

		var view = new InspirationItemView({
			model: model
		});

		this.$inspirations.append(view.render().el);
		

	},

	render: function(){
		console.log('render');

		this.$el.html(this.template());
		this.$inspirations = this.$el.find('#container');
		console.log("hallooo " + $inspirations);

		return this;


	},

});

module.exports = OverviewView;