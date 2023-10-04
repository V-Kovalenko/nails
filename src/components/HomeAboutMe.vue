<script setup>

</script>

<template>
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
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.home {
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
}
</style>