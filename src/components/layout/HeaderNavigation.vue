<script setup>
import {ref} from "vue";

const navItems = ref([
  {title: 'Главная', path: '/'},
  {title: 'Работы', path: '/'},
  {title: 'Прайс-лист', path: '/'},
  {title: 'Записаться', path: '/'},
])
</script>

<template>
  <nav class="nav" >
    <div class="nav__container" v-for="item in navItems">
      <a href="/" class="nav__content"> {{ item.title }}</a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.nav {
  display: grid;
  grid-template-columns: repeat(5, auto);
  width: 100%;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;


  &__container {

  }
  &__content {
    &:hover {
      color: $pink-color-size-and-bg-btn;
    }
  }

}
</style>