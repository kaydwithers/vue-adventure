import Vue from 'vue';
import Vuex from 'vuex';
import enemies from './modules/enemies';
import random from './modules/random';
import statistics from './modules/statistics';
import toggle from './modules/toggle';

import * as mutations from './mutations';

Vue.use(Vuex);

/* eslint-disable arrow-body-style, no-param-reassign */
export default new Vuex.Store({
  mutations,
  modules: {
    enemies,
    random,
    statistics,
    toggle,
  },
});
