<template>
  <button class="btns" :disabled='disable' :class="classes">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        default: 'default'
      },
      disable: Boolean,
      plain: Boolean
    },
    computed: {
      classes() {
        let classArr = [this.type]
        if (this.plain) {
          classArr.push('plain')
        }
        return classArr
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import 'defaults';
.btns {
    width: 3rem;
    height:1.2rem;
    border-radius: .1rem;
    border:0;
    outline: none;
    background: #ff7b38;
    color:#fff;
    font-size: .4rem;
  }
  
</style>
