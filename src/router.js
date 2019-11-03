import Vue from 'vue'
import Router from 'vue-router'
import LoginView from './views/LoginView.vue'
import RegisterView from './components/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'LoginView', // LoginView
      component: LoginView // LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    }
  ]
})
