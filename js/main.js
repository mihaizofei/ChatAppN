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
			theme: 'relax',
			text: 'Your message was send',
			animation: {
				open: 'animated bounceInLeft', 
				close: 'animated bounceOutLeft', 
				easing: 'swing', 
				speed: 500 
			},
			killer: true,
			closeWith: ['hover']
});
	})
});