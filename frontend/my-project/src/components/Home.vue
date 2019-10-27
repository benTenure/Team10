<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
<!--    <div id='chartdiv' style='width: 100%; height: 400px;'></div>-->
  </div>
</template>

<script>
import AmCharts from 'amcharts3'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Team 10\'s 447 project template'
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
    )
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
</style>
