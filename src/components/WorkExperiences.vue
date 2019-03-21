<template>
  <div class="main">
		<Header :user="user" :pages="pages" :page_current="page_current"></Header>
		<div class="work-experiences">
			<Work :sections="sections"  :works="works" :limit="0"></Work>
			<div class="gap"></div>
		</div>
		<Footer :user="user" :pages="pages" :socials="socials"></Footer>
	</div>
</template>
<script>
import Header from './include/Header';
import Footer from './include/Footer';
import Work from './section/Work';

export default {
	name: 'WorkExperiences',
	props: ["user", "pages", "sections", "page_current", "works", "socials"],
	components: {
		Header,
		Footer,
	Work
	},
	data () {
		return {
		
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>