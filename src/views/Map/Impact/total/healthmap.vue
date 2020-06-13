<template>
  <div>
    <div id="regionmap"></div>
    <div id="title">
      <font color="#fff" size="5px">
        <strong>Estimated health burden attributable to bushfire</strong>
      </font>
    </div>
    <div id="map-overlay" class="map-overlay"></div>
    <div id="state-legend" class="legend">
      <h4>
        Estimated number of cases
        <br />(95% confidence intervals)
      </h4>
      <div>
        <span style="background-color: #f1e3cb"></span>1~300
      </div>
      <div>
        <span style="background-color: #f9b384"></span>301~1000
      </div>
      <div>
        <span style="background-color: #ca5116"></span>1001~2000
      </div>
      <div>
        <span style="background-color: #581c0c"></span>2000~
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
export default {
  name: 'regionmap',
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.map = new mapboxgl.Map({
        container: 'regionmap',
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
                  id: 'death',
                  type: 'fill',
                  source: 'australia',
                  paint: {
                    'fill-color': [
                      'interpolate',
                      ['linear'],
                      ['get', 'tdeath'],
                      0,
                      '#555555',
                      1,
                      '#f1e3cb',
                      300,
                      '#f9b384',
                      1000,
                      '#ca5116',
                      2000,
                      '#581c0c'
                    ],
                    'fill-opacity': 0.75
                  }
                },
                'waterway-label'
              )
              .on('click', 'death', e => {
                this.map.getCanvas().style.cursor = 'pointer'
                let feature = e.features[0]
                overlay.innerHTML = ''
                let title = document.createElement('strong')
                title.textContent = feature.properties.STATE_NAME
                let deal = document.createElement('div')
                deal.textContent = 'Excess deaths:' + feature.properties.excess
                let Somewhat = document.createElement('div')
                Somewhat.textContent =
                  'Hospital admisshions, cardiovascular:' +
                  feature.properties.cardio
                let Little = document.createElement('div')
                Little.textContent =
                  'Hospital admisshions, respiratory:' + feature.properties.resp
                let asthma = document.createElement('div')
                Little.textContent =
                  'Emergency department attendances, asthma:' +
                  feature.properties.asthma
                overlay.appendChild(title)
                overlay.appendChild(deal)
                overlay.appendChild(Somewhat)
                overlay.appendChild(Little)
                overlay.appendChild(asthma)
                overlay.style.display = 'block'
                popup
                  .setLngLat(e.lngLat)
                  .setText(feature.properties.STATE_NAME)
                  .addTo(this.map)
              })
              .on('mouseenter', 'death', () => {
                this.map.getCanvas().style.cursor = 'pointer'
              })
              .on('mouseleave', 'death', () => {
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
      // console.log({oftenGoods})
    }
  }
}
</script>

<style lang="scss" scoped>
#regionmap {
  width: 100%;
  height: 100%;
}
#title {
  position: absolute;
  top: 60px;
  left: 250px;
  background-color: rgb(19, 19, 19);
  padding: 0 8px;
}
.map-overlay {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  position: absolute;
  width: 300px;
  top: 100px;
  left: 120px;
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
  box-shadow: 0 1px 2px rgba(100, 100, 100, 0.1);
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
