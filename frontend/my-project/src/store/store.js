import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // universal timeframe (research a good default)
    crimeframe: {
      startDate: null,
      endDate: null
    },
    // list of the charts and graphs we're using on the home/main page
    homeCharts: {
      // example of one
      dataSet: {
        type: null,
        primary: null,
        secondary: null,
        accent: null,
        // parameters
        xAxis: null,
        yAxis: null
      }
    }
  },
  mutations: {
    updateCrimeframe (state, newStart, newEnd) {
      state.crimeframe.startDate = newStart
      state.crimeframe.endDate = newEnd
    },
    formatData (state) {
      // Hopefully we will have already done this in the backend, but incase we havent...
      console.log('formats data for charts/graphs')
    }
  },
  actions: {

  },
  getters: {

  }
})
