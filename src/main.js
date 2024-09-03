import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex';
const store=createStore({
    state(){
        return {
            todos:[
                {id: 1, text: 'wekeup early!', done: false},
                {id: 2, text: 'go to gym', done: true},
                {id: 3, text: 'eat dinner', done: false}
            ],
            count:7
        }
    },
    mutations:{
        increment(state, payload){
            // state.count= state.count + payload;
            state.count+=payload.value;
        },
        decrement(state, payload){
            // state.count= state.count - payload;
            state.count-=payload.value;
        }
    },
    getters:{
        getDoneList(state){
            return state.todos.filter(todo=>todo.done).length;
        }
        ,
        getDoneTodos(state){
            return state.todos.filter(todo=>todo.done);
        }
    }
})
const app=createApp(App);
app.use(store)
app.mount('#app');