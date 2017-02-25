
<template>
  <div id="demo" v-if="$store.state.imActive">

    <transition name="fade">
      <p v-if="showMe">show</p>
    </transition>

    <button @click="showMe = !showMe">
      show
    </button>

    <button @click="hideMe = !hideMe">
      hide
    </button>

    <transition name="fade">
      <p v-if="hideMe">hide</p>
    </transition>

    <pre>{{$data}}</pre>

  </div>
</template>




<script>
  export default {
    name: 'create',
    data() {
      return {
        showMe: false,
        hideMe: true,
      };
    },
    method: {
      hidden() {
        this.showMe = !this.hideMe;
      },
    },
  };
</script>



<style scoped>
  #demo {
    margin-top: 8rem;
  }
</style>
