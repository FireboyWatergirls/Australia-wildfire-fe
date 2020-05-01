<template>
  <div id="map">
    <module-container :moduleName="'layer'">
      <Layer></Layer>
    </module-container>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import ModuleContainer from '@/components/ModuleContainer'
import Layer from '@/components/Layer'
const mapboxToken = 'pk.eyJ1IjoibHNxMjEwIiwiYSI6ImNqZXd6NzVyYzB6b24ydnBzOWFhZ3FpNTQifQ.y4iy69PepyhrkJ98qjzykg'

export default {
  data () {
    return {
      moduleList: ['layer', 'factors', 'impact']
    }
  },
  components: {
    ModuleContainer,
    Layer
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap: function () {
      mapboxgl.accessToken = mapboxToken
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [133.65921899005053, -26.031180863929407],
        zoom: 3
      })
      this.nav = new mapboxgl.NavigationControl()
      this.map.addControl(this.nav)
      this.map.on('click', this.mapClickEvent)
    }
    // mapClickEvent: function (e) {
    //   console.log('经纬度是', e.lngLat)
    // }
  }
}
</script>

<style lang="scss" scoped>
#map {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
