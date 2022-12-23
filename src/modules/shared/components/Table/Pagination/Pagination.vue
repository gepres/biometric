
<template>
  <v-container>
    <v-row>
      <v-col cols="3" class="py-0">
        <v-select
            label="Ver"
            v-model="selectLengthPage"
            color="blue_default"
            variant="solo"
            :items="lengthPageArray"
            class="pagination-lengthPageArray"
            hide-details
        ></v-select>
      </v-col>
      <v-col cols="6" class="d-flex justify-center py-0">
        <v-pagination
        v-model="value"
        :length="total_pages"
        rounded="circle"
        color="blue_default"
        active-color="blue_default"
      ></v-pagination>
      </v-col>
      <v-col  cols="3" class="py-0 content-total">
        <span class="text-blue_default font-weight-bold pr-3">Total: </span>{{ total_pages }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import usePagination from '@/modules/dashboard/composables/usePagination';
const {page,length_page, total_pages} = usePagination()
console.log('total_pages',total_pages);
const props = defineProps(['modelValue', 'length'])
const emit = defineEmits(['update:modelValue'])

const lengthPageArray = computed(() => [10,20,100])
const selectLengthPage = length_page.value
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
<style lang="scss">
.pagination{
  &-lengthPageArray .v-field--variant-solo{
    box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
  }
  &-lengthPageArray{
    width: 140px;
  }
}
</style>
<style lang="scss" scoped>
.content-total{
  display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1.5rem;
}
</style>
