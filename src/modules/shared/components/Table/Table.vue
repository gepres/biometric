<template>
  <div class="content-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th v-for="header of headers" :key="header.value">
                    <slot :name="'header-'+ header.value" v-bind="header">
                        <header-text v-if="header.visible" :data="header" v-model="headersFilters[header.value]" @search="btnSearch"  />
                    </slot>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) of items" :key="i">
                <td v-for="(val ,key, index) in item" :key="index">
                    <slot :name="'body-'+ key" v-bind="item">
                        <p class="mx-0 my-0 pl-1">{{val}}</p>
                    </slot>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import {  defineComponent } from 'vue';
import HeaderText from './HeaderText/HeaderText.vue';

export default defineComponent({
  name: 'Table',
  components: {
    HeaderText
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
    }
  },
  emits: ['search'],
  setup(props, {emit}) {
    const {headers, headersFilters} = props
    const btnSearch = () => {
        emit('search')
     }
    return{
        headers,
        headersFilters,
        btnSearch
    }
  }
});
</script>

<style lang="scss" scoped>
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
</style>