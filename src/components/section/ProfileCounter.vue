<template>
  <div class="profile_counter">
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<div class="count">3</div>
					<div class="name">Years Experience</div>
				</div>
				<div class="col-sm-3">
					<div class="count">13</div>
					<div class="name">Projects</div>
				</div>
				<div class="col-sm-3">
					<div class="count">5</div>
					<div class="name">Certifications</div>
				</div>
				<div class="col-sm-3">
					<div class="count">3</div>
					<div class="name">Achievements</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ProfileCounter',
	props: ["user"],
	components: {
		
	},
	data () {
		return {
		
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/css/custom.scss';

.profile_counter {
	background: $primary;
	padding: 50px 0;
	color: $link;
	text-align: center;
	border-top: 5px solid $link;
	border-bottom: 5px solid $link;
	.count {
		font-size: 40px;
	}
	.name {
		
	}
}
</style>