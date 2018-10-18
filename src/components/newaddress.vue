<template>
  <div class='newadwrap'>
    <TOPS>
      编辑地址
    </TOPS>
    <div class='newinfo'>
      <Showbtn v-show="showbtns"></Showbtn>
      <ul>
        <li>
          <span>联系人</span>
          <input type="text" placeholder="请输入联系人">
        </li>
        <li>
          <span>手机号</span>
          <input type="text" placeholder="请输入手机号">
        </li>
        <li>
          <span>地址</span>
          <b>北京市</b>
          <p @click='lettop'>{{locations.name}}{{locations.vals}}</p>
        </li>
        <li>
          <span>详细地址</span>
          <input type="text" placeholder="请输入详细地址">
        </li>
      </ul>
      <button @click='subinfo'>
        完成
      </button>
    </div>
  </div>
</template>

<script>
import TOPS from '@/components/tops'
import Showbtn from '@/components/showbtn'
  export default {
    data () {
      return {
        showbtns: false
      }
    },
    mounted () {
      this.$root.$on('selectMapAddress', (location) => {
      this.mapAddress = location.name + ' ' + location.district + ' ' + location.address
      this.location = location.location
     })
    },computed: {
      locations () {
        return this.$store.state.wxLocation
      },
    },
    methods: {
      lettop(){
        this.$router.replace('/pperation')
      },
      subinfo () {
        this.showbtns = true
        setTimeout(() => {
          this.showbtns = false
        },1000)
      }
    },
    components: {
        TOPS,
        Showbtn
    }
  }
</script>

<style scoped>
.topsback{
  box-shadow: 0 1px 2px #ccc;  
}
.showbtns{
  position: absolute;
  top: 0;
  left: 0;
}
</style>