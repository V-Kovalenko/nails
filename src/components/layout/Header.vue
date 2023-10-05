<script setup>
import HeaderNavigation from "@/components/layout/HeaderNavigation.vue";
import {onMounted, onUnmounted, ref} from "vue";

const bgColorHeader = ref('transparent') // начальный цвет header
const handleScroll = () => { // создаем условия изменения цвета bg-header
  if (window.scrollY > 50) {
    bgColorHeader.value = 'white'
  } else {
    bgColorHeader.value = 'transparent'
  }
}
onMounted(() => {  // монтируем эвент
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => { // удаляем эвент
  window.removeEventListener('scroll', handleScroll)
})


</script>

<template>
  <div class="header" :style="{background: bgColorHeader}">
    <div class="header__wrapper">
      <div class="header__logo-link">
        <a href="/">
          <img src="" alt="LOGO">
        </a>
      </div>
      <HeaderNavigation/>
    </div>

  </div>
</template>

<style scoped lang="scss">
.header {
  padding-top: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 10%;
  z-index: 100;


  &__wrapper {
    display: grid;
    grid-auto-flow: column;
    max-width: 60%;
    margin: 0 auto;
    align-items: center;
    justify-items: center;

  }
}
</style>