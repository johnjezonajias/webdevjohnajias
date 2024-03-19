import domReady from '@wordpress/dom-ready';

domReady( function () {
	const themeToggleButtons = document.querySelectorAll( '.toggle-dark-mode' );

	themeToggleButtons.forEach( function ( button ) {
		button.addEventListener( 'click', function () {
			document.body.classList.toggle( 'dark-mode' );
		} );
	} );
} );
