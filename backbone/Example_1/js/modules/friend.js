// js/modules/friend.js
// Module reference argument, assigned at the bottom
(function(Friend) {
	//Dependencies
	var Message = chat.module("message");

	//The application container
	var app = chat.app;

	//Define a friend model
	Friend.Model = Backbone.Model.extend({
		initialize:function(){
			//Add a nested messages collection
			this.set({message: new Message.List()});
		}
	});
  
  	//Define a freind collection
  	Friend.List = Backbone.Collection.extend({
  		model: Friend.Model
  	});

})(chat.module("friend"));