// js/modules/message.js
// Module reference argument, assigned at the bottom
(function(Message){
	
	//Define Message model
	Message.Model = Backbone.Model.extend({
		defaults:{
			unread:true
		}
	});

	//Define Message collection
	Message.List = Backbone.Collection.extend({
		model: Message.Model
	});

})(chat.module("message"));