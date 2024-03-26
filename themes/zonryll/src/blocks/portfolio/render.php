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
<div <?php echo get_block_wrapper_attributes( [ 'class' => 'portfolio' ] ); ?>>
	<div class="portfolio__card">
		<?php
			foreach ( $block->inner_blocks as $inner_block ) {
				echo $inner_block->render();
			}
		?>
	</div>
</div>
