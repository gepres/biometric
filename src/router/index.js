import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from '@/modules/auth/router'
import clienteRouter from '@/modules/cliente/router'
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'
import isNotAuthenticatedGuard from '@/modules/auth/router/not-auth-guard'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '',
    name: 'no-home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/auth',
    beforeEnter: [isNotAuthenticatedGuard],
    ...authRouter
  },
  {
    path: '/cliente',
    beforeEnter: [isAuthenticatedGuard],
    ...clienteRouter
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
