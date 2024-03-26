/* eslint-disable import/no-extraneous-dependencies */
import domReady from '@wordpress/dom-ready';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';

domReady( () => {
	gsap.registerPlugin( ScrollTrigger );

	const images = gsap.utils.toArray( '.portfolios img' );

	const showPortfolios = () => {
		//document.scrollingElement.scrollTo( 0, 0 );

		gsap.utils.toArray( '.portfolios' ).forEach( ( portfolios, index ) => {
			const portfoliosWrapper = portfolios.querySelector(
				'.portfolios__wrapper'
			);
			const [ x, xEnd ] =
				index % 2
					? [
							'100%',
							( portfoliosWrapper.scrollWidth -
								portfolios.offsetWidth ) *
								-1,
					  ]
					: [ portfoliosWrapper.scrollWidth * -1, 0 ];

			gsap.fromTo(
				portfoliosWrapper,
				{ x },
				{
					x: xEnd,
					scrollTrigger: {
						trigger: portfolios,
						scrub: 1,
						invalidateOnRefresh: true,
						markers: true,
					},
				}
			);
		} );
	};

	imagesLoaded( images ).on( 'always', showPortfolios );
} );
