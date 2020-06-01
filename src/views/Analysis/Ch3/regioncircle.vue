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
        legend: {
          show: true,
          orient: 'vertical',
          x: 'left',
          top: '4%',
          data: [
            'Australian Capital Territory',
            'New South Wales',
            'Northern Territory',
            'Queensland',
            'South Australia',
            'Tasmania',
            'Victoria',
            'Western Australia'
          ]
        },
        title: {
          text: 'damages in the bushfire',
          x: 'center'
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
                fontSize: '30',
                fontWeight: 'bold',
                color: '#000'
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
                fontSize: '30',
                fontWeight: 'bold',
                color: '#000'
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
                fontSize: '30',
                fontWeight: 'bold',
                color: '#000'
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
                fontSize: '30',
                fontWeight: 'bold',
                color: '#000'
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
  width: 600px;
  height: 600px;
  margin: 0 auto;
}
</style>
