import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { register as registerGlobal } from '../global'

const app = createApp(App)

app.use(createPinia())
app.use(router)
registerGlobal(app)
app.mount('#app')
