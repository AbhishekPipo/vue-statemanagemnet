<template>
    <div>
    <h3>Todos List (Done: {{ getTodosDoneList() }})</h3>
        <ul>
        <li v-for="todo in todosList" :key="todo.id">{{ todo.text }} -  ({{ todo.done ? 'Done' : 'Not done' }})</li>
        </ul>
    </div>
    <div class="">
    <h3>completed Todos:-</h3>
    <ul>
    <li v-for="todo in getDoneList1">
    {{ todos.text }} 
    </li>
    </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Define your data here
        }
    },
    computed: {
        // Define your computed properties here
        todosList() {
            return this.$store.state.todos;
        },
        getDoneList(){
            console.log(this.$store.getters.getDoneTodos,"okkk");
            
            return this.$store.getters.getDoneTodos;  // Use computed property to get the done list from the store.
        }
       
    },
    methods: {
        // Define your methods here
        getTodosDoneList(){
            // return this.todosList.filter((todo)=>todo.done).length;
            return this.$store.getters.getDoneList;
        }
    }
}
</script>