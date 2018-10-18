<template>
  <div class="location-page">
    <img src="../../static/image/logo-slogan.png" class="login" />
    <div class="map-box">
      <i></i>
      <em></em>
      <span></span>
    </div>
  </div>
</template>

<script>
  import map from '@/utils/map'

  export default {
    name: 'Location',
    data () {
      return {}
    },
    mounted () {
       this.getLocation()
    },
    methods:{
        async getLocation(){
          var add = await map.getLocation()
          
          console.log(add.formattedAddress)
          localStorage.setItem('wxLocation', add.formattedAddress)
          if(add.formattedAddress){
              this.$router.replace('/')
          }
          // map.getLocation.then((data) => {
          // //localStorage.setItem('wxLocation', data)
          // console.log(data,this.$router.query)
          // }).catch(() => {
          //     console.log('失败')
          // })
      }
    }
  }
</script>

<style scoped>
.location-page {
  
}
.map-box {
    box-shadow: inset 0 0 10px #e8e8e8;
    background: url(../../static/image/map.png) no-repeat;
    background-size: 150%;
    overflow: hidden;
    width: 288px;

    height: 288px;
    border-radius: 100%;
    margin: 0 auto;
    animation: movemap 5s infinite ease-out;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
        margin-top: 100px;
  }
 .map-box i {
      z-index: 2;
      display: block;
      width: 32px;
      height: 38px;
      margin: auto;
      background: url(../../static/image/geo-tag-large.png) no-repeat;
      background-size: 100%;
    }
   .map-box em,.map-box span {
      z-index: 1;
      -webkit-transform: scale(0 ,0) translate(-50%, -50%);
      display: block;
      height: 48px;
      width: 48px;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 24px;
      border: 1px solid #ff712b;
      transform-origin: top left;
      margin-top: 20px;
    }
    .map-box em {
      animation: movecircle 1.8s infinite linear;
    }
    .map-box span {
      background-color: #ff712b;
      animation: movecircle2 1.8s infinite linear;
    }
.login {
    width: 261px;
    display: block;
    margin: 20% auto;
  }
@keyframes movemap{
  0%,100%{
    background-position:0 0;
  }
  25%{
    background-position:-60px 0;
  }
  50%{
    background-position:-60px -60px;
  }
  75%{
    background-position:0 -60px;
  }
}
@keyframes movecircle{
  0%{
    -webkit-transform:scale(0 ,0)  translate(-50%, -50%);
    opacity:0
  }
  50%{
    -webkit-transform:scale(1 ,.5)  translate(-50%, -50%);
    opacity:1
  }
  100%{
    -webkit-transform:scale(1.6 ,.8)  translate(-50%, -50%);
    opacity:0
  }
}
@keyframes movecircle2{
  0%{
    -webkit-transform:scale(0 ,0)  translate(-50%, -50%);
    opacity:0
  }
  50%{
    -webkit-transform:scale(1 ,.5)  translate(-50%, -50%);
    opacity:.3
  }
  100%{
    -webkit-transform:scale(1.6 ,.8)  translate(-50%, -50%);
    opacity:0
  }
}
</style>