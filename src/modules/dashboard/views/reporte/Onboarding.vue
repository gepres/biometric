<template>
  <header-page class="mb-3" title="Onboarding Doc. de Identidad" caption="Reporte" />
  <div>
  <Table :headers="headers" :headersFilters="headersFilters" :items="list" @search="search">
    <template #body-actions="{ id }">
      <div class="d-flex">
        <v-btn
          color="blue_default"
          icon="mdi-camera"
          size="x-small"
          variant="flat"
        ></v-btn>
        <v-btn
          color="blue_default"
          icon="mdi-exclamation"
          size="x-small"
          variant="flat"
          class="ml-1"
        ></v-btn>
        <v-btn
          color="blue_default"
          icon="mdi-format-list-bulleted-square"
          size="x-small"
          variant="flat"
          class="ml-1"
        ></v-btn>
        <v-btn
          color="blue_default"
          icon="mdi-pencil-box-outline"
          size="x-small"
          variant="flat"
          class="ml-1"
        ></v-btn>
        <v-btn
          color="blue_default"
          icon="mdi-video"
          size="x-small"
          variant="flat"
          class="ml-1"
        ></v-btn>
      </div>
  </template>
  </Table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

// Components
import HeaderPage from '@/modules/dashboard/components/shared/HeaderPage/HeaderPage.vue';
import Table from '@/modules/shared/components/Table/Table.vue';

export default defineComponent({
  name: 'Onboarding',

  components: {
    HeaderPage,
    Table
  },
  setup(props) {
    const headersFilters = ref({})
    const headers = ref([
      {
        text: 'Id',
        sortable: false,
        value: 'id',
        visible: true,
        activeFilter: true
      },
      { text: 'Guild', value: 'guild', sortable: false, visible: true, activeFilter: true },
      { text: 'Usuario', value: 'user', sortable: false, visible: true, activeFilter: true },
      { text: 'Negocio', value: 'business', sortable: false, visible: true, activeFilter: true },
      { text: 'Canal', value: 'canal', sortable: false, visible: true, activeFilter: true},
      { text: 'Creado el', value: 'createof', sortable: false, visible: true, activeFilter: true },
      { text: 'Ultimos evento', value: 'lastEvent', sortable: false, visible: true, activeFilter: true },
      { text: 'Código respuesta', value: 'codeResponse', sortable: false, visible: true, activeFilter: false},
      { text: 'Descripción respuesta', value: 'descriptionResponse', sortable: false, visible: true, activeFilter: false },
      { text: 'Acciónes', value: 'actions', sortable: false, visible: false,activeFilter: false },
    ])

    const list = ref([
      {
        id: '2344',
        guild: 'c-23343432-fede3432432',
        user: 'genaro',
        business: 'izipay',
        canal: 'Mobile',
        createof: '10/10/22 12:31:21',
        lastEvent: 'Registro',
        codeResponse: '2032',
        descriptionResponse: 'FACE_IMAGE_ML_ANTISPOOFING_FAIL',
        actions: ''
      },
      {
        id: '2323',
        guild: 'c-23343432-lara2321321',
        user: 'victor',
        business: 'izipay',
        canal: 'Mobile',
        createof: '10/10/22 12:31:21',
        lastEvent: 'Registro',
        codeResponse: '2032',
        descriptionResponse: 'FACE_IMAGE_ML_ANTISPOOFING_FAIL',
        actions: ''
      },

    ])
     const search = () => {
      console.log('buscando...');
     }

    return{
      headers,
      headersFilters,
      list,
      search
    }
  }
});
</script>
