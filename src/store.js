import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    start: true,
    characterNew: false,
    characterRandom: false,
    storyOne: false,
    storyTwo: false,
    battle: false,
    death: false,
    hp: 100,
    charisma: 20,
    wisdom: 2,
    strength: 2,
    weapon: 'fists of anger',
    mood: 'angry',
    gold: 10,
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
  },
});
