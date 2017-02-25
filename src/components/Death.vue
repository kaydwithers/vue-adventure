
<template>

  <transition name="fade">
    <section v-if="$store.state.death">

      <p>{{ $store.state.nameFirst }} DIED</p>

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
