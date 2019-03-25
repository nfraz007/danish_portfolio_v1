<template>
  <div class="profile">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h2>I AM</h2>
					<h1>{{ user.full_name }}</h1>
					<h3>{{ user.designation }}</h3>
					<p>{{ user.description }}</p>
					<div class="gap-small"></div>
					<div class="btn-group">
						<a :href="user.resume" role="button" class="btn btn-primary" download><i class="fa fa-download"></i>&nbsp; Download Resume</a>
						<a :href="user.resume" role="button" class="btn btn-primary" target="_blank"><i class="fa fa-eye"></i>&nbsp; View Resume</a>
					</div>
					<div class="gap"></div>
					<div >
						<a v-for="social in socials" :key="social.id" :href="social.url" target="_blank" role="button" class="btn btn-social">
							<div class="icon"><i :class="social.icon"></i></div>
							<div class="name">{{ social.name }}</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Profile',
	props: ["user", "socials"],
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

.profile {
    text-align: center;
}
h1 {
    font-size: 40px;
    font-weight: bold;
    color: $link;
}
h2 {
    color: $primary;
}
h3 {
    color: $primary_hover
}
ul {
	h1 {
		background: $primary
	}
}

@media screen and (max-width: 500px) {
    h1 {
		font-size: 30px !important;
	}
	h2 {
		font-size: 25px !important;
	}
	.btn-socials {

	}
}
@media screen and (min-width: 500px) and (max-width: 1000px) {
    
}
@media screen and (min-width: 1000px) and (max-width: 1200px) {
    
}
@media screen and (min-width: 1200px) {
    
}
</style>