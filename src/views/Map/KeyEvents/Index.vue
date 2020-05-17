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
            <h3 v-if="title">{{title}}</h3>
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
      style: 'mapbox://styles/branigan/cjzsvonse027m1co4nkxp13b3',
      center: mapStart.center,
      zoom: mapStart.zoom,
      pitch: mapStart.pitch,
      bearing: mapStart.bearing
    })
    const scroller = scrollama()
    this.map.on('load', () => {
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
  opacity: 0.9;
}
.step div {
  padding: 25px 50px;
  line-height: 25px;
  font-size: 13px;
  color: #fafafa;
  background-color: #444;
}
h3 {
  color: #fafafa;
  background-color: #444;
}
.step img {
  width: 100%;
}

@media (max-width: 750px) {
  .events {
    width: 90vw;
    margin: 0 auto;
  }
}
</style>
