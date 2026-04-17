import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/style.css'

const app = createApp(App)

app.use(createPinia()) // 🔴 MUST HAVE
app.use(router)

app.mount('#app')