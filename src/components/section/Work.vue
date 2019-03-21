<template>
  <div class="work">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="title">Experiences</div>
					<p class="title-description">I have gained firsthand experience working in crucial project timelines.</p>
				</div>
			</div>
			<div class="gap"></div>
			<div v-for="(work, index) in works" :key="work.id">
				<div v-if="limit == 0 || index < limit">
					<div class="row">
						<div class="col-sm-2"></div>
						<div class="col-sm-8">
							<div class="card">
								<div class="card-title">
									{{ work.designation }} @ {{ work.company_name }}
								</div>
								<div class="card-body">
									<p class="date">From {{ work.start_at }} 15 to {{ work.end_at }}</p>
									<p class="description">{{ work.description }}</p>
									<div class="btn-group">
										<a :href="work.website" role="button" class="btn btn-primary btn-sm"><i class="fa fa-eye"></i>&nbsp; Company Website</a>
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
	</div>
</template>

<script>

export default {
	name: 'Work',
	props: ["works", "limit"],
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

.work {
	text-align: center;
}
</style>