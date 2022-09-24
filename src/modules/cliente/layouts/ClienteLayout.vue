<template>
  <v-app>
    <v-main>
      <nav-bar :list="listPages" />
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: "layout-cliente",
  components: {
    NavBar: defineAsyncComponent(() => import('@/modules/cliente/components/layout/NavBar.vue')),
  },
  data() {
    return {
      listPages:[
        {
          name: 'Ventas',
          to: '/cliente/ventas',
          toDynamic:{name: 'cliente-ventas'},
          icon: 'mdi-view-dashboard',
          value: 'ventas'
        },
        {
          name: 'Productos',
          to: '/cliente/productos',
          toDynamic:{name: 'cliente-productos'},
          icon: 'mdi-view-dashboard',
          value: 'productos'
        },
        {
          name: 'Usuarios',
          to: '/cliente/usuarios',
          toDynamic:{name: 'cliente-usuarios'},
          icon: 'mdi-view-dashboard',
          value: 'usuarios'
        },
        {
          name: 'Compras',
          to: '/cliente/compras',
          toDynamic:{name: 'cliente-compras'},
          icon: 'mdi-view-dashboard',
          value: 'compras'
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