import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '../views/shouye'
import About from '../views/about.vue'
import Service from '../views/service.vue'
import Plan from '../views/plan.vue'
import Hangye from '../views/hangye.vue'
import Information from '../views/information.vue'
import Hunter from '../views/hunter.vue'
import JobDetail from '../views/job_detail.vue'

Vue.use(Router)


export default new Router({
  //使用HTML5的history模式
  // mode:'history',
  routes: [
    {
      path:'/',
      redirect: '/shouye'
    },
    {
      path: '/shouye',
      component: Shouye
    },
    {
      path:'/about/:id',
      component:About
    },
    {
      path:'/service/:id',
      component:Service
    },
    {
      path:'/plan/:id',
      component:Plan
    },
    {
      path:'/hangye',
      name:'Hangye',
      component:Hangye
    },
    {
      path:'/information/:id',
      component:Information
    },
    {
      path:'/hunter',
      component:Hunter
    },
    {
      path:'/jobdetail/:id',
      component:JobDetail
    }
  ]
})
