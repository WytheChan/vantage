import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '../views/shouye'
import About from '../views/about.vue'
import Service from '../views/service.vue'

Vue.use(Router)


export default new Router({
  //使用HTML5的history模式
  mode:'history',
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
    },
    {
      path:'/service',
      component:Service
    }
  ]
})
