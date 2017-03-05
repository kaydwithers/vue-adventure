
<template>

  <transition name="fade">
    <section v-if="$store.state.characterRandom">

      <p class="white  mb-3">
        <b>
          Greetings
          <span class="grey-dark" v-if="$store.state.gender === 'male' && $store.state.occupation === 'knight'"> Sir</span> 
          <span class="grey-dark" v-if="$store.state.gender === 'female' && $store.state.occupation === 'knight'"> Dame</span> 
          <span class="pink">{{ $store.state.nameFirst }}</span> 
          <span class="pink">{{ $store.state.nameLast }}</span> 
          the <span class="purple-light">{{ $store.state.alignment }}</span> 
          <span class="yellow">{{ $store.state.age }}</span> year old
          <span class="red">{{ $store.state.gender }}</span> 
          <span class="blue-dark">{{ $store.state.race }}</span> 
          <span class="purple-dark">{{ $store.state.occupation }}</span> 
          from <span class="grey-dark">{{ $store.state.location }},</span>
          <span>you are very weak, very slow and butt ugly.</span>  
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



<style>
</style>
