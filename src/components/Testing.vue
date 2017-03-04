
<template>
  <div>
    <button class="btn  btn--p" @click="increment">Increment</button>
    <button class="btn  btn--p" @click="decrement">Decrement</button>

    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>

    <button class="btn  btn--p" @click="age">You are {{ randomAge }} years old.</button>
  </div>
</template>



<script>
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    methods: {
      ...mapMutations([
        'increment',
        'decrement',
        'age',
      ]),
    },

    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter',
        'randomAge',
      ]),
    },
  };
</script>



<style>
</style>
