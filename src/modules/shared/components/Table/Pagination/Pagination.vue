
<template>
  <div class="">
    <v-pagination
      v-model="value"
      :length="length"
      rounded="circle"
      color="blue_default"
      active-color="blue_default"
    ></v-pagination>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue', 'length'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
