<template>
  <div class="create">


    <transition name="fade">
      <div class="mb3" v-if="introduction">

        <p class="mb3">Select an option.</p>

        <div class="mb1">
          <button 
            class="btn" 
            v-bind:class="{ ' is-active': characterNew }" 
            @click.prevent="characterNew = !characterNew, characterRandom = characterRandom"
          >
            New Character
          </button>
        </div>

        <div class="mb1">
          <button 
            class="btn" 
            v-bind:class="{ ' is-active': characterRandom }" 
            @click.prevent="characterRandom = !characterRandom, characterNew = characterNew"
          >
            Random Character
          </button>
        </div>

      </div>
    </transition>



    <transition name="fade">
      <section v-if="characterNew">

        <p class="white">
          <b>
            Greetings<span v-if="!nameFirst"> Adventurer!</span>
            <span class="grey-dark" v-if="gender === 'Male' && occupation === 'Knight'"> Sir</span> 
            <span class="grey-dark" v-if="gender === 'Female' && occupation === 'Knight'"> Dame</span> 
            <span class="pink">{{ nameFirst }}</span> 
            <span class="green">{{ nameMiddle }}</span> 
            <span class="blue-light">{{ nameLast }}</span> 
            <span class="purple-light" v-show="alignment">the {{ alignment }}</span> 
            <span class="yellow" v-show="age">{{ age }} year old</span> 
            <span class="red">{{ gender }}</span> 
            <span class="blue-dark">{{ race }}</span> 
            <span class="purple-dark">{{ occupation }}</span> 
            <span class="grey-dark" v-show="location">from {{ location }},</span>
            <span v-show="location">you are very weak, very slow and butt ugly.</span>  
          </b>
        </p>



        <p class="grey  mb3">
          Enter your details below. (input <b class="white">r</b> for random)
        </p>

        <form class="mb1" autocomplete="off">

          <!-- First Name -->
          <div class="">
            <label class="white" for="nameFirst">
              First Name:
            </label>

            <input 
              class="" 
              name="nameFirst" 
              type="text" 
              v-model="nameFirst" 
              autofocus 
            />
          </div>

          <!-- Middle Name -->
          <transition name="fade">
            <div class="" v-show="nameFirst">
              <label class="white" for="nameMiddle">
                Middle Name:
              </label>
              <input name="nameMiddle" type="text" v-model="nameMiddle">
            </div>
          </transition>

          <!-- Last Name -->
          <transition name="fade">
            <div class="" v-show="nameMiddle">
              <label class="white" for="nameLast">
                Last Name:
              </label>
              <input name="nameLast" type="text" v-model="nameLast">
            </div>
          </transition>

          <!-- Alignment -->
          <transition name="fade">
            <div class="" v-show="nameLast">
              <label class="white" for="alignment">
                Alignment:
              </label>
              <input name="alignment" type="text" v-model="alignment">
            </div>
          </transition>

          <!-- Age -->
          <transition name="fade">
            <div class="" v-show="alignment">
              <label class="white" for="age">
                Age:
              </label>
              <input name="age" type="number" v-model="age">
            </div>
          </transition>

          <!-- Gender -->
          <transition name="fade">
            <div class="" v-show="age">
              <label class="white" for="gender">
                Gender:
              </label>
              <input name="gender" type="text" v-model="gender">
            </div>
          </transition>

          <!-- Race -->
          <transition name="fade">
            <div class="" v-show="gender">
              <label class="white" for="race">
                Race:
              </label>
              <input name="race" type="text" v-model="race">
            </div>
          </transition>

          <!-- Occupation -->
          <transition name="fade">
            <div class="" v-show="race">
              <label class="white" for="occupation">
                Class:
              </label>
              <input name="occupation" type="text" v-model="occupation">
            </div>
          </transition>

          <!-- Location -->
          <transition name="fade">
            <div class="mb3" v-show="occupation">
              <label class="white" for="location">
                Where are you from?:
              </label>
              <input name="location" type="text" v-model="location">
            </div>
          </transition>

          <!-- Button -->
          <transition name="fade">
            <button 
              class="btn  btn--p" 
              v-show="location" 
              @click.prevent="
                storyOne = !storyOne, 
                characterNew = !characterNew, 
                introduction = !introduction"
            >
              Begin adventure
            </button>
          </transition>

        </form>

      </section>



      <section v-else-if="characterRandom">
        <p>Random Character</p>

        <button 
          class="btn  btn--p" 
          @click.prevent="
            storyOne = !storyOne, 
            characterRandom = !characterRandom, 
            introduction = !introduction"
        >
          Begin adventure
        </button>
      </section>

    </transition>



    <transition name="fade">
      <section v-if="storyOne">

        <p>
          You are a chef lost in a <span class="red">decrepit,</span> <span class="red">untrustworthy</span> and <span class="red">evil</span> world. 
        </p>

        <p>
          You approach one of the cheapest markets in the town of <span class="red">Helldoom.</span> The worst cuts of <span class="red">horse</span> meat sit on wooden tables. 
        </p>

        <p>
          It's your turn to cook tonight for your company of unsavoury adventurers known as <span class="pink">Barry's Angels.</span>
        </p>

        </p class="mb3">  
          You pick up and inspect a maggot infested piece of meat.
        </p>

        <button 
          class="btn  db  mb1" 
          @click.prevent="storyOne = !storyOne, storyTwo = !storyTwo"
        >
          Purchase Meat
        </button>

        <button 
          class="btn" 
          @click.prevent="storyOne = !storyOne, storyTwo = !storyTwo"
        >
          Place meat back on table
        </button>

      </section>
    </transition>



    <transition name="fade">
      <section v-if="storyTwo">
        <p>Story begins</p>

        <button 
          class="btn  btn--p" 
          @click.prevent="storyOne = !storyOne, storyTwo = !storyTwo, introduction = introduction"
        >
          Begin adventure
        </button>
      </section>
    </transition>

    <!--<pre>{{$data}}</pre>-->

  </div>
</template>



<script>
  export default {
    name: 'create',
    data() {
      return {
        introduction: true,
        characterNew: false,
        characterRandom: false,
        storyOne: false,
        storyTwo: false,
        nameFirst: '',
        nameMiddle: '',
        nameLast: '',
        alignment: '',
        age: '',
        gender: '',
        race: '',
        occupation: '',
        location: '',
        namesLast: [
          'Deathrump',
          'Wellington',
          'the Great',
        ],
      };
    },
    methods: {
      toggle() {
        this.toggleActive = !this.toggleActive;
      },
      randomFirstName() {
        const namesFirst = [
          'Herbert',
          'Winston',
          'Bob',
        ];
        const index = parseInt(Math.random() * namesFirst.length, 1);
        return namesFirst[index];
      },
    },
  };
</script>



<style scoped>

  label {
    font-size: 1em;
    margin-bottom: .5em;
  }

  input {
    background-color: inherit;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    margin-bottom: 1em;
  }

  input:focus {
    outline: none;
  }

  .form__item {
    margin-bottom: 1.5em;
  }

</style>
