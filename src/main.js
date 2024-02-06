import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
//import VueMeta from 'vue-meta'


createApp(App).use(router).use(store).mount('#app')