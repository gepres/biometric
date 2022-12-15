<template>
  <header-page class="mb-3" title="Autenticación Facial" caption="Reporte" />
  <Table :headers="headers" :headersFilters="headersFilters" :items="list" @search="search" />
</template>

<script>
import { defineComponent, ref } from 'vue';
import HeaderPage from '@/modules/dashboard/components/shared/HeaderPage/HeaderPage.vue';
import Table from '@/modules/shared/components/Table/Table.vue';
export default defineComponent({
 name: 'FaceAuth',
 components: {
   HeaderPage,
   Table,
 },
 setup(props) {
     const headersFilters = ref({})
     const headers = ref([
       {  text: 'Id',sortable: false,value: 'id', visibleFilter: true,  activeFilter: false},
       { text: 'Guid', value: 'guid', sortable: false, visibleFilter: true, activeFilter: true },
       { text: 'Usuario', value: 'user', sortable: false, visibleFilter: true, activeFilter: true },
       { text: 'Negocio', value: 'business', sortable: false, visibleFilter: true, activeFilter: true },
       { text: 'Canal', value: 'canal', sortable: false, visibleFilter: true, activeFilter: true},
       { text: 'Creado el', value: 'createof', sortable: false, visibleFilter: true, activeFilter: true },
       { text: 'Coincidencia', value: 'coincidence', sortable: false, visibleFilter: true, activeFilter: true},
       { text: 'Coincidencia configurada', value: 'coincidenceCofig', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Autorizado', value: 'Autorizado', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Destino biometría', value: 'destineBio', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Código de respuesta', value: 'codeResponse', sortable: false, visibleFilter: true, activeFilter: true },
       { text: 'Versión app', value: 'versionApp', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Sistema operativo', value: 'systemOperation', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Versión sistema operativo', value: 'versonSystemOperation', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Fabricante dispositivo', value: 'FaDevice', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Nombre dispositivo', value: 'deviceName', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Acciónes', value: 'actions', sortable: false, visibleFilter: false,activeFilter: false },
     ])

     const list = ref([
       {
          id: '2344',
          Guid: 'xxxxxxxxxx',
          user: 'xxxxxxxxxx',
          business: 'xxxxxxxxxx',
          canal: 'xxxxxxxxxxxx',
          createof: 'xx/xx/xx  xx:xx:xx',
          coincidence: 'xxxxxxx',
          coincidenceCofig: 'xxxxxxxxxxx',
          Autorizado: 'xxxxxxxxx',
          codeResponse: 'xxxxx',
          versionApp: 'xxxxxxxxxx',
          systemOperation: 'xxxxxxxxxx',
          versonSystemOperation: 'xxxxxxxxxx',
          FaDevice: 'xxxxxxxxxx',
          deviceName: 'xxxxxxxxxx',
          actions: 'xxxxxxxxxx',
        },
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
