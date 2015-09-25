var Comment = require('./Comment.js');
var User = require('./User.js');
var React = require('react');

var Body = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function (comment) {
      			return (
      				<Comment author={comment.author} date={comment.date} image={comment.image}>
						{comment.text}
					</Comment>
      			);
    		});
		return (
			<div className="ui two column equal height grid">
				<div className="thirteen wide column">
					<div className="ui message grey heightleft">
						<div className="ui horizontal divider"><i className="wechat icon"></i></div>
						<div className="ui comments">
							{commentNodes}
						</div>
					</div>
				</div>
				<div className="three wide column">
					<div className="ui message grey heightright">
						<div className="ui horizontal divider"><i className="users icon"></i></div>
						<div className="ui list">
							<User name="Mike" image="./images/man.png"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Body;