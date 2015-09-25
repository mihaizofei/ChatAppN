var Header = require('./Header.js');
var Body = require('./Body.js');
var Footer = require('./Footer.js');
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var MainContainer = React.createClass({
  	handleCommentSubmit: function(comment) {
      AppActions.addComment(comment);
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
				<Header name="Mike"/>
				<div className="ui form segment">
					<Body data={this.state.data} />
					<Footer name="Mike" image="./images/man.png" onCommentSubmit={this.handleCommentSubmit}/>
				</div>
			</div>
		);
	}
});

module.exports = MainContainer;