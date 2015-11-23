var OverviewView = require('../views/OverviewView.js');

var Application = Backbone.Router.extend({

	routes: {

		"overview": "overview",
		"students/:id": "students",
		"*actions": "default"

	},

	empty: function(){

			$('#container_insp').empty();
			//$('#content').remove();

	},

	default: function(){

		this.navigate('overview', {trigger: true}); // url veranderen naar overview en trigger dient dat hij ook de url uitvoert
		
	},

	overview: function(){

		console.log("overview");
		//eerst #container leegmaken en dan juiste content gaan inplakken

		this.empty();
		this.overview = new OverviewView();
		$('#container_insp').append(this.overview.render().el);


	},

	students: function(id){

	},

});

module.exports = Application;