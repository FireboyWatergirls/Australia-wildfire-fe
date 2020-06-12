<template>
  <div id="region-circle"></div>
</template>

<script>
import data from './data/2019_fires4'
export default {
  name: 'region-circle',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawLineChart('region-circle')
    },
    drawLineChart(id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      myChart.setOption({
        textStyle: {
          color: '#fff'
        },
        legend: {
          show: true,
          top: '6%',
          orient: 'vertical',
          left: 6,
          data: [
            'Australian Capital Territory',
            'New South Wales',
            'Northern Territory',
            'Queensland',
            'South Australia',
            'Tasmania',
            'Victoria',
            'Western Australia'
          ],
          textStyle: {
            color: '#fff'
          }
        },
        title: {
          text: 'damages in the bushfire',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'human_fatalities',
            type: 'pie',
            radius: ['5%', '20%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: data.series[0]
          },
          {
            name: 'homes_destroyed',
            type: 'pie',
            radius: ['30%', '45%'],
            avoidLabelOverlap: true,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: data.series[1]
          },
          {
            name: 'hectacres_burned',
            type: 'pie',
            radius: ['50%', '65%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: data.series[2]
          },
          {
            name: 'acres_burned',
            type: 'pie',
            radius: ['70%', '85%'],
            avoidLabelOverlap: true,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: data.series[3]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#region-circle {
  width:30vw;
  height: 55vh;
}
</style>
