import './scss/styles.scss';

window.addEventListener( 'scroll', function () {
	const header = document.querySelector( '.site-header' );
	if ( window.scrollY > 100 ) {
		header.classList.add( 'scrolled' );
	} else {
		header.classList.remove( 'scrolled' );
	}
} );
