
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.storyThree">

      <p class="white  tt-u"><i>&ldquo;You look like the sort that carries a lot of gold, hand it over.&rdquo;</i></p>

      <p class="mb-3">{{ randomCreature, randomBasicArmour, randomEnemyName }} walks towards you with a {{ randomBasicWeapon }}</p>

      <button 
        class="btn  d-b  mb-1" 
        @click.prevent="
          $store.state.toggle.storyThree = !$store.state.toggle.storyThree, 
          $store.state.toggle.battle = !$store.state.toggle.battle
      ">
        Commence Battle
      </button>

    </section>
  </transition>

</template>
