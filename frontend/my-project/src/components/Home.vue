<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <v-flex></v-flex>
    <div class="chart">
      <h2>Linechart</h2>
      <basic-chart class="chart"></basic-chart>
    </div>
    <div class="chart">
      <h2>Barchart</h2>
      <bar-chart class="chart"></bar-chart>
    </div>
  </div>
</template>

<script>
import BasicChart from './BasicChart.js'
import BarChart from './BarChart.js'
export default {
  components: {BasicChart, BarChart},
  name: 'home',
  data: () => ({
    msg: 'Team 10\'s 447 project template',
    chartExampleData: {
      labels: ['bar1', 'bar2'],
      datasets: [
        { label: 'dataset test',
          backgroundColor: '#f87979',
          data: [
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
            }
          ]
        }
      ]

    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }

  }),
  mounted () {
    this.renderChart(this.chartExampleData, this.options)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  margin-left: -680px;
  font-weight: normal;
}
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
.chart {
  border-radius: 35px;
  box-shadow: 0px 2px 15px rgba(25,25,25, .25);
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 25px;
}
</style>
