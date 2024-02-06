import { createRouter, createWebHistory } from 'vue-router'
//Views
import Home from '@/views/home.vue'
// import lab from '@/views/lab.vue'
import Video from '@/components/video.vue'
import privacyPolicy from '@/views/privacy-policy.vue'

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
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: privacyPolicy
  }
]

// init router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router