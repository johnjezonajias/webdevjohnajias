<?php
/**
 * Server-side rendering of the `zonryll/portfolio` block.
 *
 * @package Zonryll\Blocks
 */

namespace Zonryll\Block\Portfolio;

if ( ! $attributes['title'] ) {
	return;
}

?>
<div <?php echo esc_attr( get_block_wrapper_attributes( [ 'class' => 'portfolio' ] ) ); ?>>
	<div class="portfolio__card">
		<?php
		foreach ( $block->inner_blocks as $inner_block ) {
			echo wp_kses_post( $inner_block->render() );
		}
		?>
	</div>
</div>
