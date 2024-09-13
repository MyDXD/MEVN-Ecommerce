import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'toolbar',
    component: () => import('../views/Toolbar.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutViewPage.vue')
      },
      {
        path: '/',
        name: 'homepage',
        component: () => import('../views/Homepage.vue')
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
        component: () => import('../views/AccoutPage.vue')
      },
      {
        path: '/bucket',
        name: 'bucket',
        component: () => import('../views/BucketPage.vue')
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
