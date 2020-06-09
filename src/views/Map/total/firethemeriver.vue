<template>
  <div id="fire"></div>
</template>

<script>
import data from './data/total_fire_theme'
export default {
  name: 'fire',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawLineChart('fire')
    },
    drawLineChart(id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: 'rgba(250,250,250,0.2)',
              width: 1,
              type: 'solid'
            }
          }
        },
        grid: {
          y2: '18'
        },
        textStyle: {
          color: '#fff'
        },
        title: {
          text: 'the change of fire counts in each year',
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          data: ['queensland', 'victoria', 'nsw'],
          textStyle: {
            color: '#fff'
          }
        },
        singleAxis: {
          max: 'dataMax',
          axisLine: {
            lineStyle: { color: 'rgb(250,250,250)' } // x轴坐标轴颜色
          },
          min: 'dataMin'
        },
        series: [
          {
            type: 'themeRiver',
            emphasis: {
              itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.8)'
              }
            },
            data: data
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#fire {
  width: 81vw;
  height: 32vh;
}
</style>
