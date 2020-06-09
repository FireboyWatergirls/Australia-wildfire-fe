<template>
  <div id="deathpie"></div>
</template>

<script>
export default {
  name: 'deathpie',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawLineChart('deathpie')
    },
    drawLineChart(id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      myChart.setOption({
        textStyle: {
          color: '#fff'
        },
        title: {
          text: 'Deaths from bushfires',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'deaths',
            type: 'pie',
            radius: '65%',
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {'value': 3, 'name': '2010'},
              {'value': 1, 'name': '2011'},
              {'value': 6, 'name': '2013'},
              {'value': 4, 'name': '2014'},
              {'value': 2, 'name': '2015'},
              {'value': 10, 'name': '2016'},
              {'value': 2, 'name': '2017'},
              {'value': 35, 'name': '2019'}
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#deathpie {
  width: 16vw;
  height: 32vh;
}
</style>
