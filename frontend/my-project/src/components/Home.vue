<template>
  <div>
    <h1>{{ msg }}</h1>
    <!--  Start of nick's timeframe (ctrl-frwdslash makes comment)-->
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="250px">
        <template v-slot:activator="{ on }">
          <v-btn color="blue darken-2" dark v-on="on">Filters</v-btn>
        </template>
        <v-card>
          <div class="text-left">
            <v-flex >
              <v-menu
                v-model="menu2"
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
                    v-model="date"
                    label="Date From"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
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
                    v-model="date"
                    label="Date To"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false">
                  <v-spacer></v-spacer>
                </v-date-picker>
              </v-menu>
            </v-flex>
          </div>
          <v-row>
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              transition="scale-transition"
              offset-y
              full-width
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="time"
                  label="Time From"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="time"
                full-width
                @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
            <v-spacer></v-spacer>
            <v-menu
              ref="menu"
              v-model="modal2"
              :return-value.sync="time"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="time"
                  label="Time To"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="modal2"
                v-model="time"
                full-width
              >
                <v-spacer></v-spacer>
                <v-btn text color="blue" @click="modal2 = false">Cancel</v-btn>
                <v-btn text color="blue" @click="$refs.menu.save(time)">OK</v-btn>
              </v-time-picker>
            </v-menu>
          </v-row>
<!--          start of checkboxes-->
          <v-card-title>Select Filter</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-radio-group v-model="dialogm1" column>
              <v-checkbox label="Colorblind Mode" value="colorblind"></v-checkbox>
              <v-checkbox label="Show Weapons" value="weapons"></v-checkbox>
              <v-checkbox label="Show Crime Codes" value="crimeCodes"></v-checkbox>
              <v-checkbox label="Show Locations" value="weapons"></v-checkbox>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>

        </v-card>
      </v-dialog>
    </v-row>

    <v-flex>
      <div class="chart">
        <h2>Linechart example with fake raw data; crimes by district over</h2>
        <basic-chart class="chart"></basic-chart>
      </div>
      <div class="chart">
        <h2>Weapon Distribution Pie chart</h2>
        <doughnut-chart class="chart"></doughnut-chart>
      </div>
      <div class="chart">
        <h2>Barchart</h2>
        <bar-chart class="chart"></bar-chart>
      </div>
    </v-flex>
  </div>
</template>

<script>
import BasicChart from './BasicChart.js'
import BarChart from './BarChart.js'
import DoughnutChart from './DoughnutChart.js'
export default {
  components: {BasicChart, BarChart, DoughnutChart},
  name: 'home',
  date: '',
  menu2: '',
  modal2: '',
  time: '',
  data: () => ({
    msg: 'Team 10\'s 447 project template',
    //  for checkboxes
    dialogm1: '',
    dialog: false,
    //  end of data for checkboxes
    options: {
      responsive: true,
      maintainAspectRatio: false
    }

  }),
  methods: {
    updateCrimefame () {
      console.log('crimeframe updated')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
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
</style>
