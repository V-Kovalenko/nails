import {defineStore} from "pinia";
import {computed, onMounted, ref} from "vue";

const useMyWorks = defineStore('useMyWorks', () => {
    const images = ref([
        {url: new URL("@/assets/images/myWorks/work1.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work2.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work3.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work4.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work5.jpg",import.meta.url)},
        {url: new URL("@/assets/images/myWorks/work6.jpg",import.meta.url)},
    ])

    const imagesWorks = ref([])
    // const imagesWorks = ref([
    //     {url: new URL("@/assets/images/myWorks/work1.jpg",import.meta.url), photoSize: false},
    //     {url: new URL("@/assets/images/myWorks/work2.jpg",import.meta.url), photoSize: false},
    //     {url: new URL("@/assets/images/myWorks/work3.jpg",import.meta.url), photoSize: false},
    //     {url: new URL("@/assets/images/myWorks/work4.jpg",import.meta.url), photoSize: false},
    //     {url: new URL("@/assets/images/myWorks/work5.jpg",import.meta.url), photoSize: false},
    //     {url: new URL("@/assets/images/myWorks/work6.jpg",import.meta.url), photoSize: false},
    // ])
    const imagesWorks1 = ref([
        {url: new URL("@/assets/images/myWorks/work1.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work2.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work3.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work4.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work5.jpg",import.meta.url), photoSize: false},
        {url: new URL("@/assets/images/myWorks/work6.jpg",import.meta.url), photoSize: false},
    ])
    console.log('imagesWorks1', imagesWorks1)
    const countWorks =ref(34)
    function addWorks () {

        const result = []
        for (let i = 1; i <= countWorks.value; i+=1) {
            const imageURL = `/myWorks/work${i}.jpg`
            result.push({ url: imageURL, photoSize: false })
        }

        imagesWorks.value = result
    }


        addWorks()
    return {
        images, imagesWorks,
    }
})

export default useMyWorks