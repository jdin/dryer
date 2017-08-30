<template>
  <button v-cloak="true" v-on:click="playPause()">{{getButtonName()}}</button>
</template>
<script>
  import SoundService from './SoundService.js'

  let sound = new SoundService();

  export default {
    name : 'sound',
    data() {
      return {
        isStarted : false
      }
    },
    methods : {
      getButtonName : function() {
        return this.isStarted ? "Stop" : "Start";
      },
      playPause : function() {
        this.isStarted = !this.isStarted;
        if (this.isStarted) {
          sound.play();
        } else {
          sound.stop();
        }
      }
    }
  }
</script>
<style>
  button {
    font-size: 25px;
  }
</style>
