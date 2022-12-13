
<template>
  <div class="content-header py-2">
    <div style="display: flex;align-items: center; justify-content: center;">
      <span class="text-blue_default px-0 font-weight-bold text-capitalize text-subtitle-1" v-text="data.text" />
    </div>
    <v-text-field
      class="elevation-0 input-table"
      placeholder="Escribe aquí"
      hide-details
      density="compact"
      type="text"
      variant="solo"
      single-line
      v-model="value"
      :disabled="!data.activeFilter"
    >
      <template v-slot:append>
        <button type="button" class="white--text btn-search-filtro-table" icon="mdi-filter" @click="btnSearch" :disabled="!data.activeFilter">
          <v-icon icon="mdi-magnify" />
        </button>
      </template>
    </v-text-field>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue', 'data'])
const emit = defineEmits(['update:modelValue', 'search'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
 const btnSearch = () => {
  emit('search')
}
</script>

<style lang="scss">
.input-table .v-input__control div{
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.input-table .v-input__append {
  margin-left: 10px !important;
}
</style>
<style lang="scss" scoped>
.input-table {
  max-width: 300px;
  min-width: 200px
}
.v-input--horizontal .v-input__append {
    margin-inline-start: 0 !important;
}
.text-opacity-50{
  opacity: .5;
}
.input-table label {
  font-weight: 400 !important;
}
.input-table .v-input__slot {
  box-shadow: none !important;
}
.btn-search-filtro-table{
  align-items: center;
  display: flex;
  height: 38px;
  width: 38px;
  justify-content: center;
  border-radius: 3px;
  background: rgb(var(--v-theme-blue_default));
  color: #fff;
  margin-top: -7px;
  margin-left: -9px;
}
</style>