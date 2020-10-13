	
$(document).ready(function(){

	// hide #go-top first
	$("#go-top").hide();
	
	// fade in #go-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#go-top').fadeIn();
			} else {
				$('#go-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#go-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});