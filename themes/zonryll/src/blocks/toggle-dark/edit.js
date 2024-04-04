/**
 * WordPress dependencies.
 */
import { useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';

const LoadingResponsePlaceholder = ( { children } ) => {
	useEffect( () => {
		return () => {
			document.dispatchEvent( new Event( 'ZonryllServerSideRender' ) );
		};
	}, [] );

	return children;
};

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {} ) {
	return (
		<ServerSideRender
			LoadingResponsePlaceholder={ LoadingResponsePlaceholder }
			block="zonryll/toggle-dark"
		/>
	);
}
