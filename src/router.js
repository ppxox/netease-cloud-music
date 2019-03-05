import Vue from 'vue'
import Router from 'vue-router'
import MusicHome from './views/MusicHome/MusicHome.vue'
import MyMusic from './views/MyMusic/MyMusic.vue'
import Friend from './views/Friend/Friend.vue'
import Store from './views/Store/Store.vue'
import Musician from './views/Musician/Musician.vue'
import DownloadPage from './views/DownloadPage/DownloadPage.vue'

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
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: MyMusic
    },
    {
      path: '/friend',
      name: 'friend',
      component: Friend
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/musician',
      name: 'musician',
      component: Musician
    },
    {
      path: '/download',
      name: 'download',
      component: DownloadPage
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./views/About.vue')
    // }
  ]
})
