export default {
  name:'auth',
  component: () => import(/* webpackChunkName: "auth layout" */ '@/modules/auth/layouts/AuthLayout.vue'),
  children: [
    {
      path: '',
      name: 'login',
      component: () => import(/* webpackChunkName: "login view" */ '@/modules/auth/views/LoginView.vue')
    },
    {
      path: 'login',
      name: 'login2',
      component: () => import(/* webpackChunkName: "login view" */ '@/modules/auth/views/LoginView.vue')
    },
  ]
}