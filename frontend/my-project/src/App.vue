<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data: () => ({
    msg: 'hello',
    moveToStore: {}
  }),
  created () {
    this.$store.commit('updateCrimeframe', {startDate: '2019-10-03', endDate: '2019-10-10'})
    this.$store.commit('formatLineGraph')
    this.$store.commit('formatBarGraph')
    this.$store.commit('formatDonut')
    this.$store.commit('formatMapData', {})
    // this.intialLoad()
  },
  methods: {
    intialLoad () {
      axios.get('http://54.166.56.44/filter/both',
        {
          startDate: '2019-10-03', endDate: '2019-10-10'
        })
        .then(function (response) {
          console.log(response.data)
          this.moveToStore = response.data
          this.$store.state.defaultData = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
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
