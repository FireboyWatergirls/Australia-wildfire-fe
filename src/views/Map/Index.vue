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
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import Menu from './Menu'
import KeyEvents from './KeyEvents'
import ImpactTotal from './Impact/total'
import ImpactSociety from './Impact/society'
import ImpactBio from './Impact/bio'

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
    ImpactTotal,
    ImpactSociety,
    ImpactBio
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
      this.map.on('load', () => {
        this.map.addSource('wildfires', {
          'type': 'geojson',
          'data': '/static/test.geojson'
        })
        this.map.addLayer({
          'id': 'firemap',
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

        /* this.map.addLayer({
          'id': 'fire-point',
          'type': 'circle',
          'source': 'wildfires',
          'minzoom': 7,
          'paint': {
            'circle-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7, [
                'interpolate',
                ['linear'],
                ['get', 'mag'],
                1, 1,
                6, 4
              ],
              16, [
                'interpolate',
                ['linear'],
                ['get', 'mag'],
                1, 5,
                6, 50
              ]
            ],
            'circle-color': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              1, 'rgba(33,102,172,0)',
              2, 'rgb(103,169,207)',
              3, 'rgb(209,229,240)',
              4, 'rgb(253,219,199)',
              5, 'rgb(239,138,98)',
              6, 'rgb(178,24,43)'
            ],
            'circle-stroke-color': 'white',
            'circle-stroke-width': 1,
            'circle-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7, 0,
              8, 1
            ]
          }
        }, 'waterway-label') */

        this.map.loadImage('/static/icon/fire.png', (error, image) => {
          if (error) throw error

          this.map.addImage('fire', image)
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
              'icon-size': 0.1
            }
          }, 'waterway-label')
        })

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
          var description = 'brightness: ' + e.features[0].properties.brightness + '</br>' +
          'date: ' + e.features[0].properties.acq_date + '</br>' + 'time: ' + dayOrnight

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

        this.map.on('mouseleave', 'firePoint', function () {
          this.map.getCanvas().style.cursor = ''
          popup.remove()
        })
      })
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
.mapboxgl-popup{
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
</style>
