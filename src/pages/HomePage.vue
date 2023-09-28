<script setup>
import Button from "@/components/ui/Button.vue";
import {ref} from "vue";
/*init data for about-nails start*/
const initTextAboutNails = ref('Ухоженные ручки – лучшее украшение женщины, а её маникюр – отражение внутреннего мира и стиля. Красивый маникюр может повысить уверенность в себе и поднять настроение, становясь маленьким искусством на кончиках пальцев. Регулярный уход за руками и ногтями помогает сохранить их здоровье и красоту на долгое время.')
/*init data for about-nails end*/
const initTextPeculiarities = ref('Гарантирую вам безопасный маникюр, стерилизацию инструментов и рабочей поверхности перед каждым клиентом, одноразовые материалы')
</script>

<template>
  <div class="home">
    <main>
      <!--   section class="home__record" start   -->
      <section class="home__record">
        <div class="home__record-container">
          <h1 class="home__record-title">
            Маникюр
          </h1>
          <p class="home__record-text">Быстро и качественно!</p>
          <Button/>
        </div>
      </section>
      <!--   section class="home__record" end   -->

      <!--section class="home__about-nails" start-->
      <section class="home__about-nails">
        <div class="home__about-nails-container">
          <p class="home__about-nails-text">{{ initTextAboutNails }}</p>
          <img
              src="@/assets/images/aboutNails/about-nails.png"
              alt="about-nails"
              class="home__about-nails-img">
        </div>
      </section>
      <!--section class="home__about-nails" end-->

<!--section class="home__peculiarities" start-->
      <section class="home__peculiarities">
        <div class="home__peculiarities-title">
          <h2>МОИ ОСОБЕННОСТИ</h2>
        </div>
        <div class="home__peculiarities-container">
          <div class="home__peculiarities-text">
            <h3>БЕЗОПАСНОСТЬ</h3>
            <p>{{initTextPeculiarities}}</p>
            <Button/>
          </div>
          <div class="home__peculiarities-img">
            <img src="@/assets/images/peculiarities/peculiarities-img.jpg" alt="peculiarities-img">
          </div>
        </div>
      </section>
      <!--section class="home__peculiarities" end-->

    </main>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.home {
  box-sizing: border-box;
  height: 100vh;
  /*section record start->>>*/
  &__record {
    position: relative;
    background: url("@/assets/images/record/record-img.jpg") no-repeat center;
    background-size: 100% auto;
    height: 100vh;

  }

  &__record-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__record-title {
    font-size: 4rem;
    color: $pink-color-size-and-bg-btn;
    text-transform: uppercase;
  }

  &__record-text {
    color: #C21856;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  /*section record end-<<<<*/

  /*section about-nails start*/
  &__about-nails {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-section-about-nails;
    padding: 1rem;
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

  /*section about-nails end*/

  /*section MY PECULIARITIES start*/
  &__peculiarities {
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    //align-items: center;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: auto;
  }
  &__peculiarities-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    color: #4b4848;
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
  /*section MY PECULIARITIES end*/
}
</style>