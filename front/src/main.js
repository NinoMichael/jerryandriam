import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from './i18n';
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css"; 
import ToastService from 'primevue/toastservice';
import AnimateOnScroll from 'primevue/animateonscroll';

const app = createApp(App);
app.use(i18n);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});
app.use(ToastService);
app.directive('animateonscroll', AnimateOnScroll);

app.mount('#app');
