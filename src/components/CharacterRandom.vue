
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.characterRandom">

      <p class="white  mb-3">
        Greetings
        <span class="grey-dark">{{ $store.state.random.title }}</span> 
        <span class="pink">{{ $store.state.random.nameFirst }}</span> 
        <span class="pink">{{ $store.state.random.nameLast }}</span> 
        the <span class="purple-light">{{ $store.state.random.alignment }}</span> 
        <span class="yellow">{{ $store.state.random.age }}</span> year old
        <span class="green">{{ $store.state.random.gender }}</span> 
        <span class="blue-dark">{{ $store.state.random.race }}</span> 
        <span class="purple-dark">{{ $store.state.random.occupation }}</span> 
        from <span class="grey-dark">{{ $store.state.random.location }}.</span>
        <span>You are <span class="red">{{ $store.state.random.strengthType }},</span> <span class="red">{{ $store.state.random.speedType }}</span> and <span class="red">{{ $store.state.random.appearance }}.</span>
      </p>

      <button 
        class="btn  btn--p" 
        @click="
          $store.state.toggle.storyOne = !$store.state.toggle.storyOne, 
          $store.state.toggle.characterRandom = !$store.state.toggle.characterRandom
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
