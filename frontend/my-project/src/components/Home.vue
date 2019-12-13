<template v-bind:style="{ backgroundColor: lightblue}">
  <div>
    <!--  Start of nick's timeframe (ctrl-frwdslash makes comment)-->
    <div justify="center">
      <v-dialog v-model="dialog" scrollable max-width="250px">
        <template v-slot:activator="{ on }">
          <v-btn color="blue darken-3" dark onclick="document.body.style.backgroundColor = 'lightblue';" @click="colorSet = false">Not High Contrast Mode
            <i class="material-icons">
              visibility_off
            </i>
          </v-btn>
          <v-btn color="yellow darken-3" dark onclick="document.body.style.backgroundColor = 'white';"  @click="colorSet = true">High Contrast Mode
            <i class="material-icons">
              remove_red_eye
<!--              https://laracasts.com/discuss/channels/vue/change-a-value-inside-the-onclick-->
            </i>
<!--            Colorblind Avoid: (Chose to add patterns)-->
<!--            green-red-->
<!--            green-blue-->
<!--            green-brown-->
<!--            green-black-->
<!--            green-grey-->
<!--            blue-grey-->
<!--            light green-yellow-->
<!--            blue-purple-->
          </v-btn>
          <v-btn color="blue darken-2" dark v-on="on">Filters
            <i class="material-icons">
              filter_list
            </i>
          </v-btn>
        </template>
        <v-card>
          <div class="text-left">
            <v-flex>
              <v-menu
                v-model="menu"
                :close-on-content-click="true"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="280px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="startDate"
                    label="Start Date"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="startDate" @input="menu = false"></v-date-picker>
              </v-menu>
            </v-flex>

            <v-flex >
              <v-menu
                v-model="menu2"
                :close-on-content-click="true"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="280px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="endDate"
                    label="End Date"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="endDate" @input="menu2 = false">
                  <v-spacer></v-spacer>
                </v-date-picker>
              </v-menu>
            </v-flex>
          </div>
          <div>
            <v-menu
              ref="menu3"
              v-model="modal2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="startTime"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="startTime"
                  label="Time To"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="modal2"
                v-model="startTime"
                full-width
              >
                <v-spacer></v-spacer>
                <v-btn text color="blue" @click="modal2 = false">Cancel</v-btn>
                <v-btn text color="blue" @click="$refs.menu3.save(startTime)">OK</v-btn>
              </v-time-picker>
            </v-menu>
            <v-spacer></v-spacer>
            <v-menu
              ref="menu4"
              v-model="modal2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="endTime"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="endTime"
                  label="Time To"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="modal2"
                v-model="endTime"
                full-width
              >
                <v-spacer></v-spacer>
                <v-btn text color="blue" @click="modal2 = false">Cancel</v-btn>
                <v-btn text color="blue" @click="$refs.menu4.save(endTime)">OK</v-btn>
              </v-time-picker>
            </v-menu>
          </div>
<!--          start of checkboxes-->
          <v-card-title>Select Filter</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-radio-group v-model="sortFilter" column>
              <v-radio label="Show All Crimes" value="allCrimes"></v-radio>
              <v-radio label="Sort by Weapons" value="weaponSort"></v-radio>
              <v-radio label="Sort by Description" value="descriptionSort"></v-radio>
              <v-radio label="Sort by Crime Codes" value="crimeCodeSort"></v-radio>
              <v-radio label="Sort by Locations" value="locationSort"></v-radio>
            </v-radio-group>
            <v-select
              v-if="weaponTypeSelector"
              v-model="selectedWeaponType"
              :items="weaponTypes"
              outline
            ></v-select>
            <v-select
              v-if="descriptionSelector"
              v-model="descriptionSelected"
              :items="crimeDescriptions"
              outline
            ></v-select>
            <v-text-field
              v-if="crimecodeSelector"
              v-model="crimecodeString"
              single-line
              outline>
            </v-text-field>
            <v-select
              v-if="locationTypeSelector"
              v-model="locationTypeString"
              :items="locationTypes"
              outline
            ></v-select>
            <v-text-field
              v-if="locationTypeSelector"
              v-model="locationString"
              single-line
              outline>
            </v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="closeFilterDialog()">Close</v-btn>
            <v-btn color="blue darken-1" text @click="selectSorting()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <p>Timefrime: {{crimeframeRange.startDate.format('MM/DD/YYYY')}} to {{crimeframeRange.endDate.format('MM/DD/YYYY')}}</p>
    </div>
    <v-flex>
      <section id="LineChart">
      <div class="chart">
        <h2>Linechart</h2>
        <line-graph class="chart" :data="lineChart" :options="{responsive: true, maintainAspectRatio: false}"></line-graph>
      </div>
      </section>
      <section id="PieChart">
      <div class="chart">
        <h2>Pie chart (default is weapons)</h2>
        <doughnut-chart class="chart" :data="doughnutGraph" :options="{responsive: true, maintainAspectRatio: false}"></doughnut-chart>
      </div>
      </section>
      <section id="BarChart">
      <div class="chart" >
        <h2>Barchart</h2>
        <bar-chart class="chart" :data="barChart" :options="{responsive: true, maintainAspectRatio: false}"></bar-chart>
      </div>
      </section>
      <section id="Map">
      <div class="chart" >
        <h2>Map</h2>
        <mapDataSet/>
      </div>
      </section>
      <v-divider/>
      <v-spacer></v-spacer>
      <v-divider/>
    </v-flex>
  </div>
</template>

<script>
import LineGraph from './LineGraph.js'
import BarChart from './BarChart.js'
import DoughnutChart from './DoughnutChart.js'
import MapDataSet from './Map'
import axios from 'axios'
import moment from 'moment'
export default {
  components: {LineGraph, BarChart, DoughnutChart, MapDataSet},
  data: () => ({
      name: 'home',
      msg: 'Team 10\'s 447 project template',
      startDate: '',
      endDate: '',
      menu: false,
      menu2: false,
      menu3: false,
      menu4: false,
      modal2: '',
      startTime: '',
      endTime: '',
      dialogm1: '',
      sortFilter: 'allCrimes',
      dialog: false,
      sortBy: {},
      descriptionSelector: false,
      descriptionSelected: null,
      crimecodeSelector: false,
      crimecodeString: null,
      weaponTypeSelector: false,
      selectedWeaponType: null,
      locationTypeSelector: false,
      locationTypeString: null,
      locationString: null,
      colorSet: false,
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
    zoom: 2,
    center: [0, 0],
    rotation: 0
  }),
  computed: {
      crimeframeRange () {
          return this.$store.state.crimeframeRange
      },
      weaponTypes () {
          return this.$store.state.weaponTypes
      },
      locationTypes () {
          return this.$store.state.locationTypes
      },
      lineChart () {
          return this.$store.state.lineChart
      },
      barChart () {
          return this.$store.state.barGraph
      },
      doughnutGraph () {
          return this.$store.state.doughnutGraph
      },
      crimeDescriptions () {
          return this.$store.state.crimeDescriptions
      }
  },
  watch: {
      sortFilter: function (val){
          this.selectChoice()
      }
  },
  methods: {
      selectChoice () {
        if (this.sortFilter === 'weaponSort') {
            this.locationTypeSelector = false
            this.weaponTypeSelector = true
            this.crimecodeSelector = false
            this.descriptionSelector = false
        } else if (this.sortFilter === 'descriptionSort') {
            this.locationTypeSelector = false
            this.weaponTypeSelector = false
            this.crimecodeSelector = false
            this.descriptionSelector = true
        } else if (this.sortFilter === 'crimeCodeSort') {
            this.locationTypeSelector = false
            this.weaponTypeSelector = false
            this.crimecodeSelector = true
            this.descriptionSelector = false
        } else if (this.sortFilter === 'locationSort') {
            this.locationTypeSelector = true
            this.weaponTypeSelector = false
            this.crimecodeSelector = false
            this.descriptionSelector = false
        } else {
            this.locationTypeSelector = false
            this.weaponTypeSelector = false
            this.crimecodeSelector = false
            this.descriptionSelector = false
        }
      },
      selectSorting () {
          if (this.startDate !== '' && this.endDate !== '') {
              axios.get('http://54.166.56.44/backend/index.php?action=BetweenDates',
                  { params: {
                          dateBefore: moment(this.startDate).format('YYYYMMDD'),
                          dateAfter: moment(this.endDate).format('YYYYMMDD')
                      }
                  })
                  .then(function (response) {
                      this.$store.state.defaultData = response.data
                      this.$store.commit('updateCrimeframe', {startDate: this.startDate, endDate: this.endDate})
                  })
                  .catch(function (error) {
                      console.log(error)
                  })
              // get rid of when REST call works
              this.$store.commit('updateCrimeframe', {startDate: this.startDate, endDate: this.endDate})
          }
          this.sortBy = {
              crimecode: null,
              description: null,
              weaponType: null,
              address: null,
              inside_outside: null,
              zip: null,
              district: null,
              neighborhood: null,
              premise: null
          }
          if (this.sortFilter === 'weaponSort') {
              this.sortBy.weaponType = this.selectedWeaponType
          } else if (this.sortFilter === 'crimeCodeSort') {
              this.sortBy.crimecode = this.crimecodeString
          } else if (this.sortFilter === 'descriptionSort') {
              this.sortBy.description = this.descriptionSelected
          } else if (this.sortFilter === 'locationSort') {
              if (this.locationTypeString === 'Address') {
                  this.sortBy.address = this.locationString
              } else if (this.locationTypeString === 'Inside/Outside') {
                  this.sortBy.inside_outside = this.locationString
              } else if (this.locationTypeString === 'Zip Code') {
                  this.sortBy.zip = this.locationString
              } else if (this.locationTypeString === 'District') {
                  this.sortBy.district = this.locationString
              } else if (this.locationTypeString === 'Neighborhood') {
                  this.sortBy.neighborhood = this.locationString
              } else if (this.locationTypeString === 'Building Type') {
                  this.sortBy.premise = this.locationString
              }
          }

          this.$store.commit('formatMapData', this.sortBy)
          this.$store.commit('formatLineGraph', this.sortBy)
          this.$store.commit('formatBarGraph', this.sortBy)
          this.$store.commit('formatDonut', this.sortBy)
          this.dialog = false
      },
      closeFilterDialog () {
          this.crimecodeSelector = false
          this.crimecodeString = null
          this.weaponTypeSelector = false
          this.selectedWeaponType = null
          this.sortFilter = 'allCrimes'
          this.dialog = false
      }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/
/*.container {*/
/*  max-width: 800px;*/
/*  margin:  0 auto;*/

/*  color:  rgba(155, 89, 182, 1);*/
/*}*/
.chart {
  border-radius: 35px;
  box-shadow: 0 2px 15px rgba(25,25,25, .25);
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 25px;
}
.chart h2 {
  margin-top: 0;
  padding: 15px 0;
  border-bottom: 1px solid #aeb1b3;
}
/*  Start of nick's attempt to put it in a thingy*/
#LineChart{
  position: absolute;
  right: 0;
  top: 600px;
  width: 33%;
}
#BarChart{
  position: absolute;
  right: 33%;
  top: 600px;
  width: 33%;
}
#PieChart{
  position: absolute;
  left: 0;
  top: 600px;
  width: 33%;
}
#Map {
  position: absolute;
  left: 0;
  top: 125px;
  width: 100%
}
</style>
