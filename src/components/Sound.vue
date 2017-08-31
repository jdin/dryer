<template>

  <a v-on:click="playPause()" class="btn-round"><span>{{getButtonName()}}</span></a>

</template>
<script>
  import SoundService from './SoundService.js'
  import NoSleep from 'nosleep.js';

  let sound = new SoundService();
  let nosleep = new NoSleep();

  export default {
    name : 'sound',
    data() {
      return {
        isStarted : false
      }
    },
    methods : {
      getButtonName : function() {
        return this.isStarted ? "-" : "+";
      },
      playPause : function() {
        this.isStarted = !this.isStarted;
        if (this.isStarted) {
          nosleep.enable();
          sound.play();
        } else {
          nosleep.disable();
          sound.stop();
        }
      }
    }
  }
</script>
<style>
  .btn-round {
    background-color: #d23f31;
    border-radius: 999em;
    width: 56px;
    height: 56px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    line-height: 1;
    font-size: 36px;
    position: relative;
    cursor: pointer;
  }

  .btn-round span {
    position: absolute;
    left: 0;
    top: 50%;
    height: 100%;
    width: 100%;
    text-align: center;
    margin-top: -19px;
    color: #FFF;
  }
</style>
