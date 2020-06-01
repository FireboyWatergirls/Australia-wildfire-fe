<template>
  <div>
    <div id="businesses"></div>
    <div id="count">
      <font color="#b22222">
        <strong>26%</strong>
      </font>
    </div>
    <div id="text">
      <font color="#fff">
        <strong>Overall Impacts</strong>
      </font>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'echarts-gl'
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
      this.chart = this.$echarts.init(document.getElementById('businesses'))
      this.options = {
        title: {
          text: 'Businesses affected by the bushfires around Australia by State',
          itemGap: 20,
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: 20,
            color: '#fff'
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
          min: 10,
          max: 40,
          dimension: 2,
          top: '70%',
          left: '1%',
          inRange: {
            color: ['#ff9d76', '#ef4339', '#b22222', '#6f0000']
          }
        },
        series: [
          {
            type: 'scatter3D',
            coordinateSystem: 'mapbox',
            data: [
              [146.364582, -32.530419, 35, 'New South Wales'],
              [144.120112, -37.110119, 24, 'Victoria'],
              [143.494604, -23.397753, 25, 'Queensland'],
              [135.105437, -29.617118, 21, 'South Australia'],
              [123.257577, -26.814481, 16, 'Western Australia'],
              [146.548555, -42.115308, 11, 'Tasmania']
            ],
            symbolSize: function(val) {
              let y = val[2] * val[2] * val[2]
              y = Math.sqrt(y)
              y = y / 2.5
              return y
              // return val[2]
            },
            label: {
              show: true,
              position: 'inside',
              formatter: function(obj) {
                // console.log(data);
                let val = obj.value
                return val[3] + '：' + val[2] + '%'
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
#businesses {
  width: 1000px;
  height: 700px;
  margin: 0 auto;
  padding-bottom: 20px;
}
#count {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.3);
  top: 566px;
  left: 320px;
  z-index: 20;
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
  z-index: 20;
  width: 300px;
  height: 70px;
  font-size: 20px;
  text-align: center;
  line-height: 70px;
}
</style>
