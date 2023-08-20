import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueScreen from 'vue-screen'
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueScreen, 'tailwind')
app.use(MotionPlugin)

app.mount('#app')
