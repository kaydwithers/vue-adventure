
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.start">

      <p class="mb-3">Select an option.</p>

      <div class="mb-1">
        <button 
          class="btn" 
          @click="
            $store.state.toggle.characterNew = !$store.state.toggle.characterNew, 
            $store.state.toggle.start = !$store.state.toggle.start,
            setAppearance(), 
            setSpeedType(), 
            setStrengthType()
        ">
          New Character
        </button>
      </div>

      <div class="mb-1">
        <button 
          class="btn" 
          @click="
            $store.state.toggle.characterRandom = !$store.state.toggle.characterRandom, 
            $store.state.toggle.start = !$store.state.toggle.start,
            setAlignment(), 
            setAge(), 
            setAppearance(), 
            setEnemyBasicWeapon(), 
            setEnemyBasicWeaponMaterial(), 
            setEnemyBasicWeaponQuality(), 
            setEnemyNameFirst(), 
            setEnemyNameLast(), 
            setEnemyWeaponSize(), 
            setGender(), 
            setNameFirst(), 
            setNameLast(), 
            setOccupation(), 
            setAnimalName(), 
            setAnimalType(), 
            setRace(), 
            setSpeedType(), 
            setStrengthType(),
            setTitle(),  
            setLocation()
        ">
          Random Character
        </button>

      </div>

    </section>
  </transition>

</template>



<script>
  import { mapMutations } from 'vuex';

  export default {
    methods: {
      ...mapMutations([
        'setAlignment',
        'setAge',
        'setAppearance',
        'setAnimalName',
        'setAnimalType',
        'setEnemyBasicWeapon',
        'setEnemyBasicWeaponMaterial',
        'setEnemyBasicWeaponQuality',
        'setEnemyNameFirst',
        'setEnemyNameLast',
        'setEnemyWeaponSize',
        'setGender',
        'setNameFirst',
        'setNameLast',
        'setOccupation',
        'setRace',
        'setSpeedType',
        'setStrengthType',
        'setTitle',
        'setLocation',
      ]),
    },
  };
</script>



<style>
</style>
