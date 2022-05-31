/*
Main js file
main.js v1.0
*/

( function( $ ) {
	'use strict';
	$( document ).ready( function() {

		/*
		Initialize slider (#mw-main-slider)
		--------------------------------------------------
		*/

		var $mainSlider = $( '#mw-main-slider' ).flickity( {
			cellSelector: '.mw-main-slider-item',
			cellAlign: 'left',
			contain: true,
			accessibility: true,
			// dragging
			draggable: true,
			dragThreshold: 5,
			// at the end of cells, wrap-around to the other end for infinite scrolling
			wrapAround: true,
			// auto play, milliseconds (5000 = 5 seconds)
			autoPlay: false, // 5000
			pauseAutoPlayOnHover: true,
			// speed and motion
			selectedAttraction: 0.028, // 0.025
			friction: 0.3, // 0.28
			// previous next buttons and dots
			prevNextButtons: true,
			pageDots: true,
		} );

		$mainSlider.flickity( 'resize' );

	} );
} )( jQuery );
