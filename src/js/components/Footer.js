var SendButton = require('./SendButton.js');
var React = require('react');

var Footer = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var text = React.findDOMNode(this.refs.text).value.trim();
		if (!text) {
      		return;
    	}
    	this.props.onCommentSubmit({author: "Mike", text: text, date: "Today at 5:42 PM", image: "./images/man.png"});
    	React.findDOMNode(this.refs.text).value = '';
    	AppActions.addComment(text);
	},
	render: function() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<div className="ui labeled input">
					<div className="ui black label">Mike</div>
					<input placeholder="Enter your text here" name={this.props.name} type="text" ref="text"></input>
					<SendButton />
				</div>
			</form>
		);
	}
});

module.exports = Footer;