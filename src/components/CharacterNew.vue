<template>

  <transition name="fade">
    <section v-if="$store.state.characterNew">

      <p class="white">
        <b>
          Greetings<span v-if="!$store.state.nameFirst"> Adventurer!</span>
          <span class="grey-dark" v-if="$store.state.gender === 'male' && $store.state.occupation === 'knight'"> Sir</span> 
          <span class="grey-dark" v-if="$store.state.gender === 'female' && $store.state.occupation === 'knight'"> Dame</span> 
          <span class="pink">{{ $store.state.nameFirst }}</span> 
          <span class="green">{{ $store.state.nameMiddle }}</span> 
          <span class="blue-light">{{ $store.state.nameLast }}</span> 
          <span class="purple-light" v-show="$store.state.alignment">the {{ $store.state.alignment }}</span> 
          <span class="yellow" v-show="$store.state.age">{{ $store.state.age }} year old</span> 
          <span class="red">{{ $store.state.gender }}</span> 
          <span class="blue-dark">{{ $store.state.race }}</span> 
          <span class="purple-dark">{{ $store.state.occupation }}</span> 
          <span class="grey-dark" v-show="$store.state.location">from {{ $store.state.location }},</span>
          <span v-show="$store.state.location">you are very weak, very slow and butt ugly.</span>  
        </b>
      </p>

      <p class="grey  mb-3">
        Enter your details below. (input <b class="white">;</b> for random)
      </p>

      <form class="mb-1" autocomplete="off">

        <!-- First Name -->
        <div class="">
          <label class="white" for="nameFirst">
            First Name:
          </label>

          <input 
            class="" 
            name="nameFirst" 
            type="text" 
            v-model="$store.state.nameFirst" 
            @keyup.186="randomNameFirst()"
            autofocus 
          />
        </div>

        <!-- Middle Name -->
        <transition name="fade">
          <div class="" v-show="$store.state.nameFirst">
            <label class="white" for="nameMiddle">
              Middle Name:
            </label>
            <input 
              name="nameMiddle" 
              type="text" 
              v-model="$store.state.nameMiddle" 
              @keyup.186="randomNameMiddle()"
            >
          </div>
        </transition>

        <!-- Last Name -->
        <transition name="fade">
          <div class="" v-show="$store.state.nameMiddle">
            <label class="white" for="nameLast">
              Last Name:
            </label>
            <input 
              name="nameLast" 
              type="text" 
              v-model="$store.state.nameLast" 
              @keyup.186="randomNameLast()"
            >
          </div>
        </transition>

        <!-- Alignment -->
        <transition name="fade">
          <div class="" v-show="$store.state.nameLast">
            <label class="white" for="alignment">
              Alignment:
            </label>
            <input 
              name="alignment" 
              type="text" 
              v-model="$store.state.alignment"
              @keyup.186="randomAlignment()"
            >
          </div>
        </transition>

        <!-- Age -->
        <transition name="fade">
          <div class="" v-show="$store.state.alignment">
            <label class="white" for="age">
              Age:
            </label>
            <input 
              name="age" 
              type="number" 
              v-model="$store.state.age" 
              @keyup.186="randomAge()"
            >
          </div>
        </transition>

        <!-- Gender -->
        <transition name="fade">
          <div class="" v-show="$store.state.age">
            <label class="white" for="gender">
              Gender:
            </label>
            <input 
              name="gender" 
              type="text" 
              v-model="$store.state.gender" 
              @keyup.186="randomGender()"
            >
          </div>
        </transition>

        <!-- Race -->
        <transition name="fade">
          <div class="" v-show="$store.state.gender">
            <label class="white" for="race">
              Race:
            </label>
            <input 
              name="race" 
              type="text" 
              v-model="$store.state.race" 
              @keyup.186="randomRace()"
            >
          </div>
        </transition>

        <!-- Occupation -->
        <transition name="fade">
          <div class="" v-show="$store.state.race">
            <label class="white" for="occupation">
              Class:
            </label>
            <input 
              name="occupation" 
              type="text" 
              v-model="$store.state.occupation"
              @keyup.186="randomOccupation()"
            >
          </div>
        </transition>

        <!-- Location -->
        <transition name="fade">
          <div class="mb-3" v-show="$store.state.occupation">
            <label class="white" for="location">
              Where are you from?:
            </label>
            <input 
              name="location" 
              type="text" 
              v-model="$store.state.location"
              @keyup.186="randomLocation()"
            >
          </div>
        </transition>

        <!-- Button -->
        <transition name="fade">
          <button 
            class="btn  btn--p" 
            v-show="$store.state.location" 
            @click="
              $store.state.storyOne = !$store.state.storyOne, 
              $store.state.characterNew = !$store.state.characterNew
          ">
            Begin adventure
          </button>
        </transition>

      </form>

    </section>
  </transition>

</template>



<script>
</script>



<style scoped>
</style>
