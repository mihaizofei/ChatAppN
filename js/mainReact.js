var MainContainer = React.createClass({
	render: function() {
		return (
			<div className='mainContainer'>
				<Header />
				<div className="ui form segment">
					<Body />
					<Footer />
				</div>
			</div>
		);
	}
});

var Header = React.createClass({
  render: function() {
    return (
      <div className="ui labeled icon menu">
		<a className="active red item">
			<i className="users icon"></i>
			All
		</a>
		<a className="red item">
			<i className="user icon"></i>
			Chris
		</a>
		<span className="floated right item">Signed in as<a href="#">Mike</a></span>
	</div>
    );
  }
});

var Body = React.createClass({
	render: function() {
		return (
			<div className="ui two column equal height grid">
				<div className="thirteen wide column">
					<div className="ui message grey heightleft">
						<div className="ui horizontal divider"><i className="wechat icon"></i></div>
						<div className="ui comments">
							<Comment />
							<Comment />
						</div>
					</div>
				</div>
				<div className="three wide column">
					<div className="ui message grey heightright">
						<div className="ui horizontal divider"><i className="users icon"></i></div>
						<div className="ui list">
							<User />
							<User />
						</div>
					</div>
				</div>
			</div>
		);
	}
});

var User = React.createClass({
	render: function() {
		return (
			<div className="item">
				<a className="ui mini image"><img src="./images/woman.png"></img></a>
				<div className="middle aligned content">
					<div className="header">Chris</div>
				</div>
			</div>
		);
	}
});

var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<a className="avatar">
					<img src="./images/man.png"></img>
				</a>
				<div className="content">
					<a className="author">Michael</a>
					<div className="metadata">
						<span className="date">Today at 5:42PM</span>
					</div>
					<div className="text">How artistic!</div>
				</div>
			</div>	
		);
	}
});	

var Footer = React.createClass({
	render: function() {
		return (
			<div className="ui labeled input">
				<div className="ui black label">Mike</div>
				<input placeholder="Enter your text here" name="userText" type="text"></input>
				<SendButton />
			</div>
		);
	}
});

var SendButton = React.createClass({
	handleClick: function(event) {
		sendButtonClick();
	},
	render: function(){
		return (
			<button onClick={this.handleClick} className="ui floated right black submit button" id="sendButton">Send</button>
		);
	}
});

React.render(
  <MainContainer />,
  document.getElementById('content')
);