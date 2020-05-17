<!-- 1900到2019年澳大利亚温度、降雨量变化图表 -->

<template>
  <div id="ch1">
    <div class="title">
      <h1>Why is there</h1>
      <h1>a violent wildfire this time</h1>
      <!-- <h1>Weather & Vegetation</h1> -->
    </div>
    <div class="Introduction">
      <h2>Introduction</h2>
      <p>Mountain fires are not new in Australia, because Australia is too dry-the Tropic of Cancer runs through the central part of the continent, and is controlled by the subtropical high belt with little rain all year round. More than 80% of the area has an average annual rainfall of less than 600 mm. In summer and autumn each year, continued high temperatures and strong winds increase dryness, and a flash of lightning can ignite a wildfire.</p>
      <p>In the tens of thousands of years of history in mainland Australia, mountain fires have been regarded as an important part of maintaining ecosystems. Many wild animals and plants depend on mountain fires for reproduction. For example, eucalyptus is born to "burn", its seed pods will open when burning, the seedlings inside spread in the fire. It can thrive in the soil covered by ashes. Therefore, in the vast majority of cases, locals will not think that they are "fighting" with mountain fires, but actively explore ways of coexisting with them.</p>
      <p>But the recent situation is very different. In September 2019, Queensland and New South Wales on the east coast ushered in thousands of bushfires early-in previous years, the fire could not reach this scale until November. In November, satellite images showed that the mountain fire had completely enclosed Sydney and gradually spread to the south. From July 1, 2019 to January 8, 2020, 4.9 million hectares of land in New South Wales are or have been burning. It's only half a summer now, but it has far exceeded the state's average burning area in the past 50 years-2.8 million hectares. The rapid expansion of the burning area has made people realize that mountain fires are no longer just staying in forests and grasslands as they were in previous years.</p>
      <p>Australia has wildfires every year. Why is it out of control this year?</p>
    </div>
    <div class="Temperature1">
      <h2>Temperature</h2>
      <p>In 2019, Australia experienced the hottest year, and the temperature in Australia has skyrocketed in the past 110 years.</p>
    </div>
    <div class="pic1" id="main1"></div>
    <div class="pic3" id="main3"></div>
    <div class="Temperature2">
      <p>From the picture we can see that since 2012, above-average temperatures in Australia have become common. The extreme change in climate comes from a seemingly small rise. Since 1910, Australia ’s temperature has risen by 1.4 degrees Celsius (most of which occurred after the mid-20th century).</p>
      <p>But this seemingly small increase has exacerbated the forest fires in Australia. The tragedy originated from this.</p>
      <p>In 2019, Australia experienced the hottest year on record! The national average annual maximum temperature is 2.09 degrees Celsius higher than the average level, much higher than the historical record of 1.59 degrees Celsius set in 2013.</p>
      <p>In 2019, the national average temperature actually exceeded 40 degrees Celsius for 11 days. There were only two such days in 1972, and two in 2013, but there were as many as seven in the summer of 2018/19.</p>
    </div>
    <div class="Rainfall1">
      <h2>Rainfall</h2>
      <p>In 2019, Australia experienced the driest year.</p>
    </div>
    <div class="pic2" id="main2"></div>
    <div class="Rainfall2">
      <p>The disaster is not just high temperature. Australia also suffered the driest year to date. The average rainfall in the country is 277.72 mm, which is 40% lower than the average level, breaking the 314.46 mm record set in 1902. After several consecutive years of below-average rainfall in Queensland and New South Wales, much of southern Australia was particularly dry in the second half of last year.</p>
      <h2>Australia experiences droughts while experiencing high temperatures</h2>
      <p>
        Karl Braganza, director of climate monitoring, said: "In Australia, it is quite common for dry and warm climate conditions to couple with each other." Australia experiences high temperatures while experiencing drought.
        "Nevertheless, we have recorded rainfall since 1900 and temperature since 1910, and we have never seen overlap ... This is the hottest year on record and the driest since record One year. "
      </p>
      <p>This seemingly small rise has caused dramatic changes in the climate pattern. Rising temperatures and extreme dry weather have made the forest fires that swept across parts of the country more intense, leaving a blackened land, causing unimaginable Grief.</p>
      <p>More intense, more frequent, and longer-lasting forest fire seasons lasting for months seem to be the new normal. We cannot treat this as an accident, it always attracts our attention.</p>
      <p>Karl Braganza said that particularly dry and hot weather in 2019 cannot be considered an accident. Australia's extremely high temperature is five times that of the mid-20th century. People have to pay for this climate change!</p>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  methods: {
    drawLine1(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title: {
          text: 'Temperature Anomaly',
          x: 'center'
        },
        backgroundColor: '#FFFFFF',
        tooltip: {
          trigger: 'axis'
        },
        // legend: {
        //   data: ['现存病例']
        // },
        grid: {
          left: '8%',
          right: '8%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          name: 'year',
          type: 'category',
          boundaryGap: false,
          data: ['1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

        },
        yAxis: {
          name: 'centigrade',
          type: 'value'
        },
        series: [
          {
            name: 'Temperature Anomaly',
            type: 'line',
            // stack: '总量1',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 5,
                  type: 'solid' // 'dotted'虚线 'solid'实线
                }
              }
            },
            symbol: 'none',
            data: [-0.71, -0.51, 0, -0.71, 0.18, 0.22, -0.76, -1.43, -0.34, 0.02, -0.82, -0.44, -0.22, -0.18, -0.52, -0.61, 0.03, -0.27, 0.43, -0.63, -0.31, -0.59, -0.33, -0.52, -0.44, -0.33, -0.02, -0.17, 0.32, -0.81, 0.15, -0.68, 0.04, -0.38, -0.04, -0.18, -0.27, -0.39, -0.08, -0.88, -0.77, -0.13, -0.28, -0.22, -0.33, -0.72, -1.11, 0.38, 0.11, 0.23, -0.69, 0.29, -0.08, -0.31, -0.21, 0.41, -0.56, -0.1, -0.67, 0.15, 0.15, -0.25, 0.44, 0.07, -1.05, -0.29, -0.52, 0.17, -0.5, 0.43, 0.93, 0.17, 0.21, 0.15, -0.46, 0.3, 0.17, 0.12, 0.64, -0.23, 0.37, 0.71, -0.14, 0.07, 0.65, -0.05, 0.63, 0.24, 0.65, 0.19, -0.33, 0.08, 1.33, 0.76, 0.64, 1.31, 0.64, 0.85, 0.57, 1.13, -0.09, -0.1, 0.64, 1.59, 1.3, 1.09, 0.84, 1.42, 1.55, 2.09]
          }
        ]
      })
    },
    drawLine2(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title: {
          text: 'Rainfull',
          x: 'center'
        },
        backgroundColor: '#FFFFFF',
        tooltip: {
          trigger: 'axis'
        },
        // legend: {
        //   data: ['现存病例']
        // },
        grid: {
          left: '8%',
          right: '8%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          name: 'year',
          type: 'category',
          boundaryGap: false,
          data: ['1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

        },
        yAxis: {
          name: 'Rainfull/mm',
          type: 'value'
        },
        series: [
          {
            name: 'Rainfull',
            type: 'line',
            // stack: '总量1',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 5,
                  type: 'solid' // 'dotted'虚线 'solid'实线
                }
              }
            },
            symbol: 'none',
            data: [373.4, 406.65, 314.46, 526.58, 513.16, 329.02, 490.51, 460.69, 461.04, 444.92, 539.69, 424.31, 370.62, 436.9, 419.74, 374.87, 523.78, 571.04, 424.25, 357, 508.88, 543.22, 415.26, 412.16, 402.29, 424.43, 414.59, 417.51, 357.38, 372.64, 490.87, 434.8, 387.15, 444.43, 438.42, 344.7, 399.96, 382.23, 360.8, 490.32, 393.24, 471.22, 530.55, 388.16, 371.6, 401.02, 396.13, 500.25, 381.25, 464.8, 615.53, 363.28, 373.4, 419.94, 451.11, 565.63, 594.73, 382.66, 415.57, 408.28, 466.77, 332.63, 431.7, 473.29, 419.1, 340.44, 398.02, 423.87, 544.5, 404.87, 377.86, 486.68, 357.66, 647.79, 759.65, 602.24, 516.93, 465.19, 516.45, 448.23, 427.56, 530.91, 411.54, 494.92, 554.03, 400.61, 385.74, 452.59, 457.34, 477.69, 415.55, 464.06, 453.89, 486.38, 338.57, 520.91, 461.17, 511.34, 549.86, 578.27, 698.3, 550.08, 331.24, 472.58, 497.29, 396.98, 488.84, 506.39, 478.69, 460.81, 703.36, 707.73, 479.04, 430.29, 482.83, 446.29, 552.22, 503.11, 414.15, 277.72]
          }
        ]
      })
    },
    drawLine3(id) {
      var data = [-0.71, -0.51, 0, -0.71, 0.18, 0.22, -0.76, -1.43, -0.34, 0.02, -0.82, -0.44, -0.22, -0.18, -0.52, -0.61, 0.03, -0.27, 0.43, -0.63, -0.31, -0.59, -0.33, -0.52, -0.44, -0.33, -0.02, -0.17, 0.32, -0.81, 0.15, -0.68, 0.04, -0.38, -0.04, -0.18, -0.27, -0.39, -0.08, -0.88, -0.77, -0.13, -0.28, -0.22, -0.33, -0.72, -1.11, 0.38, 0.11, 0.23, -0.69, 0.29, -0.08, -0.31, -0.21, 0.41, -0.56, -0.1, -0.67, 0.15, 0.15, -0.25, 0.44, 0.07, -1.05, -0.29, -0.52, 0.17, -0.5, 0.43, 0.93, 0.17, 0.21, 0.15, -0.46, 0.3, 0.17, 0.12, 0.64, -0.23, 0.37, 0.71, -0.14, 0.07, 0.65, -0.05, 0.63, 0.24, 0.65, 0.19, -0.33, 0.08, 1.33, 0.76, 0.64, 1.31, 0.64, 0.85, 0.57, 1.13, -0.09, -0.1, 0.64, 1.59, 1.3, 1.09, 0.84, 1.42, 1.55, 2.09]
      this.charts = echarts.init(document.getElementById(id))
      this.labelOption = {
        normal: {
          show: true,
          position: 'insideBottom',
          rotate: 90,
          textStyle: {
            align: 'left',
            verticalAlign: 'middle'
          }
        }
      }
      this.charts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // legend: {
        //   data: ['A', 'B', 'C', 'D']
        // },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            name: 'year',
            type: 'category',
            axisTick: {show: false},
            data: ['1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
          }
        ],
        yAxis: [
          {
            name: 'centigrade',
            type: 'value'
          }
        ],
        series: [
          {
            symbol: 'none',
            color: '#FF0000',
            itemStyle: {
              normal: {
                color: function(params) {
                  if (data[params.dataIndex] < 0) {
                    return '#00BFFF'
                  } else {
                    return '#FF0000'
                  }
                },
                lineStyle: {
                  width: 5,
                  type: 'solid' // 'dotted'虚线 'solid'实线
                }
              }
            },
            name: 'A',
            type: 'bar',
            barGap: 0,
            // label: this.labelOption,
            data: data
          }
        ]
      })
    }
  },
  // 调用
  mounted() {
    this.$nextTick(function() {
      setTimeout(() => {
        this.drawLine1('main1')
      })
    })
    this.$nextTick(function() {
      setTimeout(() => {
        this.drawLine2('main2')
      })
    })
    this.$nextTick(function() {
      setTimeout(() => {
        this.drawLine3('main3')
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 180px;
  z-index: 3;
  width: 100%;
}
.Introduction {
  margin-top: 180px;
  z-index: 3;
  width: 100%;
  padding: 0 100px;
}
.Temperature1,
.Temperature2,
.Rainfall1,
.Rainfall2 {
  margin-top: 10px;
  z-index: 3;
  width: 100%;
  padding: 0 100px;
}
h1 {
  font-size: 70px;
  line-height: 75px;
  font-weight: 400;
  text-align: center;
}
h2 {
  font-size: 40px;
  line-height: 60px;
  font-weight: 380;
  text-align: left;
}
p {
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
}
.pic1,
.pic2,
.pic3 {
  position: relative;
  // margin-top: 30px;
  // margin-right: 30px;
  margin: 0 auto;
  z-index: 3;
  height: 600px;
  width: 1000px;
  // padding: 30px 30px 30px 30px;
}
</style>
