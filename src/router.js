import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/RegisterView.vue'
import Login from './views/LoginView.vue'
import Dashboard from './views/DashboardView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
