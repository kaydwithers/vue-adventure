
<template lang="pug">

  div.testing
    p Greetings {{ randomNameFirst }} {{ randomNameLast }} the {{ randomAge }} year old {{ randomRace }}.

    button.btn.btn--test.mb-1(@click="fnNameFirst") Random first name
    button.btn.btn--test.mb-1(@click="fnNameLast") Random last name
    button.btn.btn--test.mb-1(@click="fnAge") Random age
    button.btn.btn--test.mb-1(@click="fnRace") Random race
    button.btn.btn--test(@click="fnNameLast(), fnAge(), fnNameFirst()") Random all

</template>



<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'randomNameFirst',
        'randomNameLast',
        'randomAge',
        'randomRace',
      ]),
    },
    methods: {
      ...mapMutations([
        'fnNameFirst',
        'fnNameLast',
        'fnAge',
        'fnRace',
        'fnRandomAll',
      ]),
    },
  };
</script>



<style scoped>

  .btn--test {
    background-color: papayaWhip;
    color: #333;
    display: block;
  }

</style>
