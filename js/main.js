	
$(document).ready(function(){
	//Navbar trigger
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

	  // Add a click event on each of them
	  $navbarBurgers.forEach( el => {
		el.addEventListener('click', () => {

		  // Get the target from the "data-target" attribute
		  const target = el.dataset.target;
		  const $target = document.getElementById(target);

		  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		  el.classList.toggle('is-active');
		  $target.classList.toggle('is-active');

		});
	  });
	}


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



