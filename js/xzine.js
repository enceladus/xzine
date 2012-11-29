function randomInArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

(function( $ ){
	$.fn.randomize = function() {

		// select a font
		var font = randomInArray(['Croissant One', 'Julius Sans One', 'Sacramento', 'Oldenburg']);
		var bg = randomInArray(['#b6cb15', '#c5b9c5', '#bd757f'])

		this.css('background-color', bg);
		this.find('.headline').css('font-family', font);
	};
})( jQuery );

$(document).ready(function() {
	$('p.background').height($(window).height());
	$('.site-header').hover(function() {
		$('nav').toggleClass('open');
	});

	$('article.text').each(function() { $(this).randomize() });
});