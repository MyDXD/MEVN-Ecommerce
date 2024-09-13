import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'toolbar',
    component: () => import('../views/Toolbar.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/landding',
        name: 'landding',
        component: () => import('../views/LandingPage')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('../views/Accout.vue')
      },
      {
        path: '/bucket',
        name: 'bucket',
        component: () => import('../views/Bucket.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
