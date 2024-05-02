import VueRouter from "vue-router"
import Apps from './components/Apps.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

const routes = [
    { path: '/', redirect: Home },
    { path: '/about', redirect: About },
    { path: '/apps', redirect: Apps },
]

const router = new VueRouter({
    routes
})

export default router