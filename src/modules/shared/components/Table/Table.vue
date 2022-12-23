<template>
  <div class="content-table" id="crollStyle">
    <table class="styled-table">
        <thead>
            <tr>
                <th v-for="header of headers" :key="header.value">
                    <slot :name="'header-'+ header.value" v-bind="header">
                        <header-text v-if="header.visibleFilter" :data="header" v-model="headersFilters[header.value]" @search="btnSearch"  />
                        <span v-else class="text-blue_default text-capitalize text-subtitle-1 font-weight-bold text-center d-block">{{header.text}}</span>
                    </slot>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="items.length === 0">
                <td :colspan="headers.length" class="text-center">
                    <span class="textNoData">
                        {{noDataText}}
                    </span>
                </td>
            </tr>
            <tr v-for="(item, i) of items" :key="i">
                <td v-for="header in headers" :key="header.value">
                    <slot :name="'body-'+ header.value" v-bind="item" :item="item" >
                        <p v-if="!!item[header.value]" class="mx-0 my-0 pl-1">{{item[header.value]}}</p>
                        <p v-else class="text-center">-</p>
                    </slot>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
  <Pagination v-model="page" :length="lengthPage" />
</template>
<script>
import { defineComponent, ref } from 'vue';
import HeaderText from './HeaderText/HeaderText.vue';
import Pagination from './Pagination/Pagination.vue';

export default defineComponent({
  name: 'Table',
  components: {
    HeaderText,
    Pagination
  },
  props: {
    headers: {
        type: Object,
        required: true
    },
    items: {
        type: Object,
        required: true
    },
    headersFilters: {
        type: Object,
        default: () => {}
    },
    noDataText: {
        type: String,
        default: 'No hay elementos'
    }
  },
  emits: ['search'],
  setup(props, {emit}) {
    const {headers, headersFilters} = props
    const page = ref(1)
    const lengthPage = ref(10)
    const btnSearch = () => {
        emit('search')
     }
    return{
        headers,
        headersFilters,
        btnSearch,
        page,
        lengthPage
    }
  }
});
</script>

<style lang="scss" scoped>
.textNoData{
    color:#757575;
}
.content-table{
    overflow:scroll;
     width:auto;
     overflow-y: hidden;
}
.styled-table {
    border-collapse: collapse;
    margin:0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    // box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #e4e4e4;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid rgb(var(--v-theme-blue_default));;
}
.styled-table tbody tr.active-row {
    font-weight: bold;
    color: rgb(var(--v-theme-blue_default));;
}
#crollStyle::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
}
/* Ponemos un color de fondo y redondeamos las esquinas del thumb */
#crollStyle::-webkit-scrollbar-thumb {
    background: rgba(var(--v-theme-blue_default),0.7);
    border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
#crollStyle::-webkit-scrollbar-thumb:hover {
    background: rgb(var(--v-theme-blue_default));
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
#crollStyle::-webkit-scrollbar-thumb:active {
    background-color: rgb(var(--v-theme-blue_default));
}
#crollStyle::-webkit-scrollbar-track {
    background: rgba(var(--v-theme-blue_default),0.4);
    border-radius: 4px;
}

/* Cambiamos el fondo cuando esté en active o hover */
#crollStyle::-webkit-scrollbar-track:hover,
#crollStyle::-webkit-scrollbar-track:active {
  background: rgba(var(--v-theme-blue_default),0.4);
}
</style>