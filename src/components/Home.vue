<template>
  <div class="main">
		<Header :user="user" :pages="pages" :page_current="page_current"></Header>
		<div class="home">
			<Profile :sections="sections" :user="user" :socials="socials"></Profile>
			<div class="gap"></div>
			<ProfileCounter></ProfileCounter>
			<div class="gap"></div>
			<Skill :sections="sections"></Skill>
			<div class="gap"></div>
			<hr>
			<div class="gap"></div>
			<Work :sections="sections" :works="works" :limit="2"></Work>
			<div class="gap"></div>
			<hr>
			<div class="gap"></div>
			<Education :sections="sections" :educations="educations"></Education>
			<div class="gap"></div>
		</div>
		<Footer :user="user" :pages="pages" :socials="socials"></Footer>
	</div>
</template>
<script>
import Header from './include/Header';
import Footer from './include/Footer';
import Profile from './section/Profile';
import ProfileCounter from './section/ProfileCounter';
import Work from './section/Work';
import Skill from './section/Skill';
import Education from './section/Education';

export default {
	name: 'home',
	props: ["user", "pages", "sections", "page_current", "socials", "works", "educations"],
	components: {
		Header,
		Footer,
		Profile,
		ProfileCounter,
		Work,
		Skill,
		Education
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