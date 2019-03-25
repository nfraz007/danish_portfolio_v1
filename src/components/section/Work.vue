<template>
  <div class="work">
		<div class="container">
			<Section :sections="sections" type="work_experiences"></Section>
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
									<p class="date">From {{ format(work.start_at) }} to {{ format(work.end_at) }} <i class="fa fa-circle"></i> {{ date_diff(work.start_at, work.end_at) }}</p>
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
import Section from '../include/Section';

export default {
	name: 'Work',
	props: ["sections", "works", "limit"],
	components: {
		Section
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