import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/apps',
        name: 'Apps',
        component: () => import('../components/Apps.vue'),
        meta: {
            title: '产品'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About.vue'),
        meta: {
            title: '关于'
        }
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue'),
        meta: {
            title: '主页'
        }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
// 设置网页的标题
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title + " - TITLE" : 'TITLE'
    next()
}
)

export default router