<template>
  <div id="fundingbar"></div>
</template>

<script>
export default {
  name: 'fundingbar',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawLineChart('fundingbar')
    },
    drawLineChart(id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        title: {
          text: 'Value of allocated bushfire recovery funding by the government in Australia as of January 2020, by program',
          subtext: '(in million Australian dollars)',
          x: 'center'
        },
        yAxis: [
          {
            type: 'category',
            data: [
              'Primary producers',
              'Mental health',
              'Local governments',
              'Wildlife',
              'Charities',
              'Rural financial counsellors',
              'Financial counselling',
              'Children\'s disaster payments',
              'Children\'s mental health'
            ],
            inverse: true,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              margin: 10
            }
          }
        ],
        xAxis: [
          {
            type: 'value',
            axisLabel: {
              margin: 10
            }
          }
        ],
        series: [
          {
            name: 'pay',
            type: 'bar',
            data: [100, 76, 60, 50, 40, 15, 10, 8, 8],
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                textStyle: {
                  color: 'white' // color of value
                }
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#fundingbar {
  width: 1000px;
  height: 400px;
  // left: 200px;
}
</style>
