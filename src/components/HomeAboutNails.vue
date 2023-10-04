<script setup>
/*init data for about-nails start*/
import {ref} from "vue";

const initTextAboutNails = ref('Ухоженные ручки – лучшее украшение женщины, а её маникюр – отражение внутреннего мира и стиля. Красивый маникюр может повысить уверенность в себе и поднять настроение, становясь маленьким искусством на кончиках пальцев. Регулярный уход за руками и ногтями помогает сохранить их здоровье и красоту на долгое время.')
/*init data for about-nails end*/
</script>

<template>
  <section class="home__about-nails">
    <div class="home__about-nails-container">
      <p class="home__about-nails-text">{{ initTextAboutNails }}</p>
      <img
          src="@/assets/images/aboutNails/about-nails.png"
          alt="about-nails"
          class="home__about-nails-img">
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.home {
  &__about-nails {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-section-about-nails;
    padding: 1rem;
    min-height: 100vh;
  }

  &__about-nails-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
    justify-content: center;
    align-content: center;
  }


  &__about-nails-text {
    text-align: center;
  }

  &__about-nails-img {
    //width: 50%;
  }
}
</style>