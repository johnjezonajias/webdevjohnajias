import domReady from '@wordpress/dom-ready';

domReady( function () {
	const themeToggleButtons = document.querySelectorAll( '.toggle-dark-mode' );
	const darkModeMediaQuery = window.matchMedia(
		'(prefers-color-scheme: dark)'
	);
	const body = document.body;

	function applyDarkMode() {
		body.classList.add( 'dark-mode' );
		themeToggleButtons.forEach( ( button ) => ( button.checked = true ) );
	}

	function removeDarkMode() {
		body.classList.remove( 'dark-mode' );
		themeToggleButtons.forEach( ( button ) => ( button.checked = false ) );
	}

	if ( darkModeMediaQuery.matches ) {
		applyDarkMode();
	} else {
		removeDarkMode();
	}

	darkModeMediaQuery.addListener( function ( event ) {
		if ( event.matches ) {
			applyDarkMode();
		} else {
			removeDarkMode();
		}
	} );

	themeToggleButtons.forEach( function ( button ) {
		button.addEventListener( 'click', function () {
			if ( button.checked ) {
				applyDarkMode();
			} else {
				removeDarkMode();
			}
		} );
	} );
} );
