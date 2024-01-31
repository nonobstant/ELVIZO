import { createRouter, createWebHistory } from 'vue-router'
//Views
import Home from '@/views/home.vue'
// import lab from '@/views/lab.vue'
import Video from '@/components/video.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/video/:uuid',
    name: 'video',
    component: Video,
    props: true
  }
]

// init router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router