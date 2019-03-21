<template>
  <div class="work">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="title">{{ sections.skills.name }}</div>
					<p class="title-description">{{ sections.skills.description }}</p>
				</div>
			</div>
			<div class="gap"></div>
			<div>
				<div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-title">
                                FrontEnd
                            </div>
                            <div class="card-body">
                                <p>php, html, database, mysql</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-title">
                                FrontEnd
                            </div>
                            <div class="card-body">
                                <p>php, html, database, mysql</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-title">
                                FrontEnd
                            </div>
                            <div class="card-body">
                                <p>php, html, database, mysql</p>
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
	name: 'Skill',
	props: ["sections"],
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