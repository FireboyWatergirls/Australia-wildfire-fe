<template>
  <div id="cpi"></div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'cpi',
  data() {
    return {}
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.drawLineChart('cpi')
    },
    drawLineChart(id) {
      let myChart = this.$echarts.init(document.getElementById(id))
      // console.log('1')
      $.getJSON('./static/data/cpi.json', function(data) {
        // console.log(data.series[2])
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line',
              lineStyle: {
                type: 'solid'
              }
            }
          },
          legend: {
            show: true,
            top: '6%'
          },
          title: {
            text: 'cpi change in Autralia',
            x: 'center'
          },
          xAxis: {
            name: 'time',
            type: 'category',
            boundaryGap: true,
            data: [
              '2000-S1',
              '2000-S2',
              '2000-S3',
              '2000-S4',
              '2001-S1',
              '2001-S2',
              '2001-S3',
              '2001-S4',
              '2002-S1',
              '2002-S2',
              '2002-S3',
              '2002-S4',
              '2003-S1',
              '2003-S2',
              '2003-S3',
              '2003-S4',
              '2004-S1',
              '2004-S2',
              '2004-S3',
              '2004-S4',
              '2005-S1',
              '2005-S2',
              '2005-S3',
              '2005-S4',
              '2006-S1',
              '2006-S2',
              '2006-S3',
              '2006-S4',
              '2007-S1',
              '2007-S2',
              '2007-S3',
              '2007-S4',
              '2008-S1',
              '2008-S2',
              '2008-S3',
              '2008-S4',
              '2009-S1',
              '2009-S2',
              '2009-S3',
              '2009-S4',
              '2010-S1',
              '2010-S2',
              '2010-S3',
              '2010-S4',
              '2011-S1',
              '2011-S2',
              '2011-S3',
              '2011-S4',
              '2012-S1',
              '2012-S2',
              '2012-S3',
              '2012-S4',
              '2013-S1',
              '2013-S2',
              '2013-S3',
              '2013-S4',
              '2014-S1',
              '2014-S2',
              '2014-S3',
              '2014-S4',
              '2015-S1',
              '2015-S2',
              '2015-S3',
              '2015-S4',
              '2016-S1',
              '2016-S2',
              '2016-S3',
              '2016-S4',
              '2017-S1',
              '2017-S2',
              '2017-S3',
              '2017-S4',
              '2018-S1',
              '2018-S2',
              '2018-S3',
              '2018-S4',
              '2019-S1',
              '2019-S2',
              '2019-S3',
              '2019-S4'
            ]
          },
          yAxis: {
            name: 'cpi',
            type: 'value'
          },
          series: [
            {
              name: 'Major fire',
              type: 'bar',
              emphasis: {
                itemStyle: {
                  shadowBlur: 20,
                  shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
              },
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#ea5455' // 改变颜色
                  }
                }
              },
              data: data.series[1]
            },
            {
              name: 'cpi',
              type: 'line',
              emphasis: {
                itemStyle: {
                  shadowBlur: 20,
                  shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
              },
              data: data.series[0],
              symbolSize: 1,
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#00adb5' // 改变颜色
                  }
                }
              }
            }
          ]
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#cpi {
  width: 1000px;
  height: 400px;
  left: 200px;
}
</style>
