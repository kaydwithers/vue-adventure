<template>
  <div id="app">

    <navigation></navigation>

    <div class="layout">
      <create></create>
      <hello></hello>

      
      <!--<testing></testing>-->

    </div>
    
  </div>
</template>



<script>
import Navigation from './components/Navigation';
import Create from './components/Create';
import Hello from './components/Hello';
import Testing from './components/Testing';

export default {
  name: 'app',
  components: {
    Navigation,
    Create,
    Hello,
    Testing,
  },
};
</script>



<style>

  :root {
    --blue-light: #89d3fd;
    --blue-dark: #067df7;
    --green: #5ce6cd;
    --grey-light: #ccc;
    --grey-dark: #999;
    --pink: #ff0080;
    --purple-light: #7775A7;
    --purple-dark: #bd10e0;
    --red: #ff0080;
    --yellow: #ffbd2e;
  }

  body {
    background-color: #000;
    color: #ccc;
    font: 14px Menlo, "DejaVu Sans Mono", "Lucida Console", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .layout {
    margin: 0 auto;
    padding-top: 12rem;
    width: 640px;
  }

  #app {

  }

  button {
    cursor: pointer;
    font: inherit;
  }

  a {
    color: inherit;
  }

  p {
    line-height: 2rem;
    margin: 0 0 2rem;
  }

  .db {
    display: block;
  }

  .dib {
    display: inline-block;
  }

  .white {
    color: #fff !important;
  }

  .blue-light {
    color: var(--blue-light) !important;
  }

  .blue-dark {
    color: var(--blue-dark) !important;
  }

  .green {
    color: var(--green) !important;
  }

  .grey-light {
    color: var(--grey-light) !important;
  }

  .grey-dark {
    color: var(--grey-dark) !important;
  }

  .papayawhip {
    color: papayawhip !important;
  }

  .yellow {
    color: var(--yellow) !important;
  }

  .pink {
    color: var(--pink) !important;
  }

  .purple-light {
    color: var(--purple-light) !important;
  }

  .purple-dark {
    color: var(--purple-dark) !important;
  }

  .red {
    color: var(--red) !important;
  }

  .mb0 {
    margin-bottom: 0 !important;
  }

  .mb\.5 {
    margin-bottom: .5rem !important;
  }

  .mb1 {
    margin-bottom: 1rem !important;
  }

  .mb2 {
    margin-bottom: 2rem !important;
  }

  .mb3 {
    margin-bottom: 3rem !important;
  }

  .ml1 {
    margin-left: 1rem !important;
  }

  .mr1 {
    margin-right: 1rem !important;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .tl {
    text-align: left;
  }

  .tr {
    text-align: right;
  }
  
  .btn {
    background-color: transparent;
    border: none;
    color: inherit;
    font-weight: bold;
    padding: .2rem;
  }

    .btn:hover {
      background-color: #ccc;
      color: #000;
    }

    .btn:focus {
      outline: none;
    }

  .btn--p {
    background-color: var(--green);
    border: none;
    color: #000;
  }

    .btn--p:hover {
      background-color: #ccc;
      color: #000;
    }

    .is-active {
      background-color: #ccc;
      color: #000;
    }

  .fade-enter-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>
