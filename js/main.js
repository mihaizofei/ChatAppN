$(function () {
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	})
});

var n = noty({text: 'noty - a jquery notification library!'});