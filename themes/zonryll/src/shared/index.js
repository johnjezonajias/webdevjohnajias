/* eslint-disable import/no-extraneous-dependencies */
import domReady from '@wordpress/dom-ready';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './scss/styles.scss';

domReady( () => {
	/**
	 * Lenis smooth scroll init.
	 */
	const lenis = new Lenis();

	function raf( time ) {
		lenis.raf( time );
		requestAnimationFrame( raf );
	}

	requestAnimationFrame( raf );

	/**
	 * Banner text animation.
	 */
	gsap.registerPlugin( ScrollTrigger );

	const text = document.querySelector( '.site-banner__contents' );
	const tl = gsap.timeline( {
		defaults: { ease: 'none', transformOrigin: '50% 50%' },
		scrollTrigger: {
			trigger: '.site-banner',
			start: 'top top',
			end: 'bottom center',
			scrub: true,
			markers: true,
		},
	} );

	tl.to(
		text,
		{
			y: -text.offsetHeight * text.dataset.depth,
			autoAlpha: 0,
			scale: 1.08,
			duration: 0.2,
		},
		0
	);
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
