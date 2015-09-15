var MainContainer = React.createClass({
	render: function() {
		return (
			<div className='mainContainer'>
				<Header name="Mike"/>
				<div className="ui form segment">
					<Body />
					<Footer name="Mike"/>
				</div>
			</div>
		);
	}
});

var Header = React.createClass({
  render: function() {
    return (
      <div className="ui labeled icon menu">
      	<UserTab tabClass="active red item" iconClass="users icon">
      		All
      	</UserTab>
      	<UserTab tabClass="red item" iconClass="user icon">
      		Chris
      	</UserTab>
		<span className="floated right item">Signed in as<a href="#">{this.props.name}</a></span>
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
							<Comment author="Mike" date="Today at 5:42 PM" image="./images/man.png">
								How artistic!
							</Comment>
							<Comment author="Chris" date="Yesterday at 10:20 AM" image="./images/woman.png">
								This has been very useful for my research. Thanks as well!
							</Comment>
						</div>
					</div>
				</div>
				<div className="three wide column">
					<div className="ui message grey heightright">
						<div className="ui horizontal divider"><i className="users icon"></i></div>
						<div className="ui list">
							<User name="Chris" image="./images/woman.png"/>
							<User name="Mike" image="./images/man.png"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

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

var Footer = React.createClass({
	render: function() {
		return (
			<div className="ui labeled input">
				<div className="ui black label">Mike</div>
				<input placeholder="Enter your text here" name={this.props.name} type="text"></input>
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

var data = [
  {author: "Mike", text: "This is one comment"},
  {author: "Chris", text: "This is *another* comment"}
];