export default {
  name:'dashboard',
  component: () => import(/* webpackChunkName: "dashboard-layout" */ '@/modules/dashboard/layouts/DashboardLayout.vue'),
  children: [
    {
      path: '/',
      name: 'dashboard-home',
      component: () => import(/* webpackChunkName: "dashboard-home" */ '@/modules/dashboard/views/index.vue'),
      meta:{
        nameRoute: 'Home'
      }
    },
    {
      path: 'onboarding',
      name: 'dashboard-onboarding',
      component: () => import(/* webpackChunkName: "dashboard-onboarding" */ '@/modules/dashboard/views/reporte/Onboarding.vue'),
      meta:{
        nameRoute: 'onboarding'
      }
    },
    {
      path: 'face',
      name: 'dashboard-face',
      component: () => import(/* webpackChunkName: "dashboard-Face" */ '@/modules/dashboard/views/reporte/Face.vue'),
      meta:{
        nameRoute: 'face'
      }
    },
    {
      path: 'faceAuth',
      name: 'dashboard-faceAuth',
      component: () => import(/* webpackChunkName: "dashboard-FaceAuth" */ '@/modules/dashboard/views/reporte/FaceAuth.vue'),
      meta:{
        nameRoute: 'faceAuth'
      }
    },
    {
      path: 'touchId',
      name: 'dashboard-touchId',
      component: () => import(/* webpackChunkName: "dashboard-touchId" */ '@/modules/dashboard/views/reporte/TouchId.vue'),
      meta:{
        nameRoute: 'touchId'
      }
    },
    {
      path: 'onboardingIdentidad',
      name: 'dashboard-OnboardingIdentidad',
      component: () => import(/* webpackChunkName: "dashboard-OnboardingIdentidad" */ '@/modules/dashboard/views/caseManagement/OnboardingIdentidad.vue'),
      meta:{
        nameRoute: 'OnboardingIdentidad'
      }
    },
    {
      path: '/',
      redirect: {name: 'dashboard-home'}
    },
  ]
}