//Filename: main.js

//Require.js allow us to configure shortcut alias
//There usage will become more apparent further along in the tutorial
require.config({
	paths: {
		jQuery: '../../libs/jquery.min',
		Underscore: '../../libs/Underscore-min',
		Backbone:'../../libs/Backbone-min'
	}	
});

require([
	//'app',    //Load our app module and pass it to our definition function
	//'order!../libs/jquery.min',               //Some plugins have to be loaded in order due to there no AMD compliance, because there scripts are not "Module"
	//'order!../libs/Underscore-min',
	//'order!../libs/Backbone-min'
	'app'

], function(App){
	//The "app" dependency is passed in as "App"
	//App.initialize();
});