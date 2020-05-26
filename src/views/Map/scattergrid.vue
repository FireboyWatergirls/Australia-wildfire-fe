<template>
  <div id="scatter-grid"></div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'scatter-grid',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawScatterGrid('scatter-grid')
    },
    drawScatterGrid(id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      $.getJSON('./static/data/protect3.json', function(data) {
        let schema = [
          { name: 'Type', index: 0, text: 'Type: ' },
          { name: 'tmp', index: 1, text: 'tmp' },
          {
            name: 'Percentage',
            index: 2,
            text:
              'Percentage of the species known distribution within fire affected areas: '
          },
          { name: 'Sci-name', index: 3, text: 'Scientific Name: ' },
          { name: 'Com-name', index: 4, text: 'Common Name: ' },
          { name: 'Thre-Sta', index: 5, text: 'Threatened Status: ' },
          { name: 'Range', index: 6, text: 'Range states and territories: ' }
        ]
        myChart.setOption({
          textStyle: {
            color: '#fff'
          },
          legend: {
            show: true,
            y: 'top',
            data: [
              'Vulnerable',
              'Critically Endangered',
              'Endangered',
              'Listed'
            ]
          },
          toolbox: {
            left: 'left',
            feature: {
              saveAsImage: {},
              dataZoom: {}
            }
          },
          title: {
            text: 'The damage of different species'
          },
          tooltip: {
            trigger: 'item'
          },
          xAxis: {
            // 物种：plant, mammal,....
            type: 'category',
            splitLine: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate: 30,
              fontSize: 9
            },
            axisLine: {
              lineStyle: { color: 'rgb(250,250,250)' } // x轴坐标轴颜色
            },
            data: [
              'Bird',
              'Fish',
              'Frog',
              'Insect',
              'Plant',
              'Spider',
              'Mammal',
              'Reptile'
            ]
          },
          yAxis: {
            // 地区：WA，NSW，...
            type: 'value',
            name: 'percentage',
            axisLine: {
              lineStyle: { color: 'rgb(250,250,250)' } // x轴坐标轴颜色
            },
            splitLine: {
              show: false
            },
            min: 10,
            max: 100
          },
          series: [
            {
              name: 'Vulnerable',
              type: 'scatter',
              label: {
                emphasis: {
                  show: false
                }
              },

              symbolSize: function(val) {
                // 大小由受影响百分比决定
                if (val[2] === '>80%') {
                  return 20
                } else if (val[2] === '50 to <80%') {
                  return 15
                } else if (val[2] === '30 to <50%') {
                  return 10
                } else if (val[2] === '10 to <30%') {
                  return 5
                }
              },
              itemStyle: {
                normal: {
                  color: '#c6f1e7'
                }
              },
              data: data.Vulnerable,
              tooltip: {
                formatter: function(obj) {
                  var value = obj.value
                  var s = ''
                  s += schema[4].text + value[4] + '<br/>'
                  s += schema[3].text + value[3] + '<br/>'
                  s += schema[5].text + value[5] + '<br/>'
                  s += schema[6].text + value[6]

                  return s
                }
              }
            },
            {
              name: 'Listed',
              type: 'scatter',
              label: {
                emphasis: {
                  show: false
                }
              },

              symbolSize: function(val) {
                // 大小由受影响百分比决定
                if (val[2] === '>80%') {
                  return 20
                } else if (val[2] === '50 to <80%') {
                  return 15
                } else if (val[2] === '30 to <50%') {
                  return 10
                } else if (val[2] === '10 to <30%') {
                  return 5
                }
              },
              itemStyle: {
                normal: {
                  color: '#62d2a2'
                }
              },
              data: data.Listed,
              tooltip: {
                formatter: function(obj) {
                  var value = obj.value
                  var s = ''
                  s += schema[4].text + value[4] + '<br/>'
                  s += schema[3].text + value[3] + '<br/>'
                  s += schema[5].text + value[5] + '<br/>'
                  s += schema[6].text + value[6]

                  return s
                }
              }
            },
            {
              name: 'Endangered',
              type: 'scatter',
              label: {
                emphasis: {
                  show: false
                }
              },

              symbolSize: function(val) {
                // 大小由受影响百分比决定
                if (val[2] === '>80%') {
                  return 20
                } else if (val[2] === '50 to <80%') {
                  return 15
                } else if (val[2] === '30 to <50%') {
                  return 10
                } else if (val[2] === '10 to <30%') {
                  return 5
                }
              },
              itemStyle: {
                normal: {
                  color: '#ff7e67'
                }
              },
              data: data.Endangered,
              tooltip: {
                formatter: function(obj) {
                  var value = obj.value
                  var s = ''
                  s += schema[4].text + value[4] + '<br/>'
                  s += schema[3].text + value[3] + '<br/>'
                  s += schema[5].text + value[5] + '<br/>'
                  s += schema[6].text + value[6]

                  return s
                }
              }
            },
            {
              name: 'Critically Endangered',
              type: 'scatter',
              label: {
                emphasis: {
                  show: false
                }
              },

              symbolSize: function(val) {
                // 大小由受影响百分比决定
                if (val[2] === '>80%') {
                  return 20
                } else if (val[2] === '50 to <80%') {
                  return 15
                } else if (val[2] === '30 to <50%') {
                  return 10
                } else if (val[2] === '10 to <30%') {
                  return 5
                }
              },
              itemStyle: {
                normal: {
                  color: '#fa4659'
                }
              },
              data: data.Critically,
              tooltip: {
                formatter: function(obj) {
                  var value = obj.value
                  var s = ''
                  s += schema[4].text + value[4] + '<br/>'
                  s += schema[3].text + value[3] + '<br/>'
                  s += schema[5].text + value[5] + '<br/>'
                  s += schema[6].text + value[6]

                  return s
                }
              }
            }
          ],
          animationDelay: function(idx) {
            return idx * 10
          },
          animationDelayUpdate: function(idx) {
            return idx * 10
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#scatter-grid {
  width: 100%;
  height: 100%;
}
</style>
