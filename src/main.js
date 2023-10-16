import { createRouter, createWebHashHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import routes from './routes';

const router = createRouter({
  routes : routes,
  history : createWebHashHistory(),    
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
  }
})

/// app
const app = createApp(App)
app.use(router)
app.mount('#app')