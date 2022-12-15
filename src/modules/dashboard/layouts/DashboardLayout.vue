<template>
  <v-app>
    <v-main>
      <nav-bar :list="listPages" />
      <AppBar />
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: "layout-dashboard",
  components: {
    NavBar: defineAsyncComponent(() => import('@/modules/dashboard/components/layout/NavBar.vue')),
    AppBar: defineAsyncComponent(() => import('@/modules/dashboard/components/layout/AppBar.vue')),
  },
  data() {
    return {
      listPages:[
        {
          type: 'divider',
        },
        {
          type: 'item',
          name: 'Home',
          to: '/dashboard',
          toDynamic:{name: 'dashboard-home'},
          icon: 'mdi-view-dashboard',
          group: null,
          value: 'home'
        },
        {
          type: 'divider',
        },
        {
          type: 'title-group',
          name: 'Reportes',
          group: 'reports',
        },
        {
          type: 'item',
          name: 'Onboarding Doc. de Identidad',
          to: '/dashboard/onboarding',
          toDynamic:{name: 'dashboard-onboarding'},
          icon: 'mdi-view-dashboard',
          value: 'Onboarding Doc. de Identidad',
          group: 'reports'
        },
        {
          type: 'item',
          name: 'Onboarding Face',
          to: '/dashboard/face',
          toDynamic:{name: 'dashboard-face'},
          icon: 'mdi-view-dashboard',
          value: 'Onboarding Face',
          group: 'reports'
        },
        {
          type: 'item',
          name: 'Autenticación Facial',
          to: '/dashboard/faceAuth',
          toDynamic:{name: 'dashboard-faceAuth'},
          icon: 'mdi-view-dashboard',
          value: 'Autenticación Facial',
          group: 'reports'
        },
        {
          type: 'item',
          name: 'Touch Id',
          to: '/dashboard/touchId',
          toDynamic:{name: 'dashboard-touchId'},
          icon: 'mdi-view-dashboard',
          value: 'Touch Id',
          group: 'reports'
        },
        {
          type: 'divider',
        },
        {
          type: 'title-group',
          name: 'Case Management',
          group: ' CaseManagement',
        },
        {
          type: 'item',
          name: 'Onboarding Doc. de Identidad',
          to: '/dashboard/onboardingIdentidad',
          toDynamic:{name: 'dashboard-OnboardingIdentidad'},
          icon: 'mdi-view-dashboard',
          value: 'Onboarding Doc. de Identidad',
          group: 'CaseManagement'
        },
      ]
    }
  },
  methods: {
  },
  computed: {

  },
};
</script>

<style lang="scss">
</style>