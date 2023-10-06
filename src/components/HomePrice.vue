<script setup>
import usePrice from "@/stores/usePrice";

const price = usePrice()
</script>

<template>
  <section class="home__price">
    <div class="home__price-container">
      <div class="home__price-title">
        <h2>ПРАЙС-ЛИСТ</h2>
        <div class="home__price-cards">
          <div class="home__price-card" v-for="item in price.myPrice" :key="item.title">
            <div class="home__price-card-price">
              {{ item.price }}
            </div>
            <div class="home__price-services">
              {{ item.title }}
            </div>
            <div class="home__price-img">
              <img :src="item.url" alt="IMG" class="home__price-pic">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.home {
  &__price {
    width: 100%;
    margin-bottom: 6rem;

  }

  &__price-container {
    display: grid;
    justify-items: center;
    align-content: center;
    margin: 0 auto;
    max-width: 90%;
  }

  &__price-title h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3rem;
    color: $title-color;
  }

  &__price-cards {
    display: grid;
    gap: 1rem;
    //box-shadow: 0 3px 6px rgb(14, 14, 14);
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    padding: 0.5rem;
    grid-auto-flow: row dense;
  }

  &__price-card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 8px rgb(14, 14, 14);
    font-size: 1.2rem;
    background: $bg-section-about-nails;
    overflow: hidden;
    position: relative;
    transition: 1s all;


    &:hover {
      scale: 1.1;
      transition: 0.5s;
      box-shadow: 0 10px 8px rgb(14, 14, 14);
    }
  }

  &__price-card-price {
    color: $pink-color-size-and-bg-btn;
    font-size: 1.5rem;
  }

  &__price-services {

  }

  &__price-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  &__price-pic {
    //padding: 1rem;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

}
</style>