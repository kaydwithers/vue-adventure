<template>

  <nav>
    <div class="f-l">
      <p>Chef Adventures</p>
    </div>

    <div class="f-r  ta-r">
      <p class="mb-0">HP: <span class="green">{{ $store.state.hp }}</span></p>
      <p class="mb-0">Charisma: {{ $store.state.charisma }}</p>
      <p class="mb-0">Strength: <span class="red">{{ $store.state.strength }}</span></p>
      <p class="mb-0">Wisdom: {{ $store.state.wisdom }}</p>
      <p class="mb-0">Alignment: {{ $store.state.alignment }}</p>
      <p class="mb-0">Weapon: {{ $store.state.weapon }}</span></p>
      <p class="mb-0">Mood: {{ $store.state.mood }}</span></p>
      <p>Gold: {{ $store.state.gold }}</span></p>
    </div>
  </nav>

</template>



<script>
  export default {
    name: 'navigation',
    data() {
      return {
        animal: 'frog',
      };
    },
  };
</script>



<style scoped>

  nav {
    width: 100%;
  }

</style>
