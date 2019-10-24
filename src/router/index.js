import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/module/index/components/index'
import Search from '@/module/search/components/search'
import Post from '@/module/post/components/post'
import Demo from '@/module/demo/components/demo'
import Message from '@/module/message/components/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/search/*',
      name: '搜索',
      component: Search
    },
    {
      path: '/post/*',
      name: '文章',
      component: Post
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    }
  ]
})
