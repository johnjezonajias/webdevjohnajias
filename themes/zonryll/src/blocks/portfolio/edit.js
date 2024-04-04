/* eslint-disable jsdoc/check-param-names */
/**
 * WordPress dependencies.
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} param
 * @param {Object} param.attributes
 * @param {Object} param.setAttributes
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<div { ...useBlockProps( { className: 'portfolio' } ) }>
			<div className="portfolio__card">
				<InnerBlocks />
			</div>
		</div>
	);
}
