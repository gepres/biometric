<template>
  <header-page class="mb-3" title="Onboarding Doc. de Identidad" caption="Manejo de casos" />
  <Table :headers="headers" :headersFilters="headersFilters" :items="list" @search="search" />
</template>

<script>
import { defineComponent, ref } from 'vue';
import HeaderPage from '@/modules/dashboard/components/shared/HeaderPage/HeaderPage.vue';
import Table from '@/modules/shared/components/Table/Table.vue';
export default defineComponent({
 name: 'OnboardingIdentidad',
 components: {
   HeaderPage,
   Table,
 },
 setup(props) {
     const headersFilters = ref({})
     const headers = ref([
       {  text: 'Id',sortable: false,value: 'id', visibleFilter: true,  activeFilter: false},
       { text: 'Usuario', value: 'user', sortable: false, visibleFilter: true, activeFilter: true },
       { text: 'Creado', value: 'create', sortable: false, visibleFilter: true, activeFilter: true },
       { text: 'Editado', value: 'edit', sortable: false, visibleFilter: true, activeFilter: true},
       { text: 'Dirección ip', value: 'ip', sortable: false, visibleFilter: true, activeFilter: true },
       { text: 'Pedido a entidad', value: 'entity', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Ticket de entidad', value: 'entityTicket', sortable: false, visibleFilter: true, activeFilter: true},
       { text: 'Respuesta de entidad', value: 'entityResponse', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Score de entidad', value: 'entityscore', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Ultimo login fallido', value: 'lastFailLogin', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Ultimo login correcto', value: 'lastSuccessLogin', sortable: false, visibleFilter: true, activeFilter: false }
     ])

     const list = ref([
       // {
       //   id: '2344',
       //   user: 'xxxxxxxxxx',
       //   create: 'xx/xx/xx  xx:xx:xx',
       //   edit: 'xxxxxxxxxx',
       //   ip: 'xxxxxxxxxxxx',
       //   entity: 'xxxxxxxxxxx',
       //   entityTicket: 'xxxxxxxxx',
       //   entityResponse: 'xxxxx',
       //   entityscore: 'xxxxxxxxxx',
       //   lastFailLogin: 'xxxxxxxxxx',
       //   lastSuccessLogin: 'xxxxxxxxxx'
       // },
     ])
     const search = () => {
       console.log('buscando...');
     }

     return {
       headers,
       headersFilters,
       list,
       search
     }
   }
});
</script>
