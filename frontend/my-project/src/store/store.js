import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // universal timeframe (research a good default)
    chartExampleData: [
      {
        'crimedate': '2019-10-05T00:00:00.000',
        'crimetime': '06:21:00',
        'crimecode': '6G',
        'location': '2800 GREENMOUNT AVE',
        'description': 'LARCENY',
        'inside_outside': 'I',
        'weapon': 'NA',
        'post': '513',
        'district': 'NORTHERN',
        'neighborhood': 'HARWOOD',
        'longitude': '-76.6094760000',
        'latitude': '39.3230580000',
        'premise': 'RESTAURANT',
        'total_incidents': '1'
      },
      {
        'crimedate': '2019-10-05T00:00:00.000',
        'crimetime': '22:00:00',
        'crimecode': '5A',
        'location': '2000 W NORTH AVE',
        'description': 'BURGLARY',
        'inside_outside': 'I',
        'weapon': 'NA',
        'post': '741',
        'district': 'WESTERN',
        'neighborhood': 'EASTERWOOD',
        'longitude': '-76.6502290000',
        'latitude': '39.3096180000',
        'premise': 'ROW/TOWNHOUSE-OCC',
        'vri_name1': 'Western',
        'total_incidents': '1'
      },
      {
        'crimedate': '2019-10-05T00:00:00.000',
        'crimetime': '20:00:00',
        'crimecode': '4E',
        'location': '2500 DRUID PARK DR',
        'description': 'COMMON ASSAULT',
        'inside_outside': 'I',
        'weapon': 'NA',
        'post': '612',
        'district': 'NORTHWEST',
        'neighborhood': 'PARK CIRCLE',
        'longitude': '-76.6566890000',
        'latitude': '39.3265610000',
        'premise': 'ROW/TOWNHOUSE-OCC',
        'total_incidents': '1'
      },
      {
        'crimedate': '2019-10-04T00:00:00.000',
        'crimetime': '06:21:00',
        'crimecode': '6G',
        'location': '2800 GREENMOUNT AVE',
        'description': 'LARCENY',
        'inside_outside': 'I',
        'weapon': 'NA',
        'post': '513',
        'district': 'NORTHERN',
        'neighborhood': 'HARWOOD',
        'longitude': '-76.6094760000',
        'latitude': '39.3230580000',
        'premise': 'RESTAURANT',
        'total_incidents': '1'
      },
      {
        'crimedate': '2019-10-07T00:00:00.000',
        'crimetime': '22:00:00',
        'crimecode': '5A',
        'location': '2000 W NORTH AVE',
        'description': 'BURGLARY',
        'inside_outside': 'I',
        'weapon': 'NA',
        'post': '741',
        'district': 'WESTERN',
        'neighborhood': 'EASTERWOOD',
        'longitude': '-76.6502290000',
        'latitude': '39.3096180000',
        'premise': 'ROW/TOWNHOUSE-OCC',
        'vri_name1': 'Western',
        'total_incidents': '1'
      },
      {
        'crimedate': '2019-10-08T00:00:00.000',
        'crimetime': '20:00:00',
        'crimecode': '4E',
        'location': '2500 DRUID PARK DR',
        'description': 'COMMON ASSAULT',
        'inside_outside': 'I',
        'weapon': 'NA',
        'post': '612',
        'district': 'NORTHWEST',
        'neighborhood': 'PARK CIRCLE',
        'longitude': '-76.6566890000',
        'latitude': '39.3265610000',
        'premise': 'ROW/TOWNHOUSE-OCC',
        'total_incidents': '1'
      },
      {
        'crimedate': '2019-10-07T00:00:00.000',
        'crimetime': '06:21:00',
        'crimecode': '6G',
        'location': '2800 GREENMOUNT AVE',
        'description': 'LARCENY',
        'inside_outside': 'I',
        'weapon': 'NA',
        'post': '513',
        'district': 'NORTHERN',
        'neighborhood': 'HARWOOD',
        'longitude': '-76.6094760000',
        'latitude': '39.3230580000',
        'premise': 'RESTAURANT',
        'total_incidents': '1'
      },
      {
        'crimedate': '2019-10-06T00:00:00.000',
        'crimetime': '22:00:00',
        'crimecode': '5A',
        'location': '2000 W NORTH AVE',
        'description': 'BURGLARY',
        'inside_outside': 'I',
        'weapon': 'NA',
        'post': '741',
        'district': 'WESTERN',
        'neighborhood': 'EASTERWOOD',
        'longitude': '-76.6502290000',
        'latitude': '39.3096180000',
        'premise': 'ROW/TOWNHOUSE-OCC',
        'vri_name1': 'Western',
        'total_incidents': '1'
      },
      {
        'crimedate': '2019-10-06T00:00:00.000',
        'crimetime': '20:00:00',
        'crimecode': '4E',
        'location': '2500 DRUID PARK DR',
        'description': 'COMMON ASSAULT',
        'inside_outside': 'I',
        'weapon': 'NA',
        'post': '612',
        'district': 'NORTHWEST',
        'neighborhood': 'PARK CIRCLE',
        'longitude': '-76.6566890000',
        'latitude': '39.3265610000',
        'premise': 'ROW/TOWNHOUSE-OCC',
        'total_incidents': '1'
      }
    ],
    crimeframe: {
      startDate: null,
      endDate: null
    },
    weaponTypes: ['NA', 'FIREARM', 'OTHER', 'KNIFE', 'HANDS', 'FIRE'],
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
