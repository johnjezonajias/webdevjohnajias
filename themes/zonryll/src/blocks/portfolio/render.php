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
<div
<?php
	// phpcs:disable
	echo get_block_wrapper_attributes( [ 'class' => 'portfolio' ] );
	// phpcs:enable
?>
>
	<div class="portfolio__card">
		<?php
		foreach ( $block->inner_blocks as $inner_block ) {
			// phpcs:disable
			echo $inner_block->render();
			// phpcs:enable
		}
		?>
	</div>
</div>
