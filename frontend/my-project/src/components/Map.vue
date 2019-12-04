<template>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 400px">
    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>
    <vl-feature v-for="crime in crimePoints" :key="crime.id">
      <vl-geom-point :coordinates="crime.coords"></vl-geom-point>
<!--      <vl-style-box>-->
<!--        <vl-style-icon src="./marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>-->
<!--      </vl-style-box>-->
    </vl-feature>
    <vl-layer-tile>
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
  </vl-map>
</template>

<script>
export default {
  name: 'mapDataSet',
  data () {
    return {
      zoom: 11,
      center: [-76.6566890000, 39.3265610000],
      rotation: 0
    }
  },
  computed: {
    crimePoints: {
      get () {
        return this.$store.state.mapData
      }
    }
  },
  methods: {
    updateMapData () {
      this.crimePoints = this.$store.state.mapData
    }
  }
}
</script>
