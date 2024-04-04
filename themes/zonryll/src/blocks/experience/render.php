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
<div
<?php
	// phpcs:disable
	echo get_block_wrapper_attributes( [ 'class' => 'experience' ] );
	// phpcs:enable
?>
>
	<?php if ( ! empty( $attributes['companySiteLink'] ) ) : ?>
		<a href="<?php echo esc_url( $attributes['companySiteLink'] ); ?>" target="_blank">
	<?php endif; ?>
		<div class="experience__card">
			<h5><?php echo esc_html( $attributes['title'] ); ?></h5>
			<h6><?php echo esc_html( $attributes['position'] ); ?></h6>
			<p class="experience__card--date"><?php echo esc_html( $attributes['tenures'] ); ?></p>
			<p class="experience__card--description"><?php echo esc_html( $attributes['role'] ); ?></p>
		</div>
	<?php if ( ! empty( $attributes['companySiteLink'] ) ) : ?>
		</a>
	<?php endif; ?>
</div>
