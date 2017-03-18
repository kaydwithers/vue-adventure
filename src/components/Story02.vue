
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.storyTwo">

      <p class="white  tt-u"><i>&ldquo;You there {{ $store.state.random.appearance }}!&rdquo;</i></p>

      <p class="mb-3">A voice booms.</p>

      <button 
        class="btn  d-b  mb-1" 
        @click.prevent="
          $store.state.toggle.storyTwo = !$store.state.toggle.storyTwo, 
          storyTwoDeath = !storyTwoDeath
      ">
        Ignore
      </button>

      <button 
        class="btn" 
        @click.prevent="
          $store.state.toggle.storyTwo = !$store.state.toggle.storyTwo, 
          $store.state.toggle.storyThree = !$store.state.toggle.storyThree
      ">
        Look
      </button>

    </section>



    <section v-if="storyTwoDeath">
      <p class="mb-3">You are stabbed in the back!</p>

      <button 
        class="btn  btn--p" 
        @click="
          storyTwoDeath = !storyTwoDeath, 
          $store.state.toggle.start = !$store.state.toggle.start
      ">
        Back to start
      </button>
    </section>

  </transition>

</template>



<script>
  export default {
    data() {
      return {
        storyTwoDeath: false,
      };
    },
  };
</script>
