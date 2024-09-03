<template>
    <div>
        <div class="">
        {{ $store.state.count }}
        </div>
        <div class="">
            <button @click.prevent="onIncreament()" style="margin-right: 10px;" >+</button>
            <button @click.prevent="onDecreament()" >-</button>  
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
          
        }
    },
    methods:{
        onIncreament(){
            this.$store.state.count++;
        },
        onDecreament(){
            this.$store.state.count--;
        }
    }
}
</script>