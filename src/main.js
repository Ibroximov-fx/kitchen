import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/router/routing.js'
import i18n from '/src/utils/language/language.js'

const all = createApp(App)
all.use(router)
all.use(i18n)
all.mount('#app')
