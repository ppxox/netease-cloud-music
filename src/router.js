import Vue from 'vue'
import Router from 'vue-router'
import MusicHome from './views/MusicHome/MusicHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/discover',
    },
    {
      path: '/discover',
      name: 'discover',
      component: MusicHome
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./views/About.vue')
    // }
  ]
})
