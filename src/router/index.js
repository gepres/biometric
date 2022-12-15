import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from '@/modules/auth/router'
import dashboardRouter from '@/modules/dashboard/router'
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'
import isNotAuthenticatedGuard from '@/modules/auth/router/not-auth-guard'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    beforeEnter: [isAuthenticatedGuard],
  },
  {
    path: '',
    name: 'no-home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    beforeEnter: [isAuthenticatedGuard],
  },
  {
    path: '/auth',
    beforeEnter: [isNotAuthenticatedGuard],
    ...authRouter
  },
  {
    path: '/dashboard',
    beforeEnter: [isAuthenticatedGuard],
    ...dashboardRouter
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error-404',
    component: () => import('../modules/shared/pages/NoPageFound.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
})

export default router
