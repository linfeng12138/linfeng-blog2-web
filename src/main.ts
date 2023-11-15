import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 引入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

// 引入路由
import router from './router'
app.use(router)

// 挂载vue
app.mount('#app')
