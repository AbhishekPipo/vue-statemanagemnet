<script >
import Counter from './components/counter.vue';

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>

<template>
<div class="">

<Counter></Counter>


{{$store.state.count}}
</div>
</template>

<style >

</style>
