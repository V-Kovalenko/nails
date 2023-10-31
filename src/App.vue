<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/layout/Header.vue";
</script>

<template>
  <div class="app app-container">
    <Header/>
    <div class="content">
      <RouterView />
    </div>

  </div>
</template>

<style  lang="scss">
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  position: relative;
}

</style>
