
<template>
  <div>
    <button class="btn  btn--p" @click="increment">Increment</button>
    <button class="btn  btn--p" @click="decrement">Decrement</button>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>



<script>
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    methods: {
      ...mapMutations([
        'increment',
        'decrement',
      ]),
    },
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter',
      ]),
    },
  };
</script>



<style>
</style>
