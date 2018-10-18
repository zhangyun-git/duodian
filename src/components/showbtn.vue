<template>
  <div class='showbtns'>
    <slot>请输入正确的地址信息</slot>
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

<style scoped>
.showbtns{
  width: 100%;
  height:1rem;
  line-height: 1rem;
  text-align: center;
  background: #ff712b;
  font-size: .4rem;
  color:#fff;
}
</style>