<template>
  <div id="map">
    <div class="timeline">
      <div class="slider">
        <vue-slider
          id="slider"
          v-model="value"
          :data="date"
          :absorb="true"
          :tooltip="'active'"
          :use-keyboard="true"
          :marks="marks"
          :enable-cross="false"
          style="widte:80vw"
          v-on:drag-end="filter(value)"
        >
          <template v-slot:dot>
            <img :src="'/static/icon/fire.png'" class="custom-dot" style="width:25px" />
          </template>
        </vue-slider>
      </div>
      <div class="icons-list">
        <a-icon
          v-if="!intervalState"
          type="play-circle"
          theme="twoTone"
          style="margin-right:15px"
          @click="Play()"
        />
        <a-icon v-if="intervalState" type="pause-circle" theme="twoTone" @click="Pause()" />
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import VueSlider from 'vue-slider-component'
const mapboxToken =
  'pk.eyJ1IjoibHNxMjEwIiwiYSI6ImNqZXd6NzVyYzB6b24ydnBzOWFhZ3FpNTQifQ.y4iy69PepyhrkJ98qjzykg'
export default {
  data() {
    return {
      map: null,
      value: ['2019-9-1', '2020-2-28'],
      marks: {
        '2019-9-1': '2019-9-1',
        '2020-2-28': '2020-2-28'
      },
      date: [],
      interval: null,
      intervalState: false
    }
  },
  components: {
    VueSlider
  },
  mounted() {
    this.initMap()
    this.initDate()
  },
  methods: {
    buildFireMap: function(
      sourseName,
      dataPath,
      layerHeat,
      layerPoint,
      fireSourse,
      map
    ) {
      map.addSource(sourseName, {
        type: 'geojson',
        data: dataPath
      })

      // 热力图图层
      map.addLayer(
        {
          id: layerHeat,
          type: 'heatmap',
          source: sourseName,
          maxzoom: 9,
          paint: {
            'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              0,
              0,
              6,
              1
            ],
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              1,
              9,
              3
            ],
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0,
              'rgba(33,102,172,0)',
              0.2,
              'rgb(103,169,207)',
              0.4,
              'rgb(209,229,240)',
              0.6,
              'rgb(253,219,199)',
              0.8,
              'rgb(239,138,98)',
              1,
              'rgb(178,24,43)'
            ],
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              2,
              9,
              20
            ],
            'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
          }
        },
        'waterway-label'
      )

      // 散点图图层
      map.addSource(fireSourse, {
        type: 'geojson',
        data: dataPath
      })

      map.addLayer(
        {
          id: layerPoint,
          type: 'symbol',
          source: fireSourse,
          layout: {
            'icon-image': 'fire',
            'icon-allow-overlap': true,
            'icon-size': 0.05
          }
        },
        'waterway-label'
      )

      // 悬浮显示信息窗
      var popupTime = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      })
      map.on('mouseenter', layerPoint, e => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer'

        var dayOrnight
        if (e.features[0].properties.daynight.match('D')) {
          dayOrnight = 'Day'
        } else {
          dayOrnight = 'Night'
        }

        var coordinates = e.features[0].geometry.coordinates.slice()
        var description =
          'Brightness: ' +
          e.features[0].properties.brightness +
          '</br>' +
          'Date: ' +
          e.features[0].properties.acq_date +
          '</br>' +
          'time: ' +
          dayOrnight +
          '</br>' +
          'Instrument: ' +
          e.features[0].properties.instrument

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
          .addTo(map)
      })

      map.on('mouseleave', layerPoint, () => {
        map.getCanvas().style.cursor = ''
        popupTime.remove()
      })
    },
    initDate: function() {
      var dateList = []
      var i, j, tempDate, month
      for (i = 9; i < 15; i++) {
        if (i < 13) {
          if (i % 2 === 0) {
            for (j = 1; j < 32; j++) {
              tempDate = '2019-' + i + '-' + j
              dateList.push(tempDate)
            }
          } else {
            for (j = 1; j < 31; j++) {
              tempDate = '2019-' + i + '-' + j
              dateList.push(tempDate)
            }
          }
        } else {
          if (i === 13) {
            for (j = 1; j < 32; j++) {
              month = i - 12
              tempDate = '2020-' + month + '-' + j
              dateList.push(tempDate)
            }
          } else {
            for (j = 1; j < 29; j++) {
              month = i - 12
              tempDate = '2020-' + month + '-' + j
              dateList.push(tempDate)
            }
          }
        }
      }
      this.date = dateList
      console.log(this.date[1])
    },
    initMap: function() {
      mapboxgl.accessToken = mapboxToken
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
        // 加载小火苗
        this.map.loadImage('/static/icon/fire.png', (error, image) => {
          if (error) throw error

          this.map.addImage('fire', image)
        })

        // 加载DEM图层
        this.map.addSource('dem', {
          type: 'raster-dem',
          url: 'mapbox://mapbox.terrain-rgb'
        })
        this.map.addLayer({
          id: 'hillshading',
          source: 'dem',
          type: 'hillshade'
          // insert below waterway-river-canal-shadow;
          // where hillshading sits in the Mapbox Outdoors style
        })

        // 加载火点图和热力图
        var i,
          j,
          tempDate,
          month,
          sourseName,
          dataPath,
          layerHeat,
          layerPoint,
          fireSourse
        var map = this.map
        for (i = 9; i < 15; i++) {
          if (i < 13) {
            if (i % 2 === 0) {
              for (j = 1; j < 32; j++) {
                tempDate = '2019-' + i + '-' + j
                layerHeat = 'fireMap' + tempDate
                layerPoint = 'firePoint' + tempDate
                sourseName = 'wildfires' + tempDate
                fireSourse = 'firepoints' + tempDate
                dataPath = '/static/' + tempDate + '.geojson'
                this.$options.methods.buildFireMap(
                  sourseName,
                  dataPath,
                  layerHeat,
                  layerPoint,
                  fireSourse,
                  map
                )
              }
            } else {
              for (j = 1; j < 31; j++) {
                tempDate = '2019-' + i + '-' + j
                layerHeat = 'fireMap' + tempDate
                layerPoint = 'firePoint' + tempDate
                sourseName = 'wildfires' + tempDate
                fireSourse = 'firepoints' + tempDate
                dataPath = '/static/' + tempDate + '.geojson'
                this.$options.methods.buildFireMap(
                  sourseName,
                  dataPath,
                  layerHeat,
                  layerPoint,
                  fireSourse,
                  map
                )
              }
            }
          } else {
            if (i === 13) {
              for (j = 1; j < 32; j++) {
                month = i - 12
                tempDate = '2020-' + month + '-' + j
                layerHeat = 'fireMap' + tempDate
                layerPoint = 'firePoint' + tempDate
                sourseName = 'wildfires' + tempDate
                fireSourse = 'firepoints' + tempDate
                dataPath = '/static/' + tempDate + '.geojson'
                this.$options.methods.buildFireMap(
                  sourseName,
                  dataPath,
                  layerHeat,
                  layerPoint,
                  fireSourse,
                  map
                )
              }
            } else {
              for (j = 1; j < 29; j++) {
                month = i - 12
                tempDate = '2020-' + month + '-' + j
                layerHeat = 'fireMap' + tempDate
                layerPoint = 'firePoint' + tempDate
                sourseName = 'wildfires' + tempDate
                fireSourse = 'firepoints' + tempDate
                dataPath = '/static/' + tempDate + '.geojson'
                this.$options.methods.buildFireMap(
                  sourseName,
                  dataPath,
                  layerHeat,
                  layerPoint,
                  fireSourse,
                  map
                )
              }
            }
          }
        }
      })
    },

    mapClickEvent: function(e) {
      console.log('经纬度是', e.lngLat)
    },

    filter: function(value) {
      console.log(this.intervalState)
      if (this.intervalState) {
        clearInterval(this.interval)
        var valueReset = []
        valueReset.push(this.value)
        valueReset.push('2020-2-28')
        this.value = value
        console.log(this.value)
        this.intervalState = false
      }
      console.log(this.value[0])
      var layers = this.map.getStyle().layers
      var value0 = this.value[0].match(/\d+/g)
      var value1 = this.value[1].match(/\d+/g)
      var monthStart = Number(value0[1])
      var monthEnd = Number(value1[1])
      var i, j, layerHeat, layerPoint
      console.log(value0)
      console.log(value1)
      // 关闭已打开火点图
      for (i = 0; i < layers.length; i++) {
        if (layers[i].id.indexOf('fire') > -1) {
          this.map.setLayoutProperty(layers[i].id, 'visibility', 'none')
        }
      }

      // 打开指定范围火点图
      if (value0[0] === value1[0]) {
        // 2019-2019
        if (value0[0] === '2019') {
          if (value0[1] === value1[1]) {
            // 选中范围在同一月
            for (j = value0[2]; j <= value1[2]; j++) {
              layerHeat = 'fireMap' + value0[0] + '-' + value0[1] + '-' + j
              layerPoint = 'firePoint' + value0[0] + '-' + value0[1] + '-' + j
              this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
              this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
              console.log(layerHeat)
            }
          } else {
            // 选中范围在不同月
            // 打开起始月
            if (value0[1] % 2 === 0) {
              for (j = value0[2]; j < 32; j++) {
                layerHeat = 'fireMap' + value0[0] + '-' + value0[1] + '-' + j
                layerPoint = 'firePoint' + value0[0] + '-' + value0[1] + '-' + j
                this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
                this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
                console.log(layerHeat)
              }
            } else {
              for (j = value0[2]; j < 31; j++) {
                layerHeat = 'fireMap' + value0[0] + '-' + value0[1] + '-' + j
                layerPoint = 'firePoint' + value0[0] + '-' + value0[1] + '-' + j
                this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
                this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
                console.log(layerHeat)
              }
            }

            // 打开中间范围
            for (i = monthStart + 1; i < monthEnd; i++) {
              console.log(i)
              console.log(i % 2)
              if (i % 2 === 0) {
                for (j = 1; j < 32; j++) {
                  layerHeat = 'fireMap' + value0[0] + '-' + i + '-' + j
                  layerPoint = 'firePoint' + value0[0] + '-' + i + '-' + j
                  this.map.setLayoutProperty(
                    layerPoint,
                    'visibility',
                    'visible'
                  )
                  this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
                  console.log(layerHeat)
                }
              } else {
                for (j = 1; j < 31; j++) {
                  layerHeat = 'fireMap' + value0[0] + '-' + i + '-' + j
                  layerPoint = 'firePoint' + value0[0] + '-' + i + '-' + j
                  this.map.setLayoutProperty(
                    layerPoint,
                    'visibility',
                    'visible'
                  )
                  this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
                  console.log(layerHeat)
                }
              }
            }

            // 打开终止月
            for (j = 1; j <= value1[2]; j++) {
              layerHeat = 'fireMap' + value0[0] + '-' + value1[1] + '-' + j
              layerPoint = 'firePoint' + value0[0] + '-' + value1[1] + '-' + j
              this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
              this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
              console.log(layerHeat)
            }
          }
        } else if (value0[0] === '2020') {
          // 2020-2020
          if (value0[1] === value1[1]) {
            // 选中范围在同一月
            for (j = value0[2]; j <= value1[2]; j++) {
              layerHeat = 'fireMap' + value0[0] + '-' + value0[1] + '-' + j
              layerPoint = 'firePoint' + value0[0] + '-' + value0[1] + '-' + j
              this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
              this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
              console.log(layerHeat)
            }
          } else {
            // 选中范围在不同月
            // 打开起始月
            if (value0[1] === 1) {
              for (j = value0[2]; j < 32; j++) {
                layerHeat = 'fireMap' + value0[0] + '-' + value0[1] + '-' + j
                layerPoint = 'firePoint' + value0[0] + '-' + value0[1] + '-' + j
                this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
                this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
                console.log(layerHeat)
              }
            } else {
              for (j = value0[2]; j < 29; j++) {
                layerHeat = 'fireMap' + value0[0] + '-' + value0[1] + '-' + j
                layerPoint = 'firePoint' + value0[0] + '-' + value0[1] + '-' + j
                this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
                this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
                console.log(layerHeat)
              }
            }

            // 打开终止月
            for (j = 1; j <= value1[2]; j++) {
              layerHeat = 'fireMap' + value0[0] + '-' + value1[1] + '-' + j
              layerPoint = 'firePoint' + value0[0] + '-' + value1[1] + '-' + j
              this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
              this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
              console.log(layerHeat)
            }
          }
        }
      } else {
        // 打开起始月
        if (value0[1] % 2 === 0) {
          for (j = value0[2]; j < 32; j++) {
            layerHeat = 'fireMap' + value0[0] + '-' + value0[1] + '-' + j
            layerPoint = 'firePoint' + value0[0] + '-' + value0[1] + '-' + j
            this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
            this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
            console.log(layerHeat)
          }
        } else {
          for (j = value0[2]; j < 31; j++) {
            layerHeat = 'fireMap' + value0[0] + '-' + value0[1] + '-' + j
            layerPoint = 'firePoint' + value0[0] + '-' + value0[1] + '-' + j
            this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
            this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
            console.log(layerHeat)
          }
        }

        // 打开2019剩余
        for (i = monthStart + 1; i <= 12; i++) {
          console.log(i)
          if (i % 2 === 0) {
            for (j = 1; j < 32; j++) {
              layerHeat = 'fireMap' + value0[0] + '-' + i + '-' + j
              layerPoint = 'firePoint' + value0[0] + '-' + i + '-' + j
              this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
              this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
              console.log(layerHeat)
            }
          } else {
            for (j = 1; j < 31; j++) {
              layerHeat = 'fireMap' + value0[0] + '-' + i + '-' + j
              layerPoint = 'firePoint' + value0[0] + '-' + i + '-' + j
              this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
              this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
              console.log(layerHeat)
            }
          }
        }

        // 打开终止月
        for (j = 1; j <= value1[2]; j++) {
          layerHeat = 'fireMap' + value1[0] + '-' + value1[1] + '-' + j
          layerPoint = 'firePoint' + value1[0] + '-' + value1[1] + '-' + j
          this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
          this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
          console.log(layerHeat)
        }

        // 判断是否需要打开2020年1月
        if (value1[1] === '2') {
          for (j = 1; j < 32; j++) {
            layerHeat = 'fireMap' + value1[0] + '-1-' + j
            layerPoint = 'firePoint' + value1[0] + '-1-' + j
            this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
            this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
            console.log(layerHeat)
          }
        }
      }
    },
    Play: function() {
      var layerPoint, layerHeat, preLayerHeat, preLayerPoint
      if (this.intervalState) {
        clearInterval(this.interval)
      }
      var startIndex = this.date.indexOf(this.value[0])
      var endIndex = this.date.indexOf(this.value[1])
      if (endIndex === this.date.length - 1) {
        return
      }
      this.intervalState = true
      this.interval = setInterval(() => {
        console.log('loop')
        layerHeat = 'fireMap' + this.date[endIndex + 1]
        layerPoint = 'firePoint' + this.date[endIndex + 1]
        preLayerHeat = 'fireMap' + this.date[startIndex]
        preLayerPoint = 'firePoint' + this.date[startIndex]
        this.map.setLayoutProperty(preLayerPoint, 'visibility', 'none')
        this.map.setLayoutProperty(preLayerHeat, 'visibility', 'none')
        this.map.setLayoutProperty(layerPoint, 'visibility', 'visible')
        this.map.setLayoutProperty(layerHeat, 'visibility', 'visible')
        startIndex++
        endIndex++
        this.value = [this.date[startIndex], this.date[endIndex]]
        console.log(startIndex)
        if (endIndex >= this.date.length) {
          clearInterval(this.interval)
        }
      }, 2000)
    },
    Pause: function() {
      // 停止播放
      clearInterval(this.interval)
      this.intervalState = false
      console.log(this.value)
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
.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
.timeline {
  position: absolute;
  bottom: 30px;
  width: 100%;
  left: 100px;
  .slider {
    width: 80%;
    float: left;
    margin-left: 100px;
  }
  .icons-list {
    width: 5%;
    float: left;
    font-size: 24px;
    position: absolute;
    z-index: 100;
  }
}
</style>
