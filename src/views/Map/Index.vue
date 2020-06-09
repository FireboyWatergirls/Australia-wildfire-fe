<template>
  <div>
    <map-menu class="menu" @changeItem="changeMenu"></map-menu>
    <div id="map" v-show="menuKey !== '1'"></div>
    <key-events class="events-constainer" v-if="menuKey === '1'" />
    <!-- <iframe src="/static/keyEvents/index.html" class="events-constainer" v-show="menuKey === '1'"></iframe> -->
    <!-- total impact-->
    <div id="total-impact" v-if="menuKey === '3'" @mousewheel.prevent>
      <region-circle class="pie" />
      <fire class="themeriver" />
      <regionmap class="health-map" />
      <deathpie class="deathpie" />
    </div>
    <!-- impact on society-->
    <div id="society-impact" v-if="menuKey === '5'">
      <cpi class="line1" />
      <consume class="line2" />
      <aircraft class="line3" />
      <businesses class="pie-map" />
    </div>
    <!-- impact on natural-->
    <div id="natural-impact" v-if="menuKey === '4'">
      <Bio class="scatter-grid" />
      <koala class="scatter-map" />
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import Menu from './Menu'
import KeyEvents from './KeyEvents'
import RegionCircle from './total/regioncircle'
import Fire from './total/firethemeriver'
import Cpi from './society/cpiline'
import Consume from './society/consumeline'
import Aircraft from './society/aircraftline'
import Bio from './bio/scattergrid'
import Koala from './bio/koalamap'
import Businesses from './society/buspie'
import regionmap from './total/healthmap'
import deathpie from './total/deathpie'

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
    Bio,
    Koala,
    Businesses,
    regionmap,
    deathpie
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
.deathpie {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 66vh;
  right: 1vw;
  z-index: 50;
}
.pie {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 10vh;
  left: 69vw;
  z-index: 10;
}
.themeriver {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 66vh;
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
.scatter-map {
  position: fixed;
  top: 0vh;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
.pie-map {
  position: fixed;
  top: 0vh;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
.health-map {
  position: fixed;
  top: 0vh;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
</style>
