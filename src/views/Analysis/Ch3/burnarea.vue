<template>
  <div id="burnarea"></div>
</template>

<script>
export default {
  name: 'burnarea',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawChart('burnarea')
    },
    drawChart(id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          top: 'top',
          right: '4%',
          feature: {
            saveAsImage: {},
            magicType: {
              type: ['line', 'bar']
            },
            dataView: {}
          }
        },
        title: {
          text:
            'Area of bushfire damage in Australia as of March 2020, by land type',
          subtext: '(in 1,000 hectares)',
          x: 'center'
        },
        xAxis: {
          name: 'type',
          type: 'category',
          boundaryGap: true,
          axisLabel: {
            interval: 0,
            rotate: 0,
            fontSize: 10
          },
          data: [
            'Conservation',
            'Agriculture',
            'Forests/plantation',
            'Intensive residential/commercial',
            'Rural residential/commercial'
          ]
        },
        yAxis: {
          name: 'Area in thousand hectares',
          type: 'value'
        },
        series: [
          {
            name: 'Area in thousand hectares',
            type: 'bar',
            emphasis: {
              itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
              }
            },
            data: [4305.49, 2458.33, 1782, 38.07, 20.13]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#burnarea {
  width: 1000px;
  height: 500px;
}
</style>
