var SendButton = require('./SendButton.js');
var React = require('react');

var Footer = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var text = React.findDOMNode(this.refs.text).value.trim();
		if (!text) {
      		return;
    	}
    	var userName = React.findDOMNode(this.refs.text).getAttribute('name');
    	var message = {author: userName, text: text, date: GetDate(), image: this.props.image}
    	this.props.onMessageSubmit(message);
    	React.findDOMNode(this.refs.text).value = '';
	},
	render: function() {
		return (
			<form className="messageForm" onSubmit={this.handleSubmit}>
				<div className="ui labeled input">
					<div className="ui black label">{this.props.name}</div>
					<input placeholder="Enter your text here" name={this.props.name} type="text" ref="text"></input>
					<SendButton />
				</div>
			</form>
		);
	}
});

function GetDate() {
	var today = new Date();

	var dd = AddZero(today.getDate());
	var mm = AddZero(today.getMonth() + 1);
	var yyyy = today.getFullYear();
	var hours = AddZero(today.getHours());
	var minutes = AddZero(today.getMinutes());
	var seconds = AddZero(today.getSeconds());


	today = hours + ':' + minutes + ':' + seconds + ' - ' + dd + '/'+ mm + '/' + yyyy;
	return today;
};

function AddZero(val) {
	if (val < 10) {
		val = '0' + val;
	}
	return val;
}

module.exports = Footer;