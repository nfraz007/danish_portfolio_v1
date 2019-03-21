<template>
  <div class="education">
		<div class="container">
			<Section :sections="sections" type="educations"></Section>
			<div class="gap"></div>
			<div>
				<div class="row">
                    <div v-for="education in educations" :key="education.id">
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-title">
                                    {{ education.university }}
                                </div>
                                <div class="card-body">
                                    <p class="date">{{ education.year }}</p>
                                    <p class="description">{{ [ education.degree, education.stream, education.percent ].join(", ") }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Section from '../include/Section';

export default {
	name: 'Education',
	props: ["sections", "educations"],
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

.education {
	text-align: center;
}
</style>