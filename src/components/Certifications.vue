<template>
  	<div class="certifications">
    	<Header :user="user"></Header>
    	<h1>Certifications</h1>
    	<Footer :user="user"></Footer>
  	</div>
</template>
<script>
import Header from './include/Header';
import Footer from './include/Footer';

export default {
  	name: 'Certifications',
  	props: ["user"],
  	components: {
    	Header,
    	Footer
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