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
import CaseDetail from '../views/case_detail.vue'
import Detail from '../views/detail.vue'

Vue.use(Router)

const router = new Router({
  //使用HTML5的history模式
  // mode:'history',
  routes: [{
      path: '/',
      redirect: '/shouye'
    },
    {
      path: '/shouye',
      meta:{
        title:'寰逸官网-首页'
      },
      component: Shouye,
    },
    {
      path: '/about/:id',
      meta:{
        title:'寰逸官网-关于'
      },
      component: About
    },
    {
      path: '/service/:id',
      meta:{
        title:'寰逸官网-服务项目'
      },
      component: Service
    },
    {
      path: '/plan/:id',
      meta:{
        title:'寰逸官网-培训校园'
      },
      component: Plan
    },
    {
      path: '/hangye',
      name: 'Hangye',
      meta:{
        title:'寰逸官网-职位需求'
      },
      component: Hangye
    },
    {
      path: '/information/:id',
      meta:{
        title:'寰逸官网-最新资讯'
      },
      component: Information
    },
    {
      path: '/hunter',
      meta:{
        title:'寰逸官网-兼职猎头'
      },
      component: Hunter
    },
    {
      path: '/jobdetail/:id',
       meta:{
        title:'寰逸官网-职位详情'
      },
      component: JobDetail
    },
    {
      path: '/casedetail/:id',
      meta:{
        title:'寰逸官网-案例详情'
      },
      component: CaseDetail
    },
    {
      path: '/detail/:id',
      meta:{
        title:'寰逸官网-文章详情'
      },
      component: Detail
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   window.document.title = to.meta.title
//   next()
// })

export default router
