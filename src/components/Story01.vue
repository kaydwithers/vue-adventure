
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.storyOne">

      <p>
        You are a part-time chef lost in a <span class="red">decrepit,</span> <span class="red">untrustworthy</span> and <span class="red">evil</span> world. Together with your pet <span class="red">{{ $store.state.random.animalType }}</span> named <span class="red">{{ $store.state.random.animalName }}</span> you travel the lands together in search of the finest cuisines.
      </p>

      <p>
        It's your turn to cook tonight for your company of unsavoury adventurers known as <span class="pink">Barry's Angels.</span>
      </p>

      <p>
        You are food shopping at one of the cheapest markets in the town of <span class="red">Helldoom.</span> The worst cuts of <span class="red">{{ $store.state.random.animalType }}</span> meat sit on wooden tables. 
      </p>

      <p class="mb-3">
        You pick up and inspect a maggot infested piece of meat.
      </p>

      <button 
        class="btn  d-b  mb-1" 
        @click.prevent="
          $store.state.toggle.storyOne = !$store.state.toggle.storyOne, 
          storyOneDeath = !storyOneDeath
      ">
        Purchase Meat
      </button>

      <button 
        class="btn" 
        @click.prevent="
          $store.state.toggle.storyOne = !$store.state.toggle.storyOne, 
          $store.state.toggle.storyTwo = !$store.state.toggle.storyTwo
      ">
        Place meat back on table
      </button>

    </section>



    <section v-if="storyOneDeath">
      <p class="mb-3">You and {{ companyName }} died from haemolytic uremic syndrome (explosive diarrhoea)!</p>

      <button 
        class="btn  btn--p" 
        @click="
          storyOneDeath = !storyOneDeath, 
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
        storyOneDeath: false,
      };
    },
  };
</script>
