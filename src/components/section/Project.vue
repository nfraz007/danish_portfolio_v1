<template>
  <div class="project">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="title">Projects</div>
					<p class="title-description">Whenever I learn something new, I make a project on this and add it to my github profile because I firmly believe that knowledge sharing is very important.</p>
				</div>
			</div>
			<div class="gap"></div>
			<div v-for="work in works" :key="work">
				<div class="row">
					<div class="col-sm-2"></div>
					<div class="col-sm-8">
						<div class="card">
							<div class="card-title">
								Dinars Inventory
							</div>
							<div class="card-body">
								<p class="date">From 2018 sept 15 to 2018-20 * 2 month</p>
								<p class="description">This is a inventory and billing software made in laravel. A Parent company can create multiple child complany and see the order and payment flow done by child company. Parent will transfer stock to the child company. Child company will sell all this product to their customer. They can generate invoice, download reports and lots of thing.</p>
								<p><span class="badge">HTML</span> <span class="badge">php</span></p>
                                <div class="btn-group">
									<button type="button" class="btn btn-primary btn-sm"><i class="fa fa-code"></i>&nbsp; View Code</button>
									<button type="button" class="btn btn-primary btn-sm"><i class="fa fa-laptop"></i>&nbsp; Live Demo</button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-2"></div>
				</div>
				<div class="gap-small"></div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Project',
	props: ["user"],
	components: {
		
	},
	data () {
		return {
			works: [1,2]
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/css/custom.scss';

.project {
	text-align: center;
}
</style>