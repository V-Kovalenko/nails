<script setup>
import Button from "@/components/ui/Button.vue";
import {ref} from "vue";
import useMyWorks from "@/stores/useMyWorks";
import usePrice from "@/stores/usePrice";
import useContacts from "@/stores/useContacts";
import HomeRecord from "@/components/HomeRecord.vue";
import HomeAboutNails from "@/components/HomeAboutNails.vue";
import HomePeculiarities from "@/components/HomePeculiarities.vue";
import HomeMyWorks from "@/components/HomeMyWorks.vue";
import HomePrice from "@/components/HomePrice.vue";
import HomeAboutMe from "@/components/HomeAboutMe.vue";
import Footer from "@/components/layout/Footer.vue";

</script>

<template>
  <div class="home">
    <main>

      <section class="home__record">
        <HomeRecord/>
      </section>

      <section class="home__about-nails">
        <HomeAboutNails/>
      </section>

      <section class="home__peculiarities">
        <HomePeculiarities/>
      </section>

      <section class="home__my-works">
        <HomeMyWorks/>
      </section>

      <section class="home__price">
        <HomePrice/>
      </section>

      <section class="home__about-me">
        <HomeAboutMe/>
      </section>

      <section class="home__footer">
        <Footer/>
      </section>
    </main>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.home {
  width: 100vw;
  box-sizing: border-box;
  height: 100vh;
}
</style>