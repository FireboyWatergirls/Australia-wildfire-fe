<template>
  <div>
    <div id="koala"></div>
    <div id="title">
      <font color="#fff" size="5px">
        <strong>The Worrying Decline of Koala Populations</strong>
      </font>
    </div>
    <div id="subtitle">
      <font
        color="#bbbbbb"
        size="4px"
      >Decline of koala populations in Australian states over six generations</font>
    </div>
    <div id="map-overlay" class="map-overlay"></div>
    <nav id="layer-menu"></nav>
    <div id="state-legend" class="legend">
      <h4>Percentage of the decline</h4>
      <div>
        <span style="background-color: #fdba9a"></span>hardly any
      </div>
      <div>
        <span style="background-color: #f64b3c"></span>low
      </div>
      <div>
        <span style="background-color: #c81912"></span>high
      </div>
      <div>
        <span style="background-color: #42240c"></span>extremely high
      </div>
    </div>
    <div id="count">
      <font color="#b22222">
        <strong>-24%</strong>
      </font>
    </div>
    <div id="text">
      <font color="#fff">
        <strong>Overall population decline</strong>
      </font>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
export default {
  name: 'koala',
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.map = new mapboxgl.Map({
        container: 'koala',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [142, -27.67],
        zoom: 3
      })
      axios.get('./static/data/states.geojson') // 这里换成url
        // then获取成功： response成功后的返回值
        .then(response => {
          // console.log(response)
          this.oftenGoods = response.data
          // console.log(this.oftenGoods)
          this.map.on('load', () => {
            this.map
              .addSource('australia', {
                type: 'geojson',
                data: this.oftenGoods
              })
              .addLayer(
                {
                  id: 'koala',
                  type: 'fill',
                  source: 'australia',
                  paint: {
                    'fill-color': [
                      'interpolate',
                      ['linear'],
                      ['get', 'Koala'],
                      0,
                      '#333333',
                      1,
                      '#fdba9a',
                      13,
                      '#f64b3c',
                      15,
                      '#c81912',
                      50,
                      '#42240c'
                    ],
                    'fill-opacity': 0.75
                  }
                },
                'waterway-label'
              )
              .on('click', 'koala', e => {
                new mapboxgl.Popup({ offset: [0, 0] })
                  .setLngLat(e.lngLat)
                  .setHTML(
                    e.features[0].properties.STATE_NAME +
                      '：-' +
                      e.features[0].properties.Koala +
                      '%'
                  )
                  .addTo(this.map)
              })
              .on('mouseenter', 'koala', () => {
                this.map.getCanvas().style.cursor = 'pointer'
              })
              .on('mouseleave', 'koala', () => {
                this.map.getCanvas().style.cursor = ''
              })
          })
        })
        // 获取失败
        .catch(error => {
          console.log(error)
          alert('网络错误，不能访问')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
#koala {
  width: 100%;
  height: 100%;
}
#count {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.3);
  top: 78vh;
  left: 26vw;
  z-index: 20;
  width: 8vw;
  height: 8vh;
  font-size: 24px;
  text-align: center;
  line-height: 8vh;
  background-color: rgba(255, 255, 255, 0.1);
}
#title {
  position: absolute;
  top: 60px;
  left: 255px;
  background-color: rgb(19, 19, 19);
  padding: 0 8px;
}
#subtitle {
  position: absolute;
  top: 90px;
  left: 230px;
  margin-top: 6px;
  background-color: rgb(19, 19, 19);
  padding: 0 8px;
}
.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
#text {
  position: fixed;
  top: 70vh;
  left: 15vw;
  z-index: 20;
  width: 30vw;
  height: 10vh;
  font-size: 20px;
  text-align: center;
  line-height: 10vh;
}
.legend {
  background-color: #303030;
  border-radius: 3px;
  bottom: 40px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 10px;
  position: absolute;
  left: 15px;
  z-index: 1;
}
.legend h4 {
  margin: 0 0 10px;
  color: #fff;
  font: 16px;
}
.legend div span {
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  margin-right: 5px;
  width: 10px;
}
</style>
