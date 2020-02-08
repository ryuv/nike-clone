import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/mainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: Main
    }
  ]
})
