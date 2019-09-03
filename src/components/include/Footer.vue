<template>
    <div class="footer">
        <footer>
		    <div class="gap"></div>
		    <div class="container">
			    <div class="row">
				    <div class="col-sm-4 col-xs-6">
						<router-link v-for="page in pages" :key="page.id" :to="page.url" class='btn-block color_text_white'><i :class='page.icon'></i>&nbsp; {{ page.name }}</router-link>
                    </div>
				    <div class="col-sm-4 col-xs-6">
						<a v-for="social in socials" :key="social.id" href="social.url" target="_blank" class="btn-block color_text_white"><i :class="social.icon"></i>&nbsp; {{ social.name }}</a>
					</div>
				    <div class="col-sm-4 col-xs-6 hidden-xs">
					    <p class="btn-block"><i class="fa fa-user"></i>&nbsp; {{ user.full_name }}</p>
					    <p class="btn-block"><i class="fa fa-code"></i>&nbsp; {{ user.designation }}</p>
					    <p class="btn-block"><i class="fa fa-phone-square"></i>&nbsp; {{ user.phone }}</p>
					    <p class="btn-block"><i class="fa fa-envelope"></i>&nbsp; {{ user.email }}</p>
					    <p class="btn-block"><i class="fa fa-map-marker"></i>&nbsp; {{ user.address }}</p>
				    </div>
			    </div>
		    </div>
		    <div class="gap"></div>
	    </footer>
	    <footer class="footer_copyright">
		    <div class="gap-small"></div>
		    <div class="container">
			    <div class="row">
				    <div class="col-sm-12">
					    <p>Created &amp; Maintained By <a href="http://nfraz.co.in" target="_blank">Nazish Fraz</a></p>
				    </div>
			    </div>
		    </div>
		    <div class="gap-small"></div>
	    </footer>
    </div>
</template>
<script>
export default {
    name: "Footer",
    props: ["user", "pages", "socials"],
    data() {
        return {

        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/css/custom.scss';

.footer {
    background: $primary;
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: $link;
        }
    }
    p {
        color: white;
    }
    .footer_copyright {
        background: $link !important;
        p {
            color: $primary !important;
        }
        a {
            color: $primary !important;
            &:hover {
                color: $primary_hover !important;
            }
        }
    }
}
</style>
