import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/router/routing.js'

const all = createApp(App)
    all.use(router)
    all.mount('#app')
