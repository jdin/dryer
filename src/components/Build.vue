<template>
    <div>{{ msg }}</div>
</template>

<script>
  export default {
    name : 'build',
    data() {
      return {
        msg : 'build : ' + process.env.build
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  div {
    font-weight: normal;
    font-size: small;
  }
</style>
