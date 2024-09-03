<template>
    <div>
    <h1>Counter  component</h1>
        <div class="">
        {{ count }}
        </div>
        <div class="">
            <button @click.prevent="onIncreament()" style="margin-right: 10px;" >increment in counter componenet</button>
            <button @click.prevent="onDecreament()" >decreament in counter componenet</button>  
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
          
        }
    },
    computed:{
     count(){
        return  this.$store.state.count;
        // return this.$store.getters.getDoneList();
     }
    },
    methods:{
        onIncreament(){
            // this.$store.state.count++;
            // this.$store.commit('increment',1); // Using commit to commit the action to the store
this.$store.commit({
    type:'increment',
    value: 1
})
            
        },
        onDecreament(){
            // this.$store.commit('decrement',1); // Using commit to commit the action to the store
            // this.$store.state.count--;

            this.$store.commit({
                type:'decrement',
                value: 1
            })

        }
    }
}
</script>