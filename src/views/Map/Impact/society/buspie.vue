<template>
  <div>
    <div id="businesses"></div>
    <div id="title">
      <font color="#fff" size="5px">
        <strong>Businesses affected by the bushfires around Australia by State</strong>
      </font>
    </div>
    <div id="map-overlay" class="map-overlay"></div>
    <div id="state-legend" class="legend">
      <h4>The percentage of businesses affected</h4>
      <div>
        <span style="background-color: #f1e3cb"></span>hardly any
      </div>
      <div>
        <span style="background-color: #f9b384"></span>low
      </div>
      <div>
        <span style="background-color: #ca5116"></span>high
      </div>
      <div>
        <span style="background-color: #581c0c"></span>extremely high
      </div>
    </div>
    <div class="text-count">
      <div class="text">
        <font color="#fff">
          <strong>Overall Impacts</strong>
        </font>
      </div>
      <div class="count">
        <font color="#b22222">
          <strong>26%</strong>
        </font>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
export default {
  name: 'businesses',
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.map = new mapboxgl.Map({
        container: 'businesses',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [140.8, -26.03],
        zoom: 3
      })
      let overlay = document.getElementById('map-overlay')
      let popup = new mapboxgl.Popup({
        closeButton: false
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
                  id: 'Total Affected',
                  type: 'fill',
                  source: 'australia',
                  paint: {
                    'fill-color': [
                      'interpolate',
                      ['linear'],
                      ['get', 'Total_Affected'],
                      0,
                      '#f1e3cb',
                      10,
                      '#f9b384',
                      20,
                      '#ca5116',
                      30,
                      '#581c0c'
                    ],
                    'fill-opacity': 0.75
                  }
                },
                'waterway-label'
              )
              .on('click', 'Total Affected', e => {
                this.map.getCanvas().style.cursor = 'pointer'
                let feature = e.features[0]
                overlay.innerHTML = ''
                let title = document.createElement('strong')
                title.textContent = feature.properties.STATE_NAME
                let deal = document.createElement('div')
                deal.textContent =
                  'A Great Deal:' + feature.properties.A_Great_deal + '%'
                let Somewhat = document.createElement('div')
                Somewhat.textContent =
                  'Somewhat:' + feature.properties.Somewhat + '%'
                let Little = document.createElement('div')
                Little.textContent =
                  'A Great Deal:' + feature.properties.A_Little + '%'
                overlay.appendChild(title)
                overlay.appendChild(deal)
                overlay.appendChild(Somewhat)
                overlay.appendChild(Little)
                overlay.style.display = 'block'
                popup
                  .setLngLat(e.lngLat)
                  .setText(feature.properties.STATE_NAME)
                  .addTo(this.map)
              })
              .on('mouseenter', 'Total Affected', () => {
                this.map.getCanvas().style.cursor = 'pointer'
              })
              .on('mouseleave', 'Total Affected', () => {
                this.map.getCanvas().style.cursor = ''
                popup.remove()
                overlay.style.display = 'none'
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
#businesses {
  width: 100%;
  height: 100%;
}
.count {
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 20;
  width: 8vw;
  height: 8vh;
  font-size: 24px;
  text-align: center;
  line-height: 8vh;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 auto;
}
.text {
  z-index: 20;
  width: 20vw;
  height: 10vh;
  font-size: 20px;
  text-align: center;
  line-height: 10vh;
}
.text-count {
  position: absolute;
  bottom: 10vh;
  left: 480px;
}
#title {
  position: absolute;
  top: 60px;
  left: 170px;
  background-color: rgb(19, 19, 19);
  padding: 0 8px;
}
.map-overlay {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  position: absolute;
  width: 200px;
  top: 60px;
  left: 220px;
  padding: 10px;
  display: none;
}
.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
.legend {
  background-color: #303030;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 10px;
  position: absolute;
  bottom: 15px;
  left: 270px;
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
