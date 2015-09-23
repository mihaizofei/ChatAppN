var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addComment: function(comment){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.ADD_COMMENT,
      comment: comment
    })
  }
}

module.exports = AppActions