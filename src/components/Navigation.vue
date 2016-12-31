<template>
  <nav>
    <div class="fl">
      <p class="mb0  dib">Chef Adventures</p>
    </div>

    <div class="fr  tr">
      <p class="mb0">HP: <span class="green">100</span></p>
      <p class="mb0">Charisma: 20</p>
      <p class="mb0">Strength: <span class="red">2</span></p>
      <p class="mb0">Wisdom: 2</p>
      <p class="mb0">Weapon: Fists of anger</span></p>
      <p class="mb0">Mood: Angry</span></p>
      <p class="mb0">Gold: 0</span></p>
    </div>
  </nav>
</template>



<script>
  export default {
    name: 'create',
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



<style scoped>

  nav {
    width: 100%;
  }

</style>
