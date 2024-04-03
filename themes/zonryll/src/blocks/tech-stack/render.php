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
<div <?php echo get_block_wrapper_attributes( [ 'class' => 'tech-stack' ] ); ?>>
	<div class="tech-stack__card">
		<?php
			foreach ( $block->inner_blocks as $inner_block ) {
				echo $inner_block->render();
			}
		?>
		<h6><?php echo $attributes['title']; ?></h6>
	</div>
</div>
