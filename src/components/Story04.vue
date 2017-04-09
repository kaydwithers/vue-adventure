
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.storyFour">

      <p class="mb-3">To be continued</p>

      <button 
        class="btn  btn--p" 
        @click="
          $store.state.toggle.storyFour = !$store.state.toggle.storyFour, 
          $store.state.toggle.start = !$store.state.toggle.start
      ">
        Back to start
      </button>

    </section>
  </transition>

</template>
