<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import Header from "@/components/layout/Header.vue";
</script>

<template>
  <div class="app">
    <Header/>
    <div class="content">
      <RouterView/>
    </div>

  </div>
</template>

<style scoped lang="scss">
.app {
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  //padding: 1rem;
}

</style>
