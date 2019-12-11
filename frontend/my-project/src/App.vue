<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import moment from "moment"

export default {
  name: 'App',
  data: () => ({
      msg: 'hello',
      startDefaultDate: null,
      endDefaultDate: null,
      sortBy: {
          weaponType: null,
          crimecode: null,
          address: null,
          inside_outside: null,
          zip: null,
          district: null,
          neighborhood: null,
          premise: null}
  }),
  created () {
      // 3 months as a default
      this.startDefaultDate = moment().subtract(3, 'months' ).format('YYYY-MM-DD')
      this.endDefaultDate = moment().format('YYYY-MM-DD')
      this.$store.commit('updateCrimeframe', {startDate: this.startDefaultDate, endDate: this.endDefaultDate})
      this.$store.commit('formatLineGraph', this.sortBy)
      this.$store.commit('formatBarGraph', this.sortBy)
      this.$store.commit('formatDonut', this.sortBy)
      this.$store.commit('formatMapData', this.sortBy)
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
              this.setToStore(data)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      setToStore (data) {
          this.$store.state.defaultData = data
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
