<script setup>
import {ref} from "vue";

const navItems = ref([
  {title: 'Главная', path: '/',id: '#start'},
  {title: 'Работы', path: '/', id:'#works'},
  {title: 'Прайс-лист', path: '/', id: '#price'},
  {title: 'Контакты', path: '/', id: '#contacts'},
])

</script>

<template>
  <nav class="nav">
    <div class="nav__container" v-for="item in navItems">
      <div class="nav__content">
        <a :href="item.id"> {{ item.title }}</a>
      </div>
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
      cursor: pointer;
    }
  }

}
</style>