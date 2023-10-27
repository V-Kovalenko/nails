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
    /*add photos to array imagesWorks for component HomeMyWorks >>>>*/
    const imagesWorks = ref([])
    const countWorks =ref(34) // количество для компонента myWorks
    function addWorks () { // добавление фото работ

        const result = []
        for (let i = 1; i <= countWorks.value; i+=1) {
            const imageURL = `/myWorks/work${i}.jpg`
            result.push({ url: imageURL, photoSize: false })
        }

        imagesWorks.value = result
    }
        addWorks()
    /*add photos to array imagesWorks for component HomeMyWorks <<<<<*/
    return {
        images, imagesWorks,
    }
})

export default useMyWorks