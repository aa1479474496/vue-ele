<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      
      
    },
    mounted() {
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    height: 100%;
    color: #2c3e50;
  }
</style>