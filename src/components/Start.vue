
<template>

  <transition name="fade">
    <section v-if="$store.state.start">

      <p class="mb-3">Select an option.</p>

      <div class="mb-1">
        <button 
          class="btn" 
          @click="
            $store.state.characterNew = !$store.state.characterNew, 
            $store.state.start = !$store.state.start
        ">
          New Character
        </button>
      </div>

      <div class="mb-1">
        <button 
          class="btn" 
          @click="
            $store.state.characterRandom = !$store.state.characterRandom, 
            $store.state.start = !$store.state.start,
            fnNameFirst(),
            fnNameLast(),
            fnAlignment(),
            fnAge(),
            fnGender(),
            fnRace(),
            fnOccupation(),
            fnLocation()
        ">
          Random Character
        </button>

      </div>

    </section>
  </transition>

</template>



<script>
  import { mapMutations } from 'vuex';

  export default {
    methods: {
      ...mapMutations([
        'fnNameFirst',
        'fnNameLast',
        'fnAlignment',
        'fnAge',
        'fnGender',
        'fnRace',
        'fnOccupation',
        'fnLocation',
      ]),
    },
  };
</script>



<style>
</style>
