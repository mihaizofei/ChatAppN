var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var hub = $.connection.comments;
$.connection.hub.start();
hub.client.newComment = function (item) { 
	var comment = {author: item.Author, text: item.Text, date: item.Date, image: item.Image}; 
	AppActions.addComment(comment);
};

var AppActions = {
  addComment: function(comment){
    AppDispatcher.handleAction({
      actionType:AppConstants.ADD_COMMENT,
      comment: comment
    });
  },
  sendCommentToServer: function(comment){
     $.ajax({ 
      url: "/api/comment",
      data: comment, 
      type: "POST" 
    });
  }
}

module.exports = AppActions