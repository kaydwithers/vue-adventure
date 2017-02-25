<template>

  <transition name="fade">
    <section v-if="$store.state.storyTwo">

      <p>To be continued.</p>

      <button 
        class="btn  btn--p" 
        @click.prevent="
          $store.state.storyOne = !$store.state.storyOne, 
          $store.state.storyTwo = !$store.state.storyTwo
      ">
        Back to start
      </button>

    </section>
  </transition>

</template>



<script>
</script>



<style scoped>
</style>
