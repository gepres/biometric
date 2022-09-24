<template>
  <v-app-bar
  color="primary"
  elevation="0"
  >
    <v-app-bar-nav-icon v-if="$store.state.breakpoint.is_mobile" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>dashboard</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" @click="salir" icon="mdi-logout"></v-btn>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    bottom
    absolute
  >
  <v-list
    density="compact"
    nav
    v-for="item of list"
    :key="item.value"
    >
      <v-list-item :prepend-icon="item.icon" :to="item.toDynamic" :title="item.name">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: 'navbar',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data(){
    return {
      drawer: true
    }
  },
  methods: {
    ...mapMutations({
      logout: 'auth/logout'
    }),
    salir() {
      this.$router.push({name: 'login'})
      this.logout()
    }
  },
}
</script>

<style>

</style>