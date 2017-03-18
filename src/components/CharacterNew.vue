
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.characterNew">

      <p class="white">
        Greetings<span v-if="!$store.state.random.nameFirst"> Adventurer!</span>
        <span class="grey-dark" v-if="$store.state.random.gender === 'male' && $store.state.random.occupation === 'knight'"> Sir</span> 
        <span class="grey-dark" v-if="$store.state.random.gender === 'female' && $store.state.random.occupation === 'knight'"> Dame</span> 
        <span class="pink">{{ $store.state.random.nameFirst }}</span> 
        <span class="blue-light">{{ $store.state.random.nameLast }}</span> 
        <span class="purple-light" v-show="$store.state.random.alignment">the {{ $store.state.random.alignment }}</span> 
        <span class="yellow" v-show="$store.state.random.age">{{ $store.state.random.age }} year old</span> 
        <span class="red">{{ $store.state.random.gender }}</span> 
        <span class="blue-dark">{{ $store.state.random.race }}</span> 
        <span class="purple-dark">{{ $store.state.random.occupation }}</span> 
        <span class="grey-dark" v-show="$store.state.random.location">from {{ $store.state.random.location }}.</span>
        <span v-show="$store.state.random.location">you are {{ $store.state.random.strengthType }}, {{ $store.state.random.speedType }} and {{ $store.state.random.appearance }}.</span>
      </p>

      <p class="grey  mb-3">
        Enter your details below. (input <b class="white">;</b> for random)
      </p>

      <!-- First Name -->
      <div class="">
        <label class="white" for="nameFirst">
          First Name:
        </label>

        <input 
          class="" 
          name="nameFirst" 
          type="text" 
          v-model="$store.state.random.nameFirst" 
          @keyup.186="setNameFirst()"
          autofocus 
        />
      </div>

      <!-- Last Name -->
      <transition name="fade">
        <div class="" v-show="$store.state.random.nameFirst">
          <label class="white" for="nameLast">
            Last Name:
          </label>

          <input 
            name="nameLast" 
            type="text" 
            v-model="$store.state.random.nameLast" 
            @keyup.186="setNameLast()"
          >
        </div>
      </transition>

      <!-- Alignment -->
      <transition name="fade">
        <div class="" v-show="$store.state.random.nameLast">
          <label class="white" for="alignment">
            Alignment:
          </label>

          <input 
            name="alignment" 
            type="text" 
            v-model="$store.state.random.alignment"
            @keyup.186="setAlignment()"
          >
        </div>
      </transition>

      <!-- Age -->
      <transition name="fade">
        <div class="" v-show="$store.state.random.alignment">
          <label class="white" for="age">
            Age:
          </label>

          <input 
            name="age" 
            type="number" 
            v-model="$store.state.random.age" 
            @keyup.186="setAge()"
          >
        </div>
      </transition>

      <!-- Gender -->
      <transition name="fade">
        <div class="" v-show="$store.state.random.age">
          <label class="white" for="gender">
            Gender:
          </label>

          <input 
            name="gender" 
            type="text" 
            v-model="$store.state.random.gender" 
            @keyup.186="setGender()"
          >
        </div>
      </transition>

      <!-- Race -->
      <transition name="fade">
        <div class="" v-show="$store.state.random.gender">
          <label class="white" for="race">
            Race:
          </label>

          <input 
            name="race" 
            type="text" 
            v-model="$store.state.random.race" 
            @keyup.186="setRace()"
          >
        </div>
      </transition>

      <!-- Occupation -->
      <transition name="fade">
        <div class="" v-show="$store.state.random.race">
          <label class="white" for="occupation">
            Class:
          </label>

          <input 
            name="occupation" 
            type="text" 
            v-model="$store.state.random.occupation"
            @keyup.186="setOccupation()"
          >
        </div>
      </transition>

      <!-- Location -->
      <transition name="fade">
        <div class="mb-3" v-show="$store.state.random.occupation">
          <label class="white" for="location">
            Where are you from?:
          </label>

          <input 
            name="location" 
            type="text" 
            v-model="$store.state.random.location"
            @keyup.186="setLocation()"
          >
        </div>
      </transition>

      <!-- Button -->
      <transition name="fade">
        <button 
          class="btn  btn--p" 
          v-show="$store.state.random.location" 
          @click="
            $store.state.toggle.storyOne = !$store.state.toggle.storyOne, 
            $store.state.toggle.characterNew = !$store.state.toggle.characterNew
        ">
          Begin adventure
        </button>
      </transition>

    </section>
  </transition>

</template>



<script>
  import { mapMutations } from 'vuex';

  export default {
    methods: {
      ...mapMutations([
        'setNameFirst',
        'setNameLast',
        'setAlignment',
        'setAge',
        'setGender',
        'setRace',
        'setOccupation',
        'setLocation',
      ]),
    },
  };
</script>



<style>
</style>
