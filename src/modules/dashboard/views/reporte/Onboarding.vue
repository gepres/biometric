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
          title="Ver imagenes"
          @click="openModal('camara',id)"
        ></v-btn>
        <v-btn
          color="blue_default"
          icon="mdi-exclamation"
          size="x-small"
          variant="flat"
          class="ml-1"
          title="Ver info"
          @click="openModal('info',id)"
        ></v-btn>
        <v-btn
          color="blue_default"
          icon="mdi-format-list-bulleted-square"
          size="x-small"
          variant="flat"
          class="ml-1"
          title="Eventos"
          @click="openModal('event',id)"
        ></v-btn>
        <v-btn
          color="blue_default"
          icon="mdi-pencil-box-outline"
          size="x-small"
          variant="flat"
          class="ml-1"
          title="Editar"
          @click="openModal('edit',id)"
        ></v-btn>
        <v-btn
          color="blue_default"
          icon="mdi-video"
          size="x-small"
          variant="flat"
          class="ml-1"
          title="Ver videos"
          @click="openModal('video',id)"
        ></v-btn>
      </div>
  </template>
  </Table>
  <!-- modal -->
  <v-dialog
      v-model="dialog"
      min-width="500"
      max-width="1000"
      width="650"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">{{dialogData.title}}</span>
        </v-card-title>
        <v-card-text>
          {{dialogData.data}}
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="red_default" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    const dialog = ref(false)
    const dialogData = ref({
      type: null
    })
    const headers = ref([
      {
        text: 'Id',
        sortable: false,
        value: 'id',
        visibleFilter: true,
        activeFilter: true
      },
      { text: 'Guild', value: 'guild', sortable: false, visibleFilter: true, activeFilter: true },
      { text: 'Usuario', value: 'user', sortable: false, visibleFilter: true, activeFilter: true },
      { text: 'Negocio', value: 'business', sortable: false, visibleFilter: true, activeFilter: true },
      { text: 'Canal', value: 'canal', sortable: false, visibleFilter: true, activeFilter: true},
      { text: 'Creado el', value: 'createof', sortable: false, visibleFilter: true, activeFilter: true },
      { text: 'Ultimos evento', value: 'lastEvent', sortable: false, visibleFilter: true, activeFilter: true },
      { text: 'Código respuesta', value: 'codeResponse', sortable: false, visibleFilter: true, activeFilter: false},
      { text: 'Descripción respuesta', value: 'descriptionResponse', sortable: false, visibleFilter: true, activeFilter: false },
      { text: 'Acciónes', value: 'actions', sortable: false, visibleFilter: false,activeFilter: false },
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
      search,
      dialog,
      dialogData,
      openModal: (type, data) => {
        dialog.value = true
        const dataforDialog = dialogData.value
        dataforDialog.title = type
        dataforDialog.type = type
        dataforDialog.data = data
      }
    }
  }
});
</script>
