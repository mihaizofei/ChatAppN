var React = require('react');

var User = React.createClass({
	render: function() {
		return (
			<div className="item">
				<a className="ui mini image"><img src={this.props.image}></img></a>
				<div className="middle aligned content">
					<div className="header">{this.props.name}</div>
				</div>
			</div>
		);
	}
});

module.exports = User;