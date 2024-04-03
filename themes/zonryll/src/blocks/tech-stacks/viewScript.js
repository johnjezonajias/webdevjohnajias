/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable @wordpress/no-unused-vars-before-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import { gsap } from 'gsap';

const ITEManimate = {
	start: 0,
	bezier( p0, p1, p2, p3 ) {
		return ITEManimate.polyBez( [ p0, p1 ], [ p2, p3 ] );
	},
	polyBez( p1, p2 ) {
		const A = [ null, null ],
			B = [ null, null ],
			C = [ null, null ],
			bezCoOrd = function ( t, ax ) {
				( C[ ax ] = 3 * p1[ ax ] ),
					( B[ ax ] = 3 * ( p2[ ax ] - p1[ ax ] ) - C[ ax ] ),
					( A[ ax ] = 1 - C[ ax ] - B[ ax ] );
				return t * ( C[ ax ] + t * ( B[ ax ] + t * A[ ax ] ) );
			},
			xDeriv = function ( t ) {
				return C[ 0 ] + t * ( 2 * B[ 0 ] + 3 * A[ 0 ] * t );
			},
			xForT = function ( t ) {
				let x = t,
					i = 0,
					z;
				while ( ++i < 14 ) {
					z = bezCoOrd( x, 0 ) - t;
					if ( Math.abs( z ) < 1e-3 ) break;
					x -= z / xDeriv( x );
				}
				return x;
			};
		return function ( t ) {
			return bezCoOrd( xForT( t ), 1 );
		};
	},
};

( function ( $ ) {
	'use strict';

	const w = $( window );

	const animationTrigger = $( '.trigger' );
	const sceneContainer = $( '.tech-stacks__panel' );
	const portfolioContainer = $( '.tech-stacks__portfolio' );

	const main = {
		init() {
			const self = this;
			main.animate();
		},

		animate() {
			function openAnimation() {
				gsap.to( sceneContainer, {
					duration: 0.8,
					height: '100%',
					ease: ITEManimate.bezier( 0.93, 0.035, 0.35, 0.815 ),
					top: '0%',
					width: '100%',
					left: '0%',
					onComplete() {
						console.log( sceneContainer );
						gsap.to( portfolioContainer, {
							duration: 1.8,
							width: '100%',
							top: '0',
							ease: ITEManimate.bezier(
								0.93,
								0.035,
								0.35,
								0.815
							),
						} );
						gsap.to( sceneContainer, {
							duration: 0.8,
							top: '-100%',
							ease: ITEManimate.bezier(
								0.93,
								0.035,
								0.35,
								0.815
							),
						} );
					},
				} );
			}

			function closeAnimation() {
				gsap.to( portfolioContainer, {
					duration: 1.2,
					top: '100%',
					width: '100%',
					ease: ITEManimate.bezier( 0.815, 0.035, 0.35, 0.93 ),
					onComplete() {
						gsap.to( sceneContainer, {
							duration: 0.8,
							height: '100%',
							top: '0',
							width: '100%',
							left: '0',
							ease: ITEManimate.bezier(
								0.815,
								0.035,
								0.35,
								0.93
							),
						} );
					},
				} );
			}

			let isOpen = false;

			animationTrigger.on( 'click', function () {
				isOpen = ! isOpen;

				if ( isOpen ) {
					openAnimation();
				} else {
					closeAnimation();
				}
			} );

			/* $( window ).on( 'scroll', function () {
				if ( isOpen ) {
					closeAnimation();
					isOpen = false;
				}
			} ); */
		},
	};

	return main.init();
} )( $ );
