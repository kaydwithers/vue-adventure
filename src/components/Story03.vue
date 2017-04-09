
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.storyThree">

      <p class="white  tt-u"><i>&ldquo;You look like the sort that carries a lot of gold, hand it over!&rdquo;</i></p>

      <p class="mb-3">
        The notorious outlaw <span class="red">{{$store.state.enemies.enemyNameFirst}} {{$store.state.enemies.enemyNameLast}}</span> walks towards you with a <span class="red">{{$store.state.enemies.enemyBasicWeaponQuality}} {{$store.state.enemies.enemyWeaponSize}} {{$store.state.enemies.enemyBasicWeaponMaterial}} {{$store.state.enemies.enemyBasicWeapon}}.</span>
      </p>

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
