
<template>

  <transition name="fade">
    <section v-if="$store.state.death">

      <p class="mb-3  tt-u">{{ $store.state.nameFirst }} {{ $store.state.nameLast }} the {{ $store.state.alignment }} {{ $store.state.age }} year old {{ $store.state.gender }} {{ $store.state.race }} {{ $store.state.occupation }} from {{ $store.state.location }} DIED</p>

      <button 
        class="btn  btn--p" 
        @click.prevent="
          $store.state.death = !$store.state.death, 
          $store.state.start = !$store.state.start
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
