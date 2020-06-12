<template>
  <div>
    <div id="events-map" />
    <div>
      <div class="events">
        <div
          v-for="{id, title, image, description} in chapters"
          :key="id"
          :id="id"
          :class="id === currentChapter.id ? 'step active' : 'step'"
        >
          <div>
            <h2 v-if="title">{{title}}</h2>
            <img v-if="image" :src="image" :alt="title" />
            <p v-if="description">{{description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import scrollama from 'scrollama'
import chapters from './chapters'

const layerTypes = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity']
}

export default {
  data() {
    return {
      chapters,
      currentChapter: chapters[0],
      map: null
    }
  },
  mounted() {
    const mapStart = chapters[0].location
    this.map = new mapboxgl.Map({
      container: 'events-map',
      // style: 'mapbox://styles/lsq210/ck9o2qmg61dg81immkmhp3447',
      style: 'mapbox://styles/lsq210/cjez8jrv223982rqmek99dpyv',
      center: mapStart.center,
      zoom: mapStart.zoom,
      pitch: mapStart.pitch,
      bearing: mapStart.bearing
    })
    const scroller = scrollama()
    this.map.on('load', () => {
      this.map.addSource('drought', {
        type: 'image',
        url: '/static/keyEvents/drought.png',
        coordinates: [
          [112.0017200095238, -9.0215050810581],
          [154.20408122188142, -9.0215050810581],
          [158.30408122188142, -44.857360778549376],
          [109.8017200095238, -43.917360778549376]
        ]
      })
      this.map.addSource('legend', {
        type: 'image',
        url: '/static/keyEvents/legend.png',
        coordinates: [
          [118.85, -36.45],
          [132.95, -36.45],
          [132.95, -43.23],
          [118.85, -43.23]
        ]
      })
      this.map.addSource('smoke', {
        type: 'image',
        url: '/static/keyEvents/smoke.png',
        coordinates: [
          [111.85, -8.349793451089942],
          [189.0, -8.349793451089942],
          [189.0, -62.791480782345104],
          [111.85, -62.791480782345104]
        ]
      })
      this.map.addLayer(
        {
          id: 'drought',
          source: 'drought',
          type: 'raster',
          paint: { 'raster-opacity': 0 }
        },
        'admin_level_3'
      )
      this.map.addLayer({
        id: 'legend',
        source: 'legend',
        type: 'raster',
        paint: { 'raster-opacity': 0 }
      })
      this.map.addLayer({
        id: 'smoke',
        source: 'smoke',
        type: 'raster',
        paint: { 'raster-opacity': 0 }
      })
      // // 调用 wms
      // this.map.addLayer({
      //   id: 'wms-test-layer',
      //   type: 'raster',
      //   source: {
      //     type: 'raster',
      //     tiles: [
      //       'http://localhost:8080/geoserver/firemap/wms?service=WMS&version=1.1.0&request=GetMap&layers=firemap:VIIRS_2019-12-30T00_00_00Z&bbox={bbox-epsg-3857}&width=768&height=534&srs=EPSG:3857&format=image/png&TRANSPARENT=TRUE'
      //     ],
      //     tileSize: 512
      //   },
      //   paint: {}
      // })

      // setup the instance, pass callback functions
      scroller
        .setup({
          step: '.step',
          offset: 0.5,
          progress: true
        })
        .onStepEnter(response => {
          const chapter = chapters.find(chap => chap.id === response.element.id)
          this.currentChapter = chapter
          this.map.flyTo(chapter.location)
          if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(this.setLayerOpacity)
          }
        })
        .onStepExit(response => {
          var chapter = chapters.find(chap => chap.id === response.element.id)
          if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(this.setLayerOpacity)
          }
        })
    })
    window.addEventListener('resize', scroller.resize)
  },
  methods: {
    setLayerOpacity: function(layer) {
      var paintProps = this.getLayerPaintType(layer.layer)
      paintProps.forEach(prop => {
        this.map.setPaintProperty(layer.layer, prop, layer.opacity)
      })
    },
    getLayerPaintType: function(layer) {
      var layerType = this.map.getLayer(layer).type
      return layerTypes[layerType]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/var.scss';
#events-map {
  height: 100vh;
  width: 100vw;
  position: fixed;
}
.events {
  padding-top: 10vh;
  padding-bottom: 10vh;
  z-index: 100;
  width: 33vw;
  margin-left: 62vw;
}
.step {
  padding-bottom: 50vh;
  opacity: 0.25;
}
.step.active {
  opacity: 0.99;
}
.step div {
  padding: 25px 50px;
  line-height: 25px;
  font-size: 13px;
  // color: #fafafa;
  // background-color: $bg-color1;
  color: #444;
  background-color: #fafafa;
  font-size: initial;
}
h2 {
  // color: #fafafa;
  // background-color: $bg-color1;
  color: #444;
  background-color: #fafafa;
  font-family: 'Charter BT', serif;
  font-size: x-large;
  line-height: 1.3;
}
.step img {
  width: 100%;
  margin-bottom: 10px;
}

@media (max-width: 750px) {
  .events {
    width: 90vw;
    margin: 0 auto;
  }
}
</style>
