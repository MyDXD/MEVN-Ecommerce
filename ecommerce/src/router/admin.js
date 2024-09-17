/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const adminRoutes = [
  {
    path: '/admin',
    name: 'sidebar-admin',
    component: () => import('../views/admin/SidebarAdmin.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../views/admin/AdminDashboard.vue')
      },
      {
        path: 'manage-products',
        name: 'manage-products',
        component: () => import('../views/admin/ManageProducts.vue')
      },
    //   {
    //     path: 'manage-orders',
    //     name: 'manage-orders',
    //     component: () => import('../views/admin/ManageOrders.vue')
    //   },
    ]
  }
];

export default adminRoutes;
