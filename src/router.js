import Vue from 'vue'
import Router from 'vue-router'
import MusicHome from './views/MusicHome/MusicHome.vue'
import MyMusic from './views/MyMusic/MyMusic.vue'
import Friend from './views/Friend/Friend.vue'
import Store from './views/Store/Store.vue'
import Musician from './views/Musician/Musician.vue'
import DownloadPage from './views/DownloadPage/DownloadPage.vue'
import Toplist from './views/Toplist/Toplist.vue'
import Playlist from './views/Playlist/Playlist.vue'
import Djradio from './views/Djradio/Djradio.vue'
import Artist from './views/Artist/Artist.vue'
import Album from './views/Album/Album.vue'

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
    },
    {
      path: '/discover/toplist',
      name: 'toplist',
      component: Toplist
    },
    {
      path: '/discover/playlist',
      name: 'playlist',
      component: Playlist
    },
    {
      path: '/discover/djradio',
      name: 'djradio',
      component: Djradio
    },
    {
      path: '/discover/artist',
      name: 'artist',
      component: Artist
    },
    {
      path: '/discover/album',
      name: 'album',
      component: Album
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./views/About.vue')
    // }
  ]
})
