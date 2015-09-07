$(function () {
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	})
});

var MainContainer = React.createClass({
	render: function() {
		return (
			<div className='mainContainer'>
				<Header />
			</div>
		);
	}
});

var Header = React.createClass({
  render: function() {
    return (
      <div className="ui red menu">
		<a className="header active item">All</a>
		<a className="item"><i className="user icon"></i>Chris</a>
		<span className="floated right item">Signed in as <a href="#">Mike</a></span>
	</div>
    );
  }
});

var Body = React.createClass({
	render: function() {
		return (
			<div className='bodyContainer'>
				<Grid />
			</div>
		);
	}
});

var Grid = React.createClass({
	render: function() {
		return (
			<div className="ui form segment">
				<div className="ui two column equal height grid">
					<div className="thirteen wide column">
						<div className="ui message blue heightleft" style="overflow-y:scroll;">
							<div className="ui horizontal divider"><i className="wechat icon"></i></div>
								<div className="ui comments">
									<Comment />
								</div>
							</div>
						</div>
					</div>
					
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
					<img src="images/man.png">
				</a>
				<div className="content">
					<a className="author">Michael</a>
				<div className="metadata">
					<span className="date">Today at 5:42PM</span>
				</div>
				<div className="text">How artistic!</div>
			</div>
		);
	}
});		

React.render(
  <MainContainer />,
  document.getElementById('content')
);