import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '../views/shouye'
import About from '../views/about.vue'
import Service from '../views/service.vue'
import Plan from '../views/plan.vue'
import Hangye from '../views/hangye.vue'
import Information from '../views/information.vue'
import Hunter from '../views/hunter.vue'

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
    },
    {
      path:'/plan',
      component:Plan
    },
    {
      path:'/hangye',
      component:Hangye
    },
    {
      path:'/information',
      component:Information
    },
    {
      path:'/hunter',
      component:Hunter
    }
  ]
})
