<script setup>
const emit = defineEmits(['emitClose'])
const props = defineProps({
  img: {
    type: Object,
    default: {}
  }
})
const closeOpenModalWindow = () => {
  emit('emitClose')
}
</script>

<template>
  <div class="modal-window">
    <div class="modal-window__container" v-if="props.img.photoSize">
      <img
          :src="props.img.url"
          alt="img"
          class="modal-window__img"
      >
      <span class="modal-window__close" @click="closeOpenModalWindow">X</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-window {
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 70%);
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;

  }
  &__close {
    font-size: 4rem;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 10%;
    right: 10%;
    color: #ebebec;
    z-index: 99;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
  &__img {
    width: 30%;
    height: auto;
    z-index: 9;
  }
}

</style>