/* eslint-disable */
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); // ตรวจสอบ token ใน localStorage
  if (!token && to.name !== 'login' && to.name !== 'register') {
    // ถ้าไม่มี token และไม่ใช่หน้า login หรือ register
    next({ name: 'login' }); // เปลี่ยนเส้นทางไปที่หน้า login
  } else if (to.name === 'login' && token) {
    // ถ้าเป็น route /login และผู้ใช้ล็อกอินอยู่แล้ว
    next({ name: 'homepage' }); // เปลี่ยนเส้นทางไปที่ Home
  } else {
    next(); // ให้เข้าถึง route ตามปกติ
  }
});

export default router
