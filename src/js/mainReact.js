var MainContainer = React.createClass({
	loadCommentsFromServer: function() {
    	$.ajax({
      		url: this.props.url,
      		dataType: 'json',
      		cache: false,
      		success: function(data) {
        		this.setState({data: data});
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error(this.props.url, status, err.toString());
      		}.bind(this)
    	});
  	},
  	handleCommentSubmit: function(comment) {
  		var comments = this.state.data;
    	var newComments = comments.concat([comment]);
    	this.setState({data: newComments});
    	$.ajax({
      		url: this.props.url,
      		dataType: 'json',
      		type: 'POST',
      		data: comment,
      		success: function(data) {
        		this.setState({data: data});
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error(this.props.url, status, err.toString());
      		}.bind(this)
    	});
  	},
  	getInitialState: function() {
    	return {data: []};
  	},
  	componentDidMount: function(){
  		this.loadCommentsFromServer();
  		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  	},
	render: function() {
		return (
			<div className='mainContainer'>
				<Header name="Mike"/>
				<div className="ui form segment">
					<Body data={this.state.data} />
					<Footer name="Mike" onCommentSubmit={this.handleCommentSubmit}/>
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
	handleSubmit: function(e) {
		e.preventDefault();
		var text = React.findDOMNode(this.refs.text).value.trim();
		if (!text) {
      		return;
    	}
    	this.props.onCommentSubmit({author: "Mike", text: text, date: "Today at 5:42 PM", image: "./images/man.png"});
    	React.findDOMNode(this.refs.text).value = '';
	},
	render: function() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<div className="ui labeled input">
					<div className="ui black label">Mike</div>
					<input placeholder="Enter your text here" name={this.props.name} type="text" ref="text"></input>
					<SendButton />
				</div>
			</form>
		);
	}
});

var SendButton = React.createClass({
		handleClick: function(event) {
		sendButtonClick();
	},
	render: function(){
		return (
			<button onClick={this.handleClick} className="ui floated right black submit button" id="sendButton" type="submit">Send</button>
		);
	}
});

React.render(
  <MainContainer url="./comments.json" pollInterval="2000"/>,
  document.getElementById('content')
);