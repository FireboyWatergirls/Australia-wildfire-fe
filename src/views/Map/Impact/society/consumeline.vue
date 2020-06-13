<template>
  <div id="consume-line"></div>
</template>

<script>
// import data from './data/consume'
import axios from 'axios'
export default {
  name: 'consume-line',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawLineChart('consume-line')
    },
    drawLineChart(id) {
      axios.get('./static/data/consume.json')
        .then(response => {
          this.oftenGoods = response.data
          console.log(this.oftenGoods)
          let myChart = this.$echarts.init(document.getElementById(id))
          myChart.setOption({
            textStyle: {
              color: '#fff'
            },
            grid: {
              x: 55,
              y: 55,
              x2: 45,
              y2: 25
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'line',
                lineStyle: {
                  color: 'rgba(0,0,0,0.2)',
                  width: 1,
                  type: 'solid'
                }
              }
            },
            title: {
              text: 'Consumer confidence index changes',
              textStyle: {
                color: '#fff'
              },
              x: 'center'
            },
            toolbox: {
              top: 25,
              // right: 20,
              feature: {
                magicType: {
                  type: ['line', 'bar']
                },
                dataView: {},
                saveAsImage: {
                  pixelRatio: 2
                }
              },
              iconStyle: {
                emphasis: {
                  textPosition: 'top'
                  // textAlign: 'right'
                }
              }
            },
            xAxis: {
              name: 'time',
              type: 'category',
              boundaryGap: true,
              axisLine: {
                lineStyle: { color: 'rgb(250,250,250)' } // x轴坐标轴颜色
              },
              data: [
                '2018-02',
                '2018-03',
                '2018-04',
                '2018-05',
                '2018-06',
                '2018-07',
                '2018-08',
                '2018-09',
                '2018-10',
                '2018-11',
                '2018-12',
                '2019-01',
                '2019-02',
                '2019-03',
                '2019-04',
                '2019-05',
                '2019-06',
                '2019-07',
                '2019-08',
                '2019-09',
                '2019-10',
                '2019-11',
                '2019-12',
                '2020-01',
                '2020-02'
              ]
            },
            yAxis: {
              name: 'Consumer confidence',
              type: 'value',
              axisLine: {
                lineStyle: { color: 'rgb(250,250,250)' } // x轴坐标轴颜色
              },
              min: 99
            },
            series: [
              {
                name: 'Consumer sentiment index',
                type: 'line',
                emphasis: {
                  itemStyle: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                  }
                },
                data: this.oftenGoods.series[0],
                itemStyle: {
                  normal: {
                    lineStyle: {
                      color: '#f07b3f' // 改变区域颜色
                    }
                  }
                }
              }
            ]
          })
        })
        // 获取失败
        .catch(error => {
          console.log(error)
          alert('网络错误，不能访问')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#consume-line {
  width: 38vw;
  height: 180px;
}
</style>
