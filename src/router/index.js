import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/module/index/components/index'
import Search from '@/module/search/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/search/*',
      name: 'search',
      component: Search
    }
  ]
})
