import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '../views/shouye'
import About from '../views/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: 'shouye'
    },
    {
      path: '/shouye',
      component: Shouye
    },
    {
      path:'/about',
      component:About
    }
  ]
})
