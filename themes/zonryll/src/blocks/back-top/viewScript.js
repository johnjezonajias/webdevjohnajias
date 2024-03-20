import domReady from '@wordpress/dom-ready';

domReady( () => {
	const backToTopButton = document.querySelector( '.back-to-top' );

	backToTopButton.addEventListener( 'click', () => {
		window.scrollTo( {
			top: 0,
			behavior: 'smooth',
		} );
	} );

	window.addEventListener( 'scroll', () => {
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			backToTopButton.style.display = 'block';
		} else {
			backToTopButton.style.display = 'none';
		}
	} );
} );
