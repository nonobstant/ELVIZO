import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import store from './store'; 

// ADS
import Ads from 'vue-google-adsense';

async function loadApp() {
  const app = createApp(App);

  // Dynamically import vue-script2 as an ES module
  const vueScript2 = await import('vue-script2');

  app.use(router).use(store);

  // Use vueScript2 default export if available or vueScript2 itself
  app.use(vueScript2.default || vueScript2);

  // Use Ads.Adsense
  app.use(Ads.AutoAdsense, { adClient: 'ca-pub-6437061319663341', isNewAdsCode: true });

  app.mount('#app');
}

loadApp();
