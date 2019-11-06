<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    msg: 'hello'
  }),
  created () {
    this.$store.commit('updateCrimeframe', '2019-10-03', '2019-10-10')
    this.$store.commit('formatLineGraph')
    this.$store.commit('formatBarGraph')
    this.$store.commit('formatDonut')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  margin-left: -150px;
}
</style>
