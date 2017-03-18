
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.death">

      <p class="mb-3  tt-u">{{ $store.state.random.nameFirst }} {{ $store.state.random.nameLast }} the {{ $store.state.random.alignment }} {{ $store.state.random.age }} year old {{ $store.state.random.gender }} {{ $store.state.random.race }} {{ $store.state.random.occupation }} from {{ $store.state.random.location }} DIED</p>

      <button 
        class="btn  btn--p" 
        @click="
          $store.state.toggle.death = !$store.state.toggle.death, 
          $store.state.toggle.start = !$store.state.toggle.start
      ">
        Back to start
      </button>

    </section>
  </transition>

</template>



<script>
</script>



<style>
</style>
