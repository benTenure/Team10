<template>
  <div>
    <h1>{{ msg }}</h1>
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
    <v-btn class="ma-2" color="primary">BARGRAPH
      <v-icon dark right>mdi-chart-bar</v-icon>
    </v-btn>
    <v-btn class="ma-2" color="purple darken-3" dark>
      <v-icon dark left>mdi-chart-line</v-icon>LINE
    </v-btn>
    <div></div>
    <v-btn class="ma-2" color="green" dark>
      <v-icon dark left>mdi-chart-pie</v-icon>PIE
    </v-btn>
    <v-btn class="ma-2" color="red" dark>PINMAP
      <v-icon dark right>mdi-map</v-icon>
    </v-btn>
    <div></div>
    <v-btn class="ma-2" dark>
      <v-icon dark left>mdi-chart-histogram</v-icon>
      Histograph
    </v-btn>
    <v-btn class="ma-2" color="orange darken-2" dark>
      <v-icon dark left>mdi-help</v-icon>Predictions
    </v-btn>
  </div>

</template>

<script>
import BasicChart from './BasicChart.js'
import BarChart from './BarChart.js'
import DoughnutChart from './DoughnutChart.js'
export default {
  components: {BasicChart, BarChart, DoughnutChart},
  name: 'home',
  data: () => ({
    msg: 'Team 10\'s 447 project template',
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
