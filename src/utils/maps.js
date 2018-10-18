/*
 * 地图相关操作
 * @Author: wanghuijia
 * @Date: 2018-10-10 11:00:50 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-10-17 20:05:27
 */

import AMap from 'AMap'
export default {
    getLocation() {
        return new Promise((resolve, reject) => {
            AMap.plugin('AMap.Geolocation', () => {
                const geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                    buttonOffset: new AMap.Pixel(10, 20),
                    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    zoomToAccuracy: true,
                    //  定位按钮的排放位置,  RB表示右下
                    buttonPosition: 'RB'
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