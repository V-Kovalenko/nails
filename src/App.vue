<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/layout/Header.vue";
const test = 123
</script>

<template>
  <div class="app">
    <Header/>
    <div class="content">
      <RouterView />
    </div>

  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  align-items: center;
  //max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  //padding: 1rem;
}

</style>
