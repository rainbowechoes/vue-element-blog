import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/module/index/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
