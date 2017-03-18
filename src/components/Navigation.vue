
<template>
  <nav class="navigation">

    <div class="f-l">
      <p>Chef Adventures</p>

      <toggle>
        <pre>{{$store.state}}</pre>
      </toggle>
    </div>

    <div class="f-r  ta-r">
      <p class="mb-0">HP: <span class="green">{{ $store.state.statistics.hp }}</span></p>
      <p class="mb-0">Charisma: {{ $store.state.statistics.charisma }}</p>
      <p class="mb-0">Strength: <span class="red">{{ $store.state.statistics.strength }}</span></p>
      <p class="mb-0">Wisdom: {{ $store.state.statistics.wisdom }}</p>
      <p class="mb-0">Alignment: {{ $store.state.statistics.alignment }}</p>
      <p class="mb-0">Weapon: {{ $store.state.statistics.weapon }}</span></p>
      <p class="mb-0">Mood: {{ $store.state.statistics.mood }}</span></p>
      <p>Gold: {{ $store.state.statistics.gold }}</span></p>
    </div>

  </nav>
</template>



<script>

  import Toggle from './Toggle';

  export default {
    name: 'navigation',
    components: {
      Toggle,
    },
  };

</script>



<style scoped>

  nav {
    width: 100%;
  }

</style>
