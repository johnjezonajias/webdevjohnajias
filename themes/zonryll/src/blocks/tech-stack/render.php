<?php
/**
 * Server-side rendering of the `zonryll/skill` block.
 *
 * @package Zonryll\Blocks
 */

namespace Zonryll\Block\Skill;

if ( ! $attributes['title'] ) {
	return;
}

?>
<div
<?php
	// phpcs:disable
	echo get_block_wrapper_attributes( [ 'class' => 'tech-stack' ] );
	// phpcs:enable
?>
>
	<div class="tech-stack__card">
		<?php
		foreach ( $block->inner_blocks as $inner_block ) {
			// phpcs:disable
			echo $inner_block->render();
			// phpcs:enable
		}
		?>
		<h6><?php echo esc_html( $attributes['title'] ); ?></h6>
	</div>
</div>
