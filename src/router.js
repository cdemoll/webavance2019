import Vue from 'vue'
import Router from 'vue-router'
import LoginView from './views/LoginView.vue'
<<<<<<< HEAD
import RegisterView from './views/RegisterView.vue'
=======
import RegisterView from './components/Register.vue'
>>>>>>> WIPG

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'LoginView', //loginView
      component: LoginView //LoginView
    }
   {
      path: '/',
=======
      name: 'LoginView', // LoginView
      component: LoginView // LoginView
    },
    {
      path: '/register',
>>>>>>> WIPG
      name: 'RegisterView',
      component: RegisterView
    }
  ]
})
