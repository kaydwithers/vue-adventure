
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.storyFour">

      <p class="mb-3">To be continued</p>

      <button 
        class="btn  d-b  mb-1" 
        @click.prevent="
          $store.state.toggle.storyFour = !$store.state.toggle.storyFour, 
          $store.state.toggle.battle = !$store.state.toggle.battle
      ">
        Battle
      </button>

    </section>
  </transition>

</template>
