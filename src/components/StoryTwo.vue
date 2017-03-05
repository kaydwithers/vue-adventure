
<template>

  <transition name="fade">
    <section v-if="$store.state.storyTwo">

      <p class="mb-3">To be continued.</p>

      <button 
        class="btn  btn--p" 
        @click.prevent="
          $store.state.storyTwo = !$store.state.storyTwo, 
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
