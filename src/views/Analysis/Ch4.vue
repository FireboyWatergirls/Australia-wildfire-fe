<!-- 几十年来澳大利亚空气污染物变化图表 -->
<!-- 几十年来澳大利亚海平面变化图表 -->
<template>
  <div id="ch4">
    <div class="title">
      <h1>Lessons from</h1>
      <h1>Environmental problems</h1>
    </div>
    <div class="Introduction">
      <h2>Introduction</h2>
      <p>Environmental problems have become a global problem, not only because many countries in the world are facing different levels of environmental pollution, but also because environmental pollution itself has far exceeded national boundaries and is a problem that requires the coordinated resolution of all humanity.</p>
    </div>
    <div class="Air1">
      <h2>Air pollution</h2>
    </div>
    <div class="pic3" id="main3"></div>
    <div class="pic4" id="main4"></div>
    <div class="Air2">
      <p>As can be seen from the data, Australia's air quality has been deteriorating for more than three decades.  But this is a global trend, not an Australian characteristic.  The deterioration of the air in Australia has not been seriously exacerbated, and the amount of carbon dioxide and other substances has increased at a steady rate every year.</p>
    </div>
    <div class="Sea1">
      <h2>Sea level</h2>
    </div>
    <div class="pic5" id="main5"></div>
    <div class="Sea2">
      <p>Australia ’s sea level has been on an upward trend for more than 100 years, and has been consistently higher than the world ’s average sea level since 1995.  The sea level is increasing year by year, mainly due to the melting of glaciers caused by global warming, and from the current global situation, the sea level will continue to rise, and Australia may face some land submerged by seawater.</p>
      <p>However, due to the impact of reduced rainfall, the trend of rising sea level in Australia slowed down, creating the lowest record in ten years, 0.32 meters.  This shows that the impact of this rainfall on Australia is still very large.</p>
    </div>
    <div class="Conclusion">
      <h2>Conclusion</h2>
      <p>There are wildfires in Australia every year, but the wildfires are particularly severe this time.  Looking back at the many natural disasters in the world in recent years, this is not a lesson from nature, should we reflect and take some measures.</p>
      <p>In the fierce global economic development and modernization, the prevalence of pursuit of economic growth, ignoring the expense of protecting the environment as well as the target, ignoring the macro-control and coordination of the global tendency.  Environmental pollution is not a phenomenon peculiar to capitalist society, but economic and social development of the productive forces in the transformation of commodity natural process of a total phenomenon, to some extent, the problem is more prominent in developing countries, often depends extensive economic pursuit of economic growth, long-term  since environmental policy is placed in subordinate position of secondary importance, we talk about economic governance environment, do not speak governance environment.  On the countermeasures to deal with the environment is not the economic, social, and environmental development, but after the first passive governance initiative contamination.  On the global environmental governance, especially the major developed countries are often fragmented and even the expense of others, rarely coordinated response.</p>
      <p>There are many reasons for the deterioration of the ecological environment, mainly from the global ecology. Faced with increasing population pressure, humanity ’s one-sided understanding of the natural ecological laws of sustainable development and excessive demand from the natural world, the international community lacks effective coordination to contain  mechanism.  In his book Dialectics of Nature, Engels warned: "We should not be too intoxicated with our victory over nature. For each such victory, nature has retaliated against us. Mesopotamia, Greece, Asia Minor and others  In order to get arable land, the residents of the city have cut down the forest, but they ca n’t dream that these places have become barren and barren today. ”He also said:“ In today ’s production methods, we only pay attention to nature and society.  To the first most significant result, then people were surprised that the far-reaching impact of the actions taken to achieve the above result was quite another matter. "</p>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  methods: {
    drawLine3(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title: {
          text: 'Air pollution',
          x: 'center'
        },
        backgroundColor: '#FFFFFF',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['carbon dioxide', 'Methane', 'Nitrous oxide'],
          right: 'right',
          top: '5%'
        },
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
          data: ['1978', '1980', '1984', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

        },
        yAxis: {
          name: 'ppm/ppb',
          type: 'value'
        },
        series: [
          {
            name: 'carbon dioxide',
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
            data: [333.476, 336.5261667, 341.8391667, 344.467, 346.1320833, 348.2995833, 349.50025, 350.9784167, 352.691, 354.1729167, 354.9213333, 356.3644167, 358.3995, 359.9101667, 361.2528333, 363.7553333, 365.6944167, 366.9768333, 368.5001667, 370.634, 372.89625, 374.769, 376.75525, 378.679, 380.5626667, 382.69225, 384.2558333, 386.074, 387.939, 389.9716667, 392.824, 394.8339167, 397.3039167, 400.4696667, 402.43725, 404.9089167, 407.3383333]
          },
          {
            name: 'Methane',
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
            data: [1488.05, 1540.1, 1602.045, 1617.728333, 1631.761667, 1641.824167, 1655.474167, 1662.755833, 1674.08, 1687.099167, 1688.873333, 1694.109167, 1700.219167, 1701.956667, 1709.093333, 1716.508333, 1726.648333, 1728.115833, 1726.760833, 1728.771667, 1729.385833, 1728.831667, 1728.0675, 1727.49, 1732.939167, 1741.481667, 1743.925, 1750.475, 1757.9075, 1762.0325, 1765.730833, 1775.115833, 1785.946667, 1791.721667, 1798.459167, 1810.714167, 1816.749167]
          },
          {
            name: 'Nitrous oxide',
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
            data: [299.37, 301.66, 302.98, 304.46, 305.135, 305.65, 307.275, 307.906, 308.67, 309.294, 309.255, 309.9145833, 310.4655833, 311.1320833, 312.1580833, 313.02075, 313.9576667, 314.80125, 315.331, 316.0359167, 316.5444167, 317.3513333, 318.049, 318.8494167, 319.5004167, 320.7540833, 321.41725, 322.42275, 323.2546667, 324.2939167, 325.087, 325.98275, 327.111, 327.7786667, 328.6639167, 330.23025, 330.7222727
            ]
          }
        ]
      })
    },
    drawLine4(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title: {
          text: 'Changes in air pollution',
          x: 'center'
        },
        backgroundColor: '#FFFFFF',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['carbon dioxide', 'Methane', 'Nitrous oxide'],
          right: 'right',
          top: '5%'
        },
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
          data: ['1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

        },
        yAxis: {
          name: 'ppm/ppb',
          type: 'value'
        },
        series: [
          {
            name: 'carbon dioxide',
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
            data: [2.627833333, 1.665083333, 2.1675, 1.200666667, 1.478166667, 1.712583333, 1.481916667, 0.748416667, 1.443083333, 2.035083333, 1.510666667, 1.342666667, 2.5025, 1.939083333, 1.282416667, 1.523333333, 2.133833333, 2.26225, 1.87275, 1.98625, 1.92375, 1.883666667, 2.129583333, 1.563583333, 1.818166667, 1.865, 2.032666667, 2.852333333, 2.009916667, 2.47, 3.16575, 1.967583333, 2.471666667, 2.429416667]
          },
          {
            name: 'Methane',
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
            data: [15.68333333, 14.03333333, 10.0625, 13.65, 7.281666667, 11.32416667, 13.01916667, 1.774166667, 5.235833333, 6.11, 1.7375, 7.136666667, 7.415, 10.14, 1.4675, -1.355, 2.010833333, 0.614166667, -0.554166667, -0.764166667, -0.5775, 5.449166667, 8.5425, 2.443333333, 6.55, 7.4325, 4.125, 3.698333333, 9.385, 10.83083333, 5.775, 6.7375, 12.255, 6.035]
          },
          {
            name: 'Nitrous oxide',
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
            data: [1.48, 0.675, 0.515, 1.625, 0.631, 0.764, 0.624, -0.039, 0.659583333, 0.551, 0.6665, 1.026, 0.862666667, 0.936916667, 0.843583333, 0.52975, 0.704916667, 0.5085, 0.806916667, 0.697666667, 0.800416667, 0.651, 1.253666667, 0.663166667, 1.0055, 0.831916667, 1.03925, 0.793083333, 0.89575, 1.12825, 0.667666667, 0.88525, 1.566333333, 0.492022727]
          }
        ]
      })
    },
    drawLine5(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title: {
          text: 'Sea Level and Rainfull',
          x: 'center'
        },
        backgroundColor: '#FFFFFF',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Rainfull', 'Sea level'],
          right: 'right',
          top: '10%'
        },
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
          // name: 'year',
          type: 'category',
          boundaryGap: false,
          data: ['1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

        },
        yAxis: [{
          name: 'Rainfull/mm',
          type: 'value'
        },
        {
          name: 'Sea level/m',
          type: 'value'
        }
        ],
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
          },
          {
            name: 'Sea level',
            type: 'line',
            // stack: '总量1',
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 5,
                  type: 'solid' // 'dotted'虚线 'solid'实线
                }
              }
            },
            symbol: 'none',
            data: [-0.08, -0.49, -0.68, -0.55, -0.63, -0.63, -0.47, -0.42, -0.65, -0.41, -0.34, -0.49, -0.43, -0.59, -0.4, -0.18, -0.2, -0.3, -0.28, -0.48, -0.29, -0.08, -0.28, -0.49, -0.28, -0.59, -0.46, -0.47, -0.3, -0.68, -0.58, -0.39, -0.45, -0.38, -0.37, -0.46, -0.39, -0.44, -0.13, -0.42, -0.34, -0.08, 0.01, -0.08, -0.11, 0.05, -0.31, -0.46, -0.43, -0.45, -0.09, -0.4, -0.34, -0.41, -0.37, -0.25, -0.15, -0.3, -0.07, -0.05, -0.16, -0.12, 0.04, -0.14, -0.19, -0.5, -0.37, -0.26, -0.35, -0.07, 0.09, -0.05, -0.13, 0.21, 0.02, 0.08, -0.07, -0.08, 0.12, 0.04, 0.01, 0.09, -0.15, 0.2, 0.16, 0.22, 0.02, 0.03, 0.46, 0.39, 0.29, 0.03, 0.05, -0.09, -0.02, 0.19, 0.26, 0.07, 0.6, 0.43, 0.33, 0.38, 0.35, 0.33, 0.18, 0.36, 0.15, 0.32, 0.3, 0.4, 0.66, 0.5, 0.47, 0.6, 0.51, 0.53, 0.78, 0.49, 0.45, 0.32]
          }
        ]
      })
    }
  },
  // 调用
  mounted() {
    this.$nextTick(function() {
      setTimeout(() => {
        this.drawLine3('main3')
      })
    })
    this.$nextTick(function() {
      setTimeout(() => {
        this.drawLine4('main4')
      })
    })
    this.$nextTick(function() {
      setTimeout(() => {
        this.drawLine5('main5')
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
.Introduction {
  margin-top: 180px;
  z-index: 3;
  width: 100%;
  padding: 0 100px;
}
.Air1 {
  margin-top: 50px;
  z-index: 3;
  width: 100%;
  padding: 0 100px;
}
.Air2 {
  margin-top: 10px;
  z-index: 3;
  width: 100%;
  padding: 0 100px;
}
.Sea1 {
  margin-top: 10px;
  z-index: 3;
  width: 100%;
  padding: 0 100px;
}
.Sea2 {
  margin-top: 10px;
  z-index: 3;
  width: 100%;
  padding: 0 100px;
}
.Conclusion {
  margin-top: 10px;
  z-index: 3;
  width: 100%;
  padding: 0 100px;
}
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
.pic4 {
  position: relative;
  // margin-top: 30px;
  // margin-right: 30px;
  margin: 40px auto;
  z-index: 3;
  height: 600px;
  width: 1000px;
  // padding: 30px 30px 30px 30px;
}
.pic5 {
  position: relative;
  // margin-top: 30px;
  // margin-right: 30px;
  margin: 40px auto;
  z-index: 3;
  height: 600px;
  width: 1000px;
  // padding: 30px 30px 30px 30px;
}
</style>
