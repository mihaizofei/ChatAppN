var Header = require('./Header.js');
var Body = require('./Body.js');
var Footer = require('./Footer.js');
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var MainContainer = React.createClass({
	loadCommentsFromServer: function() {
    	$.ajax({
      		url: this.props.url,
      		dataType: 'json',
      		cache: false,
      		success: function(data) {
        		this.setState({data: data});
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error(this.props.url, status, err.toString());
      		}.bind(this)
    	});
  	},
  	handleCommentSubmit: function(comment) {
  		var comments = this.state.data;
    	var newComments = comments.concat([comment]);
    	this.setState({data: newComments});
    	$.ajax({
      		url: this.props.url,
      		dataType: 'json',
      		type: 'POST',
      		data: comment,
      		success: function(data) {
        		this.setState({data: data});
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error(this.props.url, status, err.toString());
      		}.bind(this)
    	});
  	},
  	getInitialState: function() {
    	return {data: []};
  	},
  	componentDidMount: function(){
  		this.loadCommentsFromServer();
  		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  	},
	render: function() {
		return (
			<div className='mainContainer'>
				<Header name="Mike"/>
				<div className="ui form segment">
					<Body data={this.state.data} />
					<Footer name="Mike" onCommentSubmit={this.handleCommentSubmit}/>
				</div>
			</div>
		);
	}
});

module.exports = MainContainer;