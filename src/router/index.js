import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WorkExperiences from '@/components/WorkExperiences'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work-experiences',
      name: 'WorkExperiences',
      component: WorkExperiences
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/certifications',
      name: 'Certifications',
      component: Certifications
    }
  ]
})
