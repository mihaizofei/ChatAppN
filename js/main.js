$(function () {
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	})
});

var Header = React.createClass({
  render: function() {
    return (
      <div className="ui red menu">
		<a className="header active item">All</a>
		<a className="item"><i className="user icon"></i>Christina</a>
		<span className="floated right item">Signed in as <a href="#">Mike</a></span>
	</div>
    );
  }
});

React.render(
  <Header />,
  document.getElementById('content')
);