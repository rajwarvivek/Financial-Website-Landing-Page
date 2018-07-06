$(document).ready(function() {
    $('.dropdown li').hover(
	function() {
        $('ul', this).fadeIn();
    },
	function(){
		 $('ul', this).fadeOut();
	}
	);
});
