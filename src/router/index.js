import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'data-screen',
        component: () => import( '../views/dataScreen.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
