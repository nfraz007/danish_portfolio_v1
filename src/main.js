// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import VueFirestore from 'vue-firestore';
import * as moment from 'moment';

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

Vue.mixin({
  methods: {
    format: date => {
      if(date) return moment(date).format("MMM YYYY")
      else return "Present";
    },
    date_diff: (start_at = "", end_at = "") => {
      start_at = (start_at) ? moment(start_at) : moment();
      end_at = (end_at) ? moment(end_at) : moment();
      var output = [];
      var data = end_at.diff(start_at, "days")

      var years = Math.floor(data/365);
      var years_mod = data%365;
      if(years) output.push(years+" yr ");

      var months = Math.floor(years_mod/30);
      var months_mod = years_mod%30;
      if(months) output.push(months+" mos ");

      var days = Math.floor(months_mod);
      if(days) output.push(days+" days ");

      return output.join(" ")
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
