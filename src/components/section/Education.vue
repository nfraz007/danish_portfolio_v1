<template>
  <div class="education">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="title">Education</div>
					<p class="title-description">All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.</p>
				</div>
			</div>
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

export default {
	name: 'Education',
	props: ["educations"],
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

.education {
	text-align: center;
}
</style>