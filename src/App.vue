<template>
  <div id="app">
    <header>
      <span>Sleep Sound</span>
    </header>
    <main>
      <!--<img src="./assets/logo.png" alt="Vue.js PWA">-->
      <sound></sound>
    </main>
    <footer>
      <span class="left">Based on <a href="https://codepen.io/AngelaVelasquez/pen/cihEG">codepen</a></span>
      <build class="right"></build>
    </footer>
  </div>
</template>

<script>
  import Build from './components/Build.vue'
  import Sound from './components/Sound.vue'

  export default {
    name : 'app',
    components : {
      Build,
      Sound
    }
  }
</script>

<style>
  html, body, #app {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #fff;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    display: flex;
    flex-direction: column;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }

  main {
    flex: auto;
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin: auto;
  }

  main a {
    margin: auto;
  }

  footer > .left {
    text-align: left;
  }

  footer > .right {
    text-align: right;
  }

  footer {
    display: flex;
    justify-content: space-between;
    height: 15px;
    padding: 10px;
    font-weight: lighter;
    font-size: small;
  }
</style>
