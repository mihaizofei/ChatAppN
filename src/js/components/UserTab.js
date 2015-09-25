var React = require('react');

var UserTab = React.createClass({
	render: function() {
		return (
			<a className={this.props.tabClass}>
				<i className={this.props.iconClass}></i>
				{this.props.children}
			</a>
		);
	}
});

module.exports = UserTab;