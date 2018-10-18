<template>
  <div class='operationWrap'>
    <TOPS>
      <input  v-model="searchVal" type="text" @keyup='changes' placeholder="小区、街道、大厦">
      <button @click='btnsearch'>
        确认
      </button>
    </TOPS>
    <div class='searchpos' v-show="showstop">
      <ul>
        <li v-for="(item,index) in searchList" :key='index' @click='vuexpath(item.district,item.name)'>
          <p>{{item.district}}{{item.name}}</p>
          <span>{{item.district}}</span>
        </li>
      </ul>
    </div>
    <div class='btnbots'>
      <div id="container"></div>
      <div class="btnlist">
          <ul>
            <li v-for="(item, index) in poiList" :key="index" @click="selectLocation(item)">
              <h2>{{item.name}}</h2>
              <p>{{item.address}}</p>
            </li>
          </ul>
      </div> 
    </div>
  </div>
</template>

<script>
import map from '@/utils/map'
import TOPS from '@/components/tops'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      poiList: [],
      searchVal: '',
      searchList: [],
      showstop: false
    }
  },
  mounted () {
    map.drawMap().then((positionPicker) => {
      positionPicker.on('success', (positionResult) => {
        console.log(positionResult)
        this.poiList = positionResult.regeocode.pois
      })
      positionPicker.on('fail', (positionResult) => {
        console.log(positionResult)
      })
    })
  },computed: {
    location () {
      return this.$store.state.wxLocation
    },
    locationst () {
      return this.$store.state.botLocation
    }
  },
  methods: {
    selectLocation (location) {
      this.$root.$emit('selectMapAddress', location)
      // this.$store.commit('SET_LOCATION', location)
      // this.$router.push('/home')
      this.$router.back()
    },
    btnsearch () {
      this.searchVal = ''
    },
    changes () {
      this.showstop = true
      map.search(this.searchVal).then((data) => {
        this.searchList=data.tips
      })
      if(this.searchVal==''){
       this.showstop = false
      }
    },
    vuexpath(names,vals) {
      this.$store.commit('SET_LOCATION', {
        name: names,
        vals: vals
        })
      this.$router.replace({
        path: `/newaddress`
      })
    }
  },
  components:{
      TOPS
  }
}
</script>

<style scoped lang='scss'>
.operationWrap{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  overflow: hidden;
}
.btnbots{
  width:100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  overflow: hidden;
}
input{
  flex:1;
  height: .8rem;
  outline: none;
  font-size: 14px;
  display: block;
  border: none;
  border:solid 0.02rem #eee;
  margin-left: 1.5rem;
  padding-left: .2rem;
}
button{
  width:1.6rem;
  border:0;
  height:1rem;
  outline: none;
  color: #ff712b;
  font-size: .45rem;
  background: #fff;
}
#container{
  width: 100%;
  height: 160px;
  flex-shrink: 0;
}
.searchpos{
  width:100%;
  flex:1;
  background-color: #f6f6f6;
  position: absolute;
  top:1.2rem;
  flex-shrink: 0;
  left:0;
  bottom:0;
  z-index: 99999999;
  ul{
    width:100%;
    height:100%;
    display:flex;
    overflow: hidden;
    overflow-y: auto;
    flex-direction: column;
    li{
    border-bottom: solid 1px #f0f0f0;
    padding: 10px 80px 10px 10px;
    font-size: .38rem;
    color: #333;
    display:flex;
    flex-shrink: 0;
    flex-direction: column;
    span{
      margin-top: .1rem;
      color: grey;
      font-size: .35rem;
    }
    }
  }
}
.btnlist{
  width:100%;
  flex:1;
  flex-shrink: 0;
  ul{
    width:100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;
    li{
      text-align: left;
      color: #21292b;
      overflow: hidden;
      display: block;
      font-size: .25rem;
      border-top: solid 1px #f0f0f0;
      border-top-width: 1px;
      border-top-style: solid;
      border-top-color: rgb(240, 240, 240);
      margin-top: -1px;
      position: relative;
      line-height: 18px;
      padding: 8px 14px;
      h2{
        font-weight: 100;
        color: #21292b;
      }
      p{
        font-size: .15rem;
      }
    }
  }
}
</style>