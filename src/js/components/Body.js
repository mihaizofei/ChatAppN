var Message = require('./Message.js');
var User = require('./User.js');
var React = require('react');

var Body = React.createClass({
	render: function() {
		var messageNodes = this.props.data.map(function (message) {
      			return (
      				<Message author={message.author} date={message.date} image={message.image}>
						{message.text}
					</Message>
      			);
    		});
		return (
			<div className="ui two column equal height grid">
				<div className="thirteen wide column">
					<div className="ui message grey heightleft">
						<div className="ui horizontal divider"><i className="wechat icon"></i></div>
						<div className="ui comments">
							{messageNodes}
						</div>
					</div>
				</div>
				<div className="three wide column">
					<div className="ui message grey heightright">
						<div className="ui horizontal divider"><i className="users icon"></i></div>
						<div className="ui list">
							<User name={this.props.name} image="./images/man.png"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Body;