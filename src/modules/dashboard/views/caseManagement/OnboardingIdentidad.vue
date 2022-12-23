<template>
  <header-page class="mb-3" title="Onboarding Doc. de Identidad" caption="Manejo de casos" />
  <Table :headers="headers" :headersFilters="headersFilters" :items="list" @search="search">
    <template v-slot:body-id="{operationId}">
      <span>{{ operationId }}</span>
    </template>
    <template v-slot:body-selfie="item">
      <v-hover v-slot="{ isHovering, props }">
        <v-card  :class="{ 'on-hover': isHovering }" v-bind="props" elevation="0" color="transparent" class="text-center">
          <v-img
          :src="item.selfie"
          :lazy-src="item.selfie"
          aspect-ratio="1"
          cover
          width="100"
          class="bg-grey-lighten-2 rounded-circle d-inline-block"
          @click="openDialogPhoto(item.selfie, item.selfiePicture)"
          aria-controls
          />
        </v-card>
      </v-hover>
    </template>
  <template v-slot:body-frontDoc="item">
    <v-hover v-slot="{ isHovering, props }">
      <v-card  :class="{ 'on-hover': isHovering }" v-bind="props" elevation="0" color="transparent" class="text-center">
    <v-img
        :class="{ 'on-hover': isHovering }"
        v-bind="props"
        :src="item.frontDoc"
        :lazy-src="item.frontDoc"
        aspect-ratio="2"
        cover
        width="200"
        class="bg-grey-lighten-2 rounded-lg d-inline-block"
        @click="openDialogPhoto(item.frontDoc, item.frontDocumentPicture)"
        aria-controls
      />
    </v-card>
    </v-hover>
  </template>
  <template v-slot:body-scoreSelfie="{ scoreSelfie }">
    <span>{{  parseFloat(Number(scoreSelfie) * 100).toFixed(2) }}%</span>
  </template>
  <template v-slot:body-scoreGob="{ scoreGovernment }">
    <span>{{  parseFloat(Number(scoreGovernment) * 100).toFixed(2) }}%</span>
  </template>
  <template v-slot:body-scoreDoc="{ scoreDocument }">
    <span>{{  parseFloat(Number(scoreDocument) * 100).toFixed(2) }}%</span>
  </template>
  <template v-slot:body-elementDet="{ barcodeDetected, mrzDetected }">
    <div class="d-flex flex-column">
      <p>mrz: 
        <v-icon v-if="barcodeDetected" class="green">mdi-check</v-icon>
        <v-icon v-else class="red">mdi-close</v-icon>
      </p>
      <p>barcode: 
        <v-icon v-if="mrzDetected" class="green">mdi-check</v-icon>
        <v-icon v-else class="red">mdi-close</v-icon>
      </p>
    </div>
  </template>
  <template v-slot:body-actions="item">
    <div class="d-flex">
      <v-btn
        size="x-small"
        color="red_default"
        icon="mdi-close"
        class="mr-3"
        variant="flat"
        title="Rechazar"
        @click="openDialog(item, 'Rechazar')"
      >
      </v-btn>
      <v-btn
        size="x-small"
        color="success"
        icon="mdi-check"
        class="mr-3 text-white elevation-0"
        variant="flat"
        title="Aceptar"
        @click="openDialog(item, 'Aceptar')"
      >
      </v-btn>
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
          {{dialogData}}
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="red_default" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
  <v-dialog
      v-model="cuadroFotos"
      min-width="500"
      max-width="1000"
      width="650"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">{{dialogData.title}}</span>
        </v-card-title>
        <v-card-text class="text-center">
          <v-img
            :src="dialogData.image"
            :lazy-src="dialogData.image"
            cover
            width="400"
            class="bg-grey-lighten-2 d-inline-block"
          ></v-img>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="red_default" @click="cuadroFotos = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue';
import usePagination from '@/modules/dashboard/composables/usePagination';
import HeaderPage from '@/modules/dashboard/components/shared/HeaderPage/HeaderPage.vue';
import Table from '@/modules/shared/components/Table/Table.vue';
import DataCaseManagement from '@/data/onbordingCaseManagement.json'
export default defineComponent({
 name: 'OnboardingIdentidad',
 components: {
   HeaderPage,
   Table,
 },
 setup(props) {
    const dialog = ref(false)
    const cuadroFotos = ref(false)
    const { manageData } = usePagination()
    const dialogData = ref({
      type: null
    })
    const list = ref([])
    const pagination = ref({})
     const headersFilters = ref({})
     const headers = ref([
       {  text: 'Id',sortable: false,value: 'id', visibleFilter: true,  activeFilter: false},
       { text: 'Selfie', value: 'selfie', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Frente documento', value: 'frontDoc', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Videos', value: 'video', sortable: false, visibleFilter: true, activeFilter: false},
       { text: 'Score selfie', value: 'scoreSelfie', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Score gobierno', value: 'scoreGob', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Score documento', value: 'scoreDoc', sortable: false, visibleFilter: true, activeFilter: false},
       { text: 'Elementos detectados', value: 'elementDet', sortable: false, visibleFilter: true, activeFilter: false },
       { text: 'Acciones', value: 'actions', sortable: false, visibleFilter: false, activeFilter: false },
     ])
     const convertDataForTable = (data) => {
        let array = []
        for (const item of data) {
          let obj =  {
            selfie: require(`@/data/image/selfie_${item.operationId}.jpg`),
            frontDoc:require(`@/data/image/documentFront_${item.operationId}.jpg`) , 
          }
          const objCompleted = Object.assign(obj, item)
          array = [...array, objCompleted]
        }
        return array
     }
     const getDataForApi = () => {
      console.log('pagination',pagination); // devolver pageNumber - quantity
      // llama a la api
      const DataCaseManagementWithPage = Object.assign({total:35, totalPages: 2}, DataCaseManagement)
      // utilizamos datos
      list.value = convertDataForTable(DataCaseManagement.aaData)
      manageData(DataCaseManagementWithPage)

     }
     getDataForApi()
     const search = () => {
       console.log('buscando...');
     }
     const openDialog = (item, type) => {
        const data = {...item, title: type}
        dialogData.value = data
        dialog.value = true
     }
    const openDialogPhoto = (image, description) => {
        const objCompleted = Object.assign({title: description.imageTypeDescription, image})
        dialogData.value = objCompleted
        cuadroFotos.value = true
     }

     return {
       dialog,
       cuadroFotos,
       dialogData,
       headers,
       headersFilters,
       list,
       pagination,
       search,
       openDialog,
       openDialogPhoto
     }
   }
});
</script>
<style lang="scss" scoped>
  .v-card {
    transition: opacity 0.6 ease-in-out;
  }

  .v-card.on-hover {
    opacity: .6;
  }
</style>
