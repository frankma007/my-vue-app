import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

// 写vuex并引入 

import store from './stores/index.js'

createApp(App).use(router).use(store).mount('#app')
