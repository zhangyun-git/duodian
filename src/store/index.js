import Vue from 'vue'
import Vuex from 'vuex'
import test from './module/test.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    wxLocation: [],
    botLocation: [],
    userInfo: {
      name: '王汇甲',
      age: 25
    },
    carList: [1, 2, 3, 4]
  },
  // 相当于组件中的计算属性
  getters: {
    getTode (state) {
      return state.carList.map((item, index) => {
        return item + index
      })
    }
  },
  // 用来改变state的 需要通过commit(名称，参数) 去执行， 在组件中通过this.$store.commit('名称',value)
  mutations: {
    SET_LOCATION (state, value) {
      console.log(value)
      state.wxLocation = value
    }
  },
  actions: {
    increment (context) {
      console.log(context)
    }
  },
  modules: {
    test
  }

})

export default store
