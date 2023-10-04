<script setup>
import Button from "@/components/ui/Button.vue";
import {ref} from "vue";
const initTextPeculiarities = ref('Гарантирую вам безопасный маникюр, стерилизацию инструментов и рабочей поверхности перед каждым клиентом, одноразовые материалы')
</script>

<template>
  <section class="home__peculiarities">
    <div class="home__peculiarities-title">
      <h2>МОИ ОСОБЕННОСТИ</h2>
    </div>
    <div class="home__peculiarities-container">
      <div class="home__peculiarities-text">
        <h3>БЕЗОПАСНОСТЬ</h3>
        <p>{{ initTextPeculiarities }}</p>
        <Button/>
      </div>
      <div class="home__peculiarities-img">
        <img src="@/assets/images/peculiarities/peculiarities-img.jpg" alt="peculiarities-img">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.home {
  &__peculiarities {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: auto;
  }

  &__peculiarities-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    color: $title-color;
  }

  &__peculiarities-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

  }

  &__peculiarities-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 60%;
    gap: 2rem;
    text-align: center;
  }

  &__peculiarities-img {

  }
}
</style>