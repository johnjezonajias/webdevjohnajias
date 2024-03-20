/* eslint-disable import/no-extraneous-dependencies */
import { gsap } from 'gsap';

document.addEventListener( 'DOMContentLoaded', function () {
	const progressBar = document.querySelector( '.scroll-progress__indicator' );
	const body = document.body;
	const html = document.documentElement;
	const documentHeight = Math.max(
		body.scrollHeight,
		body.offsetHeight,
		html.clientHeight,
		html.scrollHeight,
		html.offsetHeight
	);

	function updateProgressBar() {
		const scrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		const scrollProgress =
			( scrollTop / ( documentHeight - window.innerHeight ) ) * 100;
		gsap.to( progressBar, {
			height: `${ scrollProgress }%`,
			duration: 0.5,
		} );
	}

	window.addEventListener( 'scroll', updateProgressBar );
} );
