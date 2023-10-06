import {defineStore} from "pinia";
import {ref} from "vue";

const useContacts = defineStore('useContacts', () => {
    const contacts = ref([
        {url: new URL('@/assets/images/footer/telephone.png',import.meta.url), title: 'телефон', text: '+79001052270', toggle: false},
        {url: new URL('@/assets/images/footer/whatsapp.png',import.meta.url), title: 'whatsapp', text: '+79001052270', toggle: false},
        {url: new URL('@/assets/images/footer/vk.png',import.meta.url), title: 'в контакте', text: 'https://vk.com/id651967871', toggle: false},
        {url: new URL('@/assets/images/footer/ok.png',import.meta.url), title: 'одноклассники', text: 'https://ok.ru/profile/573045179474', toggle: false},
        {url: new URL('@/assets/images/footer/address.png',import.meta.url), title: 'адрес', text: 'г.Кемерово, ул.Марковцева д.24, кв 229', toggle: false},
        {url: new URL('@/assets/images/footer/email.png',import.meta.url), title: 'email', text: 'alinakovalenko109@gmail.com', toggle: false},
    ])

    const phoneNumber = '+79001052270' // телефон для whatsapp
    const vkProfileUrl = `https://vk.com/id651967871` // init data для ВК
    const okProfileUrl = `https://ok.ru/profile/573045179474` // init data для ОК
    const emailData = ref('alinakovalenko109@gmail.com') // init Data для Email
    const isAppInstalled = (appName) => {  // проверка установлено ли приложение на телефоне (вк или ок в данном случае)
        const userAgent = navigator.userAgent || navigator.vendor || window.opera
        return userAgent.toLowerCase().indexOf(appName) > -1
    }
    const openWhatsApp = (item) => {  // открытие whatsapp при клике на иконку
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

    const openVk = (item) => {   // открытие ВК при клике на иконку
        const appUrl = 'vk://vk.com/id651967871';
        if (item.title === 'в контакте') {
           window.location.href = isAppInstalled('vk')? appUrl : vkProfileUrl
        }
    }

    const openOk = (item) => { // открытие ОК при клике на иконку
            const appUrl = 'ok://www.ok.ru/573045179474';
            if (item.title === 'одноклассники') {
                window.location.href = isAppInstalled('ok')? appUrl : okProfileUrl
            }
    }

    const openEmail = (it) => {
        if (it.title === 'email') {
            window.location.href = `mailto:alinakovalenko109@gmail.com?subject=Новое письмо`
        }
    }

    return{
        contacts, openWhatsApp, openVk, openOk, openEmail
    }
})
export default useContacts