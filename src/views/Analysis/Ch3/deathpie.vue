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
        title: {
          text: 'Deaths in the bushfire',
          x: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'death',
            type: 'pie',
            radius: '60%',
            avoidLabelOverlap: false,
            label: {
              show: true
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 34, name: 'direct' },
              { value: 417, name: 'indirect (smoke inhalation)' }
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
  width: 430px;
  height: 350px;
  margin: 0 auto;
}
</style>
