<template>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 400px">
    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>

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
      zoom: 11.5,
      center: ['-76.6566890000', '39.3265610000'],
      rotation: 0
    }
  }
}
</script>
