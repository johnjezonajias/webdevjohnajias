/* eslint-disable jsdoc/require-param-type */
/**
 * WordPress dependencies.
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param  root0
 * @param  root0.attributes
 * @return {WPElement} Element to render.
 */
export default function Save( { attributes } ) {
	const blockProps = useBlockProps.save( { className: 'tech-stacks' } );

	return (
		<div { ...blockProps }>
			<div className="tech-stacks__panel is-layout-constrained">
				<div className="tech-stacks__panel--content">
					<h2>{ attributes.title }</h2>
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
					<InnerBlocks.Content />
					<div className="wp-block-button is-style-outline">
						<button
							className="wp-block-button__link wp-element-button trigger"
							data-toggle="closed"
						>
							Go back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
