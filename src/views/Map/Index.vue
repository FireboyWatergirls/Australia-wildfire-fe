<template>
  <div>
    <map-menu class="menu" @changeItem="changeMenu"></map-menu>
    <div id="map" v-show="menuKey !== '1'"></div>
    <key-events class="events-constainer" v-if="menuKey === '1'" />
    <!-- <iframe src="/static/keyEvents/index.html" class="events-constainer" v-show="menuKey === '1'"></iframe> -->
    <layer class="layer" @changeBaseMap="changeBaseMap"></layer>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import Menu from './Menu'
import KeyEvents from './KeyEvents'
import Layer from './Layer'

export default {
  data() {
    return {
      menuKey: '2',
      map: null
    }
  },
  components: {
    MapMenu: Menu,
    KeyEvents
    Layer
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap: function() {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [133.65921899005053, -26.031180863929407],
        zoom: 3,
        pitch: 0
      })
      this.nav = new mapboxgl.NavigationControl()
      this.map.addControl(this.nav)
      this.map.on('click', this.mapClickEvent)
    },
    mapClickEvent: function(e) {
      console.log('经纬度是', e.lngLat)
    },
    changeBaseMap: function (styleUrl) {
      this.map.setStyle(styleUrl)
    },
    changeMenu: function(key) {
      this.menuKey = key
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.menu {
  position: fixed;
  top: 72px;
  left: 10px;
  z-index: 100;
}
.events-constainer {
  z-index: 10;
}
.layer {
  position: absolute;
  top: 180px;
  right: 10px;
  z-index: 100;
  text-align: right;
}
</style>
