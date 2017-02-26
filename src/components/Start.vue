
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
          @randomAgeFn="$store.state.age = $event"
          class="btn" 
          @click="
            $store.state.characterRandom = !$store.state.characterRandom, 
            $store.state.start = !$store.state.start,
            randomName(), 
            randomAlignment(), 
            randomAge(), 
            randomGender(), 
            randomRace(), 
            randomOccupation(), 
            randomLocation()
        ">
          Random Character
        </button>
      </div>

      <!--{{$store.state}}-->

    </section>
  </transition>

</template>



<script>
</script>



<style>
</style>
