<template>
  <div class="battle">

        <div class="ta-c  mb-3">
          <button 
            class="btn  btn--p"
            @click="battle()" 
            :disabled="opponentOne.hp < 20 || opponentTwo.hp < 20"
          >
            Commence battle
          </button>
        </div>

        <!--
        <transition name="fade">
          <div class="ta-c  mb-3" v-show="opponentOne.hp <= 0 || opponentTwo.hp <= 0">
            <button @click="reset()">
              Reset
            </button>
          </div>
        </transition>
        -->

        <p class="good  mb-0">{{opponentOne.name}}</p> 
        <p class="mb-0">Attack: {{opponentOne.attack}}</p>
        <p class="mb-0">HP: {{ $store.state.hp }}</p>
        <p class="mb-0">Alignment: {{opponentOne.alignment}}</p>
        <p>Melee Weapon: {{opponentOne.weapon}}</p>

        <p class="evil  mb-0">{{opponentTwo.name}}</p> 
        <p class="mb-0">Attack: {{opponentTwo.attack}}</p>
        <p class="mb-0">HP: {{opponentTwo.hp}}</p>
        <p class="mb-0">Alignment: {{opponentTwo.alignment}}</p>
        <p class="mb-0">Melee Weapon: {{opponentTwo.weapon}}</p>

        <div class="tt-u  mb-3">
          <h3 v-if="opponentTwo.hp <= 0 && opponentOne.hp > 0">{{ opponentTwo.name }} died</h3>
          <h3 v-else-if="opponentOne.hp <= 0 && opponentTwo.hp > 0">{{ opponentOne.name }} died</h3>
          <h3 v-else-if="opponentOne.hp <= 0 && opponentTwo.hp <= 0">Everyone died</h3>
        </div>

        <div v-for="attack in attacks">
          <p>{{ attack.message }}</p>
        </div>

        <!--<pre>{{$data}}</pre>-->

  </div>
</template>



<script>
  export default {
    name: 'create',
    data() {
      return {
        attacks: [],
        opponentOne: {
          name: 'Wilhelm Helldoom Bloodlord',
          hp: 20,
          attack: 3,
          alignment: 'Good',
          weapon: 'The Sword of Couronne',
          armour: 'adamantine',
        },
        opponentTwo: {
          name: 'Greasus Goldtooth',
          hp: 20,
          attack: 3,
          alignment: 'Chaotic evil',
          weapon: 'The Sceptre of Titans',
          armour: 'toad leather',
        },
      };
    },
    methods: {
      battle() {
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
      attack(d20, attacker, defender) {
        if (d20 === 1) {
          this.attacks.push({ message: `${attacker.name} misses, is knocked off balance, falls backward and soils themself!` });
        } else if (d20 >= 2 && d20 <= 19) {
          this.opponentOne.hp -= this.opponentTwo.attack;
          this.attacks.push({ message: `${attacker.name} strikes ${defender.name} with ${attacker.weapon} for ${attacker.attack} damage.` });
        } else {
          this.opponentOne.hp -= this.opponentTwo.attack * 2;
          this.attacks.push({ message: `${defender.name} loses their right arm. An artery has been opened by the strike and a sensory nerve has been severed! ${attacker.name} equips the right arm flails it around wildly and attacks ${defender.name} for ${attacker.attack * 2} damage!` });
        }
      },
      block(d20, attacker, defender) {
        if (d20 === 1) {
          this.attacks.push({ message: `${attacker.name} fails to block and takes ${attacker.attack} damage.` });
        } else if (d20 >= 2 && d20 <= 19) {
          this.opponentOne.hp -= this.opponentTwo.attack;
          this.attacks.push({ message: `${defender.name} blocks ${attacker.name}'s attack.` });
        } else {
          this.opponentOne.hp -= this.opponentTwo.attack * 2;
          this.attacks.push({ message: `${attacker.name}'s attack is deflected by ${defender.name}'s small ${defender.armour} breastplate!` });
        }
      },
      spell(d100, attacker, defender) {
        if (d100 === 1) {
          this.opponentOne.hp -= this.opponentTwo.attack;
          this.attacks.push({ message: `${defender.name} casts polymorph on themself, turns into a sheep and bites ${attacker.name} for ${attacker.attack} damage!` });
        } else if (d100 >= 2 && d100 <= 5) {
          this.opponentOne.hp -= this.opponentTwo.attack;
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
          this.opponentOne.hp -= this.opponentTwo.attack;
          this.attacks.push({ message: `${attacker.name} casts magic missile. ${defender.name} takes ${attacker.attack} fire damage!` });
        } else {
          this.opponentOne.hp -= this.opponentTwo.attack;
          this.attacks.push({ message: `${attacker.name} casts polymorph. ${defender.name} turns into a sheep and bites ${attacker.name} for ${defender.attack} damage!` });
        }
      },
    },
  };
</script>



<style scoped>

</style>
