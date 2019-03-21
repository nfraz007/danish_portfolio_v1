<template>
  <div class="main">
		<Header :user="user" :pages="pages" :page_current="page_current"></Header>
		<div class="projects">
			<Project :sections="sections" ></Project>
			<div class="gap"></div>
		</div>
		<Footer :user="user" :pages="pages" :socials="socials"></Footer>
	</div>
</template>
<script>
import Header from './include/Header';
import Footer from './include/Footer';
import Project from './section/Project';

export default {
  	name: 'Projects',
  	props: ["user", "pages", "sections", "page_current", "socials"],
  	components: {
    	Header,
			Footer,
			Project
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