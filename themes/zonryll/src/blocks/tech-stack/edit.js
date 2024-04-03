/**
 * WordPress dependencies.
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

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
 * @param {Object} param
 * @param {Object} param.attributes
 * @param {Object} param.setAttributes
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps( { className: 'tech-stack' } ) }>
			<div className="tech-stack__card">
				<InnerBlocks />
				<h6>
					<RichText
						tagName="span"
						allowedFormats={ [] }
						value={ attributes.title }
						onChange={ ( title ) => setAttributes( { title } ) }
						formattingControls={ [] }
						placeholder="Title"
					/>
				</h6>
			</div>
		</div>
	);
}
