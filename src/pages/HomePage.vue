<script setup>
import Button from "@/components/ui/Button.vue";
import {ref} from "vue";
import useMyWorks from "@/stores/useMyWorks";
import usePrice from "@/stores/usePrice";
import useContacts from "@/stores/useContacts";
/*init data for about-nails start*/
const initTextAboutNails = ref('Ухоженные ручки – лучшее украшение женщины, а её маникюр – отражение внутреннего мира и стиля. Красивый маникюр может повысить уверенность в себе и поднять настроение, становясь маленьким искусством на кончиках пальцев. Регулярный уход за руками и ногтями помогает сохранить их здоровье и красоту на долгое время.')
/*init data for about-nails end*/
const initTextPeculiarities = ref('Гарантирую вам безопасный маникюр, стерилизацию инструментов и рабочей поверхности перед каждым клиентом, одноразовые материалы')
const works = useMyWorks() // store works
/*section price start*/
const price = usePrice()
console.log('price: ', price.myPrice)
/*section price end*/

const contacts = useContacts()
const functionsForUseContacts = (it) => {
  contacts.openWhatsApp(it)
  contacts.openVk(it)
  contacts.openOk(it)
}

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
            <p>{{ initTextPeculiarities }}</p>
            <Button/>
          </div>
          <div class="home__peculiarities-img">
            <img src="@/assets/images/peculiarities/peculiarities-img.jpg" alt="peculiarities-img">
          </div>
        </div>
      </section>
      <!--section class="home__peculiarities" end-->

      <!--   section class="home__my-"  start -->
      <section class="home__my-works">
        <div class="home__my-works-container">
          <div class="home__my-works-card" v-for="image in works.images">
            <img :src="image.url" alt="" class="home__my-works-img">
            <div class="home__my-works-card-dark"></div>
            <div class="home__my-works-card-center"></div>
          </div>
        </div>
        <div class="home__my-works-btn">
          <Button/>
        </div>
      </section>
      <!--   section class="home__my-"  end -->

      <!--   <section class="home__price">  start  -->
      <section class="home__price">
        <div class="home__price-container">
          <div class="home__price-title">
            <h2>ПРАЙС-ЛИСТ</h2>
            <div class="home__price-cards">
              <div class="home__price-card" v-for="item in price.myPrice">
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
      <!--       <section class="home__price"> end -->

      <!--<section class="home__about-me"> start      -->
      <section class="home__about-me">
        <div class="home__about-me-title">
          <h2>ОБО МНЕ</h2>
        </div>
        <div class="home__about-me-content">
          <div class="home__about-me-img">
            <img src="@/assets/images/aboutMe/selfie.jpg" alt="" class="home__about-me-pic">
          </div>
          <div class="home__about-me-info">
            <h3 class="home__about-me-subtitle">АЛИНА КОВАЛЕНКО</h3>
            <p class="home__about-me-text">Специалист по маникюру</p>
            <p class="home__about-me-text">Я очень люблю свою работу. Маникюр это моё всё, поэтому я – отличный
              специалист!</p>
          </div>
        </div>
      </section>
      <!--<section class="home__about-me"> end      -->

      <section class="home__footer">
        <div class="home__footer-container">
          <div class="home__footer-title">
            <h2>ЗАПИСАТЬСЯ КО МНЕ</h2>
            <p>по номеру телефона</p>
          </div>
          <div class="home__footer-cards">
            <div :class="[
                'home__footer-card',
                {'home__footer-card_lg': item.title === 'адрес' || item.title === 'email'},
                {'home__footer-card_sm': item.title !== 'адрес' && item.title !== 'email'}]"
                 v-for="item in contacts.contacts" @click="functionsForUseContacts(item)">
              <img :src="item.url" alt="img" class="home__footer-card-img">
              <p class="home__footer-card-title">{{ item.title }}</p>
              <p class="home__footer-card-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<!--{'home__footer-card_sm': item.title === 'в контакте' && item.title === 'whatsapp'}-->
<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.home {
  //width: 100%;
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

  /*section MY PECULIARITIES end*/

  /*section works start*/
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

  /*section works end*/

  /*section price start*/
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
    box-shadow: 0 3px 6px rgb(14, 14, 14);
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


    &:hover {
      scale: 1.1;

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
    height: 400px;
    width: 100%;
    object-fit: cover;
  }

  /*section price end*/

  /*section aboutMe start*/
  &__about-me {
    width: 100%;
    //background: url("@/assets/images/aboutMe/background.png") no-repeat center;
    position: relative;
    z-index: 1;
    padding: 1rem;
    margin-bottom: 7rem;

  }

  &__about-me:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Высота вашей картинки */
    background-image: url("@/assets/images/aboutMe/background.png");
    background-size: cover;
    background-position: center;
    z-index: -1;

  }

  &__about-me-title {
    text-align: center;
    margin-bottom: 4rem;
    color: $title-color;
    font-size: 2rem;
  }

  &__about-me-bg {
    //position: absolute;
    //width: 100%;
    //height: 100%;
  }

  &__about-me-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    //justify-items: center;
    align-items: center;


  }

  &__about-me-img {
    position: relative;

  }

  &__about-me-pic {
    max-width: 40%;
    margin-left: 50%;
    //position: absolute;
    //top: 50%;
    //left: 30%;
    //transform: translate(-50%, -50%);

  }

  &__about-me-info {
    display: grid;
    grid-auto-rows: min-content;
    max-width: 300px;
    gap: 1rem;
  }

  &__about-me-subtitle {
    color: $pink-color-size-and-bg-btn;

  }

  &__about-me-text {

  }

  /*section aboutMe end*/

  /*section footer start*/
  &__footer {
    //background: pink;
    background-color: $bg-section-about-nails;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

  }

  &__footer-container {
    width: 100%;
    display: grid;
    grid-auto-rows: min-content;
    align-items: center;
    justify-items: center;
    padding: 2rem 1rem 5rem 1rem;
    margin: 0 auto;
    grid-auto-flow: row;

  }

  &__footer-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;
    color: $title-color;

  }

  &__footer-title h2 {
    max-width: 250px;
    text-align: center;
    font-size: 2rem;
  }

  &__footer-cards {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1.2rem;
    padding: 1rem;
  }

  &__footer-card {

    display: grid;
    grid-template-rows: repeat(3, max-content);
    align-items: center;
    justify-items: center;
    gap: .7rem;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 1);
    padding: 1rem;
    z-index: 1;
    grid-column: span 2;
    box-sizing: border-box;
    //max-width: 95%;

    &:hover {
      scale: 1.1;
      transform: translateY(-2rem);
      transition: 0.3s;
      cursor: pointer;
    }
  }

  &__footer-card_lg {
    grid-column: span 4;
    //background-color: #7600e1;
  }

  &__footer-card_sm {
    grid-column: span;
    //background-color: yellow;
  }

  &__footer-card-img {
    height: 90px;
    background-size: cover;
    background-color: $pink-color-size-and-bg-btn;
  }

  &__footer-card-title {
    text-transform: uppercase;
    font-weight: 700;

  }

  &__footer-card-text {
    color: $title-color;
    font-weight: 700;

  }

  /*section footer end*/
}
</style>