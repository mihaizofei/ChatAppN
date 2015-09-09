$(function () {
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	})
});

$(function () {
	$('#sendButton').click(function(){
		noty({
			layout: 'topRight',
			type: 'error',
			text: 'Your message was send',
			animation: {
				open: 'animated bounceInRight', 
				close: 'animated bounceOutRight', 
				easing: 'swing', 
				speed: 500 
			},
			killer: true,
			closeWith: ['hover']
		});
	})
});