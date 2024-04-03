/* eslint-disable jsdoc/require-param-type */
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

	const bannerText = document.querySelector( '.site-banner__contents' );
	const bannerTextTimeLine = gsap.timeline( {
		defaults: { ease: 'none', transformOrigin: '50% 50%' },
		scrollTrigger: {
			trigger: '.site-banner',
			start: 'top top',
			end: 'bottom center',
			scrub: true,
		},
	} );

	bannerTextTimeLine.to(
		bannerText,
		{
			y: -bannerText.offsetHeight * bannerText.dataset.depth,
			autoAlpha: 0,
			scale: 1.08,
			duration: 0.2,
		},
		0
	);
} );

/**
 * GSAP animations.
 *
 * @param elem
 * @param direction
 */
function animateFrom( elem, direction ) {
	direction = direction || 1;
	let x = 0,
		y = direction * 150;
	if ( elem.classList.contains( 'animated--from-left' ) ) {
		x = -150;
		y = 0;
	} else if ( elem.classList.contains( 'animated--from-right' ) ) {
		x = 150;
		y = 0;
	}
	elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	elem.style.opacity = '0';
	gsap.fromTo(
		elem,
		{ x, y, autoAlpha: 0 },
		{
			duration: 1.25,
			x: 0,
			y: 0,
			autoAlpha: 1,
			ease: 'expo',
			overwrite: 'auto',
		}
	);
}

function hide( elem ) {
	gsap.set( elem, { autoAlpha: 0 } );
}

document.addEventListener( 'DOMContentLoaded', function () {
	gsap.registerPlugin( ScrollTrigger );

	gsap.utils.toArray( '.animated' ).forEach( function ( elem ) {
		hide( elem );

		ScrollTrigger.create( {
			trigger: elem,
			markers: false,
			onEnter() {
				animateFrom( elem );
			},
			onEnterBack() {
				animateFrom( elem, -1 );
			},
			onLeave() {
				hide( elem );
			},
		} );
	} );
} );
