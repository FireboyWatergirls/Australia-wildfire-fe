<template>
  <div>
    <map-menu class="menu" @changeItem="changeMenu"></map-menu>
    <div id="map" v-show="menuKey !== '1'"></div>
    <key-events class="events-constainer" v-if="menuKey === '1'" />
    <!-- <iframe src="/static/keyEvents/index.html" class="events-constainer" v-show="menuKey === '1'"></iframe> -->
    <!-- total impact
      <div id="total-impact">
      <region-circle class="pie" />
      <fire class="themeriver" />
    </div>-->
    <!-- impact on society
      <div id="society-impact">
      <cpi class="line1" />
      <consume class="line2" />
      <aircraft class="line3" />
    </div>-->
    <!-- impact on natural-->
    <div id="natural-impact">
      <bio class="scatter-grid" />
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import Menu from './Menu'
import KeyEvents from './KeyEvents'
import RegionCircle from './regioncircle'
import Fire from './firethemeriver'
import Cpi from './cpiline'
import Consume from './consumeline'
import Aircraft from './aircraftline'
import Bio from './scattergrid'

export default {
  data() {
    return {
      menuKey: '2',
      map: null
    }
  },
  components: {
    MapMenu: Menu,
    KeyEvents,
    RegionCircle,
    Fire,
    Cpi,
    Consume,
    Aircraft,
    Bio
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
        zoom: 3
      })
      this.nav = new mapboxgl.NavigationControl()
      this.map.addControl(this.nav)
      this.map.on('click', this.mapClickEvent)
    },
    mapClickEvent: function(e) {
      console.log('经纬度是', e.lngLat)
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
.pie {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 14vh;
  left: 68vw;
  z-index: 10;
}
.themeriver {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 16vh;
  left: 1vw;
  z-index: 20;
}
.line1 {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 10vh;
  left: 61vw;
  z-index: 20;
  width: 38vw;
  height: 28vh;
}
.line2 {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 12vh;
  left: 61vw;
  z-index: 20;
  width: 38vw;
  height: 28vh;
}
.line3 {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 14vh;
  left: 1vw;
  z-index: 20;
  width: 98vw;
  height: 27vh;
}
.scatter-grid {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 9vh;
  left: 65vw;
  z-index: 20;
  width: 38vw;
  height: 28vh;
}
</style>
