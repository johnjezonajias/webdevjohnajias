/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
} from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const blockProps = useBlockProps( { className: 'portfolios' } );

	const { children, ...innerBlockProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'theme/portfolio' ],
		renderAppender: false,
	} );

	return (
		<div { ...innerBlockProps }>
			<div className="portfolios__wrapper">
				{ children }
				<InnerBlocks.ButtonBlockAppender />
			</div>
		</div>
	);
}
