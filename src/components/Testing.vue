
<template lang="pug">

  div.testing
    button.btn.btn--test(@click="increment") Increment
    button.btn.btn--test(@click="decrement") Decrement

    p Counter is: {{ doubleCounter }}
    p Number of Clicks: {{ stringCounter }}

    button.btn.btn--test(@click="age") You are {{ randomAge }} years old.

</template>



<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter',
        'randomAge',
      ]),
    },
    methods: {
      ...mapMutations([
        'increment',
        'decrement',
        'age',
      ]),
    },
  };
</script>



<style scoped>

  .btn--test {
    background-color: papayaWhip;
    color: #333;
  }

</style>
