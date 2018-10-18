/*
 * 地图相关操作
 * @Author: liuyu
 * @Date: 2018-10-10 09:32:03
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-10-17 20:05:54
 */

import AMap from 'AMap'

class Map {
  constructor () {
    this.cityCode = '010'
    this.autoComplete = ''
  }
  /**
   * 获取当期定位地址
   * @return Promise  resolve(定位信息) reject(定位出错信息)
   */
  getLocation () {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.Geolocation', () => {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          maximumAge: 20000,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          extensions: 'all'
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (data) => {
          resolve(data)
        })
        AMap.event.addListener(geolocation, 'error', (data) => {
          reject(data)
        })
      })
    })
  }

  search (keyword) {
    if (this.autoComplete === '') {
      AMap.plugin('AMap.Autocomplete', () => {
        // 实例化Autocomplete
        var autoOptions = {
          // city 限定城市，默认全国
          city: '010'
        }
        this.autoComplete = new AMap.Autocomplete(autoOptions)
      })
    }
    return new Promise((resolve) => {
      this.autoComplete.search(keyword, (status, result) => {
        // 搜索成功时，result即是对应的匹配数据
        resolve(result)
      })
    })
  }

  drawMap () {
    return new Promise((resolve, reject) => {
      AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
        var map = new AMap.Map('container', {
          zoom: 16,
          scrollWheel: false
        })
        var positionPicker = new PositionPicker({
          mode: 'dragMap',
          map: map
        })
        positionPicker.setMode('dragMap')
        positionPicker.start()
        resolve(positionPicker)
      })
    })
  }
}
const map = new Map()
export default map
