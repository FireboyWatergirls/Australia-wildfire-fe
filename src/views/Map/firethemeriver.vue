<template>
  <div id="fire-themeriver"></div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'fire-themeriver',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawLineChart('fire-themeriver')
    },
    drawLineChart(id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      // console.log('1')
      $.getJSON('./static/data/total_fire_theme.json', function(data) {
        // console.log(data.series[2])
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
          textStyle: {
            color: '#fff'
          },
          title: {
            text: 'the change of fire counts in each year'
          },
          legend: {
            data: ['queensland', 'victoria', 'nsw']
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
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#fire-themeriver {
  width: 100%;
  height: 100%;
}
</style>
