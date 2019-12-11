import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment"

Vue.use(Vuex)

const state = {
  // universal timeframe (research a good default)
  defaultData: [
    {
      'id': 0,
      'crimedate': '2019-10-05T00:00:00.000',
      'crimetime': '07:00:00',
      'crimecode': '6G',
      'location': '2800 GREENMOUNT AVE',
      'description': 'LARCENY',
      'inside_outside': 'I',
      'weapon': 'KNIFE',
      'post': '513',
      'district': 'NORTHERN',
      'neighborhood': 'HARWOOD',
      'longitude': -76.6094760000,
      'latitude': 39.3230580000,
      'premise': 'RESTAURANT',
      'total_incidents': '1'
    },
    {
      'id': 1,
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
      'longitude': -76.6502290000,
      'latitude': 39.3096180000,
      'premise': 'ROW/TOWNHOUSE-OCC',
      'vri_name1': 'Western',
      'total_incidents': '1'
    },
    {
      'id': 2,
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
      'longitude': -76.6566890000,
      'latitude': 39.3265610000,
      'premise': 'ROW/TOWNHOUSE-OCC',
      'total_incidents': '1'
    },
    {
      'id': 3,
      'crimedate': '2019-10-04T00:00:00.000',
      'crimetime': '06:00:00',
      'crimecode': '6G',
      'location': '2800 GREENMOUNT AVE',
      'description': 'LARCENY',
      'inside_outside': 'I',
      'weapon': 'KNIFE',
      'post': '513',
      'district': 'NORTHERN',
      'neighborhood': 'HARWOOD',
      'longitude': -76.6004760000,
      'latitude': 39.3200580000,
      'premise': 'RESTAURANT',
      'total_incidents': '1'
    },
    {
      'id': 4,
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
      'longitude': -76.6502290000,
      'latitude': 39.3096180000,
      'premise': 'ROW/TOWNHOUSE-OCC',
      'vri_name1': 'Western',
      'total_incidents': '1'
    },
    {
      'id': 5,
      'crimedate': '2019-10-08T00:00:00.000',
      'crimetime': '20:00:00',
      'crimecode': '4E',
      'location': '2500 DRUID PARK DR',
      'description': 'COMMON ASSAULT',
      'inside_outside': 'I',
      'weapon': 'FIREARM',
      'post': '612',
      'district': 'NORTHWEST',
      'neighborhood': 'PARK CIRCLE',
      'longitude': -76.6768900000,
      'latitude': 39.3285610000,
      'premise': 'ROW/TOWNHOUSE-OCC',
      'total_incidents': '1'
    },
    {
      'id': 6,
      'crimedate': '2019-10-07T00:00:00.000',
      'crimetime': '16:00:00',
      'crimecode': '6G',
      'location': '2800 GREENMOUNT AVE',
      'description': 'LARCENY',
      'inside_outside': 'I',
      'weapon': 'NA',
      'post': '513',
      'district': 'NORTHERN',
      'neighborhood': 'HARWOOD',
      'longitude': -76.6394760000,
      'latitude': 39.3260580000,
      'premise': 'RESTAURANT',
      'total_incidents': '1'
    },
    {
      'id': 7,
      'crimedate': '2019-10-06T00:00:00.000',
      'crimetime': '23:00:00',
      'crimecode': '5A',
      'location': '2000 W NORTH AVE',
      'description': 'BURGLARY',
      'inside_outside': 'I',
      'weapon': 'NA',
      'post': '741',
      'district': 'WESTERN',
      'neighborhood': 'EASTERWOOD',
      'longitude': -76.6102290000,
      'latitude': 39.326180000,
      'premise': 'ROW/TOWNHOUSE-OCC',
      'vri_name1': 'Western',
      'total_incidents': '1'
    },
    {
      'id': 8,
      'crimedate': '2019-10-06T00:00:00.000',
      'crimetime': '18:00:00',
      'crimecode': '4E',
      'location': '2500 DRUID PARK DR',
      'description': 'COMMON ASSAULT',
      'inside_outside': 'I',
      'weapon': 'NA',
      'post': '612',
      'district': 'NORTHWEST',
      'neighborhood': 'PARK CIRCLE',
      'longitude': -76.6516890000,
      'latitude': 39.3465610000,
      'premise': 'ROW/TOWNHOUSE-OCC',
      'total_incidents': '1'
    }
  ],
  crimeframe: [],
  crimeframeRange: {},
  // TODO: broad filters (location, district, postal) vs specific (postal: 21012, district: Northern)
  // fill this later when this is more sorted
  filterTypes: [],
  districts: ['CENTRAL', 'EASTERN', 'NORTHEAST', 'NORTHERN', 'NORTHWEST', 'SOUTHEAST', 'SOUTHERN', 'SOUTHWEST', 'UNKNOWN', 'WESTERN'],
  weaponTypes: ['NA', 'FIREARM', 'OTHER', 'KNIFE', 'HANDS', 'FIRE'],
  hours: ['00:00:00', '01:00:00', '02:00:00', '03:00:00', '04:00:00', '05:00:00', '06:00:00', '07:00:00', '08:00:00', '09:00:00', '10:00:00',
    '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '18:00:00', '19:00:00', '20:00:00', '21:00:00', '22:00:00',
    '23:00:00'],
  mapData: [],
  lineChart: {
    timeframe: [],
    dataFilter: null,
    amountArray: []
  },
  doughnutGraph: {
    timeframe: [],
    // Only can use broad filter
    dataFilter: null,
    dataFilterTypes: null,
    amountArray: []
  },
  barGraph: {
    timeframe: [],
    // Only can use broad filter
    dataFilter: null,
    dataFilterTypes: null,
    amountArray: []
  }
}

export default new Vuex.Store({
  state,
  mutations: {
    updateCrimeframe (state, betweenDates) {
      // state.crimeframe.startDate = newStart
      // state.crimeframe.endDate = newEnd
      state.crimeframe = []
      let currDate = moment(betweenDates.startDate)
      while (currDate <= moment(betweenDates.endDate)) {
        state.crimeframe.push(moment(currDate).format('YYYY-MM-DD'))
        currDate = moment(currDate).add(1,'days')
      }
      state.crimeframeRange = {startDate: moment(betweenDates.startDate), endDate: moment(betweenDates.endDate)}
    },
    formatMapData (state, sortBy) {
      if (state.mapData.length === 0) {
        for (let crime of state.defaultData) {
          let value = {
            id: crime.id,
            crimedate: crime.crimedate,
            crimetime: crime.crimetime,
            crimecode: crime.crimecode,
            weapon: crime.weapon,
            coords: [crime.longitude, crime.latitude]
          }
          state.mapData.push(value)
        }
      } else {
        state.mapData = []
        state.defaultData.forEach(function(crime) {
          // by date
          if (moment(crime.crimedate).isBetween(state.crimeframeRange.startDate, state.crimeframeRange.endDate, null, '[]')) {
            // TODO: move this out into it's own function when sorting multiple charts/graphs
            // checking the object 'sortBy' for which other values we can sort by
            // ex: { crimecode: null, weaponType: 'KNIFE', zipCode: null, ...} -> sort by weapons{KNIFE}
            if (sortBy.crimecode !== null) {
              if(crime.crimecode === sortBy.crimecode){
                let value = {
                  id: crime.id,
                  crimedate: crime.crimedate,
                  crimetime: crime.crimetime,
                  crimecode: crime.crimecode,
                  weapon: crime.weapon,
                  coords: [crime.longitude, crime.latitude]
                }
                state.mapData.push(value)
              }
            } else if (sortBy.weaponType !== null) {
              if(crime.weapon === sortBy.weaponType){
                let value = {
                  id: crime.id,
                  crimedate: crime.crimedate,
                  crimetime: crime.crimetime,
                  crimecode: crime.crimecode,
                  weapon: crime.weapon,
                  coords: [crime.longitude, crime.latitude]
                }
                state.mapData.push(value)
              }
            } else {
              let value = {
                id: crime.id,
                crimedate: crime.crimedate,
                crimetime: crime.crimetime,
                crimecode: crime.crimecode,
                weapon: crime.weapon,
                coords: [crime.longitude, crime.latitude]
              }
              state.mapData.push(value)
            }
          }
        })
      }
    },
    // default is set to a 24 day of the latest day in the dataset
    // TODO: set defaults for the data sets in the application startup
    formatLineGraph (state, sortBy) {
      // Defualts set here since we have no other spot to atm
      state.lineChart.timeframe = state.crimeframe
      state.lineChart.amountArray = []
      let count = 0

      // set size matching with crimeframe
      let day = 0
      for (let date of state.crimeframe) {
        state.lineChart.amountArray[day] = 0
        day++
      }

      if (sortBy.weaponType !== null) {
        state.lineChart.dataFilter = 'weapon type:' + sortBy.weaponType
        state.defaultData.forEach(function (crimeData) {
          count = 0
          for (let date of state.crimeframe) {
            if (date === moment(crimeData.crimedate).format('YYYY-MM-DD')
              && sortBy.weaponType === crimeData.weapon){
              state.lineChart.amountArray[count] = state.lineChart.amountArray[count] + 1
            }
            count++
          }
        })
      } else if (sortBy.crimecode !== null) {
        state.lineChart.dataFilter = 'crimecode: ' + sortBy.crimecode
        state.defaultData.forEach(function (crimeData) {
          count = 0
          for (let date of state.crimeframe) {
            if (date === moment(crimeData.crimedate).format('YYYY-MM-DD')
              && sortBy.crimecode === crimeData.crimecode){
              state.lineChart.amountArray[count] = state.lineChart.amountArray[count] + 1
            }
            count++
          }
        })
      } else {
          state.lineChart.dataFilter = 'total crimes'
          state.defaultData.forEach(function (crimeData) {
            count = 0
            for (let date of state.crimeframe) {
              if (date === moment(crimeData.crimedate).format('YYYY-MM-DD')){
                state.lineChart.amountArray[count] = state.lineChart.amountArray[count] + 1
              }
              count++
            }
          })
      }
    },
    formatDonut (state, sortBy) {
      // Defualts set here since we have no other spot to atm
      state.doughnutGraph.timeframe = state.crimeframe
      state.doughnutGraph.dataFilterTypes = []
      state.doughnutGraph.amountArray = []

      // shows all crimecodes instead of just one
      if (sortBy.crimecode != null) {
        state.doughnutGraph.dataFilter = 'crimecodes'
        state.defaultData.forEach(function (crimeData) {
          console.log(state.doughnutGraph.dataFilterTypes.indexOf(crimeData.crimecode))
          // add crimecode to list or mark if one exists
          if (moment(crimeData.crimedate).isBetween(state.crimeframeRange.startDate, state.crimeframeRange.endDate, null, '[]')) {
            if (state.doughnutGraph.dataFilterTypes.indexOf(crimeData.crimecode) > -1) {
              state.doughnutGraph.amountArray[state.doughnutGraph.dataFilterTypes.indexOf(crimeData.crimecode)]++
            } else {
              state.doughnutGraph.dataFilterTypes.push(crimeData.crimecode)
              state.doughnutGraph.amountArray[state.doughnutGraph.dataFilterTypes.indexOf(crimeData.crimecode)] = 1
            }
          }
        })
      } else if (sortBy.weaponType != null) {
        state.doughnutGraph.dataFilter = 'weapon types'
        state.doughnutGraph.dataFilterTypes = state.weaponTypes

        let day = 0
        for (let date of state.weaponTypes) {
          state.doughnutGraph.amountArray[day] = 0
          day++
        }

        state.defaultData.forEach(function (crimeData) {
          if (moment(crimeData.crimedate).isBetween(state.crimeframeRange.startDate, state.crimeframeRange.endDate, null, '[]')) {
            state.doughnutGraph.amountArray[state.doughnutGraph.dataFilterTypes.indexOf(crimeData.weapon)] =
              state.doughnutGraph.amountArray[state.doughnutGraph.dataFilterTypes.indexOf(crimeData.weapon)] + 1
          }
        })
      } else {
        // TODO: Change to a new default for 'total crimes'
        state.doughnutGraph.dataFilter = 'weapons'
        state.doughnutGraph.dataFilterTypes = state.weaponTypes
        for (let val = 0; val < 6; val++) {
          state.doughnutGraph.amountArray[val] = 0
        }
        // TODO: make sure data is sorted by time
        for (let crimeData of state.defaultData) {
          // ['NA', 'FIREARM', 'OTHER', 'KNIFE', 'HANDS', 'FIRE']
          if (crimeData.weapon === 'NA') {
            state.doughnutGraph.amountArray[0] = state.doughnutGraph.amountArray[0] + 1
          } else if (crimeData.weapon === 'FIREARM') {
            state.doughnutGraph.amountArray[1] = state.doughnutGraph.amountArray[1] + 1
          } else if (crimeData.weapon === 'OTHER') {
            state.doughnutGraph.amountArray[2] = state.doughnutGraph.amountArray[2] + 1
          } else if (crimeData.weapon === 'KNIFE') {
            state.doughnutGraph.amountArray[3] = state.doughnutGraph.amountArray[3] + 1
          } else if (crimeData.weapon === 'HANDS') {
            state.doughnutGraph.amountArray[4] = state.doughnutGraph.amountArray[4] + 1
          } else {
            state.doughnutGraph.amountArray[5] = state.doughnutGraph.amountArray[5] + 1
          }
        }
      }
    },
    formatBarGraph (state, sortBy) {
      // Defualts set here since we have no other spot to atm
      state.barGraph.timeframe = state.crimeframe
      state.barGraph.dataFilterTypes = []
      state.barGraph.amountArray = []

      // shows all crimecodes instead of just one
      if (sortBy.crimecode != null) {
        state.barGraph.dataFilter = 'crimecodes'
        state.defaultData.forEach(function (crimeData) {
          console.log(state.barGraph.dataFilterTypes.indexOf(crimeData.crimecode))
          // add crimecode to list or mark if one exists
          if (moment(crimeData.crimedate).isBetween(state.crimeframeRange.startDate, state.crimeframeRange.endDate, null, '[]')) {
            if (state.barGraph.dataFilterTypes.indexOf(crimeData.crimecode) > -1) {
              state.barGraph.amountArray[state.barGraph.dataFilterTypes.indexOf(crimeData.crimecode)]++
            } else {
              state.barGraph.dataFilterTypes.push(crimeData.crimecode)
              state.barGraph.amountArray[state.barGraph.dataFilterTypes.indexOf(crimeData.crimecode)] = 1
            }
          }
        })
      } else if (sortBy.weaponType != null) {
        state.barGraph.dataFilter = 'weapon types'
        state.barGraph.dataFilterTypes = state.weaponTypes

        let day = 0
        for (let date of state.weaponTypes) {
          state.barGraph.amountArray[day] = 0
          day++
        }

        state.defaultData.forEach(function (crimeData) {
          if (moment(crimeData.crimedate).isBetween(state.crimeframeRange.startDate, state.crimeframeRange.endDate, null, '[]')) {
            state.barGraph.amountArray[state.barGraph.dataFilterTypes.indexOf(crimeData.weapon)] =
              state.barGraph.amountArray[state.barGraph.dataFilterTypes.indexOf(crimeData.weapon)] + 1
          }
        })
      } else {
        state.barGraph.dataFilterTypes = state.crimeframe
        state.barGraph.dataFilter = 'total crimes'

        // set size matching with crimeframe
        let day = 0
        for (let date of state.crimeframe) {
          state.barGraph.amountArray[day] = 0
          day++
        }

        state.defaultData.forEach(function (crimeData) {
          let count = 0
          for (let date of state.crimeframe) {
            if (date === moment(crimeData.crimedate).format('YYYY-MM-DD')){
              state.barGraph.amountArray[count] = state.barGraph.amountArray[count] + 1
            }
            count++
          }
        })
      }
      // sets data based on dataFilter
      if (state.barGraph.dataFilter === 'district') {
        // TODO: make sure data is sorted by time
        for (let val = 0; val < 10; val++) {
          state.barGraph.amountArray[val] = 0
        }
        for (let crimeData of state.defaultData) {
          // ['CENTRAL', 'EASTERN', 'NORTHEAST', 'NORTHERN', 'NORTHWEST', 'SOUTHEAST', 'SOUTHERN', 'SOUTHWEST', 'UNKNOWN', 'WESTERN'],
          // if (crimeData.district === 'CENTRAL') {
          //   state.barGraph.amountArray[0] = state.barGraph.amountArray[0] + 1
          // } else if (crimeData.district === 'EASTERN') {
          //   state.barGraph.amountArray[1] = state.barGraph.amountArray[1] + 1
          // } else if (crimeData.district === 'NORTHEAST') {
          //   state.barGraph.amountArray[2] = state.barGraph.amountArray[2] + 1
          // } else if (crimeData.district === 'NORTHERN') {
          //   state.barGraph.amountArray[3] = state.barGraph.amountArray[3] + 1
          // } else if (crimeData.district === 'NORTHWEST') {
          //   state.barGraph.amountArray[4] = state.barGraph.amountArray[4] + 1
          // } else if (crimeData.district === 'SOUTHEAST') {
          //   state.barGraph.amountArray[5] = state.barGraph.amountArray[5] + 1
          // } else if (crimeData.district === 'SOUTHERN') {
          //   state.barGraph.amountArray[6] = state.barGraph.amountArray[6] + 1
          // } else if (crimeData.district === 'SOUTHWEST') {
          //   state.barGraph.amountArray[7] = state.barGraph.amountArray[7] + 1
          // } else if (crimeData.district === 'UNKNOWN') {
          //   state.barGraph.amountArray[8] = state.barGraph.amountArray[8] + 1
          // } else {
          //   state.barGraph.amountArray[9] = state.barGraph.amountArray[9] + 1
          // }

        }
      }
    }
  }
})
