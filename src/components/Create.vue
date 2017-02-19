<template>
  <div class="create">


    <transition name="fade">
      <div class="mb-3" v-if="introduction">

        <p class="mb-3">Select an option.</p>

        <div class="mb-1">
          <button 
            class="btn" 
            v-bind:class="{ ' is-active': characterNew }" 
            @click.prevent="characterNew = !characterNew, characterRandom = characterRandom"
          >
            New Character
          </button>
        </div>

        <div class="mb-1">
          <button 
            class="btn" 
            v-bind:class="{ ' is-active': characterRandom }" 
            @click.prevent="randomName(), randomAlignment(), randomAge(), randomGender(), randomRace(), randomOccupation(), randomLocation(), characterRandom = !characterRandom, characterNew = characterNew"
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
            <span class="grey-dark" v-if="gender === 'male' && occupation === 'knight'"> Sir</span> 
            <span class="grey-dark" v-if="gender === 'female' && occupation === 'knight'"> Dame</span> 
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
              v-model="nameFirst" 
              @keyup.186="randomNameFirst()"
              autofocus 
            />
          </div>

          <!-- Middle Name -->
          <transition name="fade">
            <div class="" v-show="nameFirst">
              <label class="white" for="nameMiddle">
                Middle Name:
              </label>
              <input 
                name="nameMiddle" 
                type="text" 
                v-model="nameMiddle" 
                @keyup.186="randomNameMiddle()"
              >
            </div>
          </transition>

          <!-- Last Name -->
          <transition name="fade">
            <div class="" v-show="nameMiddle">
              <label class="white" for="nameLast">
                Last Name:
              </label>
              <input 
                name="nameLast" 
                type="text" 
                v-model="nameLast" 
                @keyup.186="randomNameLast()"
              >
            </div>
          </transition>

          <!-- Alignment -->
          <transition name="fade">
            <div class="" v-show="nameLast">
              <label class="white" for="alignment">
                Alignment:
              </label>
              <input 
                name="alignment" 
                type="text" 
                v-model="alignment"
                @keyup.186="randomAlignment()"
              >
            </div>
          </transition>

          <!-- Age -->
          <transition name="fade">
            <div class="" v-show="alignment">
              <label class="white" for="age">
                Age:
              </label>
              <input 
                name="age" 
                type="number" 
                v-model="age" 
                @keyup.186="randomAge()"
              >
            </div>
          </transition>

          <!-- Gender -->
          <transition name="fade">
            <div class="" v-show="age">
              <label class="white" for="gender">
                Gender:
              </label>
              <input 
                name="gender" 
                type="text" 
                v-model="gender" 
                @keyup.186="randomGender()"
              >
            </div>
          </transition>

          <!-- Race -->
          <transition name="fade">
            <div class="" v-show="gender">
              <label class="white" for="race">
                Race:
              </label>
              <input 
                name="race" 
                type="text" 
                v-model="race" 
                @keyup.186="randomRace()"
              >
            </div>
          </transition>

          <!-- Occupation -->
          <transition name="fade">
            <div class="" v-show="race">
              <label class="white" for="occupation">
                Class:
              </label>
              <input 
                name="occupation" 
                type="text" 
                v-model="occupation"
                @keyup.186="randomOccupation()"
              >
            </div>
          </transition>

          <!-- Location -->
          <transition name="fade">
            <div class="mb-3" v-show="occupation">
              <label class="white" for="location">
                Where are you from?:
              </label>
              <input 
                name="location" 
                type="text" 
                v-model="location"
                @keyup.186="randomLocation()"
              >
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

        <p class="white">
          <b>
            Greetings
            <span class="grey-dark" v-if="gender === 'male' && occupation === 'knight'"> Sir</span> 
            <span class="grey-dark" v-if="gender === 'female' && occupation === 'knight'"> Dame</span> 
            <span class="pink">{{ name }}</span> 
            <span class="purple-light" v-show="alignment">the {{ alignment }}</span> 
            <span class="yellow" v-show="age">{{ age }} year old</span> 
            <span class="red">{{ gender }}</span> 
            <span class="blue-dark">{{ race }}</span> 
            <span class="purple-dark">{{ occupation }}</span> 
            <span class="grey-dark" v-show="location">from {{ location }},</span>
            <span v-show="location">you are very weak, very slow and butt ugly.</span>  
          </b>
        </p>

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

        <p class="mb-3">  
          You pick up and inspect a maggot infested piece of meat.
        </p>

        <button 
          class="btn  db  mb-1" 
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
        <p>To be continued.</p>

        <button 
          class="btn  btn--p" 
          @click.prevent="storyOne = !storyOne, storyTwo = !storyTwo, introduction = introduction"
        >
          Back to start
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
        name: '',
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
      randomName() {
        const names = [
          'Dusty',
          'Tiberius Facebutt',
          'Herbert Deathrump Flamebeard',
          'Bloodnutt the Flatulant IV',
          'Grumpf the Angry',
          'Prince Ludwig the Indestructible',
          'Weasley Wigglebottom',
          'Theodore Thornheart',
        ];
        const index = Math.floor(Math.random() * names.length);
        this.name = names[index];
      },
      randomNameFirst() {
        const namesFirst = [
          'Dusty',
          'Tiberius',
          'Herbert',
          'Grumpf',
          'Prince',
          'Weasley',
          'Winston',
        ];
        const index = Math.floor(Math.random() * namesFirst.length);
        this.nameFirst = namesFirst[index];
      },
      randomNameMiddle() {
        const namesMiddle = [
          'the Flatulant',
          'Ludwig',
          'Deathrump',
        ];
        const index = Math.floor(Math.random() * namesMiddle.length);
        this.nameMiddle = namesMiddle[index];
      },
      randomNameLast() {
        const namesLast = [
          'Deathrump',
          'Wellington',
          'IV',
          'Thornheart',
          'Flamebeard',
          'Facebutt',
          'the Angry',
        ];
        const index = Math.floor(Math.random() * namesLast.length);
        this.nameLast = namesLast[index];
      },
      randomAlignment() {
        const alignments = [
          'good',
          'evil',
          'really evil',
          'psychopathic',
        ];
        const index = Math.floor(Math.random() * alignments.length);
        this.alignment = alignments[index];
      },
      randomAge() {
        const index = Math.floor(Math.random() * 1000);
        this.age = index;
      },
      randomGender() {
        const genders = [
          'male',
          'female',
          'transsexual',
          'bigender',
          'genderqueer',
          'androgyne',
          'drag king',
          'drag queen',
        ];
        const index = Math.floor(Math.random() * genders.length);
        this.gender = genders[index];
      },
      randomRace() {
        const races = [
          'hobbit',
          'ork',
          'pixie',
          'owlbear',
          'satyr',
          'reptillian',
          'goblin',
          'monopod',
          'giant',
          'hobbit',
          'kerbal',
          'undead',
        ];
        const index = Math.floor(Math.random() * races.length);
        this.race = races[index];
      },
      randomOccupation() {
        const occupations = [
          'knight',
          'wizard',
          'sorcerer',
          'peasent',
        ];
        const index = Math.floor(Math.random() * occupations.length);
        this.occupation = occupations[index];
      },
      randomLocation() {
        const locations = [
          'King\'s landing',
          'Brobdingnag',
          'Another Dimension',
          'Hell',
        ];
        const index = Math.floor(Math.random() * locations.length);
        this.location = locations[index];
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
