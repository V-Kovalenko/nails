<script setup>
import {ref} from "vue";

const navItems = ref([
  {title: 'Главная', path: '/',id: '#start'},
  {title: 'Работы', path: '/', id:'#works'},
  {title: 'Прайс-лист', path: '/', id: '#price'},
  {title: 'Контакты', path: '/', id: '#contacts'},
  {title: '+7(900) 105-22-70', path: '/', id: '#contacts'},
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
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  margin-left: 10rem;
  &__container {
  }

  &__content {
    &:hover {
      color: $pink-color-size-and-bg-btn;
      cursor: pointer;
      border-bottom: 2px solid $pink-color-size-and-bg-btn;
    }
  }

}
</style>