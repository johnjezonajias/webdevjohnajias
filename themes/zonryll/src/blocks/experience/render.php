<?php
/**
 * Server-side rendering of the `zonryll/experience` block.
 *
 * @package Zonryll\Blocks
 */

namespace Zonryll\Block\Experience;

if ( ! $attributes['title'] ) {
	return;
}

?>
<div <?php echo get_block_wrapper_attributes( [ 'class' => 'experience' ] ); ?>>
	<div class="experience__card">
		<h5><?php echo $attributes['title']; ?></h5>
		<h6><?php echo $attributes['position']; ?></h6>
		<p class="experience__card--date"><?php echo $attributes['tenures']; ?></p>
		<p class="experience__card--description"><?php echo $attributes['role']; ?></p>
	</div>
</div>
