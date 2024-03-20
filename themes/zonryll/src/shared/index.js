/* eslint-disable import/no-extraneous-dependencies */
import Lenis from '@studio-freight/lenis';

import './scss/styles.scss';

window.addEventListener( 'scroll', function () {
	const header = document.querySelector( '.site-header' );
	if ( window.scrollY > 100 ) {
		header.classList.add( 'scrolled' );
	} else {
		header.classList.remove( 'scrolled' );
	}
} );

const lenis = new Lenis();

function raf( time ) {
	lenis.raf( time );
	requestAnimationFrame( raf );
}

requestAnimationFrame( raf );
