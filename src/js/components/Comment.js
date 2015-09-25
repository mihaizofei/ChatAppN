var React = require('react');

var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<a className="avatar">
					<img src={this.props.image}></img>
				</a>
				<div className="content">
					<a className="author">{this.props.author}</a>
					<div className="metadata">
						<span className="date">{this.props.date}</span>
					</div>
					<div className="text">{this.props.children}</div>
				</div>
			</div>	
		);
	}
});	

module.exports = Comment;