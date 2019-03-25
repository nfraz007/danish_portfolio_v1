<template>
  <div class="project">
		<div class="container">
			<Section :sections="sections" type="projects"></Section>
			<div class="gap"></div>
			<div v-for="project in projects" :key="project.id">
				<div class="row">
					<div class="col-sm-2"></div>
					<div class="col-sm-8">
						<div class="card">
							<div class="card-title">
								{{ project.name }}
							</div>
							<div class="card-body">
								<p class="date">From {{ format(project.start_at) }} to {{ format(project.end_at) }} <i class="fa fa-circle"></i> {{ date_diff(project.start_at, project.end_at) }}</p>
								<p class="description">{{ project.description }}</p>
								<div v-if="project.technology"><span v-for="tech in project.technology" :key="tech" class="badge">{{ tech }}</span></div>
                				<div class="btn-group">
									<a v-if="project.url_code" role="button" class="btn btn-primary btn-sm"><i class="fa fa-code"></i>&nbsp; View Code</a>
									<a v-if="project.url_demo" role="button" class="btn btn-primary btn-sm"><i class="fa fa-laptop"></i>&nbsp; Live Demo</a>
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
import Section from '../include/Section';

export default {
	name: 'Project',
	props: ["sections", "user", "projects"],
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

.project {
	text-align: center;
}
</style>