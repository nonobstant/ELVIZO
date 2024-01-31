import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store' // make sure your Vuex store is exported as default from './store'

createApp(App).use(router).use(store).mount('#app')