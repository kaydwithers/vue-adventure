<template>

  <transition name="fade">
    <section v-if="$store.state.characterRandom">

      <p class="white">
        <b>
          Greetings
          <span class="grey-dark" v-if="$store.state.gender === 'male' && $store.state.occupation === 'knight'"> Sir</span> 
          <span class="grey-dark" v-if="$store.state.gender === 'female' && $store.state.occupation === 'knight'"> Dame</span> 
          <span class="pink">{{ $store.state.name }}</span> 
          <span class="purple-light" v-show="$store.state.alignment">the {{ $store.state.alignment }}</span> 
          <span class="yellow" v-show="$store.state.age">{{ $store.state.age }} year old</span> 
          <span class="red">{{ $store.state.gender }}</span> 
          <span class="blue-dark">{{ $store.state.race }}</span> 
          <span class="purple-dark">{{ $store.state.occupation }}</span> 
          <span class="grey-dark" v-show="$store.state.location">from {{ $store.state.location }},</span>
          <span v-show="$store.state.location">you are very weak, very slow and butt ugly.</span>  
        </b>
      </p>

      <button 
        class="btn  btn--p" 
        @click="
          $store.state.storyOne = !$store.state.storyOne, 
          $store.state.characterRandom = !$store.state.characterRandom
      ">
        Begin adventure
      </button>

    </section>
  </transition>

</template>



<script>
</script>



<style scoped>
</style>
