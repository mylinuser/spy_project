import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const store = createPinia()
app.use(store)

app.mount('#app')
