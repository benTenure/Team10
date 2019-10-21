<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <v-btn class="mybutton">weed</v-btn>
    <bar-graph></bar-graph>
  </div>
</template>

<script>
import {Bar} from 'vue-chartjs'
export default {
  extends: {Bar},
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
.mybutton {
  color: black;
  margin-left: -680px;
}
</style>
