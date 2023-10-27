<script setup>
import useMyWorks from "@/stores/useMyWorks";
import {ref, toRefs, watch} from "vue";
import Footer from "@/components/layout/Footer.vue";
import ModalWindow from "@/components/ui/ModalWindow.vue";


const works = useMyWorks()
const {imagesWorks} = toRefs(works)
/*открыть модальное окно и отобразить кликнутое изображение в модалке start*/
const toggleModalWindow = ref(false) // состояние для модального окна (открыть, закрыть)
const openModalWindow = (index) => { // открыть модальное окно и изменить состояние выбранной картинки для отображения в модалке
  toggleModalWindow.value = true
  // it.photoSize = true
  currentIndex.value = index

}
const closeOpenModalWindow = (it) => { // закрыть модальное окно (принимает emit из модального окна)
  // it.photoSize = false
  toggleModalWindow.value = false
}
/*открыть модальное окно и отобразить кликнутое изображение в модалке end*/
const currentIndex = ref(0)
const getPreviousImage = () => {
    return currentIndex.value =  (currentIndex.value - 1 + imagesWorks.value.length) % imagesWorks.value.length
}
const nextImage = () => {  // картинки листаем вправо
  currentIndex.value = (currentIndex.value + 1) %  imagesWorks.value.length
}
</script>

<template>

  <div class="works-page">
    <div class="works-page__container">
      <div class="works-page__content" v-for="(image, index) in imagesWorks">
        <img :src="image.url" alt="img" class="works-page__img" @click="openModalWindow(index)">

        <ModalWindow
            v-if="toggleModalWindow"
            :img="image.url"
            @emitClose="closeOpenModalWindow(image)"
            :imageIndex="currentIndex"
            @emitPrevious="getPreviousImage"
            @emitNext="nextImage"
        />
      </div>
    </div>
    <div class="works-page__footer">
      <!--      <Footer/>-->
    </div>
  </div>

</template>

<style scoped lang="scss">
.works-page {
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 1rem;
    margin: 0 auto;
    padding: 5rem 2rem 1rem 2rem;

  }

  &__content {
    width: 100%;
  }

  &__img {
    transition: 1s all;
    border-radius: 5%;
    box-shadow: 0 3px 12px rgb(14, 14, 14);

    &:hover {
      scale: 1.1;
      transition: .8s all;
      border-radius: 10%;
      transform: translateY(-1.2rem);
      box-shadow: 0 31px 12px rgb(14, 14, 14);
      cursor: pointer;
    }
  }

  &__footer {
    height: 100px;
  }
}

</style>