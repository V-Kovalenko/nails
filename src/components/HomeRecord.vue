<script setup>

import Button from "@/components/ui/Button.vue";
</script>

<template>
  <section class="home__record">
    <div class="home__record-container">
      <h1 class="home__record-title">
        Маникюр
      </h1>
      <p class="home__record-text">Быстро и качественно!</p>
      <Button/>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.home {
  &__record {
    position: relative;
    background: url("@/assets/images/record/record-img.jpg") no-repeat center;
    background-size: 100% auto;
    height: 100vh;
    width: 100%;

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
}

</style>