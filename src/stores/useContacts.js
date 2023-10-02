import {defineStore} from "pinia";
import {ref} from "vue";

const useContacts = defineStore('useContacts', () => {
    const contacts = ref([
        {url: new URL('@/assets/images/footer/address.png',import.meta.url), title: 'адрес', text: 'г.Кемерово, ул.Марковцева д.24, кв 229'},
        {url: new URL('@/assets/images/footer/telephone.png',import.meta.url), title: 'телефон', text: '+79001052270'},
        {url: new URL('@/assets/images/footer/email.png',import.meta.url), title: 'email', text: 'alinakovalenko109@gmail.com'},
        {url: new URL('@/assets/images/footer/ok.png',import.meta.url), title: 'одноклассники', text: 'https://ok.ru/profile/573045179474'},
        {url: new URL('@/assets/images/footer/vk.png',import.meta.url), title: 'в контакте', text: 'https://vk.com/id651967871'},
        {url: new URL('@/assets/images/footer/whatsapp.png',import.meta.url), title: 'whatsapp', text: '+79001052270'},
    ])

    const phoneNumber = 89001052270
    const openWhatsApp = (item) => {
        const url = `whatsapp://send?phone=${phoneNumber}`;
        if (item.title === 'whatsapp') {
            // Проверяем, поддерживается ли протокол whatsapp:// на устройстве пользователя
            if (/android/i.test(navigator.userAgent)) {
                // Для Android
                window.location.href = url;
            } else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
                // Для iOS
                window.location.href = url;
            } else {
                // Если протокол whatsapp:// не поддерживается, можно открыть WhatsApp Web
                window.open('https://web.whatsapp.com/', '_blank');
            }
        }

    };
    const openVk = (item) => {
        const url = `https://vk.com/id651967871`
        if (item.title === 'в контакте') {
            // Проверяем, поддерживается ли протокол vk:// на устройстве пользователя
            if (/android/i.test(navigator.userAgent)) {
                // Для Android
                window.location.href = url;
            } else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
                // Для iOS
                window.location.href = url;
            } else {
                // Если протокол whatsapp:// не поддерживается, можно открыть WhatsApp Web
                window.open('https://vk.com/id651967871', '_blank');
            }
        }
    }

    const openOk = (item) => {
        const url = `https://ok.ru/profile/573045179474`
        if (item.title === 'одноклассники') {
            // Проверяем, поддерживается ли протокол ok:// на устройстве пользователя
            if (/android/i.test(navigator.userAgent)) {
                // Для Android
                window.location.href = url;
            } else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
                // Для iOS
                window.location.href = url;
            } else {
                // Если протокол whatsapp:// не поддерживается, можно открыть WhatsApp Web
                window.open('https://ok.ru/profile/573045179474', '_blank');
            }
        }
    }
    return{
        contacts, openWhatsApp, openVk, openOk
    }
})
export default useContacts