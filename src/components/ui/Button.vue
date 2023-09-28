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

  }
})
const btnStyles = computed(() => {
  return {
    'btn': props.mainBtn,
  }
})
</script>

<template>
  <div >
    <button :class="btnStyles">
      <div class="text">
        {{props.btnTitle}}
      </div>
     </button>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";
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
.text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>