import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Apps from './components/Apps.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'



createApp(App).mount('#app')
const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(ElementPlus)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
