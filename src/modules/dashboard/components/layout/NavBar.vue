<template>
  <v-navigation-drawer
    v-model="drawer"
    bottom
    absolute
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="OPERADOR"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list>

    <v-list density="compact" nav>
      <div  v-for="item of list" :key="item.value">
        <v-divider v-if="item.type === 'Divider'"></v-divider>
        <v-list-subheader v-if="item.type === 'title-group'" class="ml-3">{{item.name}}</v-list-subheader>
        <v-list-item v-if="item.type === 'item'" class="py-0" :prepend-icon="item.icon" :to="item.toDynamic" :title="item.name" />
      </div>
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