<template>
  <button v-cloak="true" v-on:click="playPause()">{{getButtonName()}}</button>
</template>
<script>
  import SoundService from './SoundService.js'

  export default {
    name : 'sound',
    data() {
      return {
        isStarted : false,
        sound: null
      }
    },
    methods : {
      getButtonName : function() {
        return this.isStarted ? "Stop" : "Start";
      },
      playPause : function() {
        if (!this.sound) {
          this.sound = new SoundService();
        }
        this.isStarted = !this.isStarted;
        if (this.isStarted) {
          this.sound.play();
        } else {
          this.sound.stop();
        }
      }
    }
  }
</script>
<style>

</style>
