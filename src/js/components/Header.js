var UserTab = require('./UserTab.js');
var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="ui labeled icon menu">
      	<UserTab tabClass="active red item" iconClass="users icon">
      		All
      	</UserTab>
		<span className="floated right item">Signed in as<a href="#">{this.props.name}</a></span>
	</div>
    );
  }
});

module.exports = Header;