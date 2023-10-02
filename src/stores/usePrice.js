import {defineStore} from "pinia";
import {ref} from "vue";

const usePrice = defineStore('usePrice', () => {
    const myPrice = ref([
        {title: 'СТАНДАРТНЫЙ МАНИКЮР', price: '600Р', url: new URL('@/assets/images/price/standard.jpg',import.meta.url)},
        {title: 'МАНИКЮР + ПОКРЫТИЕ', price: '1200Р', url: new URL('@/assets/images/price/manicureСoating.jpg',import.meta.url)},
        {title: 'УКРЕПЛЕНИЕ НОГТЕЙ', price: '200Р', url: new URL('@/assets/images/price/protect.jpg',import.meta.url)},
        {title: 'Френч', price: '200Р', url: new URL('@/assets/images/price/french.jpg',import.meta.url)},
    ])
    return {
        myPrice
    }
})

export default usePrice