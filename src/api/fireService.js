import axios from 'axios'

export default {
  // 日期格式：2010-05-01，不用加双影号
  // 返回数据格式：mapbox features （geojson格式）
  // 调用示例如下------------------------------------------------------------------
  //   import fireApi from '@/api/fireService'
  //    fireApi.getPoints(startDate,endDate).then(firedata=>{
  //           this.layer=firedata
  //           this.map.addSource('firePoints',{
  //             type:'geojson',
  //             data:firedata
  //           }
  //           )
  //          // })
  //           this.map.addLayer({
  //             'id': 'firePoints',
  //             'type': 'symbol',
  //             'source': 'firePoints',
  //             'layout': {
  //               visibility: 'visible'
  //             },
  //              'circle-colour':'#FF0000'
  //             });
  // 目前调试的情况是数据正常传输，地图加载不会报错，但是也没有东西显示上去，还需前端的同学看一下原因
  // 之后马上改localhost

  getAveBrightness(startdate, enddate) {
    return axios.get('http://112.124.23.187/fire_m6/fireNationalAve/' + startdate + '/' + enddate)
      .then((response) => {
        return response.data
      }).catch((error) => {
        console.log(error); console.log('error')
      })
  },

  getCentirade(startdate, enddate) {
    return axios.get('http://112.124.23.187/climate/centigrade' + startdate + '/' + enddate)
      .then((response) => {
        return response.data
      }).catch((error) => {
        console.log(error); console.log('error')
      })
  },

  getPoints(date) {
    return axios.get('http://112.124.23.187/fire_m6/firePoint/' + date)
      .then((response) => {
        console.log(response.data[0].jsonb_build_object)
        return response.data[0].jsonb_build_object
      }).catch((error) => {
        console.log(error); console.log('error')
      })
  },

  getPoints20(date) {
    return axios.get('http://112.124.23.187/fire_m6/firePoint20/' + date)
      .then((response) => {
        return response.data[0].jsonb_build_object
      }).catch((error) => {
        console.log(error); console.log('error')
      })
  },

  getLocationWithinState(startDate, endDate, lon, lat) {
    return axios.get('http://112.124.23.187/fire_m6/locationWithinState/' + startDate + '/' + endDate + '/' + lon + '/' + lat)
      .then((response) => {
        return response.data[0].jsonb_build_object
      }).catch((error) => {
        console.log(error); console.log('error')
      })
  },

  getAveBrightnessOfState(startDate, endDate) {
    return axios.get('http://112.124.23.187/fire_m6/AveBrightnessOfState/' + startDate + '/' + endDate)
      .then((response) => {
        return response.data[0].jsonb_build_object
      }).catch((error) => {
        console.log(error); console.log('error')
      })
  }
}
