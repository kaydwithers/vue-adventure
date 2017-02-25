
<template>

  <transition name="fade">
    <section v-if="$store.state.storyOne">

      <p>
        You are a chef lost in a <span class="red">decrepit,</span> <span class="red">untrustworthy</span> and <span class="red">evil</span> world. 
      </p>

      <p>
        You approach one of the cheapest markets in the town of <span class="red">Helldoom.</span> The worst cuts of <span class="red">horse</span> meat sit on wooden tables. 
      </p>

      <p>
        It's your turn to cook tonight for your company of unsavoury adventurers known as <span class="pink">Barry's Angels.</span>
      </p>

      <p class="mb-3">
        You pick up and inspect a maggot infested piece of meat.
      </p>

      <button 
        class="btn  d-b  mb-1" 
        @click.prevent="
          $store.state.storyOne = !$store.state.storyOne, 
          $store.state.storyTwo = !$store.state.storyTwo
      ">
        Purchase Meat
      </button>

      <button 
        class="btn" 
        @click.prevent="
          $store.state.storyOne = !$store.state.storyOne, 
          $store.state.death = !$store.state.death
      ">
        Place meat back on table
      </button>

    </section>
  </transition>

</template>



<script>
</script>



<style>
</style>
