var Header = require('./Header.js');
var Body = require('./Body.js');
var Footer = require('./Footer.js');
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var userName = getRandomName();

var MainContainer = React.createClass({
  	handleMessageSubmit: function(message) {
      AppActions.sendMessageToServer(message);
  	},
  	getInitialState: function() {
    	return {
        data: AppStore.getList()
      }
  	},
    componentDidMount: function(){
      AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
      AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
      this.setState({
        data: AppStore.getList()
      })
    },
	render: function() {
		return (
			<div className='mainContainer'>
				<Header name={userName}/>
				<div className="ui form segment">
					<Body data={this.state.data} name={userName} />
					<Footer name={userName} image="./images/man.png" onMessageSubmit={this.handleMessageSubmit}/>
				</div>
			</div>
		);
	}
});

function getRandomName() {
    return "Guest_" + Math.floor((Math.random() * 100000) + 1);
};

module.exports = MainContainer;