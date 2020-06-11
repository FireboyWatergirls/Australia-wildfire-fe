<template>
  <div id="aircraft-line"></div>
</template>

<script>
import data from './data/aircraft'
export default {
  name: 'aircraft-line',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawLineChart('aircraft-line')
    },
    drawLineChart(id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          position: function(pt) {
            return ['80%', '90%']
          }
        },
        title: {
          left: 'center',
          text: 'The change of the number of flight in Australia'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          top: '5%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            'Jan-15',
            'Feb-15',
            'Mar-15',
            'Apr-15',
            'May-15',
            'Jun-15',
            'Jul-15',
            'Aug-15',
            'Sep-15',
            'Oct-15',
            'Nov-15',
            'Dec-15',
            'Jan-16',
            'Feb-16',
            'Mar-16',
            'Apr-16',
            'May-16',
            'Jun-16',
            'Jul-16',
            'Aug-16',
            'Sep-16',
            'Oct-16',
            'Nov-16',
            'Dec-16',
            'Jan-17',
            'Feb-17',
            'Mar-17',
            'Apr-17',
            'May-17',
            'Jun-17',
            'Jul-17',
            'Aug-17',
            'Sep-17',
            'Oct-17',
            'Nov-17',
            'Dec-17',
            'Jan-18',
            'Feb-18',
            'Mar-18',
            'Apr-18',
            'May-18',
            'Jun-18',
            'Jul-18',
            'Aug-18',
            'Sep-18',
            'Oct-18',
            'Nov-18',
            'Dec-18',
            'Jan-19',
            'Feb-19',
            'Mar-19',
            'Apr-19',
            'May-19',
            'Jun-19',
            'Jul-19',
            'Aug-19',
            'Sep-19',
            'Oct-19',
            'Nov-19',
            'Dec-19',
            'Jan-20',
            'Feb-20'
          ]
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          max: 'dataMax'
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10,
            handleIcon:
              'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: [
          {
            name: 'Domesticate In',
            type: 'line',
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            data: data.series[0]
          },
          {
            name: 'Domesticate Out',
            type: 'line',

            data: data.series[5]
          },
          {
            name: 'Domesticate Total',
            type: 'line',

            data: data.series[1]
          },
          {
            name: 'International In',
            type: 'line',

            data: data.series[2]
          },
          {
            name: 'International Out',
            type: 'line',

            data: data.series[3]
          },
          {
            name: 'International Total',
            type: 'line',

            data: data.series[4]
          },
          {
            name: 'Main fire',
            type: 'bar',
            data: data.series[6]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#aircraft-line {
  width: 1000px;
  height: 700px;
}
</style>
