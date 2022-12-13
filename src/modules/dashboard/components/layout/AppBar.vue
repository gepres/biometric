<template>
  <v-app-bar
    elevation="0"
  >
    <v-app-bar-nav-icon v-if="$store.state.breakpoint.is_mobile" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title><span class="text-blue_default">Dashboard</span></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" color="blue_default" icon="mdi-logout"></v-btn>
  </v-app-bar>
  <v-divider></v-divider>
</template>

<script>
</script>

<style>

</style>