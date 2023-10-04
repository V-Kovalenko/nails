<script setup>
import Button from "@/components/ui/Button.vue";
import useMyWorks from "@/stores/useMyWorks";
const works = useMyWorks() // store works
</script>

<template>
  <section class="home__my-works">
    <div class="home__my-works-container">
      <div class="home__my-works-card" v-for="image in works.images" :key="image.url">
        <img :src="image.url" alt="" class="home__my-works-img">
        <div class="home__my-works-card-dark"></div>
        <div class="home__my-works-card-center"></div>
      </div>
    </div>
    <div class="home__my-works-btn">
      <Button/>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.home {
  &__my-works {
    background: $bg-section-about-nails;
    padding: 1rem;
    margin-bottom: 4rem;
  }

  &__my-works-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    gap: 1rem;
    max-width: 80%;
    margin: 0 auto;
  }

  &__my-works-card {
    overflow: hidden; /* Обрезать содержимое, выходящее за границы карточки */
    position: relative; /* Для позиционирования вложенных элементов */
    box-shadow: 0 3px 12px rgb(14, 14, 14)

  }

  &__my-works-img {
    transition: .4s all;
    width: 100%;
    height: auto;
    z-index: 10;

    &:hover {
      transform: scale(1.3);
    }
  }

  &__my-works-card-dark {
    //top: 0;
    //left: 0;
    //background-color: rgba(0,0,0,0.5);
    //width: 100%;
    //height: 100%;
    //position: absolute;
    //opacity: 0;
    ////pointer-events: none;
    //&:hover {
    //  opacity: 1;
    //  pointer-events: all;
    //  background-color: rgba(0,0,0,0.5);
    //}
  }

  &__my-works-card-center {
    //top: 50%;
    //left: 50%;
    //transform: translate(-50%, -50%);
    //position: absolute;
    //display: flex;
    //align-content: center;
    //justify-content: center;
    //border: 2px solid #c0c0b3;
    //width: 80%;
    //height: 80%;
    //opacity: 0;
    &:hover {
      //opacity: 1;
      //transition: 0.7s all;
      //pointer-events: all;
    }

  }

  &__my-works-btn {
    margin-top: 2rem;
    display: grid;
    justify-content: center;
    align-self: center;
  }
}
</style>