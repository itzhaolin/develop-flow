import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import login from '../components/login'
import noPage from '../components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/*',
      name: '404',
      component: noPage
    }
  ]
})
