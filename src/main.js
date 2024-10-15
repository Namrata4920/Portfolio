import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { register as registerGlobal, iconAutoRegister } from './global'

const app = createApp(App)

iconAutoRegister(app)
registerGlobal(app)
app.use(createPinia())
app.use(router)
app.mount('#app')
