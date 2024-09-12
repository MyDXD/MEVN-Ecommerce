import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'toolbar',
    component: () => import('../views/toolbar.vue'),
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
        component: () => import('../views/landingPage')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue')
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
