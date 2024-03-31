import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store.js";
import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/swiper-bundle.css';
import 'bootstrap';
import DatePicker from 'vue3-datepicker';

const app = createApp(App)
app.component('date-picker', DatePicker);
app.use(router)
app.use(store)

app.mount('#app')