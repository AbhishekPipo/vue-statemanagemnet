import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex';
const store=createStore({
    state(){
        return {
            count:7,
        }
    }
})
const app=createApp(App);
app.use(store)
app.mount('#app');