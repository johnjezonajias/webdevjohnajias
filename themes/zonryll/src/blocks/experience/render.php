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
	<?php if ( ! empty( $attributes['companySiteLink'] ) ) : ?>
		<a href="<?php echo esc_url( $attributes['companySiteLink'] ); ?>" target="_blank">
	<?php endif; ?>
		<div class="experience__card">
			<h5><?php echo $attributes['title']; ?></h5>
			<h6><?php echo $attributes['position']; ?></h6>
			<p class="experience__card--date"><?php echo $attributes['tenures']; ?></p>
			<p class="experience__card--description"><?php echo $attributes['role']; ?></p>
		</div>
	<?php if ( ! empty( $attributes['companySiteLink'] ) ) : ?>
		</a>
	<?php endif; ?>
</div>
