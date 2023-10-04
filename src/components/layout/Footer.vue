<script setup>
import useContacts from "@/stores/useContacts";

const contacts = useContacts()
const functionsForUseContacts = (it) => {
  contacts.openWhatsApp(it)
  contacts.openVk(it)
  contacts.openOk(it)
}
</script>

<template>
  <section class="footer">
    <div class="footer__container">
      <div class="footer__title">
        <h2>ЗАПИСАТЬСЯ КО МНЕ</h2>
        <p>по номеру телефона</p>
      </div>
      <div class="footer__cards">
        <div :class="[
                'footer__card',
                {'footer__card_lg': item.title === 'адрес' || item.title === 'email'},
                {'footer__card_sm': item.title !== 'адрес' && item.title !== 'email'}]"
             v-for="item in contacts.contacts"
             @click="functionsForUseContacts(item)"
             :key="item.title"
        >
          <img :src="item.url" alt="img" class="footer__card-img">
          <p class="footer__card-title">{{ item.title }}</p>
          <p class="footer__card-text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.footer {
  background-color: $bg-section-about-nails;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  &__container {
    width: 100%;
    display: grid;
    grid-auto-rows: min-content;
    align-items: center;
    justify-items: center;
    padding: 2rem 1rem 5rem 1rem;
    margin: 0 auto;
    grid-auto-flow: row;
  }

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;
    color: $title-color;
  }

  &__title h2 {
    max-width: 250px;
    text-align: center;
    font-size: 2rem;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1.2rem;
    padding: 1rem;
  }

  &__card {

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

  &__card_lg {
    grid-column: span 4;
  }

  &__fcard_sm {
    grid-column: span;
  }

  &__card-img {
    height: 90px;
    background-size: cover;
    background-color: $pink-color-size-and-bg-btn;
  }

  &__card-title {
    text-transform: uppercase;
    font-weight: 700;
  }

  &__card-text {
    color: $title-color;
    font-weight: 700;
  }
}


</style>