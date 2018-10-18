<template>
  <div class="wrapper" v-if="isShow">
    <div class="box">
      <div class="content">{{message}}</div>
      <div class="footer" v-if="footShow">
        <Button type='normal' @click.native="hide">确定</Button>
      </div>
      <div class="footer" v-if="!footShow">
        <Button @click.native="hide">取消</Button>
        <Button type='normal' @click.native="enter">确定</Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        footShow: true,
        message: ''
      }
    },
    methods:{
      show (options){
        this.message = options.content;
        this.isShow = true;
        this.footShow = options.footShow;
      },
      hide (){
        this.isShow = false;
        console.log('取消')
      },
      beforeEnter () {
        console.log('弹框显示')
      },
      enter(){
        console.log('确定')
        this.isShow = false;
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~default';
  .wrapper{
    @include fullMask();
    @include childCenter();
    .box{
      width: 300px;
      background: #fff;
      .content{
        font-size: $font-m-size;
        padding: 10px;
      }
      .footer{
        width: 100%;
        display: flex;
        padding: 10px;
      }
    }
  }
</style>