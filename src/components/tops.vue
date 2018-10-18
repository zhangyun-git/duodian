<template>
    <div class="topsback">
      <i class='iconfont icon-xiangzuo' onclick="window.history.back()">
    </i>
    <slot>北京市</slot>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang='scss'>
.topsback{
  width: 100%;
  height: 1.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  line-height: 1.2rem;
  font-size: .4rem;
  align-items: center;
  flex-shrink: 0;
  .iconfont {
      width: .8rem;
      height: .8rem;
      border-radius: 50%;
      color: #fff;
      background: #000;
      display: block;
      position: absolute;
      top: .2rem;
      left: .3rem;
      text-align: center;
      font-size: .4rem;
      line-height: .8rem;
      font-weight: 100;
    }
}
</style>