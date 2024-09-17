/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import adminRoutes from "./admin"; // Import routes ของหน้า admin
import { jwtDecode } from "jwt-decode";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "toolbar",
    component: () => import("../views/Toolbar.vue"),
    children: [
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutViewPage.vue"),
      },
      {
        path: "/",
        name: "homepage",
        component: () => import("../views/Homepage.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("../views/Register.vue"),
      },
      {
        path: "/account",
        name: "account",
        component: () => import("../views/AccoutPage.vue"),
      },
      {
        path: "/bucket",
        name: "bucket",
        component: () => import("../views/BucketPage.vue"),
      },
    ],
  },
];
const routesAll = [...routes, ...adminRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routesAll,
});

// ดึง role จาก token

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); // ดึง token จาก localStorage

  if (!token && to.name !== "login" && to.name !== "register") {
    // ถ้าไม่มี token และไม่ใช่หน้า login หรือ register
    next({ name: "login" }); // เปลี่ยนเส้นทางไปที่หน้า login
  } else if (token) {
    // ถ้ามี token ให้ decode role จาก token
    const decoded = jwtDecode(token);
    const role = decoded.role;

    if (to.name === "login") {
      // ถ้าเป็น route /login และผู้ใช้ล็อกอินอยู่แล้ว
      next({ name: "homepage" }); // ส่งผู้ใช้ไปหน้า homepage
    } else if (to.path.startsWith('/admin') && role !== "admin") {
      // ถ้าเส้นทางเริ่มต้นด้วย /admin แต่ role ไม่ใช่ admin
      next({ name: "homepage" }); // ส่งผู้ใช้ที่ไม่ใช่ admin ไปหน้า homepage
    } else {
      next(); // ให้เข้าถึง route ตามปกติ
    }
  } else {
    next(); // ให้เข้าถึง route ตามปกติหากมี token แต่ไม่มีเงื่อนไขอื่น
  }
});

export default router;
