<template>
<div class="content">
  <h1>NO PAGE FOUND</h1>
  <h3>404</h3>
  <router-link to="/" class="mt-3 mb-5">Ir a Inicio</router-link>
  <img :src="require('@/modules/shared/assets/not-found.png')" alt="">
</div>
</template>

<style lang="scss" scoped>
.content{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>