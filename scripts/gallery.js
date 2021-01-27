$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				$('#scrollToTop').fadeIn();
			} else {
				$('#scrollToTop').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#scrollToTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});