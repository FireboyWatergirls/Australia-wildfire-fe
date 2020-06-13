<template>
  <div id="spe"></div>
</template>

<script>
// import data from './data/protect3'
import axios from 'axios'
export default {
  name: 'spe',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawBar('spe')
    },
    drawBar(id) {
      axios.get('./static/data/protect3.json') // 这里换成url
        // then获取成功： response成功后的返回值
        .then(response => {
          // console.log(response)
          this.oftenGoods = response.data
          console.log(this.oftenGoods)
          let myChart = this.$echarts.init(document.getElementById(id))
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
            legend: {
              show: true,
              top: '4%',
              x: 'center'
            },
            toolbox: {
              left: 'right',
              feature: {
                saveAsImage: {},
                dataZoom: {}
              }
            },
            title: {
              text: 'The damage of the species in Australia'
            },
            tooltip: {
              trigger: 'item'
            },
            grid: {
              top: '12%'
            },
            xAxis: {
              // 物种：plant, mammal,....
              type: 'category',
              splitLine: {
                show: false
              },
              axisLabel: {
                interval: 0
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
              ],
              splitArea: {
                show: true
              }
            },
            yAxis: [
              {
                type: 'value',
                name: 'percentage',
                splitLine: {
                  show: false
                },
                min: 10,
                max: 100,
                position: 'left'
              },
              {
                type: 'log',
                name: 'number of species',
                min: 100,
                max: 300000,
                splitLine: {
                  show: false
                },
                position: 'right'
              },
              {
                type: 'value',
                name: 'effect rate',
                splitLine: {
                  show: false
                },
                position: 'right',
                offset: 90
              }
            ],
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
                yAxisIndex: 0,
                itemStyle: {
                  normal: {
                    color: '#c6f1e7'
                  }
                },
                data: this.oftenGoods.Vulnerable,
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
                yAxisIndex: 0,
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
                data: this.oftenGoods.Listed,
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
                yAxisIndex: 0,
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
                data: this.oftenGoods.Endangered,
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
                yAxisIndex: 0,
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
                data: this.oftenGoods.Critically,
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
                name: 'species number',
                type: 'line',
                yAxisIndex: 1,
                label: {
                  emphasis: {
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      color: '#e84545'
                    }
                  }
                },
                symbolSize: 1,
                data: [800, 4400, 200, 472, 287000, 381, 379, 850]
              },
              {
                name: 'effect rate',
                type: 'line',
                yAxisIndex: 2,
                label: {
                  emphasis: {
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    lineStyle: {
                      color: '#53354a'
                    }
                  }
                },
                symbolSize: 1,
                data: [18.75, 0.75, 2, 0.85, 0.0955, 0.26, 4.2, 1.06]
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
#spe {
  width: 1000px;
  height: 800px;
}
</style>
