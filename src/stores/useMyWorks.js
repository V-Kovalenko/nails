import {defineStore} from "pinia";
import {ref} from "vue";

const useMyWorks = defineStore('useMyWorks', () => {
    const images = ref([
        {url: new URL("@/assets/images/myWorks/work1.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work2.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work3.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work4.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work5.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work6.jpg",import.meta.url)},
    ])

    const imagesWorks = ref([
        {url: new URL("@/assets/images/myWorks/work1.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work2.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work3.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work4.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work5.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work6.jpg",import.meta.url), photoSize: false},
    ])

    return {
        images, imagesWorks
    }
})

export default useMyWorks