import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-unused-vars, no-undef, arrow-body-style, no-param-reassign */
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
    counter: 0,
  },

  getters: {
    randomAge: (state) => {
      return state.age;
    },
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    stringCounter: (state) => {
      return `${state.counter} Clicks`;
    },
  },

  mutations: {
    age: (state) => {
      const index = Math.floor(Math.random() * 1000);
      state.age = index;
    },
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});
