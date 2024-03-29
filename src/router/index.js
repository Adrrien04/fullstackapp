import {createRouter, createWebHistory} from 'vue-router'
import {useStore} from 'vuex' // Import useStore from Vuex
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/register.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login.vue')
        },
        {
            path: '/',
            name: 'home',
            component: HomeView,
            // meta: { requiresAuth: true }
        },
        {
            path: '/listing/:id',
            name: 'ListingDetails',
            component: () => import('../views/ListingDetails.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView,
        },
    ]
})

router.beforeEach((to, from, next) => {
    const store = useStore()
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.isLoggedIn) {
            next({name: 'login'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router