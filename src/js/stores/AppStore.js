var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _store = {
  list: []
};

var addComment= function(comment){
  _store.list.push(comment);
};

var AppStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.list;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType) {
  	case AppConstants.ADD_COMMENT:
  		addComment(action.comment);
  		AppStore.emit(CHANGE_EVENT);
  		break;
  	default:
  		return true;
  }
});

module.exports = AppStore;