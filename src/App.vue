<template>
  <div id="app">

    <navigation />

    <div class="layout">
      <start />
      <characterNew />
      <characterRandom />
      <storyOne />
      <hello />
      <battle />

      <!--<testing />-->

    </div>
    
  </div>
</template>



<script>
  import Navigation from './components/Navigation';
  import Start from './components/Start';
  import CharacterNew from './components/CharacterNew';
  import CharacterRandom from './components/CharacterRandom';
  import StoryOne from './components/StoryOne';
  import Hello from './components/Hello';
  import Battle from './components/Battle';
  import Testing from './components/Testing';

  export default {
    name: 'app',
    components: {
      Navigation,
      Start,
      CharacterNew,
      CharacterRandom,
      StoryOne,
      Hello,
      Battle,
      Testing,
    },
  };
</script>



<style>

  /* Settings */
  :root {
    --global-font-size: 14px;
    --global-line-height: 2;

    --spacing:         1em;
    --spacing-medium:  calc(var(--spacing) * 2);
    --spacing-large:   calc(var(--spacing) * 3);

    --blue-light:   #89d3fd;
    --blue-dark:    #067df7;
    --green:        #5ce6cd;
    --grey-light:   #ccc;
    --grey-dark:    #999;
    --pink:         #ff0080;
    --purple-light: #7775A7;
    --purple-dark:  #bd10e0;
    --red:          #ff0080;
    --yellow:       #ffbd2e;
  }



  /* Generic */
  body {
    background-color: #000;
    color: #ccc;
    font-family: Menlo, "DejaVu Sans Mono", "Lucida Console", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--global-font-size);
    line-height: var(--global-line-height);
  }

  .layout {
    margin: 0 auto;
    padding-top: 12em;
    width: 640px;
  }

  a {
    color: inherit;
  }

  p {
    margin: 0 0 1em;
  }



  /* Colours */
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



  /* Spacing */
  .mb-0 {
    margin-bottom: 0;
  }

  .mb-1 {
    margin-bottom: var(--spacing);
  }

  .mb-2 {
    margin-bottom: var(--spacing-medium);
  }

  .mb-3 {
    margin-bottom: var(--spacing-large);
  }

  .ml-1 {
    margin-left: var(--spacing);
  }

  .mr-1 {
    margin-right: var(--spacing);
  }



  /* Utilities */
  .d-b {
    display: block;
  }

  .d-ib {
    display: inline-block;
  }
   
  .f-l {
    float: left;
  }

  .f-r {
    float: right;
  }

  .tt-u {
    text-transform: uppercase;
  }

  .ta-l {
    text-align: left;
  }

  .ta-r {
    text-align: right;
  }



  /* Buttons */
  .btn {
    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    font-weight: bold;
    padding: 0 .5em;
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



  /* Transition */
  .fade-enter-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }



  /* Input */
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
