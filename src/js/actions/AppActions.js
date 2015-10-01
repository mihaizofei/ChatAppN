var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var hub = $.connection.messages;
$.connection.hub.start();
hub.client.newMessage = function (item) { 
	var message = {author: item.Author, text: item.Text, date: item.Date, image: item.Image}; 
	AppActions.addMessage(message);
};

var AppActions = {
  addMessage: function(message){
    AppDispatcher.handleAction({
      actionType:AppConstants.ADD_MESSAGE,
      message: message
    });
  },
  sendMessageToServer: function(message){
     $.ajax({ 
      url: "/api/message",
      data: message, 
      type: "POST" 
    });
  }
}

module.exports = AppActions