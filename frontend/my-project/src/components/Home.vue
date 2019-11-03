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
        <h2>Barchart w irrelevant trash data</h2>
        <bar-chart class="chart"></bar-chart>
      </div>
      <div class="chart">
        <h2>Map</h2>
        <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 400px">
          <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>

          <vl-layer-tile>
            <vl-source-osm></vl-source-osm>
          </vl-layer-tile>
        </vl-map>
      </div>
      <v-divider/>
      <v-spacer></v-spacer>
      <v-divider/>
      <v-card>
        <v-card-text>I just need some space to show map please css gods please</v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import BasicChart from './BasicChart.js'
import BarChart from './BarChart.js'
import DoughnutChart from './DoughnutChart.js'
import Map from './Map.vue'
export default {
  components: {BasicChart, BarChart, DoughnutChart, Map},
  name: 'home',
  data: () => ({
    msg: 'Team 10\'s 447 project template',
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    zoom: 2,
    center: [0, 0],
    rotation: 0
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
