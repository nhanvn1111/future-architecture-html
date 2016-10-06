(function($){

	"use strict";

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).ready(function(){

		// simplePlaceholder - polyfill for mimicking the HTML5 placeholder attribute using jQuery
		// https://github.com/marcgg/Simple-Placeholder/blob/master/README.md
		
		if(typeof $.fn.simplePlaceholder != 'undefined'){
			
			$('input[placeholder], textarea[placeholder]').simplePlaceholder();
		
		}
		
		// Fitvids - fluid width video embeds
		// https://github.com/davatron5000/FitVids.js/blob/master/README.md
		
		if(typeof $.fn.fitVids != 'undefined'){
			
			$('.fitvids').fitVids();
		
		}
		
		// Superfish - enhance pure CSS drop-down menus
		// http://users.tpg.com.au/j_birch/plugins/superfish/options/
		
		if(typeof $.fn.superfish != 'undefined'){
			
			$('#menu').superfish({
				delay: 100,
				animation: {opacity:'show',height:'show'},
				speed: 100,
				cssArrows: false
			});
			
		}
		
		// bxSlider - responsive slider
		// http://bxslider.com/options
		
		if(typeof $.fn.bxSlider != 'undefined'){

			$('#case-study-slider .slides').bxSlider({
				 mode: 'fade',
				 speed: 500,
				 slideMargin: 0,
				 infiniteLoop: true,
				 hideControlOnEnd: false,
				 adaptiveHeight: false,
				 adaptiveHeightSpeed: 500,
				 video: false,
				 pager: false,
				 pagerType: 'full' ,
				 controls: true,
				 //pagerSelector: "#pager",
				 //nextSelector: "#controls", 
				 //prevSelector: "#controls", 
				 auto: false,
				 pause: 4000,
				 autoHover: true
			});

			$('#main-slider .slides').bxSlider({
				 mode: 'fade',
				 speed: 500,
				 slideMargin: 0,
				 infiniteLoop: true,
				 hideControlOnEnd: false,
				 adaptiveHeight: false,
				 adaptiveHeightSpeed: 500,
				 video: false,
				 pager: true,
				 pagerType: 'full' ,
				 controls: false, 
				 auto: true,
				 pause: 4000,
				 autoHover: true
			});
			
		}
				
		// Magnific PopUp - responsive lightbox
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html
		
		if(typeof $.fn.magnificPopup != 'undefined'){
		
			$('.magnificPopup').magnificPopup({
				disableOn: 400,
				closeOnContentClick: true,
				type: 'image'
			});
			
			$('.magnificPopup-gallery').magnificPopup({
				disableOn: 400,
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		
		}

		// EasyTabs - tabs plugin
		// https://github.com/JangoSteve/jQuery-EasyTabs/blob/master/README.markdown
		
		if(typeof $.fn.easytabs != 'undefined'){
			
			$('div[id^="tab-"]').easytabs({
				animationSpeed: 300,
				updateHash: false
			});
		
		}
		
		// gMap -  embed Google Maps into your website; uses Google Maps v3
		// http://labs.mario.ec/jquery-gmap/
		
		if(typeof $.fn.gMap != 'undefined'){
		
			var $t = $('#google-map');
			var mapZoom = parseInt($t.attr("data-zoom"));
			var mapAddress = $t.attr("data-address");
			var mapCaption = $t.attr("data-caption");
		
			$('#google-map').gMap({
				maptype: 'ROADMAP',
				scrollwheel: false,
				zoom: mapZoom,
				markers: [{
						address: mapAddress,
						html: mapCaption,
						popup: false
					}
				]
			});
		
		}
		
		// Isotope
		
		if (typeof $.fn.isotope != 'undefined') {
			
			$('.portfolio-items').imagesLoaded( function() {
			
				var container = $('.portfolio-items');
					
				container.isotope({
					itemSelector: '.item',
					layoutMode: 'masonry',
					transitionDuration: '0.5s'
				});
		
				$('.portfolio-filter li a').click(function () {
					$('.portfolio-filter li a').removeClass('active');
					$(this).addClass('active');
		
					var selector = $(this).attr('data-filter');
					container.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function () {
		
					container.isotope({ });
				
				});
				
			});
			
		}
		
		//

	});
	
/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   	
	$(window).scroll(function () {
							   
		
		
	});

})(window.jQuery);

// non jQuery plugins below

