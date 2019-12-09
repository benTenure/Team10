<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import moment from "moment";

export default {
  name: 'App',
  data: () => ({
      msg: 'hello',
      moveToStore: {},
      startDefaultDate: null,
      endDefaultDate: null
  }),
  created () {
      // 2 months as a default
      this.startDefaultDate = moment().subtract(2, 'months' ).format('YYYY-MM-DD')
      this.endDefaultDate = moment().format('YYYY-MM-DD')
      this.$store.commit('updateCrimeframe', {startDate: this.startDefaultDate, endDate: this.endDefaultDate})
      this.$store.commit('formatLineGraph')
      this.$store.commit('formatBarGraph')
      this.$store.commit('formatDonut')
      this.$store.commit('formatMapData', {})
      this.intialLoad()
  },
  methods: {
    intialLoad () {
      axios.get('http://54.166.56.44/backend/index.php?action=BetweenDates',
        { params: {
                dateBefore: moment(this.startDefaultDate).format('YYYYMMDD'),
                dateAfter: moment(this.endDefaultDate).format('YYYYMMDD')
            }
        })
        .then(function (response) {
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
