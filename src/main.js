// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import store from './store';
import random from './random';

/* eslint-disable no-undef */
export default {
  methods: {
    randomAge() {
      const index = Math.floor(Math.random() * 1000);
      eventBus.$emit('randomAgeFn', $store.state.age = index);
    },
  },
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  random,
  template: '<App/>',
  components: { App },
});

/* eslint-disable no-undef, no-unused-vars, prefer-arrow-callback */
