/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Block styles.
 */
import './style.scss';

/**
 * Internal dependencies.
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Register block type.
 */
registerBlockType( metadata.name, {
	edit,
	save,
} );
