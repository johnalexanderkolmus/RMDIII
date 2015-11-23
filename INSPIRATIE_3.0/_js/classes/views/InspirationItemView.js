var template = require('../../../_hbs/inspirationItem.hbs');

var InspirationItemView = Backbone.View.extend({

	template: template,
	tagName: 'li',

	events: {
		
	},

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
	},

	

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	
});

module.exports = InspirationItemView;