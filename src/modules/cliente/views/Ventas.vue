<template>
  <div class="bg-white">
    <h1>ventas</h1>
  <hr>
  <p>{{message}}</p>
  <p>{{number + number}}</p>
  <p>{{messageComputed}}</p>
  <button @click="cambiosms"> cambiar mensaje</button>
  <hr>
  <h1>store</h1>
  {{status_ventas}}
  <button @click="changeStatus"> cambiar estado</button>
  <hr>
  <AuthorsTable :list="list" />
  </div>
</template>

<script>
  import { mapState, mapActions} from "vuex";
export default {
  name: 'cliente-ventas',
  data() {
    return {
      message: 'hola a todos',
      number: 10,
      list: [{}]
    }
  },
  created() {
    console.log('created');
  },
  async mounted(){
    console.log('mounted');
  },
  computed:{
    ...mapState({
    }),
    messageComputed () {
      return this.number + this.number
    }
  },
  methods: {
    ...mapActions({
      changeStatus: 'ventas/changeStatus'
    }),
    cambiosms(){

      this.number++
    }
  },
}
</script>

<style>

</style>