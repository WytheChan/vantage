// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from './iview'

//引入i18n插件和语言文件
import VueI18n from 'vue-i18n'
import cn from './common/lang/cn'
import en from './common/lang/en'
import jp from './common/lang/jp'

import './assets/scss/style.scss'
import 'font-awesome/scss/font-awesome.scss'

Vue.config.productionTip = false

//注册插件
Vue.use(VueI18n)
const i18n = new VueI18n({
    //定义默认语言
    locale: 'cn', 
    messages:{
      cn:cn,
      en:en,
      jp:jp,
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
