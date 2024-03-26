/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	RichText,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.setAttributes
 * @param  root0.attributes
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( { className: 'tech-stacks' } );

	const { children, ...innerBlockProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'theme/tech-stack' ],
		renderAppender: false,
	} );

	return (
		<div { ...innerBlockProps }>
			<div className="tech-stacks__panel is-layout-constrained">
				<div className="tech-stacks__panel--content">
					<h2>
						<RichText
							tagName="span"
							allowedFormats={ [] }
							value={ attributes.title }
							onChange={ ( title ) => setAttributes( { title } ) }
							formattingControls={ [] }
							placeholder="My tech-stacks?"
						/>
					</h2>
					<div className="wp-block-button is-style-outline">
						<button
							className="wp-block-button__link wp-element-button trigger"
							data-toggle="closed"
						>
							Show all
						</button>
					</div>
				</div>
			</div>
			<div className="tech-stacks__portfolio is-layout-constrained">
				<div className="tech-stacks__portfolio--content">
					{ children }
					<InnerBlocks.ButtonBlockAppender />
				</div>
			</div>
		</div>
	);
}
