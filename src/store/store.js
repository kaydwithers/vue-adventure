import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable arrow-body-style, no-param-reassign */
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
    weapon: '',
    weapons: [
      'The Sceptre of Titans',
      'The Sword of Couronne',
    ],
    armour: '',
    armours: [
      'adamantine',
      'toad leather',
    ],
    mood: 'angry',
    gold: 10,
    title: '',
    titles: [
      'Mr',
      'Mrs',
      'King',
      'Prince',
      'Sir',
    ],
    nameFirst: '',
    namesFirst: [
      'Herbert',
      'Winston',
      'Fredrick',
      'Grumpf',
      'Wilhelm',
      'Theodore',
      'Greasus',
    ],
    nameLast: '',
    namesLast: [
      'Deathrump',
      'Wellington',
      'the Great',
      'Bloodlord',
      'Helldoom',
      'Firerump',
      'the Flatulant IV',
      'Thornheart',
      'Ragefist',
      'Goldtooth',
    ],
    alignment: '',
    alignments: [
      'chaotic good',
      'good',
      'evil',
      'chaotic evil',
      'psychopath',
    ],
    age: '',
    gender: '',
    genders: [
      'male',
      'female',
      'transsexual',
      'transvestite',
      'genderqueer',
      'androgyne',
      'bigender',
      'drag king',
      'drag queen',
    ],
    race: '',
    races: [
      'hobbit',
      'ork',
      'pixie',
      'owlbear',
      'satyr',
      'reptillian',
      'goblin',
      'monopod',
      'giant',
      'undead',
      'human',
    ],
    occupation: '',
    occupations: [
      'knight',
      'wizard',
      'sorcerer',
      'peasent',
      'noble',
    ],
    location: '',
    locations: [
      'Dicklesberry',
      'Another Dimension',
      'Hell',
      'Brobdingnag',
    ],
  },

  getters: {
    randomNameFirst: (state) => {
      return state.nameFirst;
    },
    randomNameLast: (state) => {
      return state.nameLast;
    },
    randomAlignment: (state) => {
      return state.alignment;
    },
    randomAge: (state) => {
      return state.age;
    },
    randomGender: (state) => {
      return state.gender;
    },
    randomRace: (state) => {
      return state.race;
    },
    randomOccupation: (state) => {
      return state.occupation;
    },
    randomLocation: (state) => {
      return state.location;
    },
  },

  mutations: {
    fnNameFirst: (state) => {
      const index = Math.floor(Math.random() * state.namesFirst.length);
      state.nameFirst = state.namesFirst[index];
    },
    fnNameLast: (state) => {
      const index = Math.floor(Math.random() * state.namesLast.length);
      state.nameLast = state.namesLast[index];
    },
    fnAlignment: (state) => {
      const index = Math.floor(Math.random() * state.alignments.length);
      state.alignment = state.alignments[index];
    },
    fnAge: (state) => {
      state.age = Math.floor(Math.random() * 1000);
    },
    fnGender: (state) => {
      const index = Math.floor(Math.random() * state.genders.length);
      state.gender = state.genders[index];
    },
    fnRace: (state) => {
      const index = Math.floor(Math.random() * state.races.length);
      state.race = state.races[index];
    },
    fnOccupation: (state) => {
      const index = Math.floor(Math.random() * state.occupations.length);
      state.occupation = state.occupations[index];
    },
    fnLocation: (state) => {
      const index = Math.floor(Math.random() * state.locations.length);
      state.location = state.locations[index];
    },
  },
});
