/* eslint-disable no-duplicate-imports */
/**
 * WordPress dependencies.
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody } from '@wordpress/components';

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
		<div { ...useBlockProps( { className: 'experience' } ) }>
			<InspectorControls>
				<PanelBody title="Experience Settings">
					<TextControl
						label="Company Site Link"
						value={ attributes.companySiteLink }
						onChange={ ( value ) =>
							setAttributes( { companySiteLink: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="experience__card">
				<h5>
					<RichText
						tagName="span"
						allowedFormats={ [] }
						value={ attributes.title }
						onChange={ ( title ) => setAttributes( { title } ) }
						formattingControls={ [] }
						placeholder="Title"
					/>
				</h5>
				<h6>
					<RichText
						tagName="span"
						allowedFormats={ [] }
						value={ attributes.position }
						onChange={ ( position ) =>
							setAttributes( { position } )
						}
						formattingControls={ [] }
						placeholder="Position"
					/>
				</h6>
				<p>
					<RichText
						tagName="span"
						allowedFormats={ [] }
						value={ attributes.tenures }
						onChange={ ( tenures ) => setAttributes( { tenures } ) }
						formattingControls={ [] }
						placeholder="Tenures"
					/>
				</p>
				<p>
					<RichText
						tagName="span"
						allowedFormats={ [] }
						value={ attributes.role }
						onChange={ ( role ) => setAttributes( { role } ) }
						formattingControls={ [] }
						placeholder="Work description"
					/>
				</p>
			</div>
		</div>
	);
}
