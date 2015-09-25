var React = require('react');

var SendButton = React.createClass({
	handleClick: function(event) {
		noty({
			layout: 'topRight',
			type: 'error',
			text: 'Your message was send',
			animation: {
				open: 'animated bounceInRight', 
				close: 'animated bounceOutRight', 
				easing: 'swing', 
				speed: 500 
			},
			killer: true,
			closeWith: ['hover']
		});
	},
	render: function(){
		return (
			<button onClick={this.handleClick} className="ui floated right black submit button" id="sendButton" type="submit">Send</button>
		);
	}
});

module.exports = SendButton;