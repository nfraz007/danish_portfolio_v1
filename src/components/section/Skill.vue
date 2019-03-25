<template>
  <div class="work">
		<div class="container">
			<Section :sections="sections" type="skills"></Section>
			<div class="gap"></div>
			<div>
				<div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                        <p v-if="skills.length">
                            <span v-for="skill in skills" :key="skill.id" class="badge">{{ skill.name }}</span>
                        </p>
                    </div>
                    <div class="col-sm-2"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Section from '../include/Section';

export default {
	name: 'Skill',
	props: ["sections", "skills"],
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