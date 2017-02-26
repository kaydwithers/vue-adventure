
<template>
  <section class="toggle">

    <button class="btn" @click="toggle()">
      {{ toggleActive ? 'Hide Data' : 'Show Data' }}
    </button>

    <div v-show="toggleActive">
      <slot />
    </div>

  </section>
</template>



<script>

  export default {
    name: 'toggle',
    data() {
      return {
        toggleActive: false,
      };
    },
    methods: {
      toggle() {
        this.toggleActive = !this.toggleActive;
      },
    },
  };

</script>



<style>
</style>
