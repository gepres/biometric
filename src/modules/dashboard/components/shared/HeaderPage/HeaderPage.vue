<template>
  <div class="headerPage">
    <h2 class="custom-class">{{title}}</h2>
    <p>{{caption}}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
export default defineComponent({
  name: 'headerPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },

  }
});
</script>
<style lang="scss" scoped>
.headerPage{
  padding: 1rem;
  // border: 1px solid var(--v-blue_default-base);
    box-shadow: 2px 2px 2px 1px rgba( var(--v-theme-blue_default), 0.5);

}
.custom-class {
    color: rgb(var(--v-theme-blue_default));
  }
</style>
