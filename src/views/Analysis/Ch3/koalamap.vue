<template>
  <div>
    <div id="koala"></div>
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
import 'echarts-gl'
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
      this.chart = this.$echarts.init(document.getElementById('koala'))
      this.options = {
        title: {
          text: 'The Worrying Decline of Koala Populations',
          subtext:
            'Decline of koala populations in Australian states over six generations',
          itemGap: 20,
          y: 'top',
          x: 'center',
          textStyle: {
            fontSize: 20,
            color: '#fff'
          },
          subtextStyle: {
            fontSize: 16
          }
        },
        mapbox: {
          zoom: 3.5,
          center: [133.959464, -26.998938],
          style: 'mapbox://styles/mapbox/dark-v10',
          roam: true
        },
        visualMap: {
          show: true,
          type: 'continuous',
          min: 3,
          max: 55,
          dimension: 2,
          top: '70%',
          inRange: {
            color: ['#ff9d76', '#ef4339', '#b22222', '#6f0000']
          }
        },
        series: [
          {
            type: 'scatter3D',
            coordinateSystem: 'mapbox',
            data: [
              [144.29398461505076, -23.033295020544443, 53, 'Queensland'],
              [145.70023461505104, -32.35589334417238, 26, 'New South Wales'],
              [144.64554711505076, -36.416033478505405, 14, 'Victoria'],
              [135.06546899005087, -28.491928131349695, 3, 'South Australia']
            ],
            symbolSize: function(val) {
              return val[2] * 2
            },
            label: {
              show: true,
              position: 'inside',
              formatter: function(obj) {
                // console.log(data);
                let val = obj.value
                return val[3] + '：' + -1 * val[2] + '%'
              }
            },
            zlevel: 100
          }
        ]
      }
      global.mapboxgl = mapboxgl
      global.mapboxChart = this.chart
      global.mapboxOption = this.options
      this.$nextTick(() => {
        const { mapboxOption, mapboxChart } = global
        mapboxChart.setOption(mapboxOption)
        // 获取地图map对象
        const mapboxMap = mapboxChart
          .getModel()
          .getComponent('mapbox3D')
          .getMapbox()
        global.mapboxMap = mapboxMap
        this.$emit('ready', { mapboxgl, mapboxMap })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
#koala {
  width: 1000px;
  height: 700px;
  // margin: 0 auto;
  padding-bottom: 20px;
}
#count {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.3);
  top: 566px;
  left: 320px;
  width: 80px;
  height: 56px;
  font-size: 24px;
  text-align: center;
  line-height: 56px;
  background-color: rgba(255, 255, 255, 0.1);
}
#text {
  position: absolute;
  top: 510px;
  left: 220px;
  width: 300px;
  height: 70px;
  font-size: 20px;
  text-align: center;
  line-height: 70px;
}
</style>
