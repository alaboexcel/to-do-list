import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './views/dashboard.vue'
import team from './views/team.vue'
import projects from './views/projects.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects

    },
    {
      path: '/team',
      name: 'team',
      component: team

    }
  ]
})
