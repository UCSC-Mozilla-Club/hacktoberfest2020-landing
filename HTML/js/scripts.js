jQuery(document).ready(function($){
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	var agentST = deviceAgent.match(/(ipad)/);
    if (agentID) {
 		$('*').removeClass('animated');  
		
    }
	if (agentST){
		$(window).load(function(){
			'use strict';
			$("#navigation").sticky({ topSpacing: 0 });
		});
	}
	
	// Detect whether device supports orientationchange event, otherwise fall back to
	// the resize event.
	/*var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
	
	window.addEventListener(orientationEvent, function() {
		alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
	}, false);*/
	
});


	
/* ==============================================
Drop Down Menu Fade Effect
=============================================== */	

$('.nav-toggle').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(400);
    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(400)
});

/* ==============================================
Drop Down Menu For Mobile
=============================================== */	

$('.mobile-toggle').hover(function() {   
	//$(this).addClass('opened_menu');
	$(this).find('.dr-mobile').first().stop(true, true).slideDown(400);
    }, function() {
    $(this).find('.dr-mobile').first().stop(true, true).slideToggle(400);

});
	
/* ==============================================
Pretty Photo
=============================================== */	
	
jQuery(document).ready(function(){
	
	if(!/ipad|iphone/i.test(navigator.userAgent)){
		//Pretty Photo For Our Portfolio
		jQuery(".pretty-lightbox-a a[data-rel^='prettyPhoto']").prettyPhoto({
			theme: "facebook",
		});
		
		//Pretty Photo For Company History
		jQuery(".pretty-lightbox-b a[data-rel^='prettyPhoto']").prettyPhoto({
			theme: "facebook",
		});
	} else {
		jQuery(".pretty-lightbox-a a[data-rel^='prettyPhoto']").attr('target', '_blank');
		jQuery(".pretty-lightbox-b a[data-rel^='prettyPhoto']").attr('target', '_blank');
	}
});
		
/* ==============================================
Scroll Navigation
=============================================== */	

$(function() {
	$('.scroll').bind('click', function(event) {
		var $anchor = $(this);
		var headerH = $('#navigation').outerHeight();
		$('html, body').stop().animate({
			scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
		}, 1200, 'easeInOutExpo');

		event.preventDefault();
	});
});

/* ==============================================
Our Portfolio / isotope Scripts
===============================================	*/

    $(window).load(function(){
      
      var $container = $('.items');

      $container.isotope({
        itemSelector : '.work'
      });
      
      
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });

      
    });
  
 /* ==============================================
Page Loader
=============================================== */

'use strict';

$(window).load(function() {
	$(".loader-item").delay(700).fadeOut();
	$("#pageloader").delay(1200).fadeOut("slow");
});


/* ==============================================
Parallax Effect
=============================================== */

( function ( $ ) {
'use strict';
$(document).ready(function(){
$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {
		testMobile = isMobile.any();
		if (testMobile == null)
		{
			$('.balon').parallax("50%", 0.5);
			$('.toons1').parallax("50%", 0.5);
			$('.toons2').parallax("50%", 0.5);
		}
	}	
	parallaxInit();	 
});	

//Mobile Detect
var testMobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
}( jQuery ));
	
	
/* ==============================================
Carousel Slider
=============================================== */		

    $(document).ready(function($) {
		'use strict';
		$(".slide-boxes").owlCarousel();
		$(".our-clients-carousel").owlCarousel({

		});
    });


/* ==============================================
Navigation Menu, Sticky Effect For Navigation Bar
=============================================== */
	
	if(!( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
	    $(window).load(function(){
			'use strict';
			$("#navigation").sticky({ topSpacing: 0 });
		});
    }
/* ==============================================
carousel
=============================================== */
	$('.carousel').on('slide.bs.carousel', function () {
		'use strict';
		$('.carousel').carousel({
		  interval: 3000
		})
	})
  
 /* ==============================================
//Elements animation
=============================================== */		
jQuery(document).ready(function($) {
	
	'use strict';

	$('.counter').appear(function() {
		var elem = $(this);
		var animation = elem.data('animation');
		if (elem.hasClass('counter')) {
			elem.children('.value').countTo();
		}
	});
	
});

jQuery(document).ready(function($) {
	
'use strict';
    if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
	$('.animated').appear(function() {
		var elem = $(this);
		var animation = elem.data('animation');
		if ( !elem.hasClass('visible') ) {
			var animationDelay = elem.data('animation-delay');
			if ( animationDelay ) {

				setTimeout(function(){
					elem.addClass( animation + " visible" );
					elem.removeClass('hiding');
				}, animationDelay);

			} else {
				elem.addClass( animation + " visible" );
				elem.removeClass('hiding');
			}
		}
	});
    }
});

 /* ==============================================
Revolution Slider
=============================================== */

var revapi;

jQuery(document).ready(function() {

	   revapi = jQuery('.tp-banner').revolution(
		{
			delay:9000,
			startwidth:1170,
			startheight:550,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on"
		});

});

 /* ==============================================
Go To Top
=============================================== */	
	
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

/* ==============================================
Google Maps
=============================================== */
$(document).ready(function() {

	var mapMarkers = {
		"markers": [
			{
				"latitude": "48.85661",
				"longitude":"2.35222",
				"icon": "images/marker.png"
			}
		]
	};

	$("#googlemaps").mapmarker({
		zoom : 16,
		center: "48.85661, 2.35222",
		dragging:1,
		mousewheel:0,
		markers: mapMarkers,
		featureType:"all",
		visibility: "on",
		elementType:"geometry"
	});

});

 /* ==============================================
Video Background
=============================================== */

jQuery(function(){
     jQuery(".player").mb_YTPlayer();
});     
