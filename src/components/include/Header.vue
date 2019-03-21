<template>
	<div class="header">
        <head>
            <title>{{ [ user.full_name, page_current.name ].join(" | ") }}</title>
            <meta name="description" content="">
            <meta name="keywords" :content="[user.first_name, user.last_name, user.full_name, user.designation, user.website, user.address].join(', ')">
            <meta name="author" :content="user.full_name">
        </head>
		<header>
			<nav class="navbar">
				<div class="container">
					<div class="navbar-header">
						<router-link to="/" class='navbar-brand'>{{ user.full_name }}</router-link>
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#header-collapse"><i class="fa fa-bars"></i></button>
					</div>
					<div class="collapse navbar-collapse" id="header-collapse">
						<ul class="nav navbar-nav navbar-right">
							<li v-for="page in pages" :key="page.id" class="nav-item">
								<router-link :to="page.url">{{ page.name }}</router-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	</div>
</template>
<script>
export default {
  name: 'Header',
  props: ["user", "pages", "page_current"],
  data () {
    return {
      
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/css/custom.scss';

.header{
    background: $primary;
    nav{
        border-bottom: solid 5px $link;
        padding: 10px 0;
        margin-bottom: 0;
        button {
            color: white;
        }
        .navbar-brand{
            color: $link;
            &:hover{
                background: $primary_hover !important;
            }
        }
        .router-link-exact-active{
            color: $link !important;
        }
        li{
            a{
                color: white !important;
                &:hover{
                    background: $primary_hover !important;
                }
            }
        }
    }
}
</style>