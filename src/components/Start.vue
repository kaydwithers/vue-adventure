
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
            randomName(), 
            randomAlignment(), 
            age, 
            randomAge(), 
            randomGender(), 
            randomRace(), 
            randomOccupation(), 
            randomLocation()
        ">
          Random Character
        </button>

        <button class="btn  btn--p" @click="age">You are {{ randomAge }} years old.</button>

      </div>

    </section>
  </transition>

</template>



<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'randomAge',
      ]),
    },
  };
</script>



<style>
</style>
