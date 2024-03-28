import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store.js";
import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/swiper-bundle.css';

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')