/* eslint-disable import/no-extraneous-dependencies */
import domReady from '@wordpress/dom-ready';
import Lenis from '@studio-freight/lenis';

import './scss/styles.scss';

/**
 * Lenis smooth scroll init.
 */
domReady( () => {
	const lenis = new Lenis();

	function raf( time ) {
		lenis.raf( time );
		requestAnimationFrame( raf );
	}

	requestAnimationFrame( raf );
} );

/**
 * Add class scrolled on site-header.
 */
window.addEventListener( 'scroll', function () {
	const header = document.querySelector( '.site-header' );
	if ( window.scrollY > 20 ) {
		header.classList.add( 'scrolled' );
	} else {
		header.classList.remove( 'scrolled' );
	}
} );
