// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import VueFirestore from 'vue-firestore';

// import css
import './assets/plugins/bootstrap/dist/css/bootstrap.min.css';
import './assets/plugins/font-awesome/css/font-awesome.min.css';
import './assets/css/custom.scss';

// import js
import './assets/plugins/jquery/dist/jquery.min.js';
import './assets/plugins/bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VueFirestore);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
