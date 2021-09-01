import { setupMSW } from '@/mocks/browser'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store } from '@/store'
import './index.css'
setupMSW().then(() => {
  const app = createApp(App)
  app.use(router)
  app.use(store)
  app.mount('#app')
})
