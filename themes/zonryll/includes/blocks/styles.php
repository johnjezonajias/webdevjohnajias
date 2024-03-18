<?php
/**
 * Block styles
 *
 * @package Zonryll\Styles
 */

namespace Zonryll\Blocks\Styles;

/**
 * Default setup routine.
 */
function setup(): void {
	add_action( 'after_setup_theme', __NAMESPACE__ . '\\enqueue_block_styles' );
	add_action( 'init', __NAMESPACE__ . '\\add_block_styles' );
}

/**
 * Add theme support for block styles and editor style.
 */
function enqueue_block_styles(): void {
	/*
	 * Load additional block styles.
	 */
	$styled_blocks = [
		'button',
		'quote',
		'navigation',
	];

	foreach ( $styled_blocks as $block_name ) {
		wp_enqueue_block_style(
			"core/$block_name",
			[
				'handle' => "webicient-$block_name",
				'src'    => ZONRYLL_DIST_URL . "/css/blocks/$block_name.css",
				'path'   => ZONRYLL_DIST_URL . "/css/blocks/$block_name.css",
			]
		);
	}
}

/**
 * Register block styles.
 */
function add_block_styles(): void {
	register_block_style(
		'core/button',
		[
			'name'         => 'zonryll-export-button',
			'label'        => __( 'Export Button', 'zonryll' ),
			'inline_style' => '
				.wp-block-button.is-style-zonryll-export-button .wp-block-button__link::after {
					color: var(--wp--preset--color--base);
					content: "\f56e";
					font-family: var(--wp--preset--font-family--fontawesome);
					font-size: 16px;
				}
				.wp-block-button.is-style-zonryll-export-button .wp-block-button__link:hover::after {
					color: var(--wp--preset--color--contrast);
				}
			',
		]
	);

	register_block_style(
		'core/group',
		[
			'name'  => 'zonryll-box-shadow',
			'label' => __( 'Box shadow', 'zonryll' ),
		]
	);

	register_block_style(
		'core/column',
		[
			'name'  => 'zonryll-box-shadow',
			'label' => __( 'Box shadow', 'zonryll' ),
		]
	);

	register_block_style(
		'core/columns',
		[
			'name'  => 'zonryll-box-shadow',
			'label' => __( 'Box shadow', 'zonryll' ),
		]
	);
}
