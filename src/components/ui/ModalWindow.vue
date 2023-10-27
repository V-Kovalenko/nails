<script setup>
import Button from "@/components/ui/Button.vue";
import {computed, reactive, ref} from "vue";

const emit = defineEmits(['emitClose', 'emitPrevious', 'emitNext'])

const props = defineProps({
  img: {
    type: Object,
    default: {}
  },
  imageIndex: {
    type:Number,
    default: 0
  }
})


const closeOpenModalWindow = () => { // закрываем модальное окно
  emit('emitClose')
}
const previousImage = () => { // листать фото назад
  emit('emitPrevious')
}
const nextImage = () => { // листать фото вперед
  emit('emitNext')
}

const urlImage = computed(() => { // Url картинок, меняется в зависимости от индекса из пропсов
  return `myWorks/work${props.imageIndex + 1}.jpg`
})

const zoomImage = () => {
  // Логика увеличения фотографии
};


</script>

<template>
  <div class="modal-window">
    <div class="modal-window__container">
      <Button
          @click="previousImage"
          :carouselBtn="true"
          btnTitle="Назад"
          :mainBtn="false" />
      <img
          :src="urlImage"
          alt="img"
          class="modal-window__img"
      >
      <span class="modal-window__close" @click="closeOpenModalWindow">X</span>
      <Button
          :carouselBtn="true"
          :mainBtn="false"
          @click="nextImage"
          btnTitle="Вперед"
      />

    </div>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";
.modal-window {
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.07);
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;


  }
  &__close {
    font-size: 4rem;
    width: min-content;
    height: min-content;
    position: absolute;
    top: 10%;
    right: 25%;
    color: #ebebec;
    cursor: pointer;
    &:hover {
      color: $pink-color-size-and-bg-btn;
    }
  }
  &__img {
    width: 40%;
    height: auto;
    z-index: 9;
    margin: 0 10rem;

  }
}

</style>