import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store.js";
import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/umd/popper.min.js'
import DatePicker from 'vue3-datepicker';
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.component('date-picker', DatePicker);
app.use(router)
app.use(store)
app.use(vue3GoogleLogin, { clientId: '168918217010-4l131cohtfj8t7aomeaclqtdm0d1k2lm.apps.googleusercontent.com' });

app.mount('#app')