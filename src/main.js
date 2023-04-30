import { createApp } from 'vue'
import App from './App.vue'

import "@/assets/styles/main.scss"
import store from './store'
import UI from '@/components/UI'



const app = createApp(App)
app.use(store)
app.use(UI)
app.mount('#app')
