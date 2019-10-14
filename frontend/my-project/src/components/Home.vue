<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <div id='chartdiv' style='width: 100%; height: 400px;'></div>
  </div>
</template>

<script>
import AmCharts from 'amcharts3'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to the 447 project'
    }
  },
  created () {
    AmCharts.makeChart('chartdiv',
      {
        'type': 'serial',
        'categoryField': 'type',
        'chartCursor': {},
        'graphs': [
          {
            'type': 'column',
            'title': 'Pizza types',
            'valueField': 'sold',
            'fillAlphas': 0.8
          }
        ],

        'dataProvider': [
          { 'type': 'Margherita', 'sold': 120 },
          { 'type': 'Funghi', 'sold': 82 },
          { 'type': 'Capricciosa', 'sold': 78 },
          { 'type': 'Quattro Stagioni', 'sold': 71 }
        ]
      }
    )
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
