<template>
  <div>
    <map-menu class="menu" @changeItem="changeMenu"></map-menu>
    <div id="map" v-show="menuKey !== '1'"></div>
    <key-events class="events-constainer" v-if="menuKey === '1'" />
    <div id="total-impact" v-if="menuKey === '3'" @mousewheel.prevent>
      <impact-total></impact-total>
    </div>
    <div id="society-impact" v-if="menuKey === '5'">
      <impact-society></impact-society>
    </div>
    <div id="natural-impact" v-if="menuKey === '4'">
      <impact-bio></impact-bio>
    </div>
    <div class="timeline" v-if="timeLineState">
      <vue-slider
      id="slider"
      v-model="value"
      :data="data"
      :absorb="true"
      :tooltip="'active'"
      :use-keyboard="true"
      :marks="true"
      style="widte:80vw"
      v-on:drag-end="filter(value)">
        <template v-slot:dot>
          <img :src="'/static/icon/fire.png'" class="custom-dot" style="width:25px"/>
        </template>
        <!--<template v-slot:mark="{ pos, label }">
          <div class="custom-mark" style="color: #f5f5f5">{{ label }}</div>
        </template>-->
      </vue-slider>
  </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import Menu from './Menu'
import KeyEvents from './KeyEvents'
import ImpactTotal from './Impact/total'
import ImpactSociety from './Impact/society'
import ImpactBio from './Impact/bio'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/fire.css'
const mapboxToken = 'pk.eyJ1IjoibHNxMjEwIiwiYSI6ImNqZXd6NzVyYzB6b24ydnBzOWFhZ3FpNTQifQ.y4iy69PepyhrkJ98qjzykg'

export default {
  data() {
    return {
      menuKey: '2',
      map: null
      value: '2019-8-1',
      data: ['2019-8-1', '2019-8-2', '2019-8-3', '2019-8-4', '2019-8-5']
      // OriginData
    }
  },
  components: {
    MapMenu: Menu,
    KeyEvents,
    ImpactTotal,
    ImpactSociety,
    ImpactBio
    MapMenu: Menu,
    VueSlider
  },
  mounted() {
    this.initMap()
  },
  computed: {
    timeLineState () {
      if (this.$store.state.funName === 'timeLine') {
        this.map.setLayoutProperty('fireMap', 'visibility', 'none')
        this.map.setLayoutProperty('firePoint', 'visibility', 'none')
        this.map.setLayoutProperty('fireMap2019-8-1', 'visibility', 'visible')
        this.map.setLayoutProperty('firePoint2019-8-1', 'visibility', 'visible')
        return true
      } else {
        console.log('0')
        return false
      }
    }
    /* filterByMonth () {
      var subdata = {
        'type': 'FeatureCollection',
        'features': []
      }
      OriginData.features.forEach((item) => {
        if (item.acq_date.indexOf(this.$store.state.filters) !== -1) {
          subdata.features.push(item)
        }
      })
      return subdata
    } */
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
      this.map.on('load', () => {
        // 添加数据
        this.map.addSource('wildfires', {
          'type': 'geojson',
          'data': '/static/test.geojson'
        })

        // 总热力图图层
        this.map.addLayer({
          'id': 'fireMap',
          'type': 'heatmap',
          'source': 'wildfires',
          'maxzoom': 9,
          'paint': {
            'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              0, 0,
              6, 1
            ],
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0, 1,
              9, 3
            ],
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0, 'rgba(33,102,172,0)',
              0.2, 'rgb(103,169,207)',
              0.4, 'rgb(209,229,240)',
              0.6, 'rgb(253,219,199)',
              0.8, 'rgb(239,138,98)',
              1, 'rgb(178,24,43)'
            ],
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0, 2,
              9, 20
            ],
            'heatmap-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7, 1,
              9, 0
            ]
          }
        }, 'waterway-label')

        // 总散点图图层
        this.map.loadImage('/static/icon/fire.png', (error, image) => {
          if (error) throw error

          this.map.addImage('fire', image)
        })
        this.map.addSource('firepoints', {
          'type': 'geojson',
          'data': '/static/test.geojson'
        })

        this.map.addLayer({
          'id': 'firePoint',
          'type': 'symbol',
          'source': 'firepoints',
          'layout': {
            'icon-image': 'fire',
            'icon-allow-overlap': true,
            'icon-size': 0.05
          }
        }, 'waterway-label')

        // 悬浮显示信息窗
        var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        })
        this.map.on('mouseenter', 'firePoint', (e) => {
          // Change the cursor style as a UI indicator.
          this.map.getCanvas().style.cursor = 'pointer'

          var dayOrnight
          if (e.features[0].properties.daynight.match('D')) { dayOrnight = 'Day' } else { dayOrnight = 'Night' }

          var coordinates = e.features[0].geometry.coordinates.slice()
          var description = 'Brightness: ' + e.features[0].properties.brightness + '</br>' +
          'Date: ' + e.features[0].properties.acq_date + '</br>' + 'time: ' + dayOrnight +
          '</br>' + 'Instrument: ' + e.features[0].properties.instrument

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }

          // Populate the popup and set its coordinates
          // based on the feature found.
          popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(this.map)
        })

        this.map.on('mouseleave', 'firePoint', () => {
          this.map.getCanvas().style.cursor = ''
          popup.remove()
        })

        // 添加数据
        this.map.addSource('wildfires2019-8-1', {
          'type': 'geojson',
          'data': '/static/2019-8-1.geojson'
        })

        // 8.1热力图图层
        this.map.addLayer({
          'id': 'fireMap2019-8-1',
          'type': 'heatmap',
          'source': 'wildfires2019-8-1',
          'maxzoom': 9,
          'paint': {
            'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              0, 0,
              6, 1
            ],
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0, 1,
              9, 3
            ],
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0, 'rgba(33,102,172,0)',
              0.2, 'rgb(103,169,207)',
              0.4, 'rgb(209,229,240)',
              0.6, 'rgb(253,219,199)',
              0.8, 'rgb(239,138,98)',
              1, 'rgb(178,24,43)'
            ],
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0, 2,
              9, 20
            ],
            'heatmap-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7, 1,
              9, 0
            ]
          }
        }, 'waterway-label')

        // 8.1散点图图层
        this.map.addSource('firepoints2019-8-1', {
          'type': 'geojson',
          'data': '/static/2019-8-1.geojson'
        })

        this.map.addLayer({
          'id': 'firePoint2019-8-1',
          'type': 'symbol',
          'source': 'firepoints2019-8-1',
          'layout': {
            'icon-image': 'fire',
            'icon-allow-overlap': true,
            'icon-size': 0.05
          }
        }, 'waterway-label')

        // 悬浮显示信息窗
        var popup81 = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        })
        this.map.on('mouseenter', 'firePoint2019-8-1', (e) => {
          // Change the cursor style as a UI indicator.
          this.map.getCanvas().style.cursor = 'pointer'

          var dayOrnight
          if (e.features[0].properties.daynight.match('D')) { dayOrnight = 'Day' } else { dayOrnight = 'Night' }

          var coordinates = e.features[0].geometry.coordinates.slice()
          var description = 'Brightness: ' + e.features[0].properties.brightness + '</br>' +
          'Date: ' + e.features[0].properties.acq_date + '</br>' + 'time: ' + dayOrnight +
          '</br>' + 'Instrument: ' + e.features[0].properties.instrument

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }

          // Populate the popup and set its coordinates
          // based on the feature found.
          popup81
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(this.map)
        })

        this.map.on('mouseleave', 'firePoint2019-8-1', () => {
          this.map.getCanvas().style.cursor = ''
          popup81.remove()
        })

        this.map.addSource('dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.terrain-rgb'
        })
        this.map.addLayer({
          'id': 'hillshading',
          'source': 'dem',
          'type': 'hillshade'
          // insert below waterway-river-canal-shadow;
          // where hillshading sits in the Mapbox Outdoors style
        })

        // this.map.setLayoutProperty('fireMap', 'visibility', 'none')
        // this.map.setLayoutProperty('firePoint', 'visibility', 'none')
        this.map.setLayoutProperty('fireMap2019-8-1', 'visibility', 'none')
        this.map.setLayoutProperty('firePoint2019-8-1', 'visibility', 'none')
      })
    },
    mapClickEvent: function(e) {

    mapClickEvent: function (e) {
      console.log('经纬度是', e.lngLat)
    },
    changeMenu: function(key) {
      this.menuKey = key
    },
    filter: function (value) {
      this.$store.commit('setFilter', value)
      var layers = this.map.getStyle().layers
      var layerHeat = 'fireMap' + value
      var layerPoint = 'firePoint' + value
      var sourseName = 'wildfires' + value
      var fireSourse = 'firepoints' + value
      var dataPath = '/static/' + value + '.geojson'
      var layerExist = false
      console.log('sucess ' + layerHeat)
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].id.indexOf('fire') > -1) {
          this.map.setLayoutProperty(layers[i].id, 'visibility', 'none')
          console.log(layers[i].id)
        }
        if (layers[i].id.indexOf(value) > -1) {
          layerExist = true
        }
        console.log(layerExist)
      }
      if (!layerExist) {
        console.log(layerExist + 'build')
        // 添加数据
        this.map.addSource(sourseName, {
          'type': 'geojson',
          'data': dataPath
        })

        // 热力图图层
        this.map.addLayer({
          'id': layerHeat,
          'type': 'heatmap',
          'source': sourseName,
          'maxzoom': 9,
          'paint': {
            'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              0, 0,
              6, 1
            ],
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0, 1,
              9, 3
            ],
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0, 'rgba(33,102,172,0)',
              0.2, 'rgb(103,169,207)',
              0.4, 'rgb(209,229,240)',
              0.6, 'rgb(253,219,199)',
              0.8, 'rgb(239,138,98)',
              1, 'rgb(178,24,43)'
            ],
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0, 2,
              9, 20
            ],
            'heatmap-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7, 1,
              9, 0
            ]
          }
        }, 'waterway-label')

        // 散点图图层
        this.map.addSource(fireSourse, {
          'type': 'geojson',
          'data': dataPath
        })

        this.map.addLayer({
          'id': layerPoint,
          'type': 'symbol',
          'source': fireSourse,
          'layout': {
            'icon-image': 'fire',
            'icon-allow-overlap': true,
            'icon-size': 0.05
          }
        }, 'waterway-label')

        // 悬浮显示信息窗
        var popupTime = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        })
        this.map.on('mouseenter', layerPoint, (e) => {
          // Change the cursor style as a UI indicator.
          this.map.getCanvas().style.cursor = 'pointer'

          var dayOrnight
          if (e.features[0].properties.daynight.match('D')) { dayOrnight = 'Day' } else { dayOrnight = 'Night' }

          var coordinates = e.features[0].geometry.coordinates.slice()
          var description = 'Brightness: ' + e.features[0].properties.brightness + '</br>' +
          'Date: ' + e.features[0].properties.acq_date + '</br>' + 'time: ' + dayOrnight +
          '</br>' + 'Instrument: ' + e.features[0].properties.instrument

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }

          // Populate the popup and set its coordinates
          // based on the feature found.
          popupTime
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(this.map)
        })

        this.map.on('mouseleave', layerPoint, () => {
          this.map.getCanvas().style.cursor = ''
          popupTime.remove()
        })
      } else {
        console.log(layerExist)
        this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
        this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
      }
      console.log(this.$store.state.filter)
    }
    /* filter: function (value) {
      console.log(value)
      var filters = ['==', 'acq_date', value]
      this.map.setFilter('firePoint', filters)
      this.map.setFilter('fireMap', filters)
    } */
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
.mapboxgl-popup{
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
.timeline {
  padding-top: 800px;
  width: 80%;
  margin-left:100px
}
.vue-slider-dot-tooltip-inner {
  color: #f5f5f5;
  background-color: rgba(255, 255, 255, 0.35);
}
.vue-slider-mark-label {
  color: #f5f5f5;
}
</style>
