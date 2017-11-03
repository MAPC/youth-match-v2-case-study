/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
		$('.scrolly').scrolly();

    $(document).ready(function() {
      $('.screen-carousel').slick({
        autoplay: true, 
        autoplaySpeed: 3000,
      });
    });

    $('#share-button').click(function() {
      var copyer = document.createElement('textarea');
      copyer.style.visibility = 'hidden';
      copyer.innerHTML = 'https://drive.google.com/file/d/0B811SzyaEqJ3cUVBQi13MjAtcFE/preview';

      copyer.select();
      var succes = document.execCommand('copy');

      if (success) {
      }

      copyer.innerHTML = '';
    });

	});

})(jQuery);
