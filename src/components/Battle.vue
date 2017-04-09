
<template>

  <transition name="fade">
    <section v-if="$store.state.toggle.battle">

      <div class="ta-c  mb-3">
        <button 
          class="btn  btn--p"
          @click="battle()" 
          :disabled="$store.state.enemies.enemyHp < 20 || $store.state.statistics.hp < 20"
        >
          Commence battle
        </button>
      </div>

      <div class="mb-3">
        <div v-for="attack in attacks">
          <p>{{attack.message}}</p>
        </div>
      </div>

      <transition name="fade">
        <div class="tt-u  mb-3">
          <h3 v-if="opponentTwo.hp <= 0 && opponentOne.hp > 0">
            <span class="red">{{$store.state.enemies.enemyNameFirst}} {{$store.state.enemies.enemyNameLast}}</span> died from <span class="red">a heartattack!</span>
          </h3>
          <h3 v-else-if="opponentOne.hp <= 0 && opponentTwo.hp > 0">
            {{$store.state.random.nameFirst}} {{$store.state.random.nameLast}} died!
          </h3>
          <h3 v-else-if="$store.state.statistics.hp <= 0 && $store.state.enemies.enemyHp <= 0">
            Everyone died!
          </h3>

          <button 
            v-show="$store.state.statistics.hp <= 0 || opponentTwo.hp <= 0" 
            class="btn  btn--p  d-b  mb-1" 
            @click.prevent="
              $store.state.toggle.storyFour = !$store.state.toggle.storyFour, 
              $store.state.toggle.battle = !$store.state.toggle.battle
          ">
            Next
          </button>
        </div>
      </transition>

      <!--<pre>{{$data}}</pre>-->

    </div>
  </section>

</template>



<script>
  export default {
    data() {
      return {
        attacks: [],
        opponentOne: {
          name: '',
          hp: '',
          attack: '',
        },
        opponentTwo: {
          name: '',
          hp: '',
          attack: '',
        },
      };
    },
    methods: {
      battle() {
        /* eslint-disable max-len, prefer-template */
        this.opponentOne.name = this.$store.state.random.nameFirst + ' ' + this.$store.state.random.nameLast;
        this.opponentOne.hp = this.$store.state.statistics.hp;
        this.opponentOne.attack = this.$store.state.statistics.attack;

        this.opponentTwo.name = this.$store.state.enemies.enemyNameFirst + ' ' + this.$store.state.enemies.enemyNameLast;
        this.opponentTwo.hp = this.$store.state.enemies.enemyHp;
        this.opponentTwo.attack = this.$store.state.enemies.enemyAttack;

        const timer = setInterval(() => {
          this.randomMove(this.opponentOne, this.opponentTwo);
          this.randomMove(this.opponentTwo, this.opponentOne);
          this.opponentOne.attack = Math.floor(Math.random() * 6) + 1;
          this.opponentTwo.attack = Math.floor(Math.random() * 6) + 1;
          if (this.opponentOne.hp <= 0 || this.opponentTwo.hp <= 0) {
            clearInterval(timer);
          }
        }, 500);
      },
      randomMove(attacker, defender) {
        const moveTypes = ['attack', 'block', 'spell'];
        const moveTypeIndex = Math.floor(Math.random() * moveTypes.length);
        const moveType = moveTypes[moveTypeIndex];
        const d20 = Math.floor(Math.random() * 20) + 1;
        const d100 = Math.floor(Math.random() * 100) + 1;
        const dice = moveType === 'spell' ? d100 : d20;
        this[moveType](dice, attacker, defender);
      },
      /* eslint-disable no-param-reassign */
      attack(d20, attacker, defender) {
        if (d20 === 1) {
          this.attacks.push({ message: `${attacker.name} misses, is knocked off balance, falls backward and soils themself!` });
        } else if (d20 >= 2 && d20 <= 19) {
          defender.hp -= attacker.attack;
          this.attacks.push({ message: `${attacker.name} strikes ${defender.name} with ${attacker.weapon} for ${attacker.attack} damage.` });
        } else {
          defender.hp -= attacker.attack * 2;
          this.attacks.push({ message: `${defender.name} loses their right arm. An artery has been opened by the strike and a sensory nerve has been severed! ${attacker.name} equips the right arm flails it around wildly and attacks ${defender.name} for ${attacker.attack * 2} damage!` });
        }
      },
      block(d20, attacker, defender) {
        if (d20 === 1) {
          this.attacks.push({ message: `${attacker.name} fails to block and takes ${attacker.attack} damage.` });
        } else if (d20 >= 2 && d20 <= 19) {
          defender.hp -= attacker.attack;
          this.attacks.push({ message: `${defender.name} blocks ${attacker.name}'s attack.` });
        } else {
          defender.hp -= attacker.attack * 2;
          this.attacks.push({ message: `${attacker.name}'s attack is deflected by ${defender.name}'s small ${defender.armour} breastplate!` });
        }
      },
      spell(d100, attacker, defender) {
        if (d100 === 1) {
          defender.hp -= attacker.attack;
          this.attacks.push({ message: `${defender.name} casts polymorph on themself, turns into a sheep and bites ${attacker.name} for ${attacker.attack} damage!` });
        } else if (d100 >= 2 && d100 <= 5) {
          defender.hp -= attacker.attack;
          this.attacks.push({ message: `${attacker.name} casts wild magic. A stray yak cow tumbles from the sky and lands on ${attacker.name} for ${attacker.attack} damage!` });
        } else if (d100 >= 6 && d100 <= 7) {
          this.attacks.push({ message: `${attacker.name} casts wild magic and turns a vibrant shade of blue!` });
        } else if (d100 >= 8 && d100 <= 9) {
          this.attacks.push({ message: `${attacker.name} vomits.` });
        } else if (d100 >= 10 && d100 <= 19) {
          this.attacks.push({ message: `${attacker.name} casts confusion centered on themself!` });
        } else if (d100 >= 20 && d100 <= 29) {
          this.attacks.push({ message: `${attacker.name} casts wild magic and grows an eternal flaming beard!` });
        } else if (d100 >= 30 && d100 <= 39) {
          this.attacks.push({ message: `${attacker.name} casts levitate on themself and can only shout when they speak!` });
        } else if (d100 >= 40 && d100 <= 49) {
          this.attacks.push({ message: `${attacker.name} casts wild magic and becomes 80 years older!` });
        } else if (d100 >= 50 && d100 <= 59) {
          this.attacks.push({ message: `${attacker.name} casts wild magic. Illusory butterflies and flower petals flutter in the air!` });
        } else if (d100 >= 60 && d100 <= 69) {
          this.attacks.push({ message: `${attacker.name} casts wild magic and is transported to the Astral Plane until the end of the spells duration!` });
        } else if (d100 >= 70 && d100 <= 79) {
          this.attacks.push({ message: `${attacker.name} casts wild magic and is immune to being inotoxicated by alchohol for the next 30 days!` });
        } else if (d100 >= 80 && d100 <= 89) {
          this.attacks.push({ message: `${attacker.name} casts friends on ${defender.name}. It is ineffective!` });
        } else if (d100 >= 90 && d100 <= 99) {
          defender.hp -= attacker.attack;
          this.attacks.push({ message: `${attacker.name} casts magic missile. ${defender.name} takes ${attacker.attack} fire damage!` });
        } else {
          defender.hp -= attacker.attack;
          this.attacks.push({ message: `${attacker.name} casts polymorph. ${defender.name} turns into a sheep and bites ${attacker.name} for ${defender.attack} damage!` });
        }
      },
    },
  };
</script>



<style>
</style>
