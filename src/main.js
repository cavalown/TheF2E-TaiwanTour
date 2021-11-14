import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/reset.css' // reset css

createApp(App).use(router).mount('#app')
