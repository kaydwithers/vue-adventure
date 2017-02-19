import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  hp: 100,
  charisma: 20,
  wisdom: 2,
  alignment: 'evil',
  weapon: 'fists of anger',
  mood: 'angry',
  gold: 10,
};

export default new Vuex.Store({
  state,
});
