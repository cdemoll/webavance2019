import Vue from 'vue'
import Router from 'vue-router'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'LoginView', //loginView
      component: LoginView //LoginView
    }
   {
      path: '/',
      name: 'RegisterView',
      component: RegisterView
    }
  ]
})
