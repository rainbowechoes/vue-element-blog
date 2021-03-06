// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/common.css'
// import Login from '@/module/demo/components/Login'
// import Register from '@/module/demo/components/Register'

// 每次跳转后回到顶部
router.afterEach((to, fromm, next) => {
  window.scrollTo(0, 0);
})
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
