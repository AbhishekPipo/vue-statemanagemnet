<script >
import Counter from './components/counter.vue';
import TodosList from './components/TodosList.vue';
export default {
  name: 'App',
  components: {
    Counter,
    TodosList,
  },
  data(){
    return {
      // Initializing the count variable in the store
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    onDecreament(){
      // this.$store.state.count--;
      // this.$store.commit('decrement',2); // Using commit to commit the action to the store
      this.$store.commit({
                type:'decrement',
                value: 1
            })
    },
    onIncreament(){
      // this.$store.state.count++;
      // this.$store.commit('increment',2); // Using commit to commit the action to the store
      this.$store.commit({
    type:'increment',
    value: 1
})
    },
    getTodosDoneList(){
      // return this.$store.state.todos.filter(todo => todo.done).length;
      return this.$store.getters.getDoneList;
    }
}
}
</script>
<template>
<div class="">
<Counter></Counter>
{{ count}}
<h1>App Componnet</h1>
<div class="">
            <button @click.prevent="onIncreament()" style="margin-right: 10px;" >increment in app componenet</button>
            <button @click.prevent="onDecreament()" >decreament in app componenet</button>  
        </div>
</div>
<br>
<div class="">
<todos-list></todos-list>
<div class="">
Todos list complete: {{ getTodosDoneList() }}
</div>
</div>
</template>
<style >
</style>
