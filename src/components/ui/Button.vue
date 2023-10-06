<script setup>
import {computed} from "vue";
const props = defineProps({
  mainBtn: {
    type: Boolean,
    default: true

  },
  btnTitle: {
    type: String,
    default: 'ЗАПИСАТЬСЯ'
  },
  carouselBtn: {
    type: Boolean,
    default: false
  }
})
const btnStyles = computed(() => {
  return {
    'btn': props.mainBtn,
    'btnCarousel': props.carouselBtn
  }
})
</script>

<template>
    <button :class="btnStyles">
      <div class="text">
        {{props.btnTitle}}
      </div>
     </button>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";
/*основной стиль кнопок - записаться страт*/
.btn {
  background: $pink-color-size-and-bg-btn;
  height: max-content;
  width: max-content;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: white;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    scale: 1.1;
    transition: 0.3s all;
  }
}
/*основной стиль кнопок - записаться конец*/

/*стиль текста внутри кнопок start*/
.text {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*стиль текста внутри кнопок end*/

/*кнопка для карусели картинок start*/
.btnCarousel {
  font-size: 1.5rem;
  background: $pink-color-size-and-bg-btn;
  height: max-content;
  width: max-content;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: white;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    transition: 0.3s all;
  }
}
/*кнопка для карусели картинок end*/
</style>